const { addOrUpdate } = require("./database");
/*! For license information please see index.js.LICENSE.txt */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Jin10Price = e())
    : (t.Jin10Price = e());
})(this, function () {
  return (() => {
    var t = {
        132: (t) => {
          (t.exports = function (t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        471: (t, e, r) => {
          var n = r(132);
          (t.exports = function (t) {
            if (Array.isArray(t)) return n(t);
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        332: (t) => {
          (t.exports = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        945: (t) => {
          function e(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          (t.exports = function (t, r, n) {
            return (
              r && e(t.prototype, r),
              n && e(t, n),
              Object.defineProperty(t, "prototype", {
                writable: !1,
              }),
              t
            );
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        336: (t) => {
          (t.exports = function (t, e, r) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        7: (t) => {
          (t.exports = function (t) {
            return t && t.__esModule
              ? t
              : {
                  default: t,
                };
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        757: (t) => {
          (t.exports = function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        640: (t) => {
          (t.exports = function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        138: (t, e, r) => {
          var n = r(471),
            i = r(757),
            o = r(42),
            u = r(640);
          (t.exports = function (t) {
            return n(t) || i(t) || o(t) || u();
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        42: (t, e, r) => {
          var n = r(132);
          (t.exports = function (t, e) {
            if (t) {
              if ("string" == typeof t) return n(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? n(t, e)
                  : void 0
              );
            }
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        607: function (t, e, r) {
          var n, i, o;
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self && self,
            (i = [r(332), r(945), r(764)]),
            void 0 ===
              (o =
                "function" ==
                typeof (n = function (e, n, i) {
                  "use strict";
                  var o = r(7);
                  (e = o(e)), (n = o(n));
                  var u = (i = o(i)).default.Buffer,
                    s = 102400,
                    f = r(661),
                    a = (function () {
                      function t(r) {
                        (0, e.default)(this, t),
                          null == r &&
                            ((r = u.alloc(s)), (this.writeMode = !0)),
                          (this.buf = r),
                          (this.position = 0);
                      }
                      return (
                        (0, n.default)(
                          t,
                          [
                            {
                              key: "remain",
                              value: function () {
                                return this.buf.length - this.position;
                              },
                            },
                            {
                              key: "read",
                              value: function (t, e) {
                                var r = this.buf[t](this.position);
                                return (this.position += e), r;
                              },
                            },
                            {
                              key: "write",
                              value: function (t, e, r) {
                                if (!this.writeMode)
                                  throw new Error("不是写入模式");
                                if (this.position + r > this.buf.length) {
                                  var n =
                                      Math.ceil((this.position + r) / s) * s,
                                    i = u.alloc(n);
                                  this.buf.copy(i), (this.buf = i);
                                }
                                this.buf[t](e, this.position),
                                  (this.position += r);
                              },
                            },
                            {
                              key: "readInt8",
                              value: function () {
                                return this.read("readInt8", 1);
                              },
                            },
                            {
                              key: "readInt16BE",
                              value: function () {
                                return this.read("readInt16BE", 2);
                              },
                            },
                            {
                              key: "readInt16LE",
                              value: function () {
                                return this.read("readInt16LE", 2);
                              },
                            },
                            {
                              key: "readInt32BE",
                              value: function () {
                                return this.read("readInt32BE", 4);
                              },
                            },
                            {
                              key: "readInt32LE",
                              value: function () {
                                return this.read("readInt32LE", 4);
                              },
                            },
                            {
                              key: "readInt64LE",
                              value: function () {
                                var t = this.read("readInt32LE", 4),
                                  e = this.read("readInt32LE", 4);
                                return new f(e, t).toNumber(!0);
                              },
                            },
                            {
                              key: "readUInt64LE",
                              value: function () {
                                var t = this.read("readInt32LE", 4),
                                  e = this.read("readInt32LE", 4);
                                return new f(e, t).toNumber(!0);
                              },
                            },
                            {
                              key: "readUInt8",
                              value: function () {
                                return this.read("readUInt8", 1);
                              },
                            },
                            {
                              key: "readUInt16BE",
                              value: function () {
                                return this.read("readUInt16BE", 2);
                              },
                            },
                            {
                              key: "readUInt16LE",
                              value: function () {
                                return this.read("readUInt16LE", 2);
                              },
                            },
                            {
                              key: "readUInt32BE",
                              value: function () {
                                return this.read("readUInt32BE", 4);
                              },
                            },
                            {
                              key: "readUInt32LE",
                              value: function () {
                                return this.read("readUInt32LE", 4);
                              },
                            },
                            {
                              key: "readFloatBE",
                              value: function () {
                                return this.read("readFloatBE", 4);
                              },
                            },
                            {
                              key: "readFloatLE",
                              value: function () {
                                return this.read("readFloatLE", 4);
                              },
                            },
                            {
                              key: "readDoubleBE",
                              value: function () {
                                return this.read("readDoubleBE", 8);
                              },
                            },
                            {
                              key: "readDoubleLE",
                              value: function () {
                                return this.read("readDoubleLE", 8);
                              },
                            },
                            {
                              key: "writeInt8",
                              value: function (t) {
                                return this.write("writeInt8", t, 1);
                              },
                            },
                            {
                              key: "writeInt16BE",
                              value: function (t) {
                                return this.write("writeInt16BE", t, 2);
                              },
                            },
                            {
                              key: "writeInt16LE",
                              value: function (t) {
                                return this.write("writeInt16LE", t, 2);
                              },
                            },
                            {
                              key: "writeInt32BE",
                              value: function (t) {
                                return this.write("writeInt32BE", t, 4);
                              },
                            },
                            {
                              key: "writeInt32LE",
                              value: function (t) {
                                return this.write("writeInt32LE", t, 4);
                              },
                            },
                            {
                              key: "writeInt64LE",
                              value: function (t) {
                                for (
                                  var e = new f(t).toBuffer(),
                                    r = 0,
                                    n = [7, 6, 5, 4, 3, 2, 1, 0];
                                  r < n.length;
                                  r++
                                ) {
                                  var i = n[r];
                                  this.write("writeUInt8", e[i], 1);
                                }
                              },
                            },
                            {
                              key: "writeUInt8",
                              value: function (t) {
                                return this.write("writeUInt8", t, 1);
                              },
                            },
                            {
                              key: "writeUInt16BE",
                              value: function (t) {
                                return this.write("writeUInt16BE", t, 2);
                              },
                            },
                            {
                              key: "writeUInt16LE",
                              value: function (t) {
                                return this.write("writeUInt16LE", t, 2);
                              },
                            },
                            {
                              key: "writeUInt32BE",
                              value: function (t) {
                                return this.write("writeUInt32BE", t, 4);
                              },
                            },
                            {
                              key: "writeUInt32LE",
                              value: function (t) {
                                return this.write("writeUInt32LE", t, 4);
                              },
                            },
                            {
                              key: "writeFloatBE",
                              value: function (t) {
                                return this.write("writeFloatBE", t, 4);
                              },
                            },
                            {
                              key: "writeFloatLE",
                              value: function (t) {
                                return this.write("writeFloatLE", t, 4);
                              },
                            },
                            {
                              key: "writeDoubleBE",
                              value: function (t) {
                                return this.write("writeDoubleBE", t, 8);
                              },
                            },
                            {
                              key: "writeDoubleLE",
                              value: function (t) {
                                return this.write("writeDoubleLE", t, 8);
                              },
                            },
                            {
                              key: "readStringBE",
                              value: function () {
                                var t = this.readUInt16BE(),
                                  e = this.buf.toString(
                                    "utf-8",
                                    this.position,
                                    this.position + t
                                  );
                                return (this.position += t), e;
                              },
                            },
                            {
                              key: "readStringLE",
                              value: function () {
                                var t = this.readUInt16LE(),
                                  e = this.buf.toString(
                                    "utf-8",
                                    this.position,
                                    this.position + t
                                  );
                                return (this.position += t), e;
                              },
                            },
                            {
                              key: "writeStringBE",
                              value: function (t) {
                                var e = u.from(t).length;
                                this.writeInt16BE(e),
                                  this.buf.write(t, this.position),
                                  (this.position += e);
                              },
                            },
                            {
                              key: "writeStringLE",
                              value: function (t) {
                                var e = u.from(t).length;
                                this.writeInt16LE(e),
                                  this.buf.write(t, this.position),
                                  (this.position += e);
                              },
                            },
                            {
                              key: "length",
                              value: function () {
                                return this.buf.length;
                              },
                            },
                            {
                              key: "toBuffer",
                              value: function () {
                                return this.buf.slice(0, this.position);
                              },
                            },
                            {
                              key: "toPackageBufferBE",
                              value: function () {
                                var t = u.alloc(this.position + 2);
                                return (
                                  this.buf.copy(t, 2),
                                  t.writeInt16BE(t.length, 0),
                                  t
                                );
                              },
                            },
                            {
                              key: "toPackageBufferLE",
                              value: function () {
                                var t = u.alloc(this.position + 2);
                                return (
                                  this.buf.copy(t, 2),
                                  t.writeInt16LE(t.length, 0),
                                  t
                                );
                              },
                            },
                          ],
                          [
                            {
                              key: "Buffer",
                              value: function () {
                                return u;
                              },
                            },
                          ]
                        ),
                        t
                      );
                    })();
                  t.exports = a;
                })
                  ? n.apply(e, i)
                  : n) || (t.exports = o);
        },
        661: function (t, e, r) {
          var n, i, o;
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self && self,
            (i = [r(764)]),
            (n = function (e) {
              "use strict";
              for (
                var n = (e = r(7)(e)).default.Buffer,
                  i = 4294967296,
                  o = [],
                  u = 0;
                u < 256;
                u++
              )
                o[u] = (u > 15 ? "" : "0") + u.toString(16);
              var s = (t.exports = function (t, e) {
                t instanceof n
                  ? ((this.buffer = t), (this.offset = e || 0))
                  : "[object Uint8Array]" == Object.prototype.toString.call(t)
                  ? ((this.buffer = new n(t)), (this.offset = e || 0))
                  : ((this.buffer = this.buffer || new n(8)),
                    (this.offset = 0),
                    this.setValue.apply(this, arguments));
              });
              (s.MAX_INT = Math.pow(2, 53)),
                (s.MIN_INT = -Math.pow(2, 53)),
                (s.prototype = {
                  constructor: s,
                  _2scomp: function () {
                    for (
                      var t = this.buffer, e = this.offset, r = 1, n = e + 7;
                      n >= e;
                      n--
                    ) {
                      var i = (255 ^ t[n]) + r;
                      (t[n] = 255 & i), (r = i >> 8);
                    }
                  },
                  setValue: function (t, e) {
                    var r = !1;
                    if (1 == arguments.length)
                      if ("number" == typeof t) {
                        if (
                          ((r = t < 0),
                          (e = (t = Math.abs(t)) % i),
                          (t /= i) > i)
                        )
                          throw new RangeError(t + " is outside Int64 range");
                        t |= 0;
                      } else {
                        if ("string" != typeof t)
                          throw new Error(t + " must be a Number or String");
                        (e = (t = (t + "").replace(/^0x/, "")).substr(-8)),
                          (t = t.length > 8 ? t.substr(0, t.length - 8) : ""),
                          (t = parseInt(t, 16)),
                          (e = parseInt(e, 16));
                      }
                    for (
                      var n = this.buffer, o = this.offset, u = 7;
                      u >= 0;
                      u--
                    )
                      (n[o + u] = 255 & e), (e = 4 == u ? t : e >>> 8);
                    r && this._2scomp();
                  },
                  toNumber: function (t) {
                    for (
                      var e = this.buffer,
                        r = this.offset,
                        n = 128 & e[r],
                        i = 0,
                        o = 1,
                        u = 7,
                        f = 1;
                      u >= 0;
                      u--, f *= 256
                    ) {
                      var a = e[r + u];
                      n && ((o = (a = (255 ^ a) + o) >> 8), (a &= 255)),
                        (i += a * f);
                    }
                    return !t && i >= s.MAX_INT
                      ? n
                        ? -1 / 0
                        : 1 / 0
                      : n
                      ? -i
                      : i;
                  },
                  valueOf: function () {
                    return this.toNumber(!1);
                  },
                  toString: function (t) {
                    return this.valueOf().toString(t || 10);
                  },
                  toOctetString: function (t) {
                    for (
                      var e = new Array(8),
                        r = this.buffer,
                        n = this.offset,
                        i = 0;
                      i < 8;
                      i++
                    )
                      e[i] = o[r[n + i]];
                    return e.join(t || "");
                  },
                  toBuffer: function (t) {
                    if (t && 0 === this.offset) return this.buffer;
                    var e = new n(8);
                    return (
                      this.buffer.copy(e, 0, this.offset, this.offset + 8), e
                    );
                  },
                  copy: function (t, e) {
                    this.buffer.copy(t, e || 0, this.offset, this.offset + 8);
                  },
                  compare: function (t) {
                    if (
                      (128 & this.buffer[this.offset]) !=
                      (128 & t.buffer[t.offset])
                    )
                      return t.buffer[t.offset] - this.buffer[this.offset];
                    for (var e = 0; e < 8; e++)
                      if (
                        this.buffer[this.offset + e] !== t.buffer[t.offset + e]
                      )
                        return (
                          this.buffer[this.offset + e] - t.buffer[t.offset + e]
                        );
                    return 0;
                  },
                  equals: function (t) {
                    return 0 === this.compare(t);
                  },
                  inspect: function () {
                    return (
                      "[Int64 value:" +
                      this +
                      " octets:" +
                      this.toOctetString(" ") +
                      "]"
                    );
                  },
                });
            }),
            void 0 === (o = n.apply(e, i)) || (t.exports = o);
        },
        511: function (t, e, r) {
          var n, i, o;
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self && self,
            (i = [r(336), r(138), r(332), r(945), r(374)]),
            (n = function (e, n, i, o, u) {
              "use strict";
              var s = r(7);
              function f(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                    (n = n.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, n);
                }
                return r;
              }
              function a(t) {
                for (var r = 1; r < arguments.length; r++) {
                  var n = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? f(Object(n), !0).forEach(function (r) {
                        (0, e.default)(t, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : f(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              }
              (e = s(e)), (n = s(n)), (i = s(i)), (o = s(o)), (u = s(u));
              var h = r(607),
                c = h.Buffer(),
                l = 10003,
                p = 10019,
                d = [
                  "NYMEXCL1.Volume",
                  "COMEXGC1.Volume",
                  "COMEXHG1.Volume",
                  "NYMEXNG1.Volume",
                ],
                y = true,
                g = function (t) {
                  return u.default.divide(t, 1e6);
                },
                v = (function () {
                  function t(e) {
                    (0, i.default)(this, t),
                      (e = e || {}),
                      (this.isSupport = void 0 !== window.WebSocket),
                      (this.socket = null),
                      (this.priceConfig = {
                        code: (e.priceConfig || {}).code || [],
                        frequency: (e.priceConfig || {}).frequency || 3e3,
                      }),
                      (this.otherCode = e.otherCode || []),
                      (this.inactiveStore = {
                        priceConfig: this.priceConfig,
                        otherCode: this.otherCode,
                      }),
                      (this.callback = e.callback || function anonymous() {}),
                      (this.closeCallback =
                        e.closeCallback || function anonymous() {}),
                      (this.heartbeatTimer = null),
                      (this.isGetVolume = !1),
                      (this.reConnectCount = 0),
                      (this.connectTimeout = 500),
                      (this.failCount = 1),
                      (this.historyDatas = []),
                      this.inactiveAction();
                  }
                  return (
                    (0, o.default)(
                      t,
                      [
                        {
                          key: "connect",
                          value: function () {
                            var t = this;
                            return (
                              (this.socket = new window.WebSocket(
                                "wss://b-price.jin10.com/"
                              )),
                              (window.priceSocket = this.socket),
                              (this.socket.binaryType = "arraybuffer"),
                              new Promise(function (e, r) {
                                t.socket.addEventListener("open", function (r) {
                                  console.log("connected"),
                                    t._sendHeartbeat(),
                                    // window.postMessage(
                                    //   {
                                    //     event: "QUOTE_PRICE_CONNECT_CALLBACK",
                                    //   },
                                    //   window.location.origin
                                    // );
                                    t.getPrice(),
                                    e();
                                }),
                                  t.socket.addEventListener(
                                    "error",
                                    function (t) {
                                      console.log("error"),
                                        r(new Error("error"));
                                    }
                                  ),
                                  t.socket.addEventListener(
                                    "close",
                                    function (e) {
                                      console.log("close"),
                                        t.closeCallback(),
                                        (t.socket = null),
                                        (window.priceSocket = null),
                                        t.reconnect(),
                                        r(new Error("close"));
                                    }
                                  );
                              })
                            );
                          },
                        },
                        {
                          key: "reconnect",
                          value: function () {
                            var t = this;
                            this.reConnectCount >= 6 * this.failCount &&
                              ((this.failCount = 2),
                              this.connectTimeout >= 3e4
                                ? (this.connectTimeout = 3e4)
                                : (this.connectTimeout =
                                    this.connectTimeout * this.failCount)),
                              this.reConnectCount++,
                              setTimeout(function () {
                                t.destory(),
                                  setTimeout(function () {
                                    t.getPrice();
                                  }, 10);
                              }, this.connectTimeout);
                          },
                        },
                        {
                          key: "getPrice",
                          value: function () {
                            var t = this;
                            this.socket ||
                              this.connect().then(function () {
                                t.switchOtherCode();
                              }),
                              this.socket.addEventListener(
                                "message",
                                function (e) {
                                  var r = null,
                                    n = new Uint8Array(e.data),
                                    i = new h(c.from(n)),
                                    o = i.readUInt16LE(),
                                    u = "";
                                  if (10005 === o) {
                                    var s = i.readStringLE(),
                                      f = 1e3 * i.readUInt32LE();
                                    (u = "price"),
                                      (r = {
                                        code: s,
                                        curPrice: g(i.readInt64LE()),
                                        hstClose: g(i.readInt64LE()),
                                        time: f,
                                      });
                                  } else if (10020 === o) {
                                    var a = i.readStringLE(),
                                      l = 1e3 * i.readUInt32LE();
                                    (u = "volume"),
                                      (r = {
                                        code: a,
                                        volume: i.readUInt32LE(),
                                        time: l,
                                      });
                                  } else if (10021 === o) {
                                    var p = i.readStringLE(),
                                      d = i.readUInt16LE(),
                                      y = [];
                                    u = "first_volume_data";
                                    for (var v = 0; v < d; v++) {
                                      var w = 1e3 * i.readUInt32LE(),
                                        b = i.readUInt32LE();
                                      y.push({
                                        volume: b,
                                        time: w,
                                      });
                                    }
                                    r = {
                                      code: p,
                                      datas: y,
                                    };
                                  } else if (1100 === o)
                                    (u = "letsgo"),
                                      (r = {
                                        letsgo: i.readStringLE(),
                                      });
                                  else if (1200 === o)
                                    (u = "time"),
                                      (r = {
                                        time: i.readUInt32LE(),
                                      });
                                  else if (1001 === o) {
                                    var E = i.readStringLE();
                                    (u = "tv_event"),
                                      (r = {
                                        datas: JSON.parse(E),
                                      });
                                  } else if (5001 === o) {
                                    var m = i.readStringLE();
                                    (u = "recommend"),
                                      (r = {
                                        datas: JSON.parse(m),
                                      });
                                  } else if (5003 === o) {
                                    var I = i.readStringLE();
                                    (u = "flash_plus"),
                                      (r = {
                                        datas: JSON.parse(I),
                                      });
                                  }
                                  const data = {
                                    type: u,
                                    datas: r,
                                  };
                                  // window.postMessage(
                                  //   {
                                  //     event: "EXTERNAL_EVENTS_LISTEN",
                                  //     data: {
                                  //       type: u,
                                  //       datas: r,
                                  //     },
                                  //   },
                                  //   window.location.origin
                                  // ),
                                  console.log({ data });
                                  addOrUpdate(data);
                                  // r && t.callback(r, u);
                                }
                              );
                          },
                        },
                        {
                          key: "switchCode",
                          value: function (t, e) {
                            debugger;
                            if (
                              (void 0 !== e && (this.isGetVolume = e),
                              (t = Array.isArray(t) ? t : [t]),
                              !0 === e && (t = t.concat(d)),
                              t.length
                                ? ((this.priceConfig.code = t),
                                  (t = t.concat(this.otherCode)))
                                : ((this.priceConfig.code = []),
                                  (t = this.otherCode)),
                              (t = (0, n.default)(new Set(t))).length > 40 &&
                                (t.length = 40),
                              !this.socket)
                            )
                              return !1;
                            var r = [],
                              i = [];
                            t.forEach(function (t) {
                              "string" == typeof t &&
                                (t.includes("Volume") ? i.push(t) : r.push(t));
                            });
                            var o = r.length,
                              u = this.priceConfig.frequency,
                              s = new h();
                            s.writeUInt16LE(l),
                              s.writeUInt32LE(u),
                              s.writeUInt16LE(o),
                              r.forEach(function (t) {
                                s.writeStringLE(t);
                              }),
                              this.send(s.toBuffer());
                            var f = new h();
                            f.writeUInt16LE(p),
                              f.writeUInt16LE(i.length),
                              i.forEach(function (t) {
                                f.writeStringLE(t);
                              }),
                              this.send(f.toBuffer());
                          },
                        },
                        {
                          key: "switchOtherCode",
                          value: function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [];
                            if (
                              ((t = Array.isArray(t) ? t : [t]).length
                                ? ((this.otherCode = t),
                                  (t = t.concat(this.priceConfig.code)))
                                : (t = this.otherCode.concat(
                                    this.priceConfig.code
                                  )),
                              (t = (0, n.default)(new Set(t))).length > 40 &&
                                (t.length = 40),
                              !this.socket)
                            )
                              return !1;
                            var e = new h();
                            e.writeUInt16LE(l);
                            var r = this.priceConfig.frequency,
                              i = [],
                              o = [];
                            t.map(function (t) {
                              "string" == typeof t &&
                                (t.includes("Volume") ? o.push(t) : i.push(t));
                            });
                            var u = i.length;
                            e.writeUInt32LE(r),
                              e.writeUInt16LE(u),
                              i.forEach(function (t) {
                                e.writeStringLE(t);
                              }),
                              this.send(e.toBuffer());
                            var s = new h();
                            s.writeUInt16LE(p),
                              s.writeUInt16LE(o.length),
                              o.forEach(function (t) {
                                s.writeStringLE(t);
                              }),
                              this.send(s.toBuffer());
                          },
                        },
                        {
                          key: "addOtherCode",
                          value: function (t) {
                            t && this.otherCode.push(t);
                          },
                        },
                        {
                          key: "delOtherCode",
                          value: function (t) {
                            if (t) {
                              var e = this.otherCode.indexOf(t);
                              e > -1 && this.otherCode.splice(e, 1);
                            }
                          },
                        },
                        {
                          key: "inactiveAction",
                          value: function () {
                            var t,
                              e,
                              r,
                              n,
                              i,
                              o,
                              u,
                              s,
                              f,
                              h = this;
                            document.addEventListener(
                              "visibilitychange",
                              function () {
                                document.hidden
                                  ? ((h.inactiveStore = {
                                      priceConfig: a({}, h.priceConfig),
                                      otherCode: h.otherCode,
                                    }),
                                    (h.otherCode = []),
                                    (h.priceConfig.code = []),
                                    h.switchOtherCode())
                                  : ((h.priceConfig =
                                      h.inactiveStore.priceConfig),
                                    (h.otherCode = h.inactiveStore.otherCode),
                                    h.switchOtherCode());
                              }
                            ),
                              window.addEventListener(
                                "resize",
                                ((t = function () {
                                  h.resizeFunc();
                                }),
                                (e = 500),
                                (f = function f() {
                                  var a = +new Date() - u;
                                  a < e && a > 0
                                    ? (n = setTimeout(f, e - a))
                                    : ((n = null),
                                      r ||
                                        ((s = t.apply(o, i)),
                                        n || (o = i = null)));
                                }),
                                function () {
                                  for (
                                    var i = arguments.length,
                                      a = new Array(i),
                                      h = 0;
                                    h < i;
                                    h++
                                  )
                                    a[h] = arguments[h];
                                  (o = this), (u = +new Date());
                                  var c = r && !n;
                                  return (
                                    n || (n = setTimeout(f, e)),
                                    c && ((s = t.apply(o, a)), (o = a = null)),
                                    s
                                  );
                                })
                              );
                          },
                        },
                        {
                          key: "resizeFunc",
                          value: function () {
                            y &&
                              (window.innerWidth <= 992
                                ? this.priceConfig.code &&
                                  this.priceConfig.code.length &&
                                  ((this.inactiveStore = {
                                    priceConfig: a({}, this.priceConfig),
                                    otherCode: this.otherCode,
                                  }),
                                  (this.priceConfig.code = []),
                                  this.switchOtherCode())
                                : this.inactiveStore.priceConfig &&
                                  this.inactiveStore.priceConfig.code.length &&
                                  ((this.priceConfig =
                                    this.inactiveStore.priceConfig),
                                  this.switchOtherCode()));
                          },
                        },
                        {
                          key: "getHistory",
                          value: function (t) {
                            var e = this,
                              r = t.code,
                              n = null,
                              i = new h();
                            return (
                              i.writeUInt16LE(3002),
                              i.writeStringLE(r),
                              (i = i.toBuffer()),
                              this.socket
                                ? this.send(i)
                                : this.connect().then(function () {
                                    e.send(i);
                                  }),
                              new Promise(function (t, i) {
                                n = setTimeout(function () {
                                  i(new Error("连接超时"));
                                }, 1e4);
                                e.socket.addEventListener(
                                  "message",
                                  function i(o) {
                                    var u = [],
                                      s = new Uint8Array(o.data),
                                      f = new h(c.from(s)),
                                      a = f.readUInt16LE();
                                    if ((n && clearTimeout(n), 3002 !== a))
                                      return !1;
                                    if (f.readStringLE() === r)
                                      for (
                                        var l,
                                          p,
                                          d,
                                          y = -1 !== r.indexOf(".Volume"),
                                          v = f.readUInt32LE(),
                                          w = 0;
                                        w < v;
                                        w++
                                      )
                                        (p = f.readUInt32LE()),
                                          (d = f.readUInt64LE()),
                                          (l = [1e3 * p, y ? d : g(d)]),
                                          u.push(l);
                                    t(u),
                                      e.socket.removeEventListener(
                                        "message",
                                        i
                                      );
                                  }
                                );
                              })
                            );
                          },
                        },
                        {
                          key: "joinDanmuRoom",
                          value: function (t) {
                            var e = this,
                              r = new h();
                            r.writeUInt16LE(10024),
                              r.writeStringLE(t),
                              r.writeUInt8(1),
                              (r = r.toBuffer()),
                              this.socket
                                ? this.send(r)
                                : this.connect().then(function () {
                                    e.send(r);
                                  }),
                              (this._danmuDisposer =
                                this._addDanmuEventListener(function (t) {
                                  return e._onDanmuUpdate(t);
                                }));
                          },
                        },
                        {
                          key: "leaveDanmuRoom",
                          value: function (t) {
                            var e = this,
                              r = new h();
                            r.writeUInt16LE(10024),
                              r.writeStringLE(t),
                              r.writeUInt8(0),
                              (r = r.toBuffer()),
                              this.socket
                                ? this.send(r)
                                : this.connect().then(function () {
                                    e.send(r);
                                  }),
                              this._danmuDisposer && this._danmuDisposer();
                          },
                        },
                        {
                          key: "_addDanmuEventListener",
                          value: function (t) {
                            var e = this;
                            return (
                              this.socket.addEventListener("message", t),
                              function () {
                                e.socket.removeEventListener("message", t);
                              }
                            );
                          },
                        },
                        {
                          key: "_onDanmuUpdate",
                          value: function (t) {
                            var e = new Uint8Array(t.data),
                              r = new h(c.from(e));
                            if (5002 === r.readUInt16LE()) {
                              var n = r.readStringLE(),
                                i = JSON.parse(n);
                              this.callback(i, "danmu");
                            }
                          },
                        },
                        {
                          key: "send",
                          value: function (t) {
                            if (
                              !this.socket ||
                              this.socket.readyState !== window.WebSocket.OPEN
                            )
                              return !1;
                            this.socket.send(t);
                          },
                        },
                        {
                          key: "destory",
                          value: function () {
                            this.socket && this.socket.close(),
                              this.heartbeatTimer &&
                                clearInterval(this.heartbeatTimer);
                          },
                        },
                        {
                          key: "_sendHeartbeat",
                          value: function () {
                            var t = this;
                            if (!this.socket) return !1;
                            this.heartbeatTimer = setInterval(function () {
                              t.send("");
                            }, 1e4);
                          },
                        },
                      ],
                      [
                        {
                          key: "NP",
                          value: function () {
                            return u.default;
                          },
                        },
                        {
                          key: "ByteBuffer",
                          value: function () {
                            return h;
                          },
                        },
                      ]
                    ),
                    t
                  );
                })();
              t.exports = v;
              // 连接websocket
              let vInstant = new v();
              vInstant.connect();
              // 监听列表
              const linstenList = [
                "XAUUSD.GOODS",
                "XAGUSD.GOODS",
                "UKOIL.GOODS",
                "USOIL.GOODS",
                "DXY.NYF",
                "EURUSD.NY$",
                "ag888.SHF",
                "NYMEXCL1.Volume",
                "COMEXGC1.Volume",
                "COMEXHG1.Volume",
                "NYMEXNG1.Volume",
              ];
              setTimeout(() => {
                vInstant.switchCode(linstenList, true);
              }, 200);
            }),
            void 0 === (o = n.apply(e, i)) || (t.exports = o);
        },
        742: (t, e) => {
          "use strict";
          (e.byteLength = function (t) {
            var e = f(t),
              r = e[0],
              n = e[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (e.toByteArray = function (t) {
              var e,
                r,
                o = f(t),
                u = o[0],
                s = o[1],
                a = new i(
                  (function (t, e, r) {
                    return (3 * (e + r)) / 4 - r;
                  })(0, u, s)
                ),
                h = 0,
                c = s > 0 ? u - 4 : u;
              for (r = 0; r < c; r += 4)
                (e =
                  (n[t.charCodeAt(r)] << 18) |
                  (n[t.charCodeAt(r + 1)] << 12) |
                  (n[t.charCodeAt(r + 2)] << 6) |
                  n[t.charCodeAt(r + 3)]),
                  (a[h++] = (e >> 16) & 255),
                  (a[h++] = (e >> 8) & 255),
                  (a[h++] = 255 & e);
              return (
                2 === s &&
                  ((e =
                    (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
                  (a[h++] = 255 & e)),
                1 === s &&
                  ((e =
                    (n[t.charCodeAt(r)] << 10) |
                    (n[t.charCodeAt(r + 1)] << 4) |
                    (n[t.charCodeAt(r + 2)] >> 2)),
                  (a[h++] = (e >> 8) & 255),
                  (a[h++] = 255 & e)),
                a
              );
            }),
            (e.fromByteArray = function (t) {
              for (
                var e,
                  n = t.length,
                  i = n % 3,
                  o = [],
                  u = 16383,
                  s = 0,
                  f = n - i;
                s < f;
                s += u
              )
                o.push(a(t, s, s + u > f ? f : s + u));
              return (
                1 === i
                  ? ((e = t[n - 1]),
                    o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
                  : 2 === i &&
                    ((e = (t[n - 2] << 8) + t[n - 1]),
                    o.push(
                      r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="
                    )),
                o.join("")
              );
            });
          for (
            var r = [],
              n = [],
              i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              o =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              u = 0,
              s = o.length;
            u < s;
            ++u
          )
            (r[u] = o[u]), (n[o.charCodeAt(u)] = u);
          function f(t) {
            var e = t.length;
            if (e % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
          }
          function a(t, e, n) {
            for (var i, o, u = [], s = e; s < n; s += 3)
              (i =
                ((t[s] << 16) & 16711680) +
                ((t[s + 1] << 8) & 65280) +
                (255 & t[s + 2])),
                u.push(
                  r[((o = i) >> 18) & 63] +
                    r[(o >> 12) & 63] +
                    r[(o >> 6) & 63] +
                    r[63 & o]
                );
            return u.join("");
          }
          (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
        },
        764: (t, e, r) => {
          "use strict";
          var n = r(742),
            i = r(645),
            o =
              "function" == typeof Symbol && "function" == typeof Symbol.for
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          (e.Buffer = f),
            (e.SlowBuffer = function (t) {
              return +t != t && (t = 0), f.alloc(+t);
            }),
            (e.INSPECT_MAX_BYTES = 50);
          var u = 2147483647;
          function s(t) {
            if (t > u)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
            var e = new Uint8Array(t);
            return Object.setPrototypeOf(e, f.prototype), e;
          }
          function f(t, e, r) {
            if ("number" == typeof t) {
              if ("string" == typeof e)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number'
                );
              return c(t);
            }
            return a(t, e, r);
          }
          function a(t, e, r) {
            if ("string" == typeof t)
              return (function (t, e) {
                if (
                  (("string" == typeof e && "" !== e) || (e = "utf8"),
                  !f.isEncoding(e))
                )
                  throw new TypeError("Unknown encoding: " + e);
                var r = 0 | y(t, e),
                  n = s(r),
                  i = n.write(t, e);
                return i !== r && (n = n.slice(0, i)), n;
              })(t, e);
            if (ArrayBuffer.isView(t)) return l(t);
            if (null == t)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t
              );
            if (z(t, ArrayBuffer) || (t && z(t.buffer, ArrayBuffer)))
              return p(t, e, r);
            if (
              "undefined" != typeof SharedArrayBuffer &&
              (z(t, SharedArrayBuffer) || (t && z(t.buffer, SharedArrayBuffer)))
            )
              return p(t, e, r);
            if ("number" == typeof t)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
              );
            var n = t.valueOf && t.valueOf();
            if (null != n && n !== t) return f.from(n, e, r);
            var i = (function (t) {
              if (f.isBuffer(t)) {
                var e = 0 | d(t.length),
                  r = s(e);
                return 0 === r.length || t.copy(r, 0, 0, e), r;
              }
              return void 0 !== t.length
                ? "number" != typeof t.length || X(t.length)
                  ? s(0)
                  : l(t)
                : "Buffer" === t.type && Array.isArray(t.data)
                ? l(t.data)
                : void 0;
            })(t);
            if (i) return i;
            if (
              "undefined" != typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof t[Symbol.toPrimitive]
            )
              return f.from(t[Symbol.toPrimitive]("string"), e, r);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          }
          function h(t) {
            if ("number" != typeof t)
              throw new TypeError('"size" argument must be of type number');
            if (t < 0)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
          }
          function c(t) {
            return h(t), s(t < 0 ? 0 : 0 | d(t));
          }
          function l(t) {
            for (
              var e = t.length < 0 ? 0 : 0 | d(t.length), r = s(e), n = 0;
              n < e;
              n += 1
            )
              r[n] = 255 & t[n];
            return r;
          }
          function p(t, e, r) {
            if (e < 0 || t.byteLength < e)
              throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < e + (r || 0))
              throw new RangeError('"length" is outside of buffer bounds');
            var n;
            return (
              (n =
                void 0 === e && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, e)
                  : new Uint8Array(t, e, r)),
              Object.setPrototypeOf(n, f.prototype),
              n
            );
          }
          function d(t) {
            if (t >= u)
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  u.toString(16) +
                  " bytes"
              );
            return 0 | t;
          }
          function y(t, e) {
            if (f.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || z(t, ArrayBuffer)) return t.byteLength;
            if ("string" != typeof t)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof t
              );
            var r = t.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            for (var i = !1; ; )
              switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                  return D(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return F(t).length;
                default:
                  if (i) return n ? -1 : D(t).length;
                  (e = ("" + e).toLowerCase()), (i = !0);
              }
          }
          function g(t, e, r) {
            var n = !1;
            if (((void 0 === e || e < 0) && (e = 0), e > this.length))
              return "";
            if (
              ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
            )
              return "";
            if ((r >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8"); ; )
              switch (t) {
                case "hex":
                  return O(this, e, r);
                case "utf8":
                case "utf-8":
                  return U(this, e, r);
                case "ascii":
                  return S(this, e, r);
                case "latin1":
                case "binary":
                  return x(this, e, r);
                case "base64":
                  return C(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return T(this, e, r);
                default:
                  if (n) throw new TypeError("Unknown encoding: " + t);
                  (t = (t + "").toLowerCase()), (n = !0);
              }
          }
          function v(t, e, r) {
            var n = t[e];
            (t[e] = t[r]), (t[r] = n);
          }
          function w(t, e, r, n, i) {
            if (0 === t.length) return -1;
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0))
                : r > 2147483647
                ? (r = 2147483647)
                : r < -2147483648 && (r = -2147483648),
              X((r = +r)) && (r = i ? 0 : t.length - 1),
              r < 0 && (r = t.length + r),
              r >= t.length)
            ) {
              if (i) return -1;
              r = t.length - 1;
            } else if (r < 0) {
              if (!i) return -1;
              r = 0;
            }
            if (("string" == typeof e && (e = f.from(e, n)), f.isBuffer(e)))
              return 0 === e.length ? -1 : b(t, e, r, n, i);
            if ("number" == typeof e)
              return (
                (e &= 255),
                "function" == typeof Uint8Array.prototype.indexOf
                  ? i
                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                    : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                  : b(t, [e], r, n, i)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function b(t, e, r, n, i) {
            var o,
              u = 1,
              s = t.length,
              f = e.length;
            if (
              void 0 !== n &&
              ("ucs2" === (n = String(n).toLowerCase()) ||
                "ucs-2" === n ||
                "utf16le" === n ||
                "utf-16le" === n)
            ) {
              if (t.length < 2 || e.length < 2) return -1;
              (u = 2), (s /= 2), (f /= 2), (r /= 2);
            }
            function a(t, e) {
              return 1 === u ? t[e] : t.readUInt16BE(e * u);
            }
            if (i) {
              var h = -1;
              for (o = r; o < s; o++)
                if (a(t, o) === a(e, -1 === h ? 0 : o - h)) {
                  if ((-1 === h && (h = o), o - h + 1 === f)) return h * u;
                } else -1 !== h && (o -= o - h), (h = -1);
            } else
              for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
                for (var c = !0, l = 0; l < f; l++)
                  if (a(t, o + l) !== a(e, l)) {
                    c = !1;
                    break;
                  }
                if (c) return o;
              }
            return -1;
          }
          function E(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? (n = Number(n)) > i && (n = i) : (n = i);
            var o = e.length;
            n > o / 2 && (n = o / 2);
            for (var u = 0; u < n; ++u) {
              var s = parseInt(e.substr(2 * u, 2), 16);
              if (X(s)) return u;
              t[r + u] = s;
            }
            return u;
          }
          function m(t, e, r, n) {
            return V(D(e, t.length - r), t, r, n);
          }
          function I(t, e, r, n) {
            return V(
              (function (t) {
                for (var e = [], r = 0; r < t.length; ++r)
                  e.push(255 & t.charCodeAt(r));
                return e;
              })(e),
              t,
              r,
              n
            );
          }
          function L(t, e, r, n) {
            return I(t, e, r, n);
          }
          function k(t, e, r, n) {
            return V(F(e), t, r, n);
          }
          function B(t, e, r, n) {
            return V(
              (function (t, e) {
                for (
                  var r, n, i, o = [], u = 0;
                  u < t.length && !((e -= 2) < 0);
                  ++u
                )
                  (n = (r = t.charCodeAt(u)) >> 8),
                    (i = r % 256),
                    o.push(i),
                    o.push(n);
                return o;
              })(e, t.length - r),
              t,
              r,
              n
            );
          }
          function C(t, e, r) {
            return 0 === e && r === t.length
              ? n.fromByteArray(t)
              : n.fromByteArray(t.slice(e, r));
          }
          function U(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r; ) {
              var o,
                u,
                s,
                f,
                a = t[i],
                h = null,
                c = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
              if (i + c <= r)
                switch (c) {
                  case 1:
                    a < 128 && (h = a);
                    break;
                  case 2:
                    128 == (192 & (o = t[i + 1])) &&
                      (f = ((31 & a) << 6) | (63 & o)) > 127 &&
                      (h = f);
                    break;
                  case 3:
                    (o = t[i + 1]),
                      (u = t[i + 2]),
                      128 == (192 & o) &&
                        128 == (192 & u) &&
                        (f = ((15 & a) << 12) | ((63 & o) << 6) | (63 & u)) >
                          2047 &&
                        (f < 55296 || f > 57343) &&
                        (h = f);
                    break;
                  case 4:
                    (o = t[i + 1]),
                      (u = t[i + 2]),
                      (s = t[i + 3]),
                      128 == (192 & o) &&
                        128 == (192 & u) &&
                        128 == (192 & s) &&
                        (f =
                          ((15 & a) << 18) |
                          ((63 & o) << 12) |
                          ((63 & u) << 6) |
                          (63 & s)) > 65535 &&
                        f < 1114112 &&
                        (h = f);
                }
              null === h
                ? ((h = 65533), (c = 1))
                : h > 65535 &&
                  ((h -= 65536),
                  n.push(((h >>> 10) & 1023) | 55296),
                  (h = 56320 | (1023 & h))),
                n.push(h),
                (i += c);
            }
            return (function (t) {
              var e = t.length;
              if (e <= A) return String.fromCharCode.apply(String, t);
              for (var r = "", n = 0; n < e; )
                r += String.fromCharCode.apply(String, t.slice(n, (n += A)));
              return r;
            })(n);
          }
          (e.kMaxLength = u),
            (f.TYPED_ARRAY_SUPPORT = (function () {
              try {
                var t = new Uint8Array(1),
                  e = {
                    foo: function () {
                      return 42;
                    },
                  };
                return (
                  Object.setPrototypeOf(e, Uint8Array.prototype),
                  Object.setPrototypeOf(t, e),
                  42 === t.foo()
                );
              } catch (t) {
                return !1;
              }
            })()),
            f.TYPED_ARRAY_SUPPORT ||
              "undefined" == typeof console ||
              "function" != typeof console.error ||
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              ),
            Object.defineProperty(f.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (f.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(f.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (f.isBuffer(this)) return this.byteOffset;
              },
            }),
            (f.poolSize = 8192),
            (f.from = function (t, e, r) {
              return a(t, e, r);
            }),
            Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(f, Uint8Array),
            (f.alloc = function (t, e, r) {
              return (function (t, e, r) {
                return (
                  h(t),
                  t <= 0
                    ? s(t)
                    : void 0 !== e
                    ? "string" == typeof r
                      ? s(t).fill(e, r)
                      : s(t).fill(e)
                    : s(t)
                );
              })(t, e, r);
            }),
            (f.allocUnsafe = function (t) {
              return c(t);
            }),
            (f.allocUnsafeSlow = function (t) {
              return c(t);
            }),
            (f.isBuffer = function (t) {
              return null != t && !0 === t._isBuffer && t !== f.prototype;
            }),
            (f.compare = function (t, e) {
              if (
                (z(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
                z(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
                !f.isBuffer(t) || !f.isBuffer(e))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              if (t === e) return 0;
              for (
                var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
                i < o;
                ++i
              )
                if (t[i] !== e[i]) {
                  (r = t[i]), (n = e[i]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (f.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (f.concat = function (t, e) {
              if (!Array.isArray(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              if (0 === t.length) return f.alloc(0);
              var r;
              if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
              var n = f.allocUnsafe(e),
                i = 0;
              for (r = 0; r < t.length; ++r) {
                var o = t[r];
                if ((z(o, Uint8Array) && (o = f.from(o)), !f.isBuffer(o)))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                o.copy(n, i), (i += o.length);
              }
              return n;
            }),
            (f.byteLength = y),
            (f.prototype._isBuffer = !0),
            (f.prototype.swap16 = function () {
              var t = this.length;
              if (t % 2 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 16-bits"
                );
              for (var e = 0; e < t; e += 2) v(this, e, e + 1);
              return this;
            }),
            (f.prototype.swap32 = function () {
              var t = this.length;
              if (t % 4 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits"
                );
              for (var e = 0; e < t; e += 4)
                v(this, e, e + 3), v(this, e + 1, e + 2);
              return this;
            }),
            (f.prototype.swap64 = function () {
              var t = this.length;
              if (t % 8 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits"
                );
              for (var e = 0; e < t; e += 8)
                v(this, e, e + 7),
                  v(this, e + 1, e + 6),
                  v(this, e + 2, e + 5),
                  v(this, e + 3, e + 4);
              return this;
            }),
            (f.prototype.toString = function () {
              var t = this.length;
              return 0 === t
                ? ""
                : 0 === arguments.length
                ? U(this, 0, t)
                : g.apply(this, arguments);
            }),
            (f.prototype.toLocaleString = f.prototype.toString),
            (f.prototype.equals = function (t) {
              if (!f.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
              return this === t || 0 === f.compare(this, t);
            }),
            (f.prototype.inspect = function () {
              var t = "",
                r = e.INSPECT_MAX_BYTES;
              return (
                (t = this.toString("hex", 0, r)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > r && (t += " ... "),
                "<Buffer " + t + ">"
              );
            }),
            o && (f.prototype[o] = f.prototype.inspect),
            (f.prototype.compare = function (t, e, r, n, i) {
              if (
                (z(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
                !f.isBuffer(t))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof t
                );
              if (
                (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                e < 0 || r > t.length || n < 0 || i > this.length)
              )
                throw new RangeError("out of range index");
              if (n >= i && e >= r) return 0;
              if (n >= i) return -1;
              if (e >= r) return 1;
              if (this === t) return 0;
              for (
                var o = (i >>>= 0) - (n >>>= 0),
                  u = (r >>>= 0) - (e >>>= 0),
                  s = Math.min(o, u),
                  a = this.slice(n, i),
                  h = t.slice(e, r),
                  c = 0;
                c < s;
                ++c
              )
                if (a[c] !== h[c]) {
                  (o = a[c]), (u = h[c]);
                  break;
                }
              return o < u ? -1 : u < o ? 1 : 0;
            }),
            (f.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }),
            (f.prototype.indexOf = function (t, e, r) {
              return w(this, t, e, r, !0);
            }),
            (f.prototype.lastIndexOf = function (t, e, r) {
              return w(this, t, e, r, !1);
            }),
            (f.prototype.write = function (t, e, r, n) {
              if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
              else if (void 0 === r && "string" == typeof e)
                (n = e), (r = this.length), (e = 0);
              else {
                if (!isFinite(e))
                  throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                  );
                (e >>>= 0),
                  isFinite(r)
                    ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                    : ((n = r), (r = void 0));
              }
              var i = this.length - e;
              if (
                ((void 0 === r || r > i) && (r = i),
                (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
              )
                throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");
              for (var o = !1; ; )
                switch (n) {
                  case "hex":
                    return E(this, t, e, r);
                  case "utf8":
                  case "utf-8":
                    return m(this, t, e, r);
                  case "ascii":
                    return I(this, t, e, r);
                  case "latin1":
                  case "binary":
                    return L(this, t, e, r);
                  case "base64":
                    return k(this, t, e, r);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return B(this, t, e, r);
                  default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    (n = ("" + n).toLowerCase()), (o = !0);
                }
            }),
            (f.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          var A = 4096;
          function S(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
            return n;
          }
          function x(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
            return n;
          }
          function O(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
            for (var i = "", o = e; o < r; ++o) i += q[t[o]];
            return i;
          }
          function T(t, e, r) {
            for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
              i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i;
          }
          function M(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function _(t, e, r, n, i, o) {
            if (!f.isBuffer(t))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance'
              );
            if (e > i || e < o)
              throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range");
          }
          function P(t, e, r, n, i, o) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }
          function N(t, e, r, n, o) {
            return (
              (e = +e),
              (r >>>= 0),
              o || P(t, 0, r, 4),
              i.write(t, e, r, n, 23, 4),
              r + 4
            );
          }
          function j(t, e, r, n, o) {
            return (
              (e = +e),
              (r >>>= 0),
              o || P(t, 0, r, 8),
              i.write(t, e, r, n, 52, 8),
              r + 8
            );
          }
          (f.prototype.slice = function (t, e) {
            var r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              (e = void 0 === e ? r : ~~e) < 0
                ? (e += r) < 0 && (e = 0)
                : e > r && (e = r),
              e < t && (e = t);
            var n = this.subarray(t, e);
            return Object.setPrototypeOf(n, f.prototype), n;
          }),
            (f.prototype.readUIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || M(t, e, this.length);
              for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                n += this[t + o] * i;
              return n;
            }),
            (f.prototype.readUIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || M(t, e, this.length);
              for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                n += this[t + --e] * i;
              return n;
            }),
            (f.prototype.readUInt8 = function (t, e) {
              return (t >>>= 0), e || M(t, 1, this.length), this[t];
            }),
            (f.prototype.readUInt16LE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 2, this.length),
                this[t] | (this[t + 1] << 8)
              );
            }),
            (f.prototype.readUInt16BE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 2, this.length),
                (this[t] << 8) | this[t + 1]
              );
            }),
            (f.prototype.readUInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  16777216 * this[t + 3]
              );
            }),
            (f.prototype.readUInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 4, this.length),
                16777216 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
            (f.prototype.readIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || M(t, e, this.length);
              for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                n += this[t + o] * i;
              return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
            }),
            (f.prototype.readIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || M(t, e, this.length);
              for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
                o += this[t + --n] * i;
              return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
            }),
            (f.prototype.readInt8 = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
              );
            }),
            (f.prototype.readInt16LE = function (t, e) {
              (t >>>= 0), e || M(t, 2, this.length);
              var r = this[t] | (this[t + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (f.prototype.readInt16BE = function (t, e) {
              (t >>>= 0), e || M(t, 2, this.length);
              var r = this[t + 1] | (this[t] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (f.prototype.readInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 4, this.length),
                this[t] |
                  (this[t + 1] << 8) |
                  (this[t + 2] << 16) |
                  (this[t + 3] << 24)
              );
            }),
            (f.prototype.readInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 4, this.length),
                (this[t] << 24) |
                  (this[t + 1] << 16) |
                  (this[t + 2] << 8) |
                  this[t + 3]
              );
            }),
            (f.prototype.readFloatLE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 4, this.length),
                i.read(this, t, !0, 23, 4)
              );
            }),
            (f.prototype.readFloatBE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 4, this.length),
                i.read(this, t, !1, 23, 4)
              );
            }),
            (f.prototype.readDoubleLE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 8, this.length),
                i.read(this, t, !0, 52, 8)
              );
            }),
            (f.prototype.readDoubleBE = function (t, e) {
              return (
                (t >>>= 0),
                e || M(t, 8, this.length),
                i.read(this, t, !1, 52, 8)
              );
            }),
            (f.prototype.writeUIntLE = function (t, e, r, n) {
              (t = +t),
                (e >>>= 0),
                (r >>>= 0),
                n || _(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              var i = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < r && (i *= 256); )
                this[e + o] = (t / i) & 255;
              return e + r;
            }),
            (f.prototype.writeUIntBE = function (t, e, r, n) {
              (t = +t),
                (e >>>= 0),
                (r >>>= 0),
                n || _(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              var i = r - 1,
                o = 1;
              for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                this[e + i] = (t / o) & 255;
              return e + r;
            }),
            (f.prototype.writeUInt8 = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 1, 255, 0),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (f.prototype.writeUInt16LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 2, 65535, 0),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (f.prototype.writeUInt16BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 2, 65535, 0),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (f.prototype.writeUInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 4, 4294967295, 0),
                (this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t),
                e + 4
              );
            }),
            (f.prototype.writeUInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 4, 4294967295, 0),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (f.prototype.writeIntLE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                _(this, t, e, r, i - 1, -i);
              }
              var o = 0,
                u = 1,
                s = 0;
              for (this[e] = 255 & t; ++o < r && (u *= 256); )
                t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                  (this[e + o] = (((t / u) >> 0) - s) & 255);
              return e + r;
            }),
            (f.prototype.writeIntBE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                _(this, t, e, r, i - 1, -i);
              }
              var o = r - 1,
                u = 1,
                s = 0;
              for (this[e + o] = 255 & t; --o >= 0 && (u *= 256); )
                t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                  (this[e + o] = (((t / u) >> 0) - s) & 255);
              return e + r;
            }),
            (f.prototype.writeInt8 = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (f.prototype.writeInt16LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 2, 32767, -32768),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (f.prototype.writeInt16BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 2, 32767, -32768),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (f.prototype.writeInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 4, 2147483647, -2147483648),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24),
                e + 4
              );
            }),
            (f.prototype.writeInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || _(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (f.prototype.writeFloatLE = function (t, e, r) {
              return N(this, t, e, !0, r);
            }),
            (f.prototype.writeFloatBE = function (t, e, r) {
              return N(this, t, e, !1, r);
            }),
            (f.prototype.writeDoubleLE = function (t, e, r) {
              return j(this, t, e, !0, r);
            }),
            (f.prototype.writeDoubleBE = function (t, e, r) {
              return j(this, t, e, !1, r);
            }),
            (f.prototype.copy = function (t, e, r, n) {
              if (!f.isBuffer(t))
                throw new TypeError("argument should be a Buffer");
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                n > 0 && n < r && (n = r),
                n === r)
              )
                return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (e < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
                t.length - e < n - r && (n = t.length - e + r);
              var i = n - r;
              if (
                this === t &&
                "function" == typeof Uint8Array.prototype.copyWithin
              )
                this.copyWithin(e, r, n);
              else if (this === t && r < e && e < n)
                for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
              else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
              return i;
            }),
            (f.prototype.fill = function (t, e, r, n) {
              if ("string" == typeof t) {
                if (
                  ("string" == typeof e
                    ? ((n = e), (e = 0), (r = this.length))
                    : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !f.isEncoding(n))
                  throw new TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                  var i = t.charCodeAt(0);
                  (("utf8" === n && i < 128) || "latin1" === n) && (t = i);
                }
              } else
                "number" == typeof t
                  ? (t &= 255)
                  : "boolean" == typeof t && (t = Number(t));
              if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index");
              if (r <= e) return this;
              var o;
              if (
                ((e >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                t || (t = 0),
                "number" == typeof t)
              )
                for (o = e; o < r; ++o) this[o] = t;
              else {
                var u = f.isBuffer(t) ? t : f.from(t, n),
                  s = u.length;
                if (0 === s)
                  throw new TypeError(
                    'The value "' + t + '" is invalid for argument "value"'
                  );
                for (o = 0; o < r - e; ++o) this[o + e] = u[o % s];
              }
              return this;
            });
          var R = /[^+/0-9A-Za-z-_]/g;
          function D(t, e) {
            var r;
            e = e || 1 / 0;
            for (var n = t.length, i = null, o = [], u = 0; u < n; ++u) {
              if ((r = t.charCodeAt(u)) > 55295 && r < 57344) {
                if (!i) {
                  if (r > 56319) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (u + 1 === n) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  i = r;
                  continue;
                }
                if (r < 56320) {
                  (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                  continue;
                }
                r = 65536 + (((i - 55296) << 10) | (r - 56320));
              } else i && (e -= 3) > -1 && o.push(239, 191, 189);
              if (((i = null), r < 128)) {
                if ((e -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                o.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                o.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128
                );
              }
            }
            return o;
          }
          function F(t) {
            return n.toByteArray(
              (function (t) {
                if (
                  (t = (t = t.split("=")[0]).trim().replace(R, "")).length < 2
                )
                  return "";
                for (; t.length % 4 != 0; ) t += "=";
                return t;
              })(t)
            );
          }
          function V(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
              e[i + r] = t[i];
            return i;
          }
          function z(t, e) {
            return (
              t instanceof e ||
              (null != t &&
                null != t.constructor &&
                null != t.constructor.name &&
                t.constructor.name === e.name)
            );
          }
          function X(t) {
            return t != t;
          }
          var q = (function () {
            for (
              var t = "0123456789abcdef", e = new Array(256), r = 0;
              r < 16;
              ++r
            )
              for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
            return e;
          })();
        },
        645: (t, e) => {
          (e.read = function (t, e, r, n, i) {
            var o,
              u,
              s = 8 * i - n - 1,
              f = (1 << s) - 1,
              a = f >> 1,
              h = -7,
              c = r ? i - 1 : 0,
              l = r ? -1 : 1,
              p = t[e + c];
            for (
              c += l, o = p & ((1 << -h) - 1), p >>= -h, h += s;
              h > 0;
              o = 256 * o + t[e + c], c += l, h -= 8
            );
            for (
              u = o & ((1 << -h) - 1), o >>= -h, h += n;
              h > 0;
              u = 256 * u + t[e + c], c += l, h -= 8
            );
            if (0 === o) o = 1 - a;
            else {
              if (o === f) return u ? NaN : (1 / 0) * (p ? -1 : 1);
              (u += Math.pow(2, n)), (o -= a);
            }
            return (p ? -1 : 1) * u * Math.pow(2, o - n);
          }),
            (e.write = function (t, e, r, n, i, o) {
              var u,
                s,
                f,
                a = 8 * o - i - 1,
                h = (1 << a) - 1,
                c = h >> 1,
                l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : o - 1,
                d = n ? 1 : -1,
                y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((s = isNaN(e) ? 1 : 0), (u = h))
                    : ((u = Math.floor(Math.log(e) / Math.LN2)),
                      e * (f = Math.pow(2, -u)) < 1 && (u--, (f *= 2)),
                      (e += u + c >= 1 ? l / f : l * Math.pow(2, 1 - c)) * f >=
                        2 && (u++, (f /= 2)),
                      u + c >= h
                        ? ((s = 0), (u = h))
                        : u + c >= 1
                        ? ((s = (e * f - 1) * Math.pow(2, i)), (u += c))
                        : ((s = e * Math.pow(2, c - 1) * Math.pow(2, i)),
                          (u = 0)));
                i >= 8;
                t[r + p] = 255 & s, p += d, s /= 256, i -= 8
              );
              for (
                u = (u << i) | s, a += i;
                a > 0;
                t[r + p] = 255 & u, p += d, u /= 256, a -= 8
              );
              t[r + p - d] |= 128 * y;
            });
        },
        374: (t, e, r) => {
          "use strict";
          function n() {
            for (var t = 0, e = 0, r = arguments.length; e < r; e++)
              t += arguments[e].length;
            var n = Array(t),
              i = 0;
            for (e = 0; e < r; e++)
              for (var o = arguments[e], u = 0, s = o.length; u < s; u++, i++)
                n[i] = o[u];
            return n;
          }
          function i(t, e) {
            return (
              void 0 === e && (e = 15), +parseFloat(Number(t).toPrecision(e))
            );
          }
          function o(t) {
            var e = t.toString().split(/[eE]/),
              r = (e[0].split(".")[1] || "").length - +(e[1] || 0);
            return r > 0 ? r : 0;
          }
          function u(t) {
            if (-1 === t.toString().indexOf("e"))
              return Number(t.toString().replace(".", ""));
            var e = o(t);
            return e > 0 ? i(Number(t) * Math.pow(10, e)) : Number(t);
          }
          function s(t) {
            p &&
              (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER) &&
              console.warn(
                t +
                  " is beyond boundary when transfer to integer, the results may not be accurate"
              );
          }
          function f(t, e) {
            for (var r = [], i = 2; i < arguments.length; i++)
              r[i - 2] = arguments[i];
            if (r.length > 0)
              return f.apply(void 0, n([f(t, e), r[0]], r.slice(1)));
            var a = u(t),
              h = u(e),
              c = o(t) + o(e),
              l = a * h;
            return s(l), l / Math.pow(10, c);
          }
          function a(t, e) {
            for (var r = [], i = 2; i < arguments.length; i++)
              r[i - 2] = arguments[i];
            if (r.length > 0)
              return a.apply(void 0, n([a(t, e), r[0]], r.slice(1)));
            var u = Math.pow(10, Math.max(o(t), o(e)));
            return (f(t, u) + f(e, u)) / u;
          }
          function h(t, e) {
            for (var r = [], i = 2; i < arguments.length; i++)
              r[i - 2] = arguments[i];
            if (r.length > 0)
              return h.apply(void 0, n([h(t, e), r[0]], r.slice(1)));
            var u = Math.pow(10, Math.max(o(t), o(e)));
            return (f(t, u) - f(e, u)) / u;
          }
          function c(t, e) {
            for (var r = [], a = 2; a < arguments.length; a++)
              r[a - 2] = arguments[a];
            if (r.length > 0)
              return c.apply(void 0, n([c(t, e), r[0]], r.slice(1)));
            var h = u(t),
              l = u(e);
            return s(h), s(l), f(h / l, i(Math.pow(10, o(e) - o(t))));
          }
          function l(t, e) {
            var r = Math.pow(10, e);
            return c(Math.round(f(t, r)), r);
          }
          r.r(e),
            r.d(e, {
              strip: () => i,
              plus: () => a,
              minus: () => h,
              times: () => f,
              divide: () => c,
              round: () => l,
              digitLength: () => o,
              float2Fixed: () => u,
              enableBoundaryChecking: () => d,
              default: () => y,
            });
          var p = !0;
          function d(t) {
            void 0 === t && (t = !0), (p = t);
          }
          const y = {
            strip: i,
            plus: a,
            minus: h,
            times: f,
            divide: c,
            round: l,
            digitLength: o,
            float2Fixed: u,
            enableBoundaryChecking: d,
          };
        },
      },
      e = {};
    function r(n) {
      var i = e[n];
      if (void 0 !== i) return i.exports;
      var o = (e[n] = {
        exports: {},
      });
      return t[n].call(o.exports, o, o.exports, r), o.exports;
    }
    return (
      (r.d = (t, e) => {
        for (var n in e)
          r.o(e, n) &&
            !r.o(t, n) &&
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: e[n],
            });
      }),
      (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (r.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
      }),
      // 开始
      r(511)
    );
  })();
});
