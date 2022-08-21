/******************************

脚本功能：1Blocker 解锁订阅
软件版本：5.2.5
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 1Blocker 解锁订阅
^https:\/\/api\.revenuecat\.com\/v\d/(subscribers\/\w+-\w+-\w+-\w+-\w+|receipts)$ url script-response-body https://raw.githubusercontent.com/GalaxySpace/Heartbeats/main/Scripts/1Blocker.js
[mitm] 
hostname = api.revenuecat.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);
objc =
{
  "request_date": "2022-08-15T18:21:00Z",
  "request_date_ms": 1660587660199,
  "subscriber": {
    "entitlements": {
      "premium": {
        "purchase_date": "2020-02-11T07:52:54Z",
        "product_identifier": "blocker.ios.subscription.yearly",
        "original_purchase_date": "2020-02-11T07:52:55Z",
        "expires_date": "2030-02-18T07:52:54Z"
      }
    },
    "first_seen": "2022-07-12T16:16:18Z",
    "last_seen": "2022-08-15T18:16:14Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "334B1075-5E81-4693-91B2-B223E2D27FD3",
    "original_application_version": "1120",
    "original_purchase_date": "2022-07-12T16:15:57Z",
    "other_purchases": {},
    "subscriptions": {
      "blocker.ios.subscription.yearly": {
        "expires_date": "2030-02-18T07:52:54Z",
        "original_purchase_date": "2020-02-11T07:52:55Z",
        "purchase_date": "2020-02-11T07:52:54Z"
      }
    }
  }
}
body = JSON.stringify(objc);
$done({body});
