require("dotenv").config();

//Node, NPM, Keys

let keys = require('./keys.js');
let request = require("request");
let fs = require("fs");
let argOne = process.argv[2];
let argTwo = process.argv[3];

// Auth for Spotify and Twitter

let twitter = require('twitter');
let spotify = require('node-spotify-api');
let spotifyKey = new spotify(keys.spotify);
let twitterKey = new twitter(keys.twitter);

// Twitter function

if (argOne === "my-tweets") {

    let params = { screen_name: "yohanguthrie", count: 20 };

    twitterKey.get('statuses/user_timeline', params, function(error, tweets, response) {

        for (var i = 0; i < tweets.length; i++) {
            console.log("\n----------------");
            console.log("Created on " + tweets[i].created_at);
            console.log(tweets[i].text);

        }
    });
}

if (argOne === "spotify-this-song") {

    spotifyKey.search({ type: 'track', query: argTwo, limit: 1 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}