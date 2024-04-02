const puppeteer = require('puppeteer');

async function launchBrowserWithDefaultAccount(link) {
    const userDataDir = './user_data'; // Specify a directory path for user data

    const browser = await puppeteer.launch({
        headless: false, // User profiles don’t work in headless mode.
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(link, {timeout: 0}); // or use a higher timeout value than 30000 ms
    return { browser, page }; // Return both the browser and page objects
}
const scrollDown = async (page) => {
    await page.evaluate(() => {
        return new Promise((resolve,reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= document.body.scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
};


const wongnai = async () => {
    try {
        const {page } = await launchBrowserWithDefaultAccount('https://www.ryoiireview.com/article/beautiful-cafe-check-in/');
    await page.waitForSelector('h2 a[target="_blank"] span[style*="font-size:18px"]');
    await scrollDown(page); // Scroll down to load more content
    await page.waitForTimeout(5000); // Wait for 2 seconds to let the content load
    // This selector attempts to narrow down to spans that are directly styled with font-size:18px and are nested within an <a> tag inside an <h2>.
    const texts = await page.$$eval('h2 a[target="_blank"] span[style*="font-size:18px"]', spans => spans.map(span => span.innerText.trim()));
    
    return texts;
    } catch (error) {
        console.error('Error occurred:', error.message);
        return []; // Return an empty array or handle the error as needed
    }
};

wongnai().then(console.log).catch(console.error); // Added catch for promise rejection handling
