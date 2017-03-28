const Twitter = require('twitter');
const say  = require('say');
var config = require('./config.json');

var client = new Twitter(config.client_auth);
var regex = /^((\d)+\'|full-time|half-time|ht|ft).+/igm;

console.log("⚽️\t🇮🇹\tForza Juve!\t🇮🇹\t⚽️ \nJuve Commentator\t🎤\tNow running....");

var queue = [];

client.stream(config.api, config.api_params, function(stream){
  stream.on('data', function(tweet) {
    var text = tweet.text;
    if(text.match(regex) != null){
      var mentions = tweet.entities.user_mentions;
      if(mentions!=null && mentions.length>0){
        mentions.forEach(function(mention){
          var handle = '@'+mention.screen_name;
          var fullName = mention.name;
          text = text.replace(handle, fullName);
        });
      }
      if(text.includes('#')){
        while(text.includes('#')){
          text = text.replace('#', 'Hash Tag ');
        }
      }
      var urls = tweet.entities.urls;
      if(urls!=null && urls.length>0){
        urls.forEach(function(url){
          text = text.replace(url.url, ' ');
        });
      }
      queue.push(text);
      var i = queue.shift();
      console.log("Speaking.... "+tweet.user.name + " says " + i);
      say.speak(i);
    }
    else {
      console.error(tweet.user.name + " says "+text);
    }
  });
  stream.on('error', function(error) {
    console.log(error);
  });
});
