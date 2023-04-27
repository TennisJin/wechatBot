const mogoose = require("mongoose");

const templateSchema = mogoose.Schema({
  name: { type: "string", require: true },
  content: String,
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

const Template = (module.exports = mogoose.model("Tepmlate", templateSchema));
