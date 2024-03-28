const puppeteer = require('puppeteer');

async function launchBrowserWithDefaultAccount(link:string) {
    const userDataDir = './user_data'; // Specify a directory path for user data

    const browser = await puppeteer.launch({
        headless: false, // User profiles don’t work in headless mode.
        userDataDir: userDataDir
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(link);
    return { browser, page }; // Return both the browser and page objects
}

const wongnai = async () => {
    try {
        const { browser, page } = await launchBrowserWithDefaultAccount('https://www.wongnai.com/businesses?categoryGroupId=10&page.size=10&rerank=false&domain=1&page.number=1');
        const nameSelector = 'h2.sc-1qge0b2-0.kfaqPY.bd20'; // Updated to match the correct tag name
        await page.waitForSelector(nameSelector);
        const names = await page.$$eval(nameSelector, (elements:string[]) => elements.map((element:any) => element.textContent || ''));

        // Use a promise-based delay before closing the browser
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log('Browser will now close');
        await browser.close();
        return names;
    } catch (error) {
        console.error('Error occurred:', error);
        return []; // Return an empty array or handle the error as needed
    }
};

wongnai().then(console.log).catch(console.error); // Added catch for promise rejection handling
