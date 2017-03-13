var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made
var callback = function() {
  console.log('In response handler callback');
};

console.log('About to make the request');

https.request(options, callback).end();

console.log('Made the request!');
