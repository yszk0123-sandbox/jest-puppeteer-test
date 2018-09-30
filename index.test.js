let page;

beforeAll(async () => {
  page = await browser.newPage();
  await page.goto('http://127.0.0.1/');
});

test('should display `test` text on page', async () => {
  await expect(page).toMatch('test');
});

test('should go to foo', async () => {
  await expect(page).toClick('a[href^="/foo"]');
  await page.waitForNavigation();
  await expect(page).toMatch('foo');
  await page.screenshot({ path: '.tmp/foo.png' });
});
