const puppeteer = require('puppeteer');

const sendMessage = async (letterTitle, list) => {
    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();
    const name = process.env.TRAINEE_NAME;
    const birthYear = process.env.TRAINEE_BIRTH_YEAR;
    const birthMonth = process.env.TRAINEE_BIRTH_MONTH;
    const birthDay = process.env.TRAINEE_BIRTH_DAY;

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

    // 팝업 시작
    const [popup] = await Promise.all([
        new Promise((resolve) => page.once('popup', resolve)),
    ]);

    await popup.waitForSelector('#emailPic-container > ul > li > input');
    await popup.click('#emailPic-container > ul > li > input');
    // 팝업 끝

    await page.click('#btnNext');
    await page.waitForSelector(
        '#emailPic-container > div.UIbtn > span > input[type=button]'
    );
    await page.click(
        '#emailPic-container > div.UIbtn > span > input[type=button]'
    );

    await page.waitForSelector(
        '#emailPic-container > form > div.UIview > table > tbody > tr:nth-child(3) > td > div:nth-child(1) > span > input'
    );
    await page.click(
        '#emailPic-container > form > div.UIview > table > tbody > tr:nth-child(3) > td > div:nth-child(1) > span > input'
    );

    // 도로명주소 팝업 시작
    const [newPopup] = await Promise.all([
        new Promise((resolve) => page.once('popup', resolve)),
    ]);

    // // 팝업 에러부분 무시 (headless: false일때만)
    // await newPopup.click('#proceed-button');

    await newPopup.waitForSelector('#keyword');

    const address = process.env.SENDER_ADDRESS;

    await newPopup.evaluate((address) => {
        document.querySelector('#keyword').value = address;
    }, address);

    await newPopup.click(
        '#searchContentBox > div.search-wrap > fieldset > span > input[type=button]:nth-child(2)'
    );

    await newPopup.waitForSelector('#roadAddrTd1 > a');
    await newPopup.click('#roadAddrTd1 > a');

    const detailedAddress = process.env.SENDER_DETAILED_ADDRESS;

    await newPopup.evaluate((detailedAddress) => {
        document.querySelector('#rtAddrDetail').value = detailedAddress;
    }, detailedAddress);

    await newPopup.waitForSelector('#resultData > div > a');
    await newPopup.click('#resultData > div > a');
    // 도로명주소 팝업 끝

    const senderName = process.env.SENDER_NAME;
    const relationship = process.env.SENDER_RELATIONSHIP;
    const title = letterTitle;
    let content = '';
    const password = process.env.SENDER_PASSWORD;

    for (let i = 0; i < 10; i++) {
        content += `${list[i].title}-${list[i].content}`;
    }

    await page.evaluate(
        (senderName, relationship, title, content, password) => {
            document.querySelector('#senderName').value = senderName;
            document.querySelector('#relationship').value = relationship;
            document.querySelector('#title').value = title;
            document.querySelector('#contents').value = content;
            document.querySelector('#password').value = password;
        },
        senderName,
        relationship,
        title,
        content,
        password
    );
    await page.waitForTimeout(500);
    await page.click(
        '#emailPic-container > form > div.UIbtn > span.wizBtn.large.Ngray.submit > input'
    );

    await browser.close();
};

module.exports = sendMessage;
