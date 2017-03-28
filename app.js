const Twitter = require('twitter');
const say  = require('say');

var client = new Twitter({
  consumer_key: 'IM7urD4r1ZcpKqN3BdH06DQjL',
  consumer_secret: 'LlwC83NHXcehfDJcmBGUmbAXDmaBLOHAQ0soP7XK1j4PaCVlgV',
  access_token_key: '15014697-KRIMwIStLCvv6ZvKG1iRCeGT3jvgoYZnTwvDjtsu4',
  access_token_secret: 'sup94PVheIu7SovH61Cd2x3OzeePR8FPr4xSlfxqmkjBS'
});

var params = {
  stall_warnings : 'true',
  follow : '1638021792, 846560885439168513' //TwitteID to follow
  //track : 'juventus'
}
var api = 'statuses/filter';
console.log("⚽️\t🇮🇹\tForza Juve!\t🇮🇹\t⚽️ \nJuve Commentator\t🎤\tNow running....");
var queue = [];
client.stream(api, params,  function(stream) {
  stream.on('data', function(tweet) {
    var t = tweet.text;
    var regex = /^((\d)+\'|full-time|half-time).+/igm;
    if(t.match(regex) != null){
      queue.push(t);
      var i = queue.shift();
      console.log("Speaking.... "+tweet.user.name + " says " + i);
      say.speak(i);
    }
    else {
      console.error("Normal tweet... "+t);
    }
  });
  stream.on('error', function(error) {
    console.log(error);
  });
});

//TODO : If Tweet mentions someone, get the name from twitter handle.
