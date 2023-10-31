// const WebSocket = require("ws");
// var buff;
// function cfrom(t) {
//   if (ArrayBuffer.isView(t)) return l(t);
// }
// function l(t) {
//   for (var e = t.length, r = Array(e).fill(0), n = 0; n < e; n += 1)
//     r[n] = 255 & t[n];
//   return r;
// }

// function readUInt16LE() {
//   read("readUInt16LE", 2);
// }

// /**
//  * @description:
//  * @param {*} buff 数据
//  * @param {*} type 读取类型
//  * @param {*} e 偏移量
//  * @return {*}
//  */
// function read(buff, type, e, position) {
//   var r = buff[type](position);
//   return (position += e), r;
// }
// const jinshiWebsocket = {
//   connect: function () {
//     var t = this;

//     this.socket = new WebSocket("wss://b-price.jin10.com/");
//     this.socket.binaryType = "arraybuffer";
//     t.socket.addEventListener("open", function (r) {
//       console.log("connected");
//     });
//     t.socket.addEventListener("error", function (t) {
//       console.log("error");
//     });
//     t.socket.addEventListener("close", function (e) {
//       console.log("close");
//     });
//     t.socket.addEventListener("message", function (e) {
//       var r = null,
//         n = new Uint8Array(e.data),
//         o = readUInt16LE(),
//         u = "";
//       buff = n;
//       if (10005 === o) {
//         var s = i.readStringLE(),
//           f = 1e3 * i.readUInt32LE();
//         (u = "price"),
//           (r = {
//             code: s,
//             curPrice: g(i.readInt64LE()),
//             hstClose: g(i.readInt64LE()),
//             time: f,
//           });
//       }
//       console.log({ r });
//     });
//   },
// };

// jinshiWebsocket.connect();
// module.exports = jinshiWebsocket;
const price = require("./jinshipricev2");
price();
