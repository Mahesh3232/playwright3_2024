const { test, expect } = require('@playwright/test')

test('Verify downlode file in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/file')
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.locator('#pdf').click()
    const download = await downloadPromise;

    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs('tests/Downlode/test.pdf' + download.suggestedFilename());
})