let page;

beforeAll(async () => {
  page = await browser.newPage();
  await page.goto('http://127.0.0.1/');
});

test('should display `test` text on page', async () => {
  await expect(page).toMatch('phpinfo');
});

test('should go to foo', async () => {
  await expect(page).toClick('a[href^="phpinfo.php"]');
  await page.waitForNavigation();
  await expect(page).toMatch('PHP Version');
  await page.screenshot({ path: '.tmp/foo.png' });
});
