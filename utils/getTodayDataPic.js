const puppeteer = require("puppeteer");
const targetUrl = "https://rili.jin10.com/";
const path = require("path");

const getTodayDataPic = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1440,
      height: 800,
    },
    //全屏 浏览器窗口最大化
    // args: ["--start-maximized", `--window-size=1440,900`]
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    // slowMo: 500,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  // 地址栏输入网页地址
  await page.goto(targetUrl);
  // 等待元素加载成功
  // await page.waitForTimeout(1000);
  // 更改标签中属性的值
  await page.waitForTimeout(1000);
  const importantSelector =
    "#__layout > div > div.jin-layout-content.transition.top-tips-show > div > div.jin-layout-content__left > div > div.index-page-content > div > div > div > div:nth-child(1) > div.table-header__right > div > div:nth-child(1) > div";
  await page.$eval(importantSelector, (ele) => ele.click());
  await page.waitForTimeout(500);
  const dataSelector1 = "#jinTable1";
  const dataSelector2 = "#jinTable2";
  const mainSelector =
    "#__layout > div > div.jin-layout-content.transition.top-tips-show > div > div.jin-layout-content__left > div > div.index-page-content > div > div > div";
  const dataTable1 = await page.$(dataSelector1);
  const dataTable2 = await page.$(dataSelector2);
  const dataMain = await page.$(mainSelector);

  const screen = async (dom, name = "") => {
    if (dom) {
      dom.screenshot({
        path: `${path.join(path.resolve(__dirname), `/data/${name}`)}.png`,
      });
    } else {
      page.screenshot({
        path: `${path.join(path.resolve(__dirname), `/data/${name}`)}.png`,
      });
    }
    await browser.close();
  };

  // screen(dataTable1, "dataTable1");
  // screen(dataTable2, "dataTable2");
  screen(dataMain, "dataMain");
};
getTodayDataPic();
module.exports = {
  getTodayDataPic,
};
