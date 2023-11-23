const puppeteer = require("puppeteer");
const targetUrl = "https://rili.jin10.com/";
const path = require("path");
const fs = require("fs");
const os = require("os");

const TYPELIST = ["CASE", "DATA", "ALL"];
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
    width: 1440,
    height: 800,
    deviceScaleFactor: 3,
  });
  // 地址栏输入网页地址
  await page.goto(targetUrl);
  // 等待元素加载成功
  await page.waitForTimeout(200);
  // 更改标签中属性的值
  const importantSelector =
    "#__layout > div > div.jin-layout-content.transition.top-tips-show > div > div.jin-layout-content__left > div > div.index-page-content > div > div > div > div:nth-child(1) > div.table-header__right > div > div:nth-child(1) > div";
  const waterMarkSelector =
    "#__layout > div > div.jin-layout-content.transition.top-tips-show > div > div.jin-layout-content__left > div > div.index-page-content";
  const switchContainerSelector =
    "#__layout > div > div.jin-layout-content.transition.top-tips-show > div > div.jin-layout-content__left > div > div.index-page-content > div > div > div > div:nth-child(1) > div.table-header__right";
  await page.$eval(importantSelector, (ele) => ele.click());
  // 隐藏switch区域
  await page.$eval(
    switchContainerSelector,
    (ele) => (ele.style.display = "none")
  );
  // 隐藏水印
  await page.$eval(waterMarkSelector, (ele) => {
    ele.style.background = "#fff";
  });
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
  // 样式修改
  await page.evaluate(() => {
    document.querySelector(
      "#jinTable1 > div.jin-table-header__wrapper > table > thead > tr > th:nth-child(8) > span"
    ).style.display = "none";
    document.querySelector(
      "#jinTable1 > div.jin-table-header__wrapper > table > thead > tr > th:nth-child(9) > div"
    ).style.display = "none";
    document
      .querySelectorAll(
        "#jinTable1 > div.jin-table-body__wrapper > table > tbody > tr > td:nth-child(8)"
      )
      .forEach((e) => {
        e.style.display = "none";
      });
    document
      .querySelectorAll(
        "#jinTable1 > div.jin-table-body__wrapper > table > tbody > tr > td:nth-child(9)"
      )
      .forEach((e) => {
        e.style.display = "none";
      });
    const nextData = document.querySelector(
      "#jinTable1 > div.jin-table-body__wrapper > table > tbody > tr.countdown-line > td > div > span"
    );
    nextData && (nextData.innerHTML = "下一条数据");
  });

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
  const processItems = async (items) => {
    for (const item of items) {
      await screen(domMap[item], item);
      await page.waitForTimeout(500);
    }
  };
  await processItems(TYPELIST);
  if (os.type() == "Linux") {
    await browser.close();
  }
};
// getTodayImportantPic();
module.exports = {
  getTodayImportantPic,
};
