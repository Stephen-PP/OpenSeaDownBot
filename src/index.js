// Loads env variables
require('dotenv').config()

// Dependencies
const Conf = require('conf');
const axios = require('axios');
const TwitterApi = require('twitter-api-v2').TwitterApi;

// Set up globals
const config = new Conf();
const twitter = new TwitterApi({
    appKey: process.env.TWITTER_CLIENT_ID,
    appSecret: process.env.TWITTER_CLIENT_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET
});

// Set up a 10 second interval on checking OpenSea

setInterval(() => {

}, 10000);