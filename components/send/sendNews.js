require('dotenv').config({ path: '../../.env' });

const puppeteer = require('puppeteer');

const sendNews = async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();

    const name = process.env.NAME;
    const birthYear = process.env.BIRTH_YEAR;
    const birthMonth = process.env.BIRTH_MONTH;
    const birthDay = process.env.BIRTH_DAY;

    await page.goto(
        'https://atc.airforce.mil.kr:444/user/indexSub.action?codyMenuSeq=156893223&siteId=last2'
    );

    await page.evaluate(
        (name, birthYear, birthMonth, birthDay) => {
            document.querySelector('#searchName').value = name;
            document.querySelector('#birthYear').value = birthYear;
            document.querySelector('#birthMonth').value = birthMonth;
            document.querySelector('#birthDay').value = birthDay;
        },
        name,
        birthYear,
        birthMonth,
        birthDay
    );

    await page.click('#btnNext');

    // 팝업
    const [popup] = await Promise.all([
        new Promise((resolve) => page.once('popup', resolve)),
    ]);

    await popup.waitForSelector('#emailPic-container > ul > li > input');
    await popup.click('#emailPic-container > ul > li > input');
    // 팝업 끝

    await page.click('#btnNext');
};

sendNews();
