import puppeteer from 'puppeteer';
let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3474');
  await page.setViewport({ width, height });
});

describe('Material Toast Element', () => {

  it('Should render', async () => {
    await page.waitForSelector("mat-toast");
    const toastEl = await page.$eval('mat-toast', el => el);
    expect(toastEl).not.toBeNull()
  })
   
  it('Should set attribute [open] when show() method called', async () => {
    await page.waitForSelector("mat-toast");
    const isOpen = await page.$eval('mat-toast', el => {
      el.show();
      return el.hasAttribute('open')
    });
    expect(isOpen).toEqual(true);
  })

})

afterAll(() => {
  browser.close();
});