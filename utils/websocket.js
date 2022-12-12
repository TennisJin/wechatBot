// const ReconnectingWebSocket = require("reconnecting-websocket");

// // 连接客户端
// const webSocket = new ReconnectingWebSocket(
//   "wss://my.extrading.pro/wts-api/trial5",
//   "",
//   {
//     maxRetries: 4,
//   }
// );
// // 取消订阅的事件
// removeEvents();
// // 订阅事件
// addEvents();

// function addEvents() {
//   const webSocket = webSocket;
//   webSocket.addEventListener("open", onOpen.bind(this));
//   webSocket.addEventListener("message", onMessage.bind(this));
//   webSocket.addEventListener("error", onError.bind(this));
// }
// /**
//  * @description 移除websocket/window监听事件
//  */
// function removeEvents() {
//   const webSocket = webSocket;
//   webSocket.removeEventListener("open", onOpen);
//   webSocket.removeEventListener("message", onMessage);
//   webSocket.removeEventListener("error", onError);
// }

// /**
//  * @description 连接客户端成功事件
//  */
// function onOpen() {
//   console.log("ws-onOpen");
//   // chrome浏览器版本大于80，需要添加信任站点，加载http/https跨站点资源
//   // if(config['browser'].name === 'chrome' && config['browser'].version && Number(config['browser'].version.split('.')[0]) >= 80) {
//   // 	trusteSite(location.hostname);
//   // }
// }
// /**
//  * @description 接收客户端消息
//  * @params {Object} event 接收客户端的消息数据
//  */
// function onMessage(event) {
//   console.log("onMessage", event);
//   try {
//     const data = JSON.parse(event.data);
//   } catch (e) {
//     console.log("ws-error-客户端返回的消息不是Json数据", e);
//   }
// }
// /**
//  * @description 客户端发生错误事件
//  */
// function onError() {}

const options = {
  headers: {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,or;q=0.8,ar;q=0.7",
    "Cache-Control": "no-cache",
    Connection: "Upgrade",
    Cookie:
      "visid_incap_2823006=X2elGoR/TX+MLmtaD1yGUmFNdGMAAAAAQUIPAAAAAAD+6+lO4KmHc8xx+6Dd6lC/; nlbi_2823006=YxWRJCTH4Hsip8H1/jUXJQAAAAB2GWFRAf+eqE4CQwGoOIcc; language=zh; _gcl_au=1.1.1163752496.1668566394; _rdt_uuid=1669083076151.7457815c-ff36-4dff-94a0-ff096a77641b; __lt__cid=a5c9e6be-7884-485b-ab10-d9f19c400360; _pin_unauth=dWlkPU5UTXdZVFJtT1RndE1qaGpOaTAwWkRnMExUbGhaV1V0WXpreU4yRXhPR0UzWWprMA; _derived_epik=dj0yJnU9Wk9IWTJnYVl4WlJJY1BjaFdjZDF6enFJSUxQMTcxUHcmbj1iTDQ1S0taTHV6c3VlUlp1R0d0QXJRJm09MTAmdD1BQUFBQUdOOE1ucyZybT0xMCZydD1BQUFBQUdOOE1ucyZzcD0x; kyc_status_ep=true; kyc_status_por=APPROVED; FULL_VERIFICATION_REQUIRED=false; _tt_enable_cookie=1; _ttp=8ae735a3-d9b4-4a6b-a3aa-b4a2edf67855; __qca=P0-1337694065-1669083786613; mfkey=J7HXgSfTunmYnBIZsGyHvuiCumRt7XV8cAam2a4Cmrjvv11AdT; mfga=fKXL91hL47V1otkw5o1HDXcEaDY1v9EjlCfCZANzeZzk2VN4fy; mfsrc=null; fp=a0d511abdea5ab080e7973d239d06ab2; __gtm_referrer=https%3A%2F%2Fmy.extrading.pro%2F; _fz_uniq=6393958401245855554; _fz_fvdt=1669778754; amp_431ac4=hsPJrMQYlzEgXqB4-yc3XI...1gj395see.1gj39e6c9.2.8.a; _ga_2E5M7TYQGW=GS1.1.1669801941.2.0.1669801941.0.0.0; incap_ses_1203_2823006=FizoSEU180skYFGu4eqxEKIYiGMAAAAAF4HMQ6JGnllHXKHowkZ9KQ==; incap_ses_937_2823006=42A4Ubh/0XkJQJR0POUADd/WjGMAAAAAMy7n9kpGC7wq9qNpXXaeqA==; _gid=GA1.2.353235859.1670225303; mfgagid=dOfhwg2IlswTnzTAPBgvPWpUMqU1Z1vsz8BuM6fDLEKNegB8ur; incap_ses_1206_2823006=DTKsSH3xdjlQXefhkJO8EOOijWMAAAAA82xP8DgM3d7iQLn6MiUX9w==; incap_ses_433_2823006=M/7zTg+Y02Mn3EGw81MCBtPKjmMAAAAAUVwjD0rg1TrO5U+IUcQLbA==; incap_ses_1223_2823006=dTzLOodPO03FJ5Xuwfj4EBLejmMAAAAAizQRU1tsmCAJBB4winhtrg==; JWT=eyJhbGciOiJSUzI1NiIsImtpZCI6InVzZXIiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIyNzNmNTI0MzcwOWU0MjRkYTg0Njc1MGE3MTgwZDRjMiIsImV4cCI6MTY3MDQwNjI2OCwiaXNzIjoiQXV0aGVudGljYXRpb24iLCJpYXQiOjE2NzAzODQ2NjgsInN1YiI6ImZkYmE0Njc3NDYwMjQ1MGNiODBkZmVmMjAwMjZlZWQxIiwiYXVkIjpbIndlYiJdLCJhZGRpdGlvbmFsX3BhcmFtcyI6eyJ3bF9pZCI6Ijg3MTFiOGFhLWNjNjgtNDEzYS04MDM0LWMyNzE2YTJjZTE0YSJ9fQ.fqjuP4Zydg1PnOOblSqts-6i3YSquY7I8vTUx_00jpFg9g7Y23SPcHpQN3vg3-ITlRlw9jAS7w4hgMfKFTtOl3btOMKywfNRSzkpi8ApSkGCj3pxK_dc98VACluWsKXQ-MnayMGYZKl3PjkJfVRRIBS9GJzH0Tsiqng3GW22nXh_UWsFLj_FaAiTNH5kA9cuIai6hJWiiVlxq89N3WjMHxR6OGpMboQZYmZZhjX6qA3_Bw9HJI9_6NR19-c49mj5lRTYCQD6Tm3vYw4ChHISX4tJNaDeAMEc5ihZh6vprOFP5dv9ZYhKo7VrH9J83jz4I4Oo1QsS6mEjFImOwDQ0wP8e39_VW51jc2ltI_aYnuGsZra05uLKIbG4SCe8cf7-JzumYV8mcLX5Fvt3Si8sSlnIEYohmh-fsD2ENl_-xWFGrkyVR3YmzQEYSiSq7O3XLXATTaMXHiLXQjfI4jrTpriv2KTcSNI091PtTxUnHCFZH1UlbrOppNkbylp8iOngL5WhONrIcGnmoQYghRsyOklaxasgDBuVJaEFoJ27_w6qF9rQF2JDfJOgMNziv0K4nRu9B2u5WSmYsck6tnb44IhWog7rJVaa51NnlpKp6ebEC8hz9wPfPJBR1WML2Gn6Jq2SYtys5CLZ3tGKXL8KU2aHVvqfbQRv1j2TSYuCTBo; jwt_refresh=eyJhbGciOiJSUzI1NiIsImtpZCI6InVzZXIiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJmYzY4YTViODQwOWE0YmE2OTQ4MTdhNmYyYjhiYTQ5OCIsImV4cCI6MTY3MzAxMjY2OCwiaXNzIjoiQXV0aGVudGljYXRpb24iLCJpYXQiOjE2NzAzODQ2NjgsInN1YiI6ImZkYmE0Njc3NDYwMjQ1MGNiODBkZmVmMjAwMjZlZWQxIiwiYXVkIjpbIndlYiJdLCJhZGRpdGlvbmFsX3BhcmFtcyI6eyJ3bF9pZCI6Ijg3MTFiOGFhLWNjNjgtNDEzYS04MDM0LWMyNzE2YTJjZTE0YSJ9fQ.v5F-u6g_zL7DiEfgkFylCNPYIju5T1HY2gXQGO0qcoQTDAJLIFBHkzqjNMuULR86529ePzF3tHeG8eVp96VoAeaKzjqnpuHYoehejFcdU2yBbTm6Tq5mkEyURuwxyvldSd0z-OqrufDzRG6XX2unC42xUOk5bQt42_A-mjc9foSRR2JxBD9ifGJEU5n8kOVvs0oSujK2deVSMIkWJ8MLIUn-3OCBAVw7yziv_7dh_1oITA04OZne_2lBnWhp0cNMJsfuNCiz1VG68OMoWwSFggDbBp6mbGmL-CqXqek1osmbHFCm8oHSP822N7bu6WFnGTyHBlwYPNq8PHAy1fvqLh36lzEoUSaVp6oktg1p92wx2JxJOtH3Lngj6u1zavzCIEBCsT8Jfubc26p0PpvbA08FQViNfqHGEK_wU5dWLMsVLfgWpmQEXmgXLW-iEZR6kUqWA3xxWxRW0symua7SAIXMaopephlma3h7pRVsCefBofuL28YPcbOMcN9es3LqLApccL48C0ClolSI7Cw7P8HEUtFbMyuFMqWFjZireFh93lVqGW2q7K6ewtcVhXb8pNRX_IQlcEyaUrZ5p9xyeM0SvYuqSvpiIXqm5pe1DuTxXZhnHtEe2ZxetNMJb--xr5CFQNwCCXVPvlTKewIEEU4bpQP_LxZPpD3fiGb9ryo; incap_ses_934_2823006=eQ62YuKdcxZkADaFxzz2DGgakGMAAAAA/+jVGf9SRptPR3WKJxUp9g==; country=TW; _sctr=1|1670342400000; mfgid=wTYHnT1eTLu1qbVJ1TS2PBMBQ79kNfCanxXvSAmvWXOruHfU6r; gaMilli=1670393734584; ln_or=d; incap_ses_935_2823006=z/cTESkdj0969+3SQ8r5DJ1EkGMAAAAAYlMVPwFE1NTTL+5AcjsLLg==; _gat=1; __lt__sid=6ebcddac-825316f4; _gat_UA-8651572-24=1; _gat_UA-8651572-1=1; exterm_web_cid=exterm_web_b80a369f-9194-44bd-b67e-2533ce729bc9; mfutmb=3L3Z0g7eV7LHY75WvriZCc3Z8M3mpKWFygGpgCw4NWp72SOugf; mfsrc=null; mfclickid=NA; MgidSensorNVis=7; MgidSensorHref=https://my.extrading.pro/webtrading/; _ga_M71C3QBXSG=GS1.1.1670400877.20.1.1670400921.16.0.0; mffv=2022-12-7~16%3A15%3A21; _uetsid=66ee6550746e11ed96f07b15a7e866f9; _uetvid=f3e34d70655711ed9d41b95ed0eb22a9; _ga=GA1.2.627934263.1668566394; amplitude_id_2b790405f18db8c2006aa1cac469c25fextrading.pro=eyJkZXZpY2VJZCI6ImVkZmFiOTA0LTk2YmItNDBiZS04MGY5LTZiZmQzMGUwZWU4YVIiLCJ1c2VySWQiOiJmZGJhNDY3Ny00NjAyLTQ1MGMtYjgwZC1mZWYyMDAyNmVlZDEiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE2NzAzODQ2NjgwOTQsImxhc3RFdmVudFRpbWUiOjE2NzA0MDA5MjIxMTgsImV2ZW50SWQiOjQ1MywiaWRlbnRpZnlJZCI6MjQzNiwic2VxdWVuY2VOdW1iZXIiOjI4ODl9; TRADING_JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImV4bmVzcy1icm9rZXItcHJvZCJ9.eyJpc3MiOiJhdXRoLmV4bmVzcy5jb20iLCJhdWQiOiJ3dHMtYXBpLmV4bmVzcy5jb20iLCJzdWIiOiI3NjIxMTY5NiIsImlhdCI6MTY3MDQwMDkyMiwiZXhwIjoxNjcwNDAwOTgyLCJjaWQiOiJleHRlcm1fd2ViX2I4MGEzNjlmLTkxOTQtNDRiZC1iNjdlLTI1MzNjZTcyOWJjOSIsInBsYXRmb3JtIjoid2ViIiwiYnJva2VyIjoiRXhuZXNzIFJldGFpbCIsImlwYWRkcmVzcyI6IjIxMS4yMi4xODAuMjI2In0.yRV-yxczesAOQYfY0ZD6my9j9sf5ecz4uz7WksMuwt-5TNG1CdYMhRE21eRCopvGWSyEagioK32jHC3CvnFuiA",
    Host: "my.extrading.pro",
    Origin: "https://my.extrading.pro",
    Pragma: "no-cache",
    "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
    "Sec-WebSocket-Key": "vv+cQsE3qMB+IKUDa/aVQg==",
    "Sec-WebSocket-Version": 13,
    Upgrade: "websocket",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
  },
};
const WebSocket = require("ws");
// var ws = new WebSocket("wss://my.extrading.pro/wts-api/trial5");
var ws = new WebSocket("wss://hq.sinajs.cn/wskt?list=dm_ft_CL");

ws.onopen = function (evt) {
  console.log("Connection open ...");
  ws.send("Hello WebSockets!");
};

ws.onmessage = function (evt) {
  console.log("Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function (evt) {
  console.log("Connection closed.");
};

ws.onerror = function (evt) {
  console.log("Connection onerror.");
  console.log(evt);
};

// "Accept-Encoding": "gzip, deflate, br",
// "Accept-Language": "zh-CN,zh;q=0.9,or;q=0.8,ar;q=0.7",
// "Cache-Control": "no-cache",
// Connection: "Upgrade",
// Cookie: visid_incap_2823006=X2elGoR/TX+MLmtaD1yGUmFNdGMAAAAAQUIPAAAAAAD+6+lO4KmHc8xx+6Dd6lC/; nlbi_2823006=YxWRJCTH4Hsip8H1/jUXJQAAAAB2GWFRAf+eqE4CQwGoOIcc; language=zh; _gcl_au=1.1.1163752496.1668566394; _rdt_uuid=1669083076151.7457815c-ff36-4dff-94a0-ff096a77641b; __lt__cid=a5c9e6be-7884-485b-ab10-d9f19c400360; _pin_unauth=dWlkPU5UTXdZVFJtT1RndE1qaGpOaTAwWkRnMExUbGhaV1V0WXpreU4yRXhPR0UzWWprMA; _derived_epik=dj0yJnU9Wk9IWTJnYVl4WlJJY1BjaFdjZDF6enFJSUxQMTcxUHcmbj1iTDQ1S0taTHV6c3VlUlp1R0d0QXJRJm09MTAmdD1BQUFBQUdOOE1ucyZybT0xMCZydD1BQUFBQUdOOE1ucyZzcD0x; kyc_status_ep=true; kyc_status_por=APPROVED; FULL_VERIFICATION_REQUIRED=false; _tt_enable_cookie=1; _ttp=8ae735a3-d9b4-4a6b-a3aa-b4a2edf67855; __qca=P0-1337694065-1669083786613; mfkey=J7HXgSfTunmYnBIZsGyHvuiCumRt7XV8cAam2a4Cmrjvv11AdT; mfga=fKXL91hL47V1otkw5o1HDXcEaDY1v9EjlCfCZANzeZzk2VN4fy; mfsrc=null; fp=a0d511abdea5ab080e7973d239d06ab2; __gtm_referrer=https%3A%2F%2Fmy.extrading.pro%2F; _fz_uniq=6393958401245855554; _fz_fvdt=1669778754; amp_431ac4=hsPJrMQYlzEgXqB4-yc3XI...1gj395see.1gj39e6c9.2.8.a; _ga_2E5M7TYQGW=GS1.1.1669801941.2.0.1669801941.0.0.0; incap_ses_1203_2823006=FizoSEU180skYFGu4eqxEKIYiGMAAAAAF4HMQ6JGnllHXKHowkZ9KQ==; incap_ses_937_2823006=42A4Ubh/0XkJQJR0POUADd/WjGMAAAAAMy7n9kpGC7wq9qNpXXaeqA==; _gid=GA1.2.353235859.1670225303; mfgagid=dOfhwg2IlswTnzTAPBgvPWpUMqU1Z1vsz8BuM6fDLEKNegB8ur; incap_ses_1206_2823006=DTKsSH3xdjlQXefhkJO8EOOijWMAAAAA82xP8DgM3d7iQLn6MiUX9w==; incap_ses_433_2823006=M/7zTg+Y02Mn3EGw81MCBtPKjmMAAAAAUVwjD0rg1TrO5U+IUcQLbA==; incap_ses_1223_2823006=dTzLOodPO03FJ5Xuwfj4EBLejmMAAAAAizQRU1tsmCAJBB4winhtrg==; JWT=eyJhbGciOiJSUzI1NiIsImtpZCI6InVzZXIiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIyNzNmNTI0MzcwOWU0MjRkYTg0Njc1MGE3MTgwZDRjMiIsImV4cCI6MTY3MDQwNjI2OCwiaXNzIjoiQXV0aGVudGljYXRpb24iLCJpYXQiOjE2NzAzODQ2NjgsInN1YiI6ImZkYmE0Njc3NDYwMjQ1MGNiODBkZmVmMjAwMjZlZWQxIiwiYXVkIjpbIndlYiJdLCJhZGRpdGlvbmFsX3BhcmFtcyI6eyJ3bF9pZCI6Ijg3MTFiOGFhLWNjNjgtNDEzYS04MDM0LWMyNzE2YTJjZTE0YSJ9fQ.fqjuP4Zydg1PnOOblSqts-6i3YSquY7I8vTUx_00jpFg9g7Y23SPcHpQN3vg3-ITlRlw9jAS7w4hgMfKFTtOl3btOMKywfNRSzkpi8ApSkGCj3pxK_dc98VACluWsKXQ-MnayMGYZKl3PjkJfVRRIBS9GJzH0Tsiqng3GW22nXh_UWsFLj_FaAiTNH5kA9cuIai6hJWiiVlxq89N3WjMHxR6OGpMboQZYmZZhjX6qA3_Bw9HJI9_6NR19-c49mj5lRTYCQD6Tm3vYw4ChHISX4tJNaDeAMEc5ihZh6vprOFP5dv9ZYhKo7VrH9J83jz4I4Oo1QsS6mEjFImOwDQ0wP8e39_VW51jc2ltI_aYnuGsZra05uLKIbG4SCe8cf7-JzumYV8mcLX5Fvt3Si8sSlnIEYohmh-fsD2ENl_-xWFGrkyVR3YmzQEYSiSq7O3XLXATTaMXHiLXQjfI4jrTpriv2KTcSNI091PtTxUnHCFZH1UlbrOppNkbylp8iOngL5WhONrIcGnmoQYghRsyOklaxasgDBuVJaEFoJ27_w6qF9rQF2JDfJOgMNziv0K4nRu9B2u5WSmYsck6tnb44IhWog7rJVaa51NnlpKp6ebEC8hz9wPfPJBR1WML2Gn6Jq2SYtys5CLZ3tGKXL8KU2aHVvqfbQRv1j2TSYuCTBo; jwt_refresh=eyJhbGciOiJSUzI1NiIsImtpZCI6InVzZXIiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJmYzY4YTViODQwOWE0YmE2OTQ4MTdhNmYyYjhiYTQ5OCIsImV4cCI6MTY3MzAxMjY2OCwiaXNzIjoiQXV0aGVudGljYXRpb24iLCJpYXQiOjE2NzAzODQ2NjgsInN1YiI6ImZkYmE0Njc3NDYwMjQ1MGNiODBkZmVmMjAwMjZlZWQxIiwiYXVkIjpbIndlYiJdLCJhZGRpdGlvbmFsX3BhcmFtcyI6eyJ3bF9pZCI6Ijg3MTFiOGFhLWNjNjgtNDEzYS04MDM0LWMyNzE2YTJjZTE0YSJ9fQ.v5F-u6g_zL7DiEfgkFylCNPYIju5T1HY2gXQGO0qcoQTDAJLIFBHkzqjNMuULR86529ePzF3tHeG8eVp96VoAeaKzjqnpuHYoehejFcdU2yBbTm6Tq5mkEyURuwxyvldSd0z-OqrufDzRG6XX2unC42xUOk5bQt42_A-mjc9foSRR2JxBD9ifGJEU5n8kOVvs0oSujK2deVSMIkWJ8MLIUn-3OCBAVw7yziv_7dh_1oITA04OZne_2lBnWhp0cNMJsfuNCiz1VG68OMoWwSFggDbBp6mbGmL-CqXqek1osmbHFCm8oHSP822N7bu6WFnGTyHBlwYPNq8PHAy1fvqLh36lzEoUSaVp6oktg1p92wx2JxJOtH3Lngj6u1zavzCIEBCsT8Jfubc26p0PpvbA08FQViNfqHGEK_wU5dWLMsVLfgWpmQEXmgXLW-iEZR6kUqWA3xxWxRW0symua7SAIXMaopephlma3h7pRVsCefBofuL28YPcbOMcN9es3LqLApccL48C0ClolSI7Cw7P8HEUtFbMyuFMqWFjZireFh93lVqGW2q7K6ewtcVhXb8pNRX_IQlcEyaUrZ5p9xyeM0SvYuqSvpiIXqm5pe1DuTxXZhnHtEe2ZxetNMJb--xr5CFQNwCCXVPvlTKewIEEU4bpQP_LxZPpD3fiGb9ryo; incap_ses_934_2823006=eQ62YuKdcxZkADaFxzz2DGgakGMAAAAA/+jVGf9SRptPR3WKJxUp9g==; country=TW; _sctr=1|1670342400000; mfgid=wTYHnT1eTLu1qbVJ1TS2PBMBQ79kNfCanxXvSAmvWXOruHfU6r; gaMilli=1670393734584; ln_or=d; incap_ses_935_2823006=z/cTESkdj0969+3SQ8r5DJ1EkGMAAAAAYlMVPwFE1NTTL+5AcjsLLg==; _gat=1; __lt__sid=6ebcddac-825316f4; _gat_UA-8651572-24=1; _gat_UA-8651572-1=1; exterm_web_cid=exterm_web_b80a369f-9194-44bd-b67e-2533ce729bc9; mfutmb=3L3Z0g7eV7LHY75WvriZCc3Z8M3mpKWFygGpgCw4NWp72SOugf; mfsrc=null; mfclickid=NA; MgidSensorNVis=7; MgidSensorHref=https://my.extrading.pro/webtrading/; _ga_M71C3QBXSG=GS1.1.1670400877.20.1.1670400921.16.0.0; mffv=2022-12-7~16%3A15%3A21; _uetsid=66ee6550746e11ed96f07b15a7e866f9; _uetvid=f3e34d70655711ed9d41b95ed0eb22a9; _ga=GA1.2.627934263.1668566394; amplitude_id_2b790405f18db8c2006aa1cac469c25fextrading.pro=eyJkZXZpY2VJZCI6ImVkZmFiOTA0LTk2YmItNDBiZS04MGY5LTZiZmQzMGUwZWU4YVIiLCJ1c2VySWQiOiJmZGJhNDY3Ny00NjAyLTQ1MGMtYjgwZC1mZWYyMDAyNmVlZDEiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE2NzAzODQ2NjgwOTQsImxhc3RFdmVudFRpbWUiOjE2NzA0MDA5MjIxMTgsImV2ZW50SWQiOjQ1MywiaWRlbnRpZnlJZCI6MjQzNiwic2VxdWVuY2VOdW1iZXIiOjI4ODl9; TRADING_JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImV4bmVzcy1icm9rZXItcHJvZCJ9.eyJpc3MiOiJhdXRoLmV4bmVzcy5jb20iLCJhdWQiOiJ3dHMtYXBpLmV4bmVzcy5jb20iLCJzdWIiOiI3NjIxMTY5NiIsImlhdCI6MTY3MDQwMDkyMiwiZXhwIjoxNjcwNDAwOTgyLCJjaWQiOiJleHRlcm1fd2ViX2I4MGEzNjlmLTkxOTQtNDRiZC1iNjdlLTI1MzNjZTcyOWJjOSIsInBsYXRmb3JtIjoid2ViIiwiYnJva2VyIjoiRXhuZXNzIFJldGFpbCIsImlwYWRkcmVzcyI6IjIxMS4yMi4xODAuMjI2In0.yRV-yxczesAOQYfY0ZD6my9j9sf5ecz4uz7WksMuwt-5TNG1CdYMhRE21eRCopvGWSyEagioK32jHC3CvnFuiA",
// Host: "my.extrading.pro",
// Origin: "https://my.extrading.pro",
// Pragma: "no-cache",
// "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
// "Sec-WebSocket-Key": "vv+cQsE3qMB+IKUDa/aVQg==",
// "Sec-WebSocket-Version": 13,
// Upgrade: "websocket",
// User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
