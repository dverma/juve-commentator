⚽️🇮🇹 Forza Juve! 🇮🇹⚽️ 

Juve Commentator🎤 is an app that will silently run in the background and look for tweets from Juventus FC's twitter handle and on match days will convert the tweets during the game into speech.

---

## Installation:
```
git clone https://github.com/dverma/juve-commentator.git
cd juve-commentator
npm install
npm start
```
---

### Requirements

* Mac OS X (comes with say)
* Linux with Festival installed
* Windows (comes with SAPI.SpVoice)

---

On Linux Try the following command to install Festival as well as a default voice:
```
sudo apt-get install festival festvox-kallpc16k
```
--- 

### Notes:

This app will also work for Real Madrid and AC Milan, all you have to do is change the config.json to have  452155423 for Real Madrid or 186386857 for AC Milan in api_params -> follow
For ex. To follow AC Milan replace api_params in config.json with :
```
  "api_params": {
      "stall_warnings": "true",
      "follow": "186386857",
      "track": ""
  }
```
