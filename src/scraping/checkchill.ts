import * as puppeteer from 'puppeteer';
import { CafeData } from "../../model";


async function launchBrowserWithDefaultAccount(link:string) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(link, { timeout: 0 });
    return { browser, page };
}