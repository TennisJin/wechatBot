/*
 * @Author: tusi
 * @Description:
 *
 */
//引入express模块
const express = require('express');
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Template = require('../model/template');

const successObj = (data) => {
  return {
    success: true,
    data: data,
  };
};

const errObj = (message) => {
  return {
    success: false,
    error: message,
  };
};

// 查询所有模板信息路由
router.get('/list', (req, res) => {
  Template.find({})
    .then((templates) => {
      res.json(successObj(templates));
    })
    .catch((err) => {
      res.json(errObj(message));
    });
});

// 添加/更新一个模板信息
router.post('/add', (req, res) => {
  const body = req.body;
  if (body?.id) {
    // 更新
    Template.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          name: req.body.name,
          content: req.body.content,
        },
      },
      {
        new: true,
      }
    )
      .then((template) => res.json(successObj(template)))
      .catch((err) => res.json(errObj(err)));
  } else {
    // 新增
    Template.create(req.body, (err, template) => {
      if (err) {
        res.json(errObj(err));
      } else {
        res.json(successObj(template));
      }
    });
  }
});

// 通过name更新一个模板信息
router.post('/saveByName', (req, res) => {
  // 更新
  Template.findOneAndUpdate(
    { name: req.body.name },
    {
      $set: {
        content: req.body.content,
      },
    },
    {
      new: true,
    }
  )
    .then((template) => res.json(successObj(template)))
    .catch((err) => res.json(errObj(err)));
});

//删除一条模板信息
router.delete('/delete/:id', (req, res) => {
  Template.findOneAndRemove({
    _id: req.params.id,
  })
    .then((template) => res.send(successObj(template)))
    .catch((err) => res.json(errObj(err)));
});

// 根据id获取详情
router.get('/detailById/:id', (req, res) => {
  Template.findOne({
    _id: req.params.id,
  })
    .then((templates) => res.json(successObj(templates)))
    .catch((err) => res.json(errObj(err)));
});

// 根据name获取详情
router.get('/detailByName/:name', (req, res) => {
  Template.findOne({
    name: req.params.name,
  })
    .then((templates) => res.json(successObj(templates)))
    .catch((err) => res.json(errObj(err)));
});

module.exports = router;
