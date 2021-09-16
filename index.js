const getWorldSoccerNews = require('./components/crawl/getWorldSoccerNews');
const getEsportsNews = require('./components/crawl/getEsportsNews');

const worldSoccerNews = getWorldSoccerNews();
const esportNews = getEsportsNews();

worldSoccerNews.then(function (value) {
    console.log(value[1]);
});

esportNews.then(function (value) {
    console.log(value[1]);
});
