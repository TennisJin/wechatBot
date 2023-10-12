const puppeteer = require("puppeteer");
const targetUrl = "https://rili.jin10.com/";
const path = require("path");
const fs = require("fs");
const os = require("os");

const TYPELIST = ["ALL", "CASE", "DATA"];
/**
 * @description: 获取今日重点
 * @param {*} type DATA - 数据，CASE - 事件，ALL - 数据和事件
 * @return {*}
 */
const getTodayImportantPic = async (type = "ALL") => {
  console.log("getTodayImportantPic", new Date());
  // 删除之前的图片
  try {
    TYPELIST.forEach((e) => {
      fs.unlinkSync(`${path.join(path.resolve(__dirname), `/data/${e}`)}.png`);
    });
  } catch {
    console.warn("图片删除失败");
  }
  const browser = await puppeteer.launch({
    headless: os.type() == "Linux",
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
  await page.waitForTimeout(500);
  const importantSelector =
    "#__layout > div > div.jin-layout-content.transition.top-tips-show > div > div.jin-layout-content__left > div > div.index-page-content > div > div > div > div:nth-child(1) > div.table-header__right > div > div:nth-child(1) > div";
  await page.$eval(importantSelector, (ele) => ele.click());
  await page.waitForTimeout(500);
  const dataSelector1 = "#jinTable1";
  const dataSelector2 = "#jinTable2";
  const mainSelector =
    "#__layout > div > div.jin-layout-content.transition.top-tips-show > div > div.jin-layout-content__left > div > div.index-page-content > div > div > div";
  const dataDom = await page.$(dataSelector1);
  const caseDom = await page.$(dataSelector2);
  const allDom = await page.$(mainSelector);
  const domMap = {
    DATA: dataDom,
    CASE: caseDom,
    ALL: allDom,
  };

  const screen = async (dom, type) => {
    if (dom) {
      await dom.screenshot({
        path: `${path.join(path.resolve(__dirname), `/data/${type}`)}.png`,
      });
    } else {
      await page.screenshot({
        path: `${path.join(path.resolve(__dirname), `/data/${type}`)}.png`,
      });
    }
  };
  // 每一次都截取所有的图片
  // for (const item of TYPELIST) {
  //   await screen(domMap[item], item);
  // }
  const processItems = async (items) => {
    for (const item of items) {
      await screen(domMap[item], item);
    }
  };
  await processItems(TYPELIST);
  await browser.close();
};
getTodayImportantPic();
module.exports = {
  getTodayImportantPic,
};
