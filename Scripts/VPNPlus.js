/***********************************
> 應用名稱：VPNPlus
> 軟件版本：x.2
> 腳本作者：Yakun
> 更新時間：2022-08-26
> 腳本功能：⛔无限体验⛔
> 特别說明：本腳本僅供學習交流使用，禁止售賣
 
[rewrite_local]

# VPNPlus（2022-08-26)
^https?:\/\/206\.189\.78\.230\/receipt\/apple url script-response-body https://raw.githubusercontent.com/GalaxySpace/Heartbeats/main/Scripts/VPNPlus.js
[mitm] 
hostname = 206.189.78.230

***********************************/

var url = $request.url;
const tmp1 = '/receipt/apple';

if (url.indexOf(tmp1) != -1) {
	var body = $response.body.replace(/ExpireTime":\d+/g,'ExpireTime":992503620603');
}
$done({body});
