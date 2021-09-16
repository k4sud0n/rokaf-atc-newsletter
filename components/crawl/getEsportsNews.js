const cheerio = require('cheerio');

const getHTML = require('./getHTML');

const getEsportsNews = async () => {
    const list = [];

    const result = await getHTML().then((html) => {
        const $ = cheerio.load(html.data);

        const titleSelector = $(
            '#modal-esports > div > div > div.modal-body.text-center > strong'
        );
        const contentSelector = $(
            '#modal-esports > div > div > div.modal-body.text-center'
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

module.exports = getEsportsNews;
