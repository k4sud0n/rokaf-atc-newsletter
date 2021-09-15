const getWorldSoccerNews = require('./components/getWorldSoccerNews');
const getEsportsNews = require('./components/getEsportsNews');

const worldSoccerNews = getWorldSoccerNews();
const esportNews = getEsportsNews();

worldSoccerNews.then(function (result) {
    console.log(result);
});

esportNews.then(function (result) {
    console.log(result);
});
