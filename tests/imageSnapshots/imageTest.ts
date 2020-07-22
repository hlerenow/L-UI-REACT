// eslint-disable-next-line no-unused-vars
import puppeteer, { Browser, Page } from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import ReactDOMServer from 'react-dom/server';

expect.extend({ toMatchImageSnapshot });

export default function imageTest(component: React.ReactElement) {
  describe('Image test', () => {
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        args: [
          // Required for Docker version of Puppeteer
          '--no-sandbox',
          '--disable-setuid-sandbox',
          // This will write shared memory files into /tmp instead of /dev/shm,
          // because Docker’s default for /dev/shm is 64MB
          '--disable-dev-shm-usage',
        ],
      });
      page = await browser.newPage();
      await page.goto(`file://${process.cwd()}/tests/imageSnapshots/index.html`);
      await page.addStyleTag({ path: `${process.cwd()}/dist/index.css` });
    });

    afterAll(() => {
      browser.close();
    });

    it('component image screenshot should correct', async () => {
      const html = ReactDOMServer.renderToString(component);
      await page.evaluate((innerHTML) => {
        document.querySelector('#root')!.innerHTML = innerHTML;
      }, html);

      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot();
    });
  });
}
