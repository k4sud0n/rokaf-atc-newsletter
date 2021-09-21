require('dotenv').config();

const getWorldSoccerNews = require('./components/crawl/getWorldSoccerNews');
const getEsportsNews = require('./components/crawl/getEsportsNews');

const sendMessage = require('./components/send/sendMessage');

const worldSoccerNews = getWorldSoccerNews();
const esportNews = getEsportsNews();

worldSoccerNews.then(function (value) {
    sendMessage(value);
});

esportNews.then(function (value) {
    sendMessage(value);
});
