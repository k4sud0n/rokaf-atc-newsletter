require('dotenv').config();

const getWorldSoccerNews = require('./components/crawl/getWorldSoccerNews');
const getEsportsNews = require('./components/crawl/getEsportsNews');

const sendMessage = require('./components/send/sendMessage');

const worldSoccerNews = getWorldSoccerNews();
const esportNews = getEsportsNews();

worldSoccerNews.then(function (value) {
    sendMessage('오늘의 해외 축구 뉴스', value);
});

esportNews.then(function (value) {
    sendMessage('오늘의 이스포츠 뉴스', value);
});
