const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const UserController = require('./controllers/UserController');
const FavoriteWatchController = require('./controllers/FavoriteWatchController');
const RemoveWatchController = require('./controllers/RemoveWatchController');
const UpdateOrderWatchController = require('./controllers/UpdateOrderWatchController');
const SortFilterWatchController = require('./controllers/SortFilterWatchController');
const DiscoverWatchesInformation = require('./controllers/DiscoverWatchesInformationController');
const WatchNewsController = require('./controllers/WatchNewsController');
const WatchController = require('./controllers/WatchController');
const CertController = require('./controllers/CertController')
const Upload = require('./controllers/UploadController');
const ContactEmailController = require('./controllers/Emails/ContactUs');
const WelcomeEmailController = require('./controllers/Emails/WelcomeEmail');
const ForgotPasswordEmailController = require('./controllers/Emails/ForgotPassword');
const WatchShareController = require('./controllers/WatchShareController')
const serveStatic = require("serve-static");
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
const path = require('path');
const port = process.env.PORT || 8081;

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301)); // Force HTTPS from HTTP

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json({limit: '125mb'}));
app.use(bodyParser.urlencoded({limit: '125mb', extended: true}));

app.use('/api/user', UserController);
app.use('/api/watch', WatchController);
app.use('/api/watch/favorite', FavoriteWatchController);
app.use('/api/watch/remove', RemoveWatchController);
app.use('/api/watch/update-order', UpdateOrderWatchController);
app.use('/api/watch/sort-filter', SortFilterWatchController);
app.use('/api/discover/watch-info', DiscoverWatchesInformation);
app.use('/api/watch-news', WatchNewsController);
app.use('/api/upload', Upload);
app.use('/api/email/contact', ContactEmailController);
app.use('/api/email/welcome', WelcomeEmailController);
app.use('/api/email/forgot-password', ForgotPasswordEmailController);
app.use('/api/watch-share', WatchShareController);

app.use('/.well-known/acme-challenge/FH9Ji48jrYkg4B8P5jiGSOPtiXVTa5ACZxckwBMa2pQ', CertController)

// app.use('/api/static-assets', express.static('public'));

if (process.env.NODE_ENV !== 'development') {  
  app.use(express.static(__dirname + '/dist'))
  
  app.get('*', (req, res) => {
    res.sendFile((__dirname + '/dist/index.html'));
  })  
}

app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})

module.exports = app; 