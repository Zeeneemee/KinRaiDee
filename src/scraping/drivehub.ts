import * as fs from 'fs';
import { CafeData } from "../../model";
import * as puppeteer from 'puppeteer';
const { separateFieldsWithNewline } = require('../scraping/separate');


async function launchBrowserWithDefaultAccount(link:string) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(link, { timeout: 0 });
    return { browser, page };
}

async function scrollDown(page:any) {
    await page.evaluate(() => {
        return new Promise<void>((resolve, reject) => {
            let totalHeight = 0;
            let distance = 500;
            let timer = setInterval(() => {
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= document.body.scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

export async function drivehub() : Promise<Object[]>{
    try {
        const { page } = await launchBrowserWithDefaultAccount('https://www.drivehub.com/blog/bangkok-cafes/');
        const nameSelector = 'h2.wp-block-heading';
        const otherSelector = 'p';
        
        await page.waitForSelector(nameSelector);
        await scrollDown(page);
        const names = await page.$$eval(nameSelector, (elements:any) => elements.map((element:any) => element.textContent.trim()));
        const others = await page.$$eval(otherSelector, (elements:any) => elements.map((element:any) => element.textContent.trim()));
        others.shift();
        others.pop();
        const cafeInfo = others.map((other: CafeData)=> separateFieldsWithNewline(other));
  
        console.log('Browser will now close');

        const final = names.map((name:string, i:number) => {
            const cafeInfoFinal = cafeInfo.filter((cafeInfo:any) => Object.keys(cafeInfo).length > 0);
            return {
                name,
                ...cafeInfoFinal[i]
            };
        
        });

        return final;
    } catch (error:any) {
        console.error('Error occurred:', error.message);
        return [];
    }
}

drivehub()
