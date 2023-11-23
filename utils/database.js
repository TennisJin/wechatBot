const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jinshi");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // findAllByCode("XAUUSD.GOODS");
});

const jinshiSchema = mongoose.Schema({
  type: String, // 数据类型
  code: String, // 价格类目
  curPrice: Number, // 当前价格
  hstClose: Number, // 收盘价格
  time: Number, // 时间戳
  date: { type: Date, default: Date.now },
});
//数据模型模块
const jinshiModel = mongoose.model("jinshi", jinshiSchema, "ws");

// 查询所有数据
const findAllByCode = (code) => {
  const condition = {};
  if (code) {
    condition["code"] = code;
  }
  return new Promise((res, rej) => {
    jinshiModel
      .find(condition)
      .then((templates) => {
        res(templates);
        console.log({ templates });
        getDetailById(templates[0]._id);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const addOrUpdate = (data = {}) => {
  return new Promise((res, rej) => {
    if (data.id) {
      // 更新
      jinshiModel
        .findOneAndUpdate(
          { _id: id },
          {
            $set: {
              data: data,
            },
          },
          {
            new: true,
          }
        )
        .then((templates) => {
          res(templates);
        })
        .catch((err) => {
          rej(err);
        });
    } else {
      // 新增
      jinshiModel.create(data, (err, template) => {
        if (err) {
          rej(err);
        } else {
          res(template);
          console.log({ createTemplate: template });
        }
      });
    }
  });
};

const deleteById = (id) => {
  return new Promise((res, rej) => {
    jinshiModel
      .findOne({
        _id: id,
      })
      .then((templates) => {
        res(templates);
      })
      .catch((err) => {
        rej(err);
      });
  });
};
// 根据id获取详情
const getDetailById = (id) => {
  return new Promise((res, rej) => {
    jinshiModel
      .findOne({
        _id: id,
      })
      .then((templates) => {
        res(templates);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

module.exports = {
  findAllByCode,
  addOrUpdate,
  deleteById,
  getDetailById,
};
