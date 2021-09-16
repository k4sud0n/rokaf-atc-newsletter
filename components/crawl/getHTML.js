const axios = require('axios');

const getHTML = async () => {
    try {
        return await axios.get('https://campnews21.com/', {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
                'Content-Type': 'text/html',
            },
            Charset: 'utf-8',
        });
    } catch (errror) {
        console.error(error);
    }
};

module.exports = getHTML;
