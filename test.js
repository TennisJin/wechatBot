console.log(global.test);
global.test = 1;
console.log(global.test);

const { fetchStock } = require("./utils/index");
fetchStock();
