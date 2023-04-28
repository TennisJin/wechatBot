//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
const { wechatBot } = require("../utils/wechaty");

router.get("/hello", function (req, res, next) {
  console.log(req.query);
  res.send("wechat!");
});

router.post("/report", (req, res) => {
  res.send("收到!");
  if (req.body.error) {
    wechatBot.findOne("吐丝", req.body.error);
  }
});

module.exports = router;
