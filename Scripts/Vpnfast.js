/******************************

脚本功能：V
软件版本：x.8.6
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > V
^https:\/\/buy\.itunes\/apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/GalaxySpace/Heartbeats/main/Scripts/Vpnfast.js
[mitm] 
hostname = buy.itunes.apple.com

*******************************/


var obj = JSON.parse($response.body); 
obj = {
	"environment": "Production",
	"receipt": {
		"receipt_type": "Production",
		"adam_id": 1492285103,
		"app_item_id": 1492285103,
		"bundle_id": "com.optimal.vpn",
		"application_version": "1.1",
		"download_id": 500920172077428611,
		"version_external_identifier": 850594378,
		"receipt_creation_date": "2022-08-01 12:51:48 Etc/GMT",
		"receipt_creation_date_ms": "1659358308000",
		"receipt_creation_date_pst": "2022-08-01 05:51:48 America/Los_Angeles",
		"request_date": "2022-08-01 12:52:55 Etc/GMT",
		"request_date_ms": "1659358375988",
		"request_date_pst": "2022-08-01 05:52:55 America/Los_Angeles",
		"original_purchase_date": "2021-11-26 05:24:17 Etc/GMT",
		"original_purchase_date_ms": "1637904257000",
		"original_purchase_date_pst": "2021-11-25 21:24:17 America/Los_Angeles",
		"original_application_version": "1.0",
		"in_app": [{
				"quantity": "1",
				"product_id": "com.optimal.vpn.year",
				"transaction_id": "500001129937669",
				"original_transaction_id": "500001129937669",
				"purchase_date": "2022-08-01 12:22:45 Etc/GMT",
				"purchase_date_ms": "1659356565000",
				"purchase_date_pst": "2022-08-01 05:22:45 America/Los_Angeles",
				"original_purchase_date": "2022-08-01 12:22:45 Etc/GMT",
				"original_purchase_date_ms": "1659356565000",
				"original_purchase_date_pst": "2022-08-01 05:22:45 America/Los_Angeles",
				"expires_date": "2999-08-04 12:22:45 Etc/GMT",
				"expires_date_ms": "32490764565000",
				"expires_date_pst": "2999-08-04 05:22:45 America/Los_Angeles",
				"web_order_line_item_id": "500000506395691",
				"is_trial_period": "true",
				"is_in_intro_offer_period": "false",
				"in_app_ownership_type": "PURCHASED"
			},
			{
				"quantity": "1",
				"product_id": "com.optimal.vpn.streamingyear",
				"transaction_id": "500001129954093",
				"original_transaction_id": "500001129954093",
				"purchase_date": "2022-08-01 12:47:09 Etc/GMT",
				"purchase_date_ms": "1659358029000",
				"purchase_date_pst": "2022-08-01 05:47:09 America/Los_Angeles",
				"original_purchase_date": "2022-08-01 12:47:09 Etc/GMT",
				"original_purchase_date_ms": "1659358029000",
				"original_purchase_date_pst": "2022-08-01 05:47:09 America/Los_Angeles",
				"expires_date": "2999-08-04 12:47:09 Etc/GMT",
				"expires_date_ms": "32490766029000",
				"expires_date_pst": "2999-08-04 05:47:09 America/Los_Angeles",
				"web_order_line_item_id": "500000506405106",
				"is_trial_period": "true",
				"is_in_intro_offer_period": "false",
				"in_app_ownership_type": "PURCHASED"
			}
		]
	},
	"latest_receipt_info": [{
			"quantity": "1",
			"product_id": "com.optimal.vpn.streamingyear",
			"transaction_id": "500001129954093",
			"original_transaction_id": "500001129954093",
			"purchase_date": "2022-08-01 12:47:09 Etc/GMT",
			"purchase_date_ms": "1659358029000",
			"purchase_date_pst": "2022-08-01 05:47:09 America/Los_Angeles",
			"original_purchase_date": "2022-08-01 12:47:09 Etc/GMT",
			"original_purchase_date_ms": "1659358029000",
			"original_purchase_date_pst": "2022-08-01 05:47:09 America/Los_Angeles",
			"expires_date": "2999-08-04 12:47:09 Etc/GMT",
			"expires_date_ms": "32490766029000",
			"expires_date_pst": "2999-08-04 05:47:09 America/Los_Angeles",
			"web_order_line_item_id": "500000506405106",
			"is_trial_period": "true",
			"is_in_intro_offer_period": "false",
			"in_app_ownership_type": "PURCHASED",
			"subscription_group_identifier": "20770688"
		},
		{
			"quantity": "1",
			"product_id": "com.optimal.vpn.year",
			"transaction_id": "500001129937669",
			"original_transaction_id": "500001129937669",
			"purchase_date": "2022-08-01 12:22:45 Etc/GMT",
			"purchase_date_ms": "1659356565000",
			"purchase_date_pst": "2022-08-01 05:22:45 America/Los_Angeles",
			"original_purchase_date": "2022-08-01 12:22:45 Etc/GMT",
			"original_purchase_date_ms": "1659356565000",
			"original_purchase_date_pst": "2022-08-01 05:22:45 America/Los_Angeles",
			"expires_date": "2999-08-04 12:22:45 Etc/GMT",
			"expires_date_ms": "32490764565000",
			"expires_date_pst": "2999-08-04 05:22:45 America/Los_Angeles",
			"web_order_line_item_id": "500000506395691",
			"is_trial_period": "true",
			"is_in_intro_offer_period": "false",
			"in_app_ownership_type": "PURCHASED",
			"subscription_group_identifier": "20584821"
		}
	],
	"latest_receipt": "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",
	"pending_renewal_info": [{
			"auto_renew_product_id": "com.optimal.vpn.year",
			"product_id": "com.optimal.vpn.year",
			"original_transaction_id": "500001129937669",
			"auto_renew_status": "1"
		},
		{
			"auto_renew_product_id": "com.optimal.vpn.streamingyear",
			"product_id": "com.optimal.vpn.streamingyear",
			"original_transaction_id": "500001129954093",
			"auto_renew_status": "1"
		}
	],
	"status": 0
}
$done({body:JSON.stringify(obj)});
