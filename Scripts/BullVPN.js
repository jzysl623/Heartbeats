/***********************************
> 應用名稱：BullVPN
> 軟件版本：6.2
> 腳本作者：Yakun
> 更新時間：2022-08-23
> 腳本功能：⛔VIP功能⛔
> 特别說明：本腳本僅供學習交流使用，禁止售賣
 
[rewrite_local]

# BUllVPN（2022-08-23)
^https?:\/\/client-api\.blackbull\.news\/v2\/(user\/info|session\/connect) url script-response-body https://raw.githubusercontent.com/GalaxySpace/Heartbeats/main/Scripts/BullVPN.js
[mitm] 
hostname = client-api.blackbull.news

***********************************/

var url = $request.url;
var objc = JSON.parse($response.body);
const tmp1 = '/v2/user/info';
const tmp2 = '/v2/session/connect';

if (url.indexOf(tmp1) != -1) {
	var body = $response.body.replace(/type:\w+/g,'type:pay').replace(/is_pay":\d+/g,'is_pay":1').replace(/days":\d+/g,'days":99999999').replace(/end":".*?"/g,'end":"2999-09-09 09:09:09"');
}
body = JSON.stringify(objc);
$done({body});
