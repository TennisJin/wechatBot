const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jinshi");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  var kittySchema = mongoose.Schema({
    name: String,
  });

  // var Kitten = mongoose.model("Kitten", kittySchema);
  // var felyne = new Kitten({ name: "Felyne" });
  // console.log(felyne.name); // 'Felyne'
  kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  var Kitten = mongoose.model("Kitten", kittySchema);
  var fluffy = new Kitten({ name: "fluffy" });
  fluffy.speak(); // "Meow name is fluffy"
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
});

const jinshiSchema = mongoose.Schema({
  name: { type: "string", require: true },
  content: String,
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});
const data = (module.exports = mongoose.model("jinshi", jinshiSchema));
