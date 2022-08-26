var head = $request.headers;
var ua = head['User-Agent'];
var objc = JSON.parse($response.body); 

// vpnfast
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

// ShadowLink
if (ua.indexOf('ShadowLink') != -1) {
objc = {
	    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 14396865180,
        "app_item_id": 14396865180,
        "bundle_id": "com.klink.proxy",
        "application_version": "2",
        "download_id": 500920174996467000,
        "version_external_identifier": 849955888,
        "receipt_creation_date": "2022-08-04 02:33:04 Etc/GMT",
        "receipt_creation_date_ms": "1659580384000",
        "receipt_creation_date_pst": "2022-08-03 19:33:04 America/Los_Angeles",
        "request_date": "2022-08-04 02:33:07 Etc/GMT",
        "request_date_ms": "1659580387173",
        "request_date_pst": "2022-08-03 19:33:07 America/Los_Angeles",
        "original_purchase_date": "2021-11-26 05:25:44 Etc/GMT",
        "original_purchase_date_ms": "1637904344000",
        "original_purchase_date_pst": "2021-11-25 21:25:44 America/Los_Angeles",
        "original_application_version": "5",
        "in_app": [
            {
                "quantity": "1",
                "product_id": "com.shadowlink.subscription.year",
                "transaction_id": "500001131964986",
                "original_transaction_id": "500001131964986",
                "purchase_date": "2022-08-04 02:33:03 Etc/GMT",
                "purchase_date_ms": "1659580383000",
                "purchase_date_pst": "2022-08-03 19:33:03 America/Los_Angeles",
                "original_purchase_date": "2022-08-04 02:33:04 Etc/GMT",
                "original_purchase_date_ms": "1659580384000",
                "original_purchase_date_pst": "2022-08-03 19:33:04 America/Los_Angeles",
                "expires_date": "2999-08-07 02:33:03 Etc/GMT",
                "expires_date_ms": "32490988383000",
                "expires_date_pst": "2999-08-06 19:33:03 America/Los_Angeles",
                "web_order_line_item_id": "500000507444528",
                "is_trial_period": "true",
                "is_in_intro_offer_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }
        ]
    },
    "latest_receipt_info": [
        {
            "quantity": "1",
            "product_id": "com.shadowlink.subscription.year",
            "transaction_id": "500001131964986",
            "original_transaction_id": "500001131964986",
            "purchase_date": "2022-08-04 02:33:03 Etc/GMT",
            "purchase_date_ms": "1659580383000",
            "purchase_date_pst": "2022-08-03 19:33:03 America/Los_Angeles",
            "original_purchase_date": "2022-08-04 02:33:04 Etc/GMT",
            "original_purchase_date_ms": "1659580384000",
            "original_purchase_date_pst": "2022-08-03 19:33:04 America/Los_Angeles",
            "expires_date": "2999-08-07 02:33:03 Etc/GMT",
            "expires_date_ms": "32490988383000",
            "expires_date_pst": "2999-08-06 19:33:03 America/Los_Angeles",
            "web_order_line_item_id": "500000507444528",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20601499"
        }
    ],
    "latest_receipt": null,
    "pending_renewal_info": [
        {
            "auto_renew_product_id": "com.shadowlink.subscription.year",
            "product_id": "com.shadowlink.subscription.year",
            "original_transaction_id": "500001131964986",
            "auto_renew_status": "0"
        }
    ],
    "status": 0
};
}

// Picsew
if (ua.indexOf('Picsew') != -1) {
objc = {
    "receipt": {
    "receipt_type": "Production",
    "adam_id": 120814516700,
    "app_item_id": 120814516700,
    "bundle_id": "com.sugarmo.ScrollClip",
    "application_version": "3082",
    "download_id": 999999,
    "version_external_identifier": 837747342,
    "receipt_creation_date": "2020-09-13 06:58:34 Etc/GMT",
    "receipt_creation_date_ms": "1599980314000",
    "receipt_creation_date_pst": "2020-09-12 23:58:34 America/Los_Angeles",
    "request_date": "2020-09-13 06:59:15 Etc/GMT",
    "request_date_ms": "1599980355799",
    "request_date_pst": "2020-09-12 23:59:15 America/Los_Angeles",
    "original_purchase_date": "2020-09-13 06:50:28 Etc/GMT",
    "original_purchase_date_ms": "1599979828000",
    "original_purchase_date_pst": "2020-09-12 23:50:28 America/Los_Angeles",
    "original_application_version": "3082",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.pro",
      "transaction_id": "1000000000000000",
      "original_transaction_id": "1000000000000000",
      "purchase_date": "2020-01-01 00:00:00 Etc/GMT",
      "purchase_date_ms": "1587700000000",
      "purchase_date_pst": "2020-01-21 00:00:00 America/Los_Angeles",
      "original_purchase_date": "2020-01-01 00:00:00 Etc/GMT",
      "original_purchase_date_ms": "1587700000000",
      "original_purchase_date_pst": "2020-01-01 00:00:00 America/Los_Angeles",
      "is_trial_period": "false"
    }]
  },
  "status": 0,
  "environment": "Production"
};
}


// GoodVPN
if (ua.indexOf('Violet') != -1) {
objc = {
  "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 15766418520,
        "app_item_id": 15766418520,
        "bundle_id": "com.playstone.Violet",
        "application_version": "106",
        "download_id": 501563930048711524,
        "version_external_identifier": 850129030,
        "receipt_creation_date": "2022-07-12 08:03:16 Etc/GMT",
        "receipt_creation_date_ms": "1657612996000",
        "receipt_creation_date_pst": "2022-07-12 01:03:16 America/Los_Angeles",
        "request_date": "2022-07-12 08:09:26 Etc/GMT",
        "request_date_ms": "1657613366405",
        "request_date_pst": "2022-07-12 01:09:26 America/Los_Angeles",
        "original_purchase_date": "2022-07-12 08:09:26 Etc/GMT",
        "original_purchase_date_ms": "1657613366299",
        "original_purchase_date_pst": "2022-07-12 01:09:26 America/Los_Angeles",
        "original_application_version": "47",
        "in_app": [{
            "quantity": "1",
            "product_id": "com.playstone.violet.premium.annual",
            "transaction_id": "500001114040110",
            "original_transaction_id": "500001114040110",
            "purchase_date": "2022-07-12 07:13:03 Etc/GMT",
            "purchase_date_ms": "1657609983000",
            "purchase_date_pst": "2022-07-12 00:13:03 America/Los_Angeles",
            "original_purchase_date": "2022-07-12 07:13:03 Etc/GMT",
            "original_purchase_date_ms": "1657609983000",
            "original_purchase_date_pst": "2022-07-12 00:13:03 America/Los_Angeles",
            "expires_date": "2999-07-19 07:13:03 Etc/GMT",
            "expires_date_ms": "32489363583000",
            "expires_date_pst": "2999-07-19 00:13:03 America/Los_Angeles",
            "web_order_line_item_id": "500000498511998",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED"
        }]
    },
    "latest_receipt_info": [{
        "quantity": "1",
        "product_id": "com.playstone.violet.premium.annual",
        "transaction_id": "500001114040110",
        "original_transaction_id": "500001114040110",
        "purchase_date": "2022-07-12 07:13:03 Etc/GMT",
        "purchase_date_ms": "1657609983000",
        "purchase_date_pst": "2022-07-12 00:13:03 America/Los_Angeles",
        "original_purchase_date": "2022-07-12 07:13:03 Etc/GMT",
        "original_purchase_date_ms": "1657609983000",
        "original_purchase_date_pst": "2022-07-12 00:13:03 America/Los_Angeles",
        "expires_date": "2999-07-19 07:13:03 Etc/GMT",
        "expires_date_ms": "32489363583000",
        "expires_date_pst": "2999-07-19 00:13:03 America/Los_Angeles",
        "web_order_line_item_id": "500000498511998",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED",
        "subscription_group_identifier": "20871223"
    }],
    "latest_receipt": null,
    "pending_renewal_info": [{
        "auto_renew_product_id": "com.playstone.violet.premium.annual",
        "product_id": "com.playstone.violet.premium.annual",
        "original_transaction_id": "500001114040110",
        "auto_renew_status": "0"
    }],
    "status": 0
};
}

$done({body:JSON.stringify(objc)});
