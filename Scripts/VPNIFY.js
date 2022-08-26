/******************************

脚本功能：VPNIFY 解锁会员
软件版本：2.1.6
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > V
^https:\/\/buy\.itunes\/apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/GalaxySpace/Heartbeats/main/Scripts/VPNIFY.js
[mitm] 
hostname = buy.itunes.apple.com

*******************************/


var obj = JSON.parse($response.body); 
obj = { 
    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 150325139500,
        "app_item_id": 150325139500,
        "bundle_id": "com.free.vpn.hotspot.secure.vpnify",
        "application_version": "200017",
        "download_id": 501613380907351740,
        "version_external_identifier": 850502715,
        "receipt_creation_date": "2022-07-29 02:44:23 Etc/GMT",
        "receipt_creation_date_ms": "1659062663000",
        "receipt_creation_date_pst": "2022-07-28 19:44:23 America/Los_Angeles",
        "request_date": "2022-07-29 02:44:26 Etc/GMT",
        "request_date_ms": "1659062666948",
        "request_date_pst": "2022-07-28 19:44:26 America/Los_Angeles",
        "original_purchase_date": "2022-07-29 01:48:47 Etc/GMT",
        "original_purchase_date_ms": "1659059327000",
        "original_purchase_date_pst": "2022-07-28 18:48:47 America/Los_Angeles",
        "original_application_version": "200017",
        "in_app": [
            {
                "quantity": "1",
                "product_id": "vpnify_sub_12month",
                "transaction_id": "500001127105859",
                "original_transaction_id": "500001127105859",
                "purchase_date": "2022-07-29 02:44:23 Etc/GMT",
                "purchase_date_ms": "1659062663000",
                "purchase_date_pst": "2022-07-28 19:44:23 America/Los_Angeles",
                "original_purchase_date": "2022-07-29 02:44:23 Etc/GMT",
                "original_purchase_date_ms": "1659062663000",
                "original_purchase_date_pst": "2022-07-28 19:44:23 America/Los_Angeles",
                "expires_date": "2999-08-01 02:44:23 Etc/GMT",
                "expires_date_ms": "32490470663000",
                "expires_date_pst": "2999-07-31 19:44:23 America/Los_Angeles",
                "web_order_line_item_id": "500000505212446",
                "is_trial_period": "true",
                "is_in_intro_offer_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }
        ]
    },
    "latest_receipt_info": [
        {
            "quantity": "1",
            "product_id": "vpnify_sub_12month",
            "transaction_id": "500001127105859",
            "original_transaction_id": "500001127105859",
            "purchase_date": "2022-07-29 02:44:23 Etc/GMT",
            "purchase_date_ms": "1659062663000",
            "purchase_date_pst": "2022-07-28 19:44:23 America/Los_Angeles",
            "original_purchase_date": "2022-07-29 02:44:23 Etc/GMT",
            "original_purchase_date_ms": "1659062663000",
            "original_purchase_date_pst": "2022-07-28 19:44:23 America/Los_Angeles",
            "expires_date": "2999-08-01 02:44:23 Etc/GMT",
            "expires_date_ms": "32490470663000",
            "expires_date_pst": "2999-07-31 19:44:23 America/Los_Angeles",
            "web_order_line_item_id": "500000505212446",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20609327"
        }
    ],
    "latest_receipt": null, 
    "pending_renewal_info": [
        {
            "auto_renew_product_id": "vpnify_sub_12month",
            "product_id": "vpnify_sub_12month",
            "original_transaction_id": "500001127105859",
            "auto_renew_status": "1"
        }
    ],
    "status": 0
}
$done({body:JSON.stringify(obj)});
