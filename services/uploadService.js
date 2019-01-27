const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const fs = require('fs');
const AWS = require('aws-sdk');

const s3bucket = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    Bucket: process.env.BUCKET,
    region: process.env.REGION
});

const uploadFile = (filename) => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
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