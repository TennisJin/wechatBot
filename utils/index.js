const axios = require("axios");
let uaTool = require("useragent-tool");
let randomUserAgent = uaTool.getRandomUserAgent();

// const hjUrl = `https://hq.sinajs.cn/etag.php?_=${Date.now()}&list=hf_XAU`;

/**
 * @description:
 * @param {*} name hf_XAU - 黄金，hf_CL - wti
 * @return {*}
 */
const getPrice = (name = "hf_XAU", date = Date.now()) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://hq.sinajs.cn/etag.php?_=${date}&list=${name}`, {
        headers: {
          "User-Agent": randomUserAgent,
          "Cache-Control": "no-store",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,or;q=0.8,ar;q=0.7",
          Connection: "keep-alive",
          Host: "hq.sinajs.cn",
          "If-None-Match": 'W/"ICiAVdjdzrI"',
          Referer: "https://finance.sina.com.cn/futures/quotes/XAU.shtml",
          "sec-ch-ua":
            '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "macOS",
          "Sec-Fetch-Dest": "script",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
        },
      })
      .then((res) => {
        let price = "";
        if (name == "hf_XAU") {
          price = res.data.split('"')[1].substring(0, 7);
        } else {
          price = res.data.split('"')[1].substring(0, 6);
          // price = price * 1 - 0.55; // 修正新浪数据
        }
        resolve(price);
      })
      .catch((e) => {
        console.log({ getPriceError: e });
        reject(e);
      });
  });
};

// 获取对象最后一个属性值
function getLastPropertyValue(obj) {
  var keys = Object.keys(obj);
  var lastKey = keys[keys.length - 1];
  return obj[lastKey];
}
// 获取股票价格
let fetchStock = (code = "JD") => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${code}&interval=1min&apikey=PV4UB93BAPQQVG4L`
    )
      .then((response) => response.json())
      .then((data) => {
        try {
          const value = getLastPropertyValue(getLastPropertyValue(data))?.[
            "4. close"
          ];
          console.log("价格:" + value);
          resolve(value);
        } catch {
          reject(`获取${code}价格失败`);
          console.error(`获取${code}价格失败`);
        }
      })
      .catch((error) => {
        reject(error);
        console.error(`获取${code}价格失败`, error);
      });
  });
};
module.exports = {
  getPrice,
  fetchStock,
};
