const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


const passport = require('passport');

const app = express();
const UserController = require('./controllers/UserController');
const FavoriteWatchController = require('./controllers/FavoriteWatchController');
const RemoveWatchController = require('./controllers/RemoveWatchController');
const UpdateOrderWatchController = require('./controllers/UpdateOrderWatchController');
const SortFilterWatchController = require('./controllers/SortFilterWatchController');
const DiscoverWatchesInformation = require('./controllers/DiscoverWatchesInformationController');
const WatchNewsController = require('./controllers/WatchNewsController');
const WatchController = require('./controllers/WatchController');
const Upload = require('./controllers/UploadController');
const serveStatic = require("serve-static");
const path = require('path');
const port = process.env.PORT || 8081;


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/dist"));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());

app.use('/api/user', UserController);
app.use('/api/watch', WatchController);
app.use('/api/watch/favorite', FavoriteWatchController);
app.use('/api/watch/remove', RemoveWatchController);
app.use('/api/watch/update-order', UpdateOrderWatchController);
app.use('/api/watch/sort-filter', SortFilterWatchController);
app.use('/api/discover/watch-info', DiscoverWatchesInformation);
app.use('/api/watch-news', WatchNewsController);
app.use('/api/upload', Upload);

app.use('/api/static-assets', express.static('public'));

app.get('*', (req,res) => {
  res.sendFile((__dirname + '/dist/index.html'));
})

app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})

module.exports = app;