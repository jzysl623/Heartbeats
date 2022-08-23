/***********************************
> 應用名稱：BullVPN
> 軟件版本：6.2
> 腳本作者：Yakun
> 更新時間：2022-08-23
> 腳本功能：⛔VIP功能⛔
> 特别說明：本腳本僅供學習交流使用，禁止售賣
 
[rewrite_local]

# BUllVPN（2022-08-23)
^https?:\/\/client-api\.blackbull\.news\/v\d\/(user\/info|session\/connect) url script-response-body https://raw.githubusercontent.com/GalaxySpace/Heartbeats/main/Scripts/BullVPN.js
[mitm] 
hostname = client-api.blackbull.news

***********************************/

var url = $request.url;
var obj = JSON.parse($response.body);
const tmp1 = '/AppRaven/app';
const tmp2 = '/AppRaven/social';
const tmp3 = '/AppRaven/buy';

if (url.indexOf(tmp1) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp2) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp3) != -1) {
	obj={"success":true,"message":"1896165181","isReceiptValid":true,"isSubscriptionActive":true};
	body = JSON.stringify(obj);
}
$done({body});
