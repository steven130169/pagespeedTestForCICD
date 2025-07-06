const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

(async () => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
  const runnerResult = await lighthouse('https://mall.iopenmall.tw/iopen/', options);

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  const performanceScore = runnerResult.lhr.categories.performance.score * 100;
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', performanceScore);

  await chrome.kill();

  if (performanceScore < 80) {
    console.error('Lighthouse performance score is less than 80.');
    process.exit(1);
  }
})();
