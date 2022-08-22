var head = $request.headers;
var ua = head['User-Agent'];

if (ua.indexOf('fogu') != -1) {
    Body = {
    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 11806255320,
        "app_item_id": 11806255320,
        "bundle_id": "com.fogu.tunnel",
        "application_version": "44",
        "download_id": 501182866804389000,
        "version_external_identifier": 845354296,
        "receipt_creation_date": "2022-07-12 23:45:14 Etc/GMT",
        "receipt_creation_date_ms": "1657669514000",
        "receipt_creation_date_pst": "2022-07-12 16:45:14 America/Los_Angeles",
        "request_date": "2022-07-12 23:45:17 Etc/GMT",
        "request_date_ms": "1657669517561",
        "request_date_pst": "2022-07-12 16:45:17 America/Los_Angeles",
        "original_purchase_date": "2022-02-27 00:18:10 Etc/GMT",
        "original_purchase_date_ms": "1645921090000",
        "original_purchase_date_pst": "2022-02-26 16:18:10 America/Los_Angeles",
        "original_application_version": "44",
        "in_app": [
            {
                "quantity": "1",
                "product_id": "g12",
                "transaction_id": "500001114544150",
                "original_transaction_id": "500001114544150",
                "purchase_date": "2022-07-12 23:45:14 Etc/GMT",
                "purchase_date_ms": "1657669514000",
                "purchase_date_pst": "2022-07-12 16:45:14 America/Los_Angeles",
                "original_purchase_date": "2022-07-12 23:45:14 Etc/GMT",
                "original_purchase_date_ms": "1657669514000",
                "original_purchase_date_pst": "2022-07-12 16:45:14 America/Los_Angeles",
                "expires_date": "2999-08-12 23:45:14 Etc/GMT",
                "expires_date_ms": "32491496714000",
                "expires_date_pst": "2999-08-12 16:45:14 America/Los_Angeles",
                "web_order_line_item_id": "500000498781676",
                "is_trial_period": "true",
                "is_in_intro_offer_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }
        ]
    },
    "latest_receipt_info": [
        {
            "quantity": "1",
            "product_id": "g12",
            "transaction_id": "500001114544150",
            "original_transaction_id": "500001114544150",
            "purchase_date": "2022-07-12 23:45:14 Etc/GMT",
            "purchase_date_ms": "1657669514000",
            "purchase_date_pst": "2022-07-12 16:45:14 America/Los_Angeles",
            "original_purchase_date": "2022-07-12 23:45:14 Etc/GMT",
            "original_purchase_date_ms": "1657669514000",
            "original_purchase_date_pst": "2022-07-12 16:45:14 America/Los_Angeles",
            "expires_date": "2999-08-12 23:45:14 Etc/GMT",
            "expires_date_ms": "32491496714000",
            "expires_date_pst": "2999-08-12 16:45:14 America/Los_Angeles",
            "web_order_line_item_id": "500000498781676",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20375794"
        }
    ],
    "latest_receipt": "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",
    "pending_renewal_info": [
        {
            "auto_renew_product_id": "g12",
            "product_id": "g12",
            "original_transaction_id": "500001114544150",
            "auto_renew_status": "1"
        }
    ],
    "status": 0
};
}


Status = 'HTTP/1.1 200 OK';
Headers = {"Content-Type": "application/json"};

const Response = {
    status: Status,
    headers: Headers,
    body: JSON.stringify(Body)
};

$done(Response);
