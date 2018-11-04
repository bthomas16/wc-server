const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('../config/config.js')

// const s3 = new aws.S3({
//     accessKeyId: config.accessKeyId,
//     secretAccessKey: config.secretAccessKey,
//     region: config.region
// });

// const upload = multer({
//     storage: multerS3({
//       s3,
//       bucket: 'wathcollectionbucket',
//       acl: 'public-read',
//       metadata: function (req, file, cb) {
//         cb(null, {fieldName: 'TESTING_META_DATA!'});
//       },
//       key: function (req, file, cb) {
//         cb(null, Date.now().toString())
//       }
//     })
// });

// module.exports = upload;

const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
});

const uploadFile = (filename) => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     console.log(fileName, 'filenamen beeee')
     const params = {
         Bucket: 'watchcollectionbucket', // pass your bucket name
         Key: 'ididthisish.png', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};

module.exports = uploadFile;