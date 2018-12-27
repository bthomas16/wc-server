const express = require('express'),
router = express.Router(),
knex = require('../config/db.js'),
AWS = require('aws-sdk'),
bodyParser = require('body-parser'),
busboy = require('connect-busboy'),
busboyBodyParser = require('busboy-body-parser'),
Busboy = require('busboy'),
VerifyToken = require('../middleware/VerifyToken'),
config = require('../config/config');

router.use(busboy())
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(busboyBodyParser());

const s3bucket = new AWS.S3({
    accessKeyId: config.ACCESS_KEY_ID,
    secretAccessKey: config.SECRET_ACCESS_KEY,
    Bucket: config.BUCKET,
    region: config.REGION
});

function uploadWatchImagesToS3(images, res) 
{
    s3bucket.createBucket(function () {
        let uploadedImages = [];

        console.log('should upload these bois', images)
        images.forEach(image => {
            
            let params = {
                Bucket: 'watchcollectionbucket',
                Key:  Date.now().toString() + image.name,
                Body: image.data,
                ContentType: 'image/jpeg',
                ACL: 'public-read'
            };

            s3bucket.upload(params, function (err, data) {
                if (err) {
                    console.log('error in callback', err);
                }
                uploadedImages.push(data);
                
                if (uploadedImages.length == images.length) {
                    uploadedImages.forEach((image, index) => {
                        image.src = image.Location;
                        image.order = index;
                    });
        console.log('return uploaded dudes', uploadedImages)
                    
                res.status(201).json({uploadedImages})
                }; 
            });   
        })
    });       
}

router.post('/watch-images', VerifyToken, function (req, res, next) {
    let busboy = new Busboy({ headers: req.headers });

    busboy.on('finish', function() {
        let files = req.files;
        let imagesArr = Object.values(files); //turn object of objects into array of objects
        console.log('upload this images arr', imagesArr)
        uploadWatchImagesToS3(imagesArr, res);
   });
    req.pipe(busboy);
});

// PROFILE IMAGE // PROFILE IMAGE

router.put('/profile-image', VerifyToken, function (req, res, next) {
    let busboy = new Busboy({ headers: req.headers });
    
    busboy.on('finish', function() {
        let files = req.files;
        let imagesArr = Object.values(files); //turn object of objects into array of objects
        uploadProfileImageToS3(imagesArr[0], res);
   });
    req.pipe(busboy);
});

function uploadProfileImageToS3(image, res) 
{
    s3bucket.createBucket(function () {

        let params = {
            Bucket: 'watchcollectionbucket',
            Key:  Date.now().toString() + image.name,
            Body: image.data,
            ContentType: 'image/jpeg',
            ACL: 'public-read'
        };

        s3bucket.upload(params, function (err, data) {
            if (err) {
                console.log('error in callback', err);
                res.status(500).json({err})     
                return;
            }
            res.status(201).json({data})
        }); 
    });   
}

module.exports = router;