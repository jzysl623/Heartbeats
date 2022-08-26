var head = $request.headers;
var ua = head['User-Agent'];
var objc = JSON.parse($response.body); 
if (ua.indexOf('VPN') != -1) {
objc = {
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
	"latest_receipt": null, 
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
};
}
$done({body:JSON.stringify(objc)});
