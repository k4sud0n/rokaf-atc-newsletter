const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async () => {
    try {
        return await axios.get('https://campnews21.com/');
    } catch (errror) {
        console.error(error);
    }
};

const getWorldSoccerNews = () => {
    getHTML().then((html) => {
        const $ = cheerio.load(html.data);

        const worldSoccerNewsList = [];
        const worldSoccerNewsListTitleSelector = $(
            '#modal-worldsoccer > div > div > div.modal-body.text-center > strong'
        );
        const worldSoccerNewsContentSelector = $(
            '#modal-worldsoccer > div > div > div.modal-body.text-center'
        )
            .contents()
            .filter(function () {
                return this.nodeType === 3;
            });

        const worldSoccerNewsContentEach = worldSoccerNewsContentSelector.each((i, element) => {
            $(element).text();
        });

        worldSoccerNewsListTitleSelector.each((i, element) => {
            worldSoccerNewsList[i] = {
                title: $(element).text(),
                content: worldSoccerNewsContentEach[i].data,
            };
        });

        console.log(worldSoccerNewsList);
    });
};

getWorldSoccerNews();
