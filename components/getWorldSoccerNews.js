const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async () => {
    try {
        return await axios.get('https://campnews21.com/');
    } catch (errror) {
        console.error(error);
    }
};

const getWorldSoccerNews = async () => {
    const list = [];

    const result = await getHTML().then((html) => {
        const $ = cheerio.load(html.data);

        const titleSelector = $(
            '#modal-worldsoccer > div > div > div.modal-body.text-center > strong'
        );
        const contentSelector = $(
            '#modal-worldsoccer > div > div > div.modal-body.text-center'
        )
            .contents()
            .filter(function () {
                return this.nodeType === 3;
            });

        const contentEach = contentSelector.each((i, element) => {
            $(element).text();
        });

        titleSelector.each((i, element) => {
            list[i] = {
                title: $(element).text(),
                content: contentEach[i].data,
            };
        });
    });

    return list;
};

module.exports = getWorldSoccerNews;
