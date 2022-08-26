/******************************

脚本功能：V
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
    "latest_receipt": "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",
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
