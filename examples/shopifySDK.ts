import * as request from "superagent";
import {
    SuperAgentStatic
} from "superagent";

type CallbackHandler = (err: any, res ? : request.Response) => void;
type Orderdiscount_applications =

    {
        'allocation_method' ? : "across" | "each" | "one"

        'code' ? : string

        'value_type' ? : "percentage" | "fixed_amount"

        'target_type' ? : "line_item" | "shipping_line"

        'description' ? : string

        'target_selection' ? : "all" | "entitled" | "explicit"

        'type' ? : "discount_code" | "manual" | "script"

        'title' ? : string

        'value' ? : string

    }

;
type productsImages =

    {
        'admin_graphql_api_id' ? : string

        'alt' ? : string

        'created_at' ? : string

        'height' ? : number

        'id' ? : number

        'position' ? : number

        'product_id' ? : number

        'src' ? : string

        'updated_at' ? : string

        'variant_ids' ? :

            Array < number

            >
            'width' ? : number

    }

;
type Customer =

    {
        'admin_graphql_api_id' ? : string

        'accepts_marketing' ? : boolean

        'addresses' ? :

            Array <
            CustomerAddress

            >
            'created_at' ? : string

        'default_address' ? : CustomerAddress

        'email' ? : string

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'last_order_id' ? : number

        'last_order_name' ? : string

        'note' ? : string

        'orders_count' ? : number

        'multipass_identifier' ? : string

        'phone' ? : string

        'tax_exempt' ? : boolean

        'state' ? : "disabled" | "invited" | "enabled" | "declined"

        'tags' ? : string

        'total_spent' ? : string

        'updated_at' ? : string

        'verified_email' ? : boolean

    }

;
type CustomerPATCH =

    {
        'accepts_marketing' ? : boolean

        'email' ? : string

        'metafield' ? :

            Array <
            MetaFieldPOST

            >
            'first_name' ? : string

        'last_name' ? : string

        'id' ? : number

        'note' ? : string

        'phone' ? : string

        'tax_exempt' ? : boolean

        'tags' ? : string

    }

;
type Product =

    {
        'admin_graphql_api_id' ? : string

        'metafields' ? :

            Array <
            MetaField

            >
            'metafields_global_description_tag' ? : string

        'metafields_global_title_tag' ? : string

        'body_html' ? : string

        'created_at' ? : string

        'handle' ? : string

        'id' ? : number

        'image' ? : Image

        'images' ? :

            Array <
            Image

            >
            'options' ? :

            Array <
            Option

            >
            'product_type' ? : string

        'published' ? : boolean

        'published_at' ? : string

        'published_scope' ? : "web" | "global"

        'tags' ? : string

        'template_suffix' ? : string

        'title' ? : string

        'updated_at' ? : string

        'variants' ? :

            Array <
            Variant

            >
            'vendor' ? : string

    }

;
type refundsPaymentDetailsPOST =

    {
        'avs_result_code' ? : string

        'credit_card_bin' ? : string

        'credit_card_company' ? : string

        'credit_card_number' ? : string

        'cvv_result_code' ? : string

    }

;
type PostInventoryLevels =

    {
        'available' ? : number

        'disconnect_if_necessary' ? : boolean

        'relocate_if_necessary' ? : boolean

    }

;
type paymentsReceipt =

    {}

;
type productsImagesPOST =

    {
        'alt' ? : string

        'attachment' ? : string

        'id' ? : number

        'position' ? : number

        'src' ? : string

        'variant_ids' ? :

            Array < number

            >
    }

;
type discountCodePOST =

    {
        'code': string

        'id' ? : number

        'usage_count' ? : number

    }

;
type refundOrderAdjustments =

    {
        'amount' ? : string

        'id' ? : number

        'kind' ? : string

        'order_id' ? : number

        'reason' ? : string

        'refund_id' ? : number

        'tax_amount' ? : string

    }

;
type OrderClientDetails =

    {
        'accept_language' ? : string

        'browser_height' ? : string

        'browser_ip' ? : string

        'browser_width' ? : string

        'session_hash' ? : string

        'user_agent' ? : string

    }

;
type AbandonedCheckout =

    {
        'user_id' ? : number

        'phone' ? : string

        'source_url' ? : string

        'source_identifier' ? : string

        'source' ? : string

        'location_id' ? : number

        'device_id' ? : number

        'admin_graphql_api_id' ? : string

        'gateway' ? : string

        'note_attributes' ? :

            Array < string

            >
            'completed_at' ? : string

        'cancel_reason' ? : "customer" | "fraud" | "inventory" | "other" | "null"

        'closed_at' ? : string

        'customer_locale' ? : string

        'abandoned_checkout_url' ? : string

        'billing_address' ? : Address

        'buyer_accepts_marketing' ? : boolean

        'cart_token' ? : string

        'created_at' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'customer' ? : Customer

        'discount_codes' ? :

            Array <
            AbandonedChkoutDiscount_code

            >
            'email' ? : string

        'id' ? : number

        'landing_site' ? : string

        'line_items' ? :

            Array <
            AbandonedChkoutLineItem

            >
            'name' ? : string

        'note' ? : string

        'referring_site' ? : string

        'shipping_address' ? : Address

        'shipping_lines' ? :

            Array <
            AbandonedChkoutShippingLine

            >
            'source_name' ? : "web" | "pos" | "iphone" | "android"

        'subtotal_price' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxes_included' ? : boolean

        'token' ? : string

        'total_discounts' ? : string

        'total_line_items_price' ? : string

        'total_price' ? : string

        'total_tax' ? : string

        'total_weight' ? : number

        'updated_at' ? : string

    }

;
type OrderLineItemDiscount_allocations =

    {
        'amount' ? : string

        'discount_application_index' ? : number

    }

;
type OptionPOST =

    {
        'id' ? : number

        'values' ? :

            Array < string

            >
            'name': string

    }

;
type provinces_countries =

    {
        'code' ? : string

        'country_id' ? : number

        'id' ? : number

        'name' ? : string

        'shipping_zone_id' ? : number

        'tax' ? : number

        'tax_name' ? : string

        'tax_percentage' ? : number

    }

;
type ordersFulfillmentsPOST =

    {
        'id' ? : number

        'line_items' ? :

            Array <
            fulfillmentsLineItemsReq

            >
            'location_id' ? : number

        'notify_customer' ? : boolean

        'receipt' ? : ordersFulfillmentsReceipt

        'service' ? : string

        'status' ? : string

        'tracking_company' ? : "4PX" | "APC" | "Amazon Logistics UK" | "Amazon Logistics US" | "Australia Post" | "Bluedart" | "Canada Post" | "China  Post" | "Correios" | "DHL Express" | "DHL eCommerce" | "DHL eCommerce Asia" | "Delhivery" | "Eagle" | "FSC" | "FedEx" | "FedEx UK" | "GLS" | "Globegistics" | "Japan Post" | "New Zealand Post" | "PostNord" | "Purolator" | "Royal Mail" | "Sagawa (EN)" | "Sagawa (JA)" | "TNT" | "TNT Post" | "UPS" | "USPS" | "Yamato (EN)" | "Yamato (JA)"

        'tracking_number' ? : string

        'tracking_numbers' ? :

            Array < string

            >
            'tracking_url' ? : string

        'tracking_urls' ? :

            Array < string

            >
            'variant_inventory_management' ? : string

    }

;
type provinces =

    {
        'code' ? : string

        'country_id' ? : number

        'id' ? : number

        'name' ? : string

        'shipping_zone_id' ? : number

        'tax' ? : number

        'tax_name' ? : string

        'tax_percentage' ? : number

        'tax_type' ? : string

    }

;
type swagger400 =

    {
        'description' ? : string

    }

;
type swagger401 =

    {
        'description' ? : string

    }

;
type swagger403 =

    {
        'description' ? : string

    }

;
type swagger404 =

    {
        'description' ? : string

    }

;
type swagger405 =

    {
        'description' ? : string

    }

;
type ImagePATCH =

    {
        'id' ? : number

        'position': number

        'variant_ids' ? :

            Array < number

            >
            'attachment' ? : string

        'alt' ? : string

    }

;
type countries =

    {
        'code' ? : string

        'id' ? : number

        'name' ? : string

        'provinces' ? :

            Array <
            provinces_countries

            >
            'tax' ? : number

        'tax_name' ? : string

    }

;
type variantsPATCH =

    {
        'barcode' ? : string

        'compare_at_price' ? : string

        'fulfillment_service' ? : string

        'grams' ? : number

        'id' ? : number

        'image_id' ? : number

        'inventory_management' ? : string

        'inventory_policy' ? : string

        'inventory_quantity' ? : number

        'inventory_quantity_adjustment' ? : string

        'metafields' ? :

            Array <
            metafieldsPOST

            >
            'old_inventory_quantity' ? : number

        'option1': string

        'option2' ? : string

        'option3' ? : string

        'position' ? : number

        'price' ? : string

        'product_id' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'taxable' ? : boolean

        'title' ? : string

        'weight' ? : number

        'weight_unit' ? : string

    }

;
type Fulfillment =

    {
        'created_at' ? : string

        'id' ? : string

        'line_items' ? :

            Array <
            LineItem

            >
            'order_id' ? : number

        'receipt' ? : Receipt

        'status' ? : string

        'tracking_company' ? : string

        'tracking_numbers' ? :

            Array < string

            >
            'tracking_number' ? : string

        'updated_at' ? : string

    }

;
type swaggercontact =

    {
        'email' ? : string

    }

;
type OrderLineItemPATCH =

    {
        'fulfillment_service' ? : string

        'fulfillable_quantity' ? : number

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'name' ? : string

        'price' ? : string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'variant_title' ? : string

        'variant_id' ? : number

        'vendor' ? : string

        'id' ? : number

        'properties' ? :

            Array <
            LineItemProperties

            >
    }

;
type customCollectionsPATCH =

    {
        'body_html' ? : string

        'handle': string

        'id' ? : number

        'image' ? : imagePOST

        'metafields' ? :

            Array <
            metafields_POST

            >
            'products_count' ? : number

        'published_at' ? : string

        'published_scope' ? : string

        'sort_order': string

        'template_suffix' ? : string

        'title': string

    }

;
type lineItemDiscount_amounts =

    {
        'amount' ? : string

        'discount_application_index' ? : number

    }

;
type swagger406 =

    {
        'description' ? : string

    }

;
type swaggerdefinition_property =

    {
        'type' ? : string

    }

;
type swagger409 =

    {
        'description' ? : string

    }

;
type Pong =

    {
        'dateTime' ? : string

        'endpoint' ? : string

    }

;
type ordersRefundsCalculate =

    {
        'id' ? : number

        'refund_line_items' ? :

            Array <
            refundCalculatelineitem

            >
            'shipping' ? : ordersRefundsCalculateShipping

        'transactions' ? :

            Array <
            refundCalculatetransactions

            >
    }

;
type OrderRefund =

    {
        'admin_graphql_api_id' ? : string

        'order_id' ? : number

        'processed_at' ? : string

        'created_at' ? : string

        'id' ? : number

        'note' ? : string

        'refund_line_items' ? :

            Array <
            OrderRefundLineItem

            >
            'restock' ? : boolean

        'transactions' ? :

            Array <
            Transaction

            >
            'user_id' ? : number

        'order_adjustments' ? :

            Array <
            RefundOrderAdjustments

            >
    }

;
type LineItemTaxLine =

    {
        'price' ? : string

        'rate' ? : number

        'title' ? : string

        'compare_at' ? : string

        'zone' ? : string

        'position' ? : number

        'source' ? : string

    }

;
type refundsTransaction =

    {
        'admin_graphql_api_id' ? : string

        'amount' ? : string

        'authorization' ? : string

        'created_at' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'device_id' ? : number

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : "authorization" | "capture" | "sale" | "void" | "refund"

        'location_id' ? : number

        'message' ? : string

        'order_id' ? : number

        'parent_id' ? : number

        'payment_details' ? : refundsPaymentDetails

        'receipt' ? : refundsTransactionReceipt

        'source_name' ? : string

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

        'user_id' ? : number

    }

;
type price_based_shipping_rates =

    {
        'id' ? : number

        'max_order_subtotal' ? : string

        'min_order_subtotal' ? : string

        'name' ? : string

        'price' ? : string

        'shipping_zone_id' ? : number

    }

;
type productsVariantsPOST =

    {
        'barcode' ? : string

        'compare_at_price' ? : string

        'fulfillment_service' ? : string

        'grams' ? : number

        'id' ? : number

        'image_id' ? : number

        'inventory_management' ? : string

        'inventory_policy' ? : "deny" | "continue"

        'inventory_quantity' ? : number

        'inventory_quantity_adjustment' ? : number

        'metafields' ? :

            Array <
            metaFieldPOST

            >
            'old_inventory_quantity' ? : number

        'option1': string

        'option2' ? : string

        'option3' ? : string

        'position' ? : number

        'price' ? : string

        'requires_shipping' ? : boolean

        'sku' ? : string

        'taxable' ? : boolean

        'title' ? : string

        'weight' ? : number

        'weight_unit' ? : "g" | "kg" | "oz" | "lb"

    }

;
type swagger500 =

    {
        'description' ? : string

    }

;
type swaggerpaths =

    {
        '&#x2F;contacts' ? : swagger_contacts_path

    }

;
type swagger502 =

    {
        'description' ? : string

    }

;
type BulkStatus =

    {
        'batchId' ? : number

        'message' ? : string

        'numOfLeadsProcessed' ? : number

        'numOfRowsFailed' ? : number

        'numOfRowsWithWarning' ? : number

        'status' ? : string

    }

;
type customersAddressPOST =

    {
        'address1' ? : string

        'address2' ? : string

        'city' ? : string

        'company' ? : string

        'country' ? : string

        'country_code' ? : "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"

        'country_name' ? : string

        'default' ? : boolean

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'name' ? : string

        'phone' ? : string

        'province' ? : string

        'province_code' ? : string

        'zip' ? : string

    }

;
type discountCode =

    {
        'code' ? : string

        'created_at' ? : string

        'id' ? : number

        'price_rule_id' ? : number

        'updated_at' ? : string

        'usage_count' ? : number

    }

;
type fulfillmentsLineItemsPatch =

    {
        'applied_discounts' ? :

            Array < string

            >
            'destination_location_id' ? : number

        'fulfillable_quantity' ? : number

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'id' ? : number

        'key' ? : string

        'line_price' ? : string

        'name' ? : string

        'origin_location_id' ? : number

        'price' ? : string

        'product_exists' ? : boolean

        'product_id' ? : number

        'properties' ? :

            Array <
            lineItemProperties

            >
            'quantity' ? : number

        'requires_shipping' ? : boolean

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'sku' ? : string

        'tax_lines' ? :

            Array <
            lineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'total_discount' ? : string

        'variant_id' ? : number

        'variant_inventory_management' ? : string

        'variant_title' ? : string

        'vendor' ? : string

    }

;
type ordersRisks =

    {
        'cause_cancel' ? : boolean

        'checkout_id' ? : number

        'display' ? : boolean

        'id' ? : number

        'merchant_message' ? : string

        'message' ? : string

        'order_id' ? : number

        'recommendation' ? : "cancel" | "investigate" | "accept"

        'score' ? : string

        'source' ? : "Internal" | "External" | "Gateway"

    }

;
type refundCalculatelineitem =

    {
        'discounted_price' ? : string

        'discounted_total_price' ? : string

        'id' ? : number

        'line_item_id' ? : number

        'price' ? : string

        'quantity' ? : number

        'subtotal' ? : string

        'total_cart_discount_amount' ? : string

        'total_tax' ? : string

    }

;
type PatchRespinventoryItems =

    {
        'admin_graphql_api_id' ? : string

        'created_at' ? : string

        'id' ? : number

        'sku' ? : string

        'tracked' ? : boolean

        'updated_at' ? : string

    }

;
type rules =

    {
        'column' ? : string

        'condition' ? : string

        'relation' ? : string

    }

;
type locationsObject =

    {
        'address1' ? : string

        'address2' ? : string

        'admin_graphql_api_id' ? : string

        'city' ? : string

        'country' ? : string

        'country_code' ? : string

        'country_name' ? : string

        'created_at' ? : string

        'id' ? : number

        'legacy' ? : boolean

        'name' ? : string

        'phone' ? : string

        'province' ? : string

        'province_code' ? : string

        'updated_at' ? : string

        'zip' ? : string

    }

;
type swaggerparameters =

    {
        'schema' ? : swaggerparametersschema

        'in' ? : string

        'name' ? : string

        'description' ? : string

        'type' ? : string

        'required' ? : boolean

    }

;
type lineItemProperties =

    {
        'name' ? : string

        'value' ? : string

    }

;
type ordersPaymentsPOST =

    {
        'amount': string

        'authorization' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'device_id' ? : number

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind': "authorization" | "capture" | "sale" | "void" | "refund"

        'message' ? : string

        'payment_details' ? : paymentDetails

        'receipt' ? : paymentsReceipt

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

    }

;
type OrderCustomerPATCH =

    {
        'accepts_marketing' ? : boolean

        'email' ? : string

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'last_order_name' ? : string

        'note' ? : string

        'orders_count' ? : number

        'phone' ? : string

        'tax_exempt' ? : boolean

        'tags' ? : string

        'total_spent' ? : string

        'verified_email' ? : boolean

    }

;
type prerequisite_shipping_price_range =

    {
        'less_than_or_equal_to' ? : number

    }

;
type OrderRefundLineItemLineItem =

    {
        'origin_location' ? : OrderLineItemOrigin_location

        'destination_location' ? : OrderLineItemDestination_location

        'discount_allocations' ? :

            Array <
            OrderLineItemDiscount_allocations

            >
            'discount_amounts' ? :

            Array <
            OrderLineItemDiscount_amounts

            >
            'admin_graphql_api_id' ? : string

        'applied_discounts' ? :

            Array < string

            >
            'key' ? : string

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'line_price' ? : string

        'name' ? : string

        'price' ? : string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'variant_id' ? : number

        'variant_title' ? : string

        'vendor' ? : string

        'origin_location_id' ? : number

        'destination_location_id' ? : number

        'fulfillable_quantity' ? : number

        'total_discount' ? : string

        'product_exists' ? : boolean

        'id' ? : number

        'properties' ? :

            Array <
            LineItemProperties

            >
            'variant_inventory_management' ? : string

    }

;
type swagger200 =

    {
        'schema' ? : swaggerschema

        'description' ? : string

    }

;
type image =

    {
        'created_at' ? : string

        'height' ? : number

        'src' ? : string

        'width' ? : number

    }

;
type BulkLoad =

    {
        'id' ? : number

        'status' ? : string

    }

;
type ordersRefundsLineItem =

    {
        'id' ? : number

        'line_item' ? : refundsLineItem

        'line_item_id' ? : number

        'location_id' ? : number

        'quantity' ? : number

        'restock_type' ? : "no_restock" | "cancel" | "return" | "legacy_restock"

        'subtotal' ? : number

        'total_tax' ? : number

    }

;
type collectsPOST =

    {
        'collection_id': number

        'featured' ? : boolean

        'id' ? : number

        'position' ? : number

        'product_id': number

        'sort_value' ? : string

    }

;
type metafields_POST =

    {
        'description' ? : string

        'key': string

        'namespace': string

        'value': string

        'value_type': string

    }

;
type OrderCustomerPOST =

    {
        'accepts_marketing' ? : boolean

        'email' ? : string

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'last_order_name' ? : string

        'note' ? : string

        'orders_count' ? : number

        'phone' ? : string

        'tax_exempt' ? : boolean

        'tags' ? : string

        'total_spent' ? : string

        'verified_email' ? : boolean

    }

;
type smartCollections =

    {
        'body_html' ? : string

        'disjunctive' ? : boolean

        'handle' ? : string

        'id' ? : number

        'image' ? : image

        'published' ? : boolean

        'published_at' ? : string

        'published_scope' ? : string

        'rules' ? :

            Array <
            rules

            >
            'sort_order' ? : string

        'template_suffix' ? : string

        'title' ? : string

        'updated_at' ? : string

    }

;
type refundCalculatelineitemReq =

    {
        'discounted_price' ? : string

        'discounted_total_price' ? : string

        'id' ? : number

        'line_item_id' ? : number

        'price' ? : string

        'quantity' ? : number

        'subtotal' ? : string

        'total_cart_discount_amount' ? : string

        'total_tax' ? : string

    }

;
type PaymentDetails =

    {
        'avs_result_code' ? : string

        'credit_card_bin' ? : string

        'credit_card_company' ? : string

        'credit_card_number' ? : string

        'cvv_result_code' ? : string

    }

;
type ordersFulfillments =

    {
        'admin_graphql_api_id' ? : string

        'created_at' ? : string

        'id' ? : number

        'line_items' ? :

            Array <
            fulfillmentsLineItems

            >
            'location_id' ? : number

        'notify_customer' ? : boolean

        'order_id' ? : number

        'receipt' ? : ordersFulfillmentsReceipt

        'service' ? : string

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'status' ? : string

        'tracking_company' ? : "4PX" | "APC" | "Amazon Logistics UK" | "Amazon Logistics US" | "Australia Post" | "Bluedart" | "Canada Post" | "China  Post" | "Correios" | "DHL Express" | "DHL eCommerce" | "DHL eCommerce Asia" | "Delhivery" | "Eagle" | "FSC" | "FedEx" | "FedEx UK" | "GLS" | "Globegistics" | "Japan Post" | "New Zealand Post" | "PostNord" | "Purolator" | "Royal Mail" | "Sagawa (EN)" | "Sagawa (JA)" | "TNT" | "TNT Post" | "UPS" | "USPS" | "Yamato (EN)" | "Yamato (JA)"

        'tracking_number' ? : string

        'tracking_numbers' ? :

            Array < string

            >
            'tracking_url' ? : string

        'tracking_urls' ? :

            Array < string

            >
            'updated_at' ? : string

        'variant_inventory_management' ? : string

    }

;
type lineItemDestination_location =

    {
        'address1' ? : string

        'address2' ? : string

        'city' ? : string

        'country_code' ? : string

        'id' ? : number

        'name' ? : string

        'province_code' ? : string

        'zip' ? : string

    }

;
type priceRulesPOST =

    {
        'allocation_method': string

        'customer_selection': string

        'ends_at' ? : string

        'entitled_collection_ids' ? :

            Array < number

            >
            'entitled_country_ids' ? :

            Array < number

            >
            'entitled_product_ids' ? :

            Array < number

            >
            'entitled_variant_ids' ? :

            Array < number

            >
            'id' ? : number

        'once_per_customer': boolean

        'prerequisite_saved_search_ids' ? :

            Array < number

            >
            'prerequisite_shipping_price_range' ? : prerequisite_shipping_price_range

        'prerequisite_subtotal_range' ? : prerequisite_subtotal_range

        'starts_at': string

        'target_selection': string

        'target_type': string

        'title': string

        'usage_limit' ? : number

        'value': number

        'value_type': string

    }

;
type refundsLineItem =

    {
        'admin_graphql_api_id' ? : string

        'applied_discounts' ? :

            Array < string

            >
            'destination_location' ? : lineItemDestination_location

        'destination_location_id' ? : number

        'discount_allocations' ? :

            Array <
            lineItemDiscount_allocations

            >
            'discount_amounts' ? :

            Array <
            lineItemDiscount_amounts

            >
            'fulfillable_quantity' ? : number

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'id' ? : number

        'key' ? : string

        'line_price' ? : string

        'name' ? : string

        'origin_location' ? : lineItemOrigin_location

        'origin_location_id' ? : number

        'price' ? : string

        'product_exists' ? : boolean

        'product_id' ? : number

        'properties' ? :

            Array <
            lineItemProperties

            >
            'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            refundsTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'total_discount' ? : string

        'variant_id' ? : number

        'variant_inventory_management' ? : string

        'variant_title' ? : string

        'vendor' ? : string

    }

;
type refundCalculatetransactionsPOST =

    {
        'amount' ? : string

        'authorization' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'device_id' ? : number

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : "authorization" | "capture" | "sale" | "void" | "refund"

        'message' ? : string

        'payment_details' ? : refundsPaymentDetailsReq

        'receipt' ? : refundsTransactionReceipt

        'source_name' ? : string

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

    }

;
type CustomerAddress =

    {
        'address1' ? : string

        'address2' ? : string

        'city' ? : string

        'name' ? : string

        'company' ? : string

        'country' ? : string

        'country_code' ? : "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'phone' ? : string

        'province' ? : string

        'province_code' ? : string

        'zip' ? : string

        'default' ? : boolean

        'country_name' ? : string

        'customer_id' ? : number

    }

;
type swagger415 =

    {
        'description' ? : string

    }

;
type ordersRefundsShippingReq =

    {
        'amount' ? : string

        'full_refund' ? : boolean

    }

;
type OrderFulfillmentReq =

    {
        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'location_id' ? : number

        'created_at' ? : string

        'id' ? : number

        'line_items' ? :

            Array <
            FulfillmentLineItemReq

            >
            'notify_customer' ? : boolean

        'order_id' ? : number

        'receipt' ? : Receipt

        'status' ? : string

        'tracking_company' ? : "4PX" | "APC" | "Amazon Logistics UK" | "Amazon Logistics US" | "Australia Post" | "Bluedart" | "Canada Post" | "China  Post" | "Correios" | "DHL Express" | "DHL eCommerce" | "DHL eCommerce Asia" | "Delhivery" | "Eagle" | "FSC" | "FedEx" | "FedEx UK" | "GLS" | "Globegistics" | "Japan Post" | "New Zealand Post" | "PostNord" | "Purolator" | "Royal Mail" | "Sagawa (EN)" | "Sagawa (JA)" | "TNT" | "TNT Post" | "UPS" | "USPS" | "Yamato (EN)" | "Yamato (JA)"

        'tracking_numbers' ? :

            Array < string

            >
            'tracking_number' ? : string

        'updated_at' ? : string

        'service' ? : string

        'tracking_url' ? : string

        'tracking_urls' ? :

            Array < string

            >
            'variant_inventory_management' ? : string

    }

;
type OrderPOST =

    {
        'device_id' ? : number

        'payment_gateway_names' ? :

            Array < string

            >
            'processed_at' ? : string

        'processing_method' ? : "" | "checkout" | "direct" | "manual" | "offsite" | "express"

        'referring_site' ? : string

        'note_attributes' ? :

            Array <
            OrderNoteAttribute

            >
            'gateway' ? : string

        'buyer_accepts_marketing' ? : boolean

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'customer' ? : OrderCustomerPOST

        'discount_codes' ? :

            Array <
            AbandonedChkoutDiscount_code

            >
            'email' ? : string

        'financial_status' ? : "authorized" | "pending" | "paid" | "partially_paid" | "refunded" | "voided" | "partially_refunded"

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'fulfillments' ? :

            Array <
            OrderFulfillmentReq

            >
            'id' ? : number

        'line_items':

            Array <
            OrderLineItemPOST

            >
            'name' ? : string

        'shipping_lines' ? :

            Array <
            OrderShippingLine

            >
            'tags' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxes_included' ? : boolean

        'total_discounts' ? : string

        'total_tax' ? : string

        'total_weight' ? : number

        'transactions' ? :

            Array <
            TransactionPOST

            >
            'note' ? : string

        'billing_address' ? : Address

        'contact_email' ? : string

        'shipping_address' ? : Address

        'phone' ? : string

        'send_receipt' ? : boolean

        'send_fulfillment_receipt' ? : boolean

        'inventory_behaviour' ? : "bypass" | "decrement_ignoring_policy" | "decrement_obeying_policy"

    }

;
type paymentDetails =

    {
        'avs_result_code' ? : string

        'credit_card_bin' ? : string

        'credit_card_company' ? : string

        'credit_card_number' ? : string

        'cvv_result_code' ? : string

    }

;
type collects =

    {
        'collection_id' ? : number

        'created_at' ? : string

        'featured' ? : boolean

        'id' ? : number

        'position' ? : number

        'product_id' ? : number

        'sort_value' ? : string

        'updated_at' ? : string

    }

;
type customCollectionsCount =

    {
        'count' ? : number

    }

;
type prerequisite_subtotal_range =

    {
        'greater_than_or_equal_to' ? : number

    }

;
type fulfillmentsLineItemsReq =

    {
        'applied_discounts' ? :

            Array < string

            >
            'destination_location_id' ? : number

        'fulfillable_quantity' ? : number

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'id' ? : number

        'key' ? : string

        'line_price' ? : string

        'name' ? : string

        'origin_location_id' ? : number

        'price' ? : string

        'product_exists' ? : boolean

        'product_id' ? : number

        'properties' ? :

            Array <
            lineItemProperties

            >
            'quantity' ? : number

        'requires_shipping' ? : boolean

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'sku' ? : string

        'tax_lines' ? :

            Array <
            lineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'total_discount' ? : string

        'variant_id' ? : number

        'variant_inventory_management' ? : string

        'variant_title' ? : string

        'vendor' ? : string

    }

;
type refundsPaymentDetails =

    {
        'avs_result_code' ? : string

        'credit_card_bin' ? : string

        'credit_card_company' ? : string

        'credit_card_number' ? : string

        'cvv_result_code' ? : string

    }

;
type swaggerinfo =

    {
        'contact' ? : swaggercontact

        'title' ? : string

        'version' ? : string

    }

;
type smartCollectionsPATCH =

    {
        'body_html' ? : string

        'disjunctive' ? : boolean

        'handle' ? : string

        'id' ? : number

        'image' ? : image_POST

        'published': boolean

        'published_scope' ? : string

        'rules' ? :

            Array <
            rules

            >
            'sort_order' ? : string

        'template_suffix' ? : string

        'title': string

    }

;
type OrderShippingLine =

    {
        'phone' ? : string

        'delivery_category' ? : string

        'discount_allocations' ? :

            Array <
            OrderLineItemDiscount_allocations

            >
            'discount_amounts' ? :

            Array <
            OrderLineItemDiscount_amounts

            >
            'code' ? : string

        'price' ? : string

        'source' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'title' ? : string

        'id' ? : number

        'discounted_price' ? : string

        'carrier_identifier' ? : string

        'requested_fulfillment_service_id' ? : string

    }

;
type CustomerPOST =

    {
        'accepts_marketing' ? : boolean

        'addresses' ? :

            Array <
            CustomerAddress

            >
            'email' ? : string

        'metafield' ? :

            Array <
            MetaFieldPOST

            >
            'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'note' ? : string

        'multipass_identifier' ? : string

        'password' ? : string

        'password_confirmation' ? : string

        'phone' ? : string

        'send_email_welcome' ? : boolean

        'send_email_invite' ? : boolean

        'tax_exempt' ? : boolean

        'tags' ? : string

    }

;
type PostRespInventoryLevels =

    {
        'admin_graphql_api_id' ? : string

        'available' ? : number

        'inventory_item_id' ? : number

        'location_id' ? : number

        'updated_at' ? : string

    }

;
type swaggerpost =

    {
        'summary' ? : string

        'operationId' ? : string

        'responses' ? : swaggerresponses

        'parameters' ? :

            Array <
            swaggerparameters

            >
            'tags' ? :

            Array < string

            >
    }

;
type fulfillmentEventsPOST =

    {
        'address1' ? : string

        'city' ? : string

        'country' ? : string

        'estimated_delivery_at' ? : string

        'happened_at' ? : string

        'id' ? : number

        'latitude' ? : number

        'longitude' ? : number

        'message' ? : string

        'province' ? : string

        'status': "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'zip' ? : string

    }

;
type OrderNoteAttribute =

    {
        'name' ? : string

        'value' ? : string

    }

;
type carrier_shipping_rate_providers =

    {
        'carrier_service_id' ? : number

        'flat_modifier' ? : string

        'id' ? : number

        'percent_modifier' ? : number

        'shipping_zone_id' ? : number

    }

;
type image_POST =

    {
        'created_at' ? : string

        'height' ? : number

        'src': string

        'width' ? : number

    }

;
type lineItemTaxLine =

    {
        'compare_at' ? : string

        'position' ? : number

        'price' ? : string

        'rate' ? : number

        'source' ? : string

        'title' ? : string

        'zone' ? : string

    }

;
type Address =

    {
        'address1' ? : string

        'address2' ? : string

        'city' ? : string

        'name' ? : string

        'company' ? : string

        'country' ? : string

        'country_code' ? : "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'phone' ? : string

        'province' ? : string

        'province_code' ? : string

        'zip' ? : string

        'default' ? : boolean

        'country_name' ? : string

        'customer_id' ? : number

        'latitude' ? : number

        'longitude' ? : number

    }

;
type swaggerdefinitions =

    {
        'definition-name' ? : swaggerdefinition_name

    }

;
type variants =

    {
        'barcode' ? : string

        'compare_at_price' ? : string

        'created_at' ? : string

        'fulfillment_service' ? : string

        'grams' ? : number

        'id' ? : number

        'image_id' ? : number

        'inventory_management' ? : string

        'inventory_policy' ? : string

        'inventory_quantity' ? : number

        'inventory_quantity_adjustment' ? : string

        'old_inventory_quantity' ? : number

        'option1' ? : string

        'option2' ? : string

        'option3' ? : string

        'position' ? : number

        'price' ? : string

        'product_id' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'taxable' ? : boolean

        'title' ? : string

        'updated_at' ? : string

        'weight' ? : number

        'weight_unit' ? : string

    }

;
type Image =

    {
        'admin_graphql_api_id' ? : string

        'created_at' ? : string

        'id' ? : number

        'position' ? : number

        'product_id' ? : number

        'src' ? : string

        'updated_at' ? : string

        'variant_ids' ? :

            Array < number

            >
            'width' ? : number

        'height' ? : number

        'alt' ? : string

    }

;
type swaggerdefinition_name =

    {
        'properties' ? : swaggerproperties

    }

;
type ordersPaymentsCount =

    {
        'count' ? : number

    }

;
type OrderLineItemDestination_location =

    {
        'zip' ? : string

        'country_code' ? : string

        'address2' ? : string

        'city' ? : string

        'address1' ? : string

        'name' ? : string

        'id' ? : number

        'province_code' ? : string

    }

;
type TransactionPATCH =

    {
        'amount' ? : string

        'authorization' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : "authorization" | "capture" | "sale" | "void" | "refund"

        'payment_details' ? : TransactionPaymentDetails

        'receipt' ? : Receipt

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

        'message' ? : string

    }

;
type swagger_contacts_path =

    {
        'post' ? : swaggerpost

    }

;
type ordersRefundsCalculateShipping =

    {
        'amount' ? : string

        'maximum_refundable' ? : string

        'tax' ? : string

    }

;
type AbandonedChkoutDiscount_code =

    {
        'amount' ? : string

        'code' ? : string

        'type' ? : "fixed_amount" | "percentage" | "shipping"

    }

;
type metaField =

    {
        'created_at' ? : string

        'description' ? : string

        'id' ? : number

        'key' ? : string

        'namespace' ? : string

        'owner_id' ? : number

        'owner_resource' ? : string

        'updated_at' ? : string

        'value' ? : string

        'value_type' ? : "string" | "integer"

    }

;
type metafieldsPOST =

    {
        'description' ? : string

        'key': string

        'namespace': string

        'value': string

        'value_type': string

    }

;
type swaggerDocs =

    {
        'basePath' ? : string

        'paths' ? : swaggerpaths

        'host' ? : string

        'schemes' ? :

            Array < string

            >
            'definitions' ? : swaggerdefinitions

        'swagger' ? : string

        'info' ? : swaggerinfo

        'tags' ? :

            Array <
            swaggertags

            >
    }

;
type Variant =

    {
        'admin_graphql_api_id' ? : string

        'barcode' ? : string

        'compare_at_price' ? : string

        'created_at' ? : string

        'fulfillment_service' ? : string

        'grams' ? : number

        'id' ? : number

        'image_id' ? : number

        'inventory_management' ? : string

        'inventory_policy' ? : "deny" | "continue"

        'inventory_quantity' ? : number

        'inventory_quantity_adjustment' ? : number

        'metafields' ? :

            Array <
            MetaField

            >
            'old_inventory_quantity' ? : number

        'option1' ? : string

        'option2' ? : string

        'option3' ? : string

        'position' ? : number

        'price' ? : string

        'product_id' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'taxable' ? : boolean

        'title' ? : string

        'updated_at' ? : string

        'weight' ? : number

        'weight_unit' ? : "g" | "kg" | "oz" | "lb"

        'inventory_item_id' ? : number

    }

;
type Shop =

    {
        'address1' ? : string

        'city' ? : string

        'country' ? : string

        'country_code' ? : string

        'country_name' ? : string

        'county_taxes' ? : string

        'created_at' ? : string

        'currency' ? : string

        'customer_email' ? : string

        'domain' ? : string

        'eligible_for_payments' ? : boolean

        'email' ? : string

        'google_apps_domain' ? : string

        'google_apps_login_enabled' ? : boolean

        'has_discounts' ? : boolean

        'has_gift_cards' ? : boolean

        'has_storefront' ? : boolean

        'iana_timezone' ? : string

        'id' ? : number

        'latitude' ? : number

        'longitude' ? : number

        'money_format' ? : string

        'money_in_emails_format' ? : string

        'money_with_currency_format' ? : string

        'money_with_currency_in_emails_format' ? : string

        'myshopify_domain' ? : string

        'name' ? : string

        'password_enabled' ? : boolean

        'phone' ? : string

        'plan_display_name' ? : boolean

        'force_ssl' ? : string

        'weight_unit' ? : string

        'finances' ? : string

        'plan_name' ? : string

        'primary_locale' ? : string

        'primary_location_id' ? : string

        'province' ? : string

        'province_code' ? : string

        'requires_extra_payments_agreement' ? : boolean

        'setup_required' ? : boolean

        'shop_owner' ? : string

        'source' ? : string

        'tax_shipping' ? : string

        'taxes_included' ? : boolean

        'timezone' ? : string

        'updated_at' ? : string

        'zip' ? : string

    }

;
type ordersRisksPATCH =

    {
        'cause_cancel' ? : boolean

        'display' ? : boolean

        'id' ? : number

        'merchant_message' ? : string

        'message' ? : string

        'order_id' ? : number

        'recommendation' ? : "cancel" | "investigate" | "accept"

        'score' ? : string

        'source' ? : "Internal" | "External" | "Gateway"

    }

;
type PatchinventoryItems =

    {
        'sku' ? : string

        'tracked' ? : boolean

    }

;
type ordersFulfillmentsReceipt =

    {}

;
type LineItemProperties =

    {
        'name' ? : string

        'value' ? : string

    }

;
type MetaFieldPOST =

    {
        'description' ? : string

        'id' ? : number

        'key': string

        'namespace': string

        'owner_id' ? : number

        'owner_resource' ? : string

        'value': string

        'value_type': "string" | "integer"

    }

;
type Object =

    {
        'objectField' ? : string

    }

;
type metaFieldPOST =

    {
        'description' ? : string

        'id' ? : number

        'key': string

        'namespace': string

        'owner_id' ? : number

        'owner_resource' ? : string

        'value': string

        'value_type': "string" | "integer"

    }

;
type priceRules =

    {
        'allocation_method' ? : string

        'created_at' ? : string

        'customer_selection' ? : string

        'ends_at' ? : string

        'entitled_collection_ids' ? :

            Array < number

            >
            'entitled_country_ids' ? :

            Array < number

            >
            'entitled_product_ids' ? :

            Array < number

            >
            'entitled_variant_ids' ? :

            Array < number

            >
            'id' ? : number

        'once_per_customer' ? : boolean

        'prerequisite_saved_search_ids' ? :

            Array < number

            >
            'prerequisite_shipping_price_range' ? : prerequisite_shipping_price_range

        'prerequisite_subtotal_range' ? : prerequisite_subtotal_range

        'starts_at' ? : string

        'target_selection' ? : string

        'target_type' ? : string

        'title' ? : string

        'updated_at' ? : string

        'usage_limit' ? : number

        'value' ? : number

        'value_type' ? : string

    }

;
type ordersRefundsLineItemReq =

    {
        'id' ? : number

        'line_item' ? : refundsLineItemReq

        'line_item_id' ? : number

        'location_id' ? : number

        'quantity' ? : number

        'restock_type' ? : "no_restock" | "cancel" | "return" | "legacy_restock"

        'subtotal' ? : number

        'total_tax' ? : number

    }

;
type ImagePOST =

    {
        'id' ? : number

        'attachment' ? : string

        'src' ? : string

        'position' ? : number

        'variant_ids' ? :

            Array < number

            >
            'alt' ? : string

    }

;
type OrderPATCH =

    {
        'metafields' ? :

            Array <
            MetaFieldPOST

            >
            'phone' ? : string

        'payment_gateway_names' ? :

            Array < string

            >
            'processed_at' ? : string

        'processing_method' ? : "" | "checkout" | "direct" | "manual" | "offsite" | "express"

        'referring_site' ? : string

        'note_attributes' ? :

            Array <
            OrderNoteAttribute

            >
            'gateway' ? : string

        'buyer_accepts_marketing' ? : boolean

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'customer' ? : OrderCustomerPATCH

        'discount_codes' ? :

            Array <
            AbandonedChkoutDiscount_code

            >
            'email' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'fulfillments' ? :

            Array <
            OrderFulfillmentReq

            >
            'id' ? : number

        'line_items' ? :

            Array <
            OrderLineItemPATCH

            >
            'name' ? : string

        'shipping_lines' ? :

            Array <
            OrderShippingLine

            >
            'tags' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxes_included' ? : boolean

        'total_discounts' ? : string

        'total_tax' ? : string

        'total_weight' ? : number

        'transactions' ? :

            Array <
            TransactionPATCH

            >
            'note' ? : string

        'billing_address' ? : Address

        'contact_email' ? : string

        'shipping_address' ? : Address

        'send_receipt' ? : boolean

        'send_fulfillment_receipt' ? : boolean

        'inventory_behaviour' ? : "bypass" | "decrement_ignoring_policy" | "decrement_obeying_policy"

    }

;
type BulkQuery =

    {
        'id' ? : number

        'status' ? : string

    }

;
type AbandonedChkoutLineItem =

    {
        'compare_at_price' ? : string

        'origin_location' ? : OrderLineItemOrigin_location

        'destination_location' ? : OrderLineItemDestination_location

        'discount_allocations' ? :

            Array <
            OrderLineItemDiscount_allocations

            >
            'discount_amounts' ? :

            Array <
            OrderLineItemDiscount_amounts

            >
            'admin_graphql_api_id' ? : string

        'applied_discounts' ? :

            Array < string

            >
            'key' ? : string

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'line_price' ? : string

        'name' ? : string

        'price' ? : string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'variant_id' ? : number

        'variant_title' ? : string

        'vendor' ? : string

        'origin_location_id' ? : number

        'destination_location_id' ? : number

        'fulfillable_quantity' ? : number

        'total_discount' ? : string

        'product_exists' ? : boolean

        'id' ? : number

        'properties' ? :

            Array <
            LineItemProperties

            >
            'variant_inventory_management' ? : string

    }

;
type countries_custom =

    {
        'code' ? : string

        'id' ? : number

        'name' ? : string

        'provinces' ? :

            Array <
            provinces

            >
            'tax' ? : number

        'tax_name' ? : string

    }

;
type customCollectionsPOST =

    {
        'body_html' ? : string

        'handle' ? : string

        'id' ? : number

        'image' ? : imagePOST

        'metafields' ? :

            Array <
            metafields_POST

            >
            'products_count' ? : number

        'published_scope' ? : string

        'sort_order' ? : string

        'template_suffix' ? : string

        'title': string

    }

;
type ordersRefundsCalculateShippingReq =

    {
        'amount' ? : string

        'full_refund' ? : boolean

    }

;
type productsImagesPATCH =

    {
        'alt' ? : string

        'attachment' ? : string

        'id' ? : number

        'position': number

        'variant_ids' ? :

            Array < number

            >
    }

;
type metafieldsCount =

    {
        'count' ? : number

    }

;
type FulfillmentLineItemReq =

    {
        'applied_discounts' ? :

            Array < string

            >
            'key' ? : string

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'line_price' ? : string

        'name' ? : string

        'price' ? : string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'variant_id' ? : number

        'variant_title' ? : string

        'vendor' ? : string

        'origin_location_id' ? : number

        'destination_location_id' ? : number

        'fulfillable_quantity' ? : number

        'total_discount' ? : string

        'product_exists' ? : boolean

        'id' ? : number

        'properties' ? :

            Array <
            LineItemProperties

            >
            'variant_inventory_management' ? : string

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

    }

;
type customersAddress =

    {
        'address1' ? : string

        'address2' ? : string

        'city' ? : string

        'company' ? : string

        'country' ? : string

        'country_code' ? : "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"

        'country_name' ? : string

        'customer_id' ? : number

        'default' ? : boolean

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'name' ? : string

        'phone' ? : string

        'province' ? : string

        'province_code' ? : string

        'zip' ? : string

    }

;
type metafieldsPATCH =

    {
        'created_at' ? : string

        'description' ? : string

        'id' ? : number

        'key' ? : string

        'namespace' ? : string

        'owner_id' ? : number

        'owner_resource' ? : string

        'updated_at' ? : string

        'value': number

        'value_type': string

    }

;
type locationsInventoryLevelsObject =

    {
        'admin_graphql_api_id' ? : string

        'available' ? : number

        'inventory_item_id' ? : number

        'location_id' ? : number

        'updated_at' ? : string

    }

;
type OrderCustomer =

    {
        'admin_graphql_api_id' ? : string

        'multipass_identifier' ? : string

        'accepts_marketing' ? : boolean

        'created_at' ? : string

        'default_address' ? : CustomerAddress

        'email' ? : string

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'last_order_id' ? : number

        'last_order_name' ? : string

        'note' ? : string

        'orders_count' ? : number

        'phone' ? : string

        'tax_exempt' ? : boolean

        'state' ? : "disabled" | "invited" | "enabled" | "declined"

        'tags' ? : string

        'total_spent' ? : string

        'updated_at' ? : string

        'verified_email' ? : boolean

    }

;
type OrderFulfillment =

    {
        'admin_graphql_api_id' ? : string

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'location_id' ? : number

        'created_at' ? : string

        'id' ? : number

        'line_items' ? :

            Array <
            FulfillmentLineItem

            >
            'name' ? : string

        'notify_customer' ? : boolean

        'order_id' ? : number

        'receipt' ? : Receipt

        'status' ? : string

        'tracking_company' ? : "4PX" | "APC" | "Amazon Logistics UK" | "Amazon Logistics US" | "Australia Post" | "Bluedart" | "Canada Post" | "China  Post" | "Correios" | "DHL Express" | "DHL eCommerce" | "DHL eCommerce Asia" | "Delhivery" | "Eagle" | "FSC" | "FedEx" | "FedEx UK" | "GLS" | "Globegistics" | "Japan Post" | "New Zealand Post" | "PostNord" | "Purolator" | "Royal Mail" | "Sagawa (EN)" | "Sagawa (JA)" | "TNT" | "TNT Post" | "UPS" | "USPS" | "Yamato (EN)" | "Yamato (JA)"

        'tracking_numbers' ? :

            Array < string

            >
            'tracking_number' ? : string

        'updated_at' ? : string

        'service' ? : string

        'tracking_url' ? : string

        'tracking_urls' ? :

            Array < string

            >
            'variant_inventory_management' ? : string

    }

;
type objectsMetadataFields =

    {
        'mask' ? : string

        'type' ? : string

        'vendorDisplayName' ? : string

        'vendorPath' ? : string

        'vendorReadOnly' ? : boolean

        'vendorRequired' ? : boolean

    }

;
type lineItemOrigin_location =

    {
        'address1' ? : string

        'address2' ? : string

        'city' ? : string

        'country_code' ? : string

        'id' ? : number

        'name' ? : string

        'province_code' ? : string

        'zip' ? : string

    }

;
type lineItemDiscount_allocations =

    {
        'amount' ? : string

        'discount_application_index' ? : number

    }

;
type metafields =

    {
        'created_at' ? : string

        'id' ? : number

        'key' ? : string

        'namespace' ? : string

        'owner_id' ? : number

        'owner_resource' ? : string

        'updated_at' ? : string

        'value' ? : number

        'value_type': string

    }

;
type VariantPOST =

    {
        'barcode' ? : string

        'compare_at_price' ? : string

        'fulfillment_service' ? : string

        'grams' ? : number

        'id' ? : number

        'image_id' ? : number

        'inventory_management' ? : string

        'inventory_policy' ? : "deny" | "continue"

        'inventory_quantity' ? : number

        'inventory_quantity_adjustment' ? : number

        'metafields' ? :

            Array <
            MetaFieldPOST

            >
            'old_inventory_quantity' ? : number

        'option1': string

        'option2' ? : string

        'option3' ? : string

        'position' ? : number

        'price' ? : string

        'requires_shipping' ? : boolean

        'sku' ? : string

        'taxable' ? : boolean

        'title' ? : string

        'weight' ? : number

        'weight_unit' ? : "g" | "kg" | "oz" | "lb"

    }

;
type TransactionPaymentDetails =

    {
        'avs_result_code' ? : string

        'credit_card_bin' ? : string

        'credit_card_company' ? : string

        'credit_card_number' ? : string

        'cvv_result_code' ? : string

    }

;
type customCollectionsList =

    Array <
    customCollections

    >
;
type OrderLineItem =

    {
        'origin_location' ? : OrderLineItemOrigin_location

        'destination_location' ? : OrderLineItemDestination_location

        'discount_allocations' ? :

            Array <
            OrderLineItemDiscount_allocations

            >
            'discount_amounts' ? :

            Array <
            OrderLineItemDiscount_amounts

            >
            'admin_graphql_api_id' ? : string

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'name' ? : string

        'price' ? : string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'variant_id' ? : number

        'variant_title' ? : string

        'vendor' ? : string

        'fulfillable_quantity' ? : number

        'total_discount' ? : string

        'product_exists' ? : boolean

        'id' ? : number

        'properties' ? :

            Array <
            LineItemProperties

            >
            'variant_inventory_management' ? : string

    }

;
type ordersRisksPOST =

    {
        'cause_cancel' ? : boolean

        'display' ? : boolean

        'id' ? : number

        'merchant_message' ? : string

        'message' ? : string

        'recommendation': "cancel" | "investigate" | "accept"

        'score' ? : string

        'source': "Internal" | "External" | "Gateway"

    }

;
type RefundOrderAdjustments =

    {
        'tax_amount' ? : string

        'reason' ? : string

        'amount' ? : string

        'kind' ? : string

        'id' ? : number

        'order_id' ? : number

        'refund_id' ? : number

    }

;
type OrderLineItemDiscount_amounts =

    {
        'amount' ? : string

        'discount_application_index' ? : number

    }

;
type swaggertags =

    {
        'name' ? : string

    }

;
type MetaField =

    {
        'created_at' ? : string

        'description' ? : string

        'id' ? : number

        'key' ? : string

        'namespace' ? : string

        'owner_id' ? : number

        'owner_resource' ? : string

        'value' ? : string

        'value_type' ? : "string" | "integer"

        'updated_at' ? : string

    }

;
type TransactionPOST =

    {
        'amount': string

        'authorization' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : "authorization" | "capture" | "sale" | "void" | "refund"

        'payment_details' ? : TransactionPaymentDetails

        'receipt' ? : Receipt

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

        'message' ? : string

    }

;
type OrderLineItemOrigin_location =

    {
        'zip' ? : string

        'country_code' ? : string

        'address2' ? : string

        'city' ? : string

        'address1' ? : string

        'name' ? : string

        'id' ? : number

        'province_code' ? : string

    }

;
type ProductPOST =

    {
        'metafields' ? :

            Array <
            MetaFieldPOST

            >
            'metafields_global_description_tag' ? : string

        'metafields_global_title_tag' ? : string

        'body_html' ? : string

        'handle' ? : string

        'id' ? : number

        'image' ? : ImagePOST

        'images' ? :

            Array <
            ImagePOST

            >
            'options' ? :

            Array <
            OptionPOST

            >
            'product_type': string

        'published' ? : boolean

        'published_scope' ? : "web" | "global"

        'tags' ? : string

        'template_suffix' ? : string

        'title': string

        'variants' ? :

            Array <
            VariantPOST

            >
            'vendor' ? : string

    }

;
type OptionPATCH =

    {
        'id' ? : number

        'name': string

    }

;
type PatchRespInventoryLevels =

    {
        'admin_graphql_api_id' ? : string

        'available' ? : number

        'inventory_item_id' ? : number

        'location_id' ? : number

        'updated_at' ? : string

    }

;
type ordersFulfillmentsCount =

    {
        'count' ? : number

    }

;
type OrderLineItemPOST =

    {
        'fulfillment_service' ? : string

        'fulfillable_quantity' ? : number

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'name' ? : string

        'price': string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxable' ? : boolean

        'title': string

        'variant_title' ? : string

        'variant_id' ? : number

        'vendor' ? : string

        'id' ? : number

        'properties' ? :

            Array <
            LineItemProperties

            >
    }

;
type ordersRefundsPOST =

    {
        'id' ? : number

        'note' ? : string

        'processed_at' ? : string

        'refund_line_items' ? :

            Array <
            ordersRefundsLineItemReq

            >
            'restock' ? : boolean

        'shipping' ? : ordersRefundsShippingReq

        'transactions' ? :

            Array <
            refundsTransactionPOST

            >
    }

;
type ordersFulfillmentsStatusCancel =

    {
        'admin_graphql_api_id' ? : string

        'created_at' ? : string

        'id' ? : number

        'line_items' ? :

            Array <
            fulfillmentsLineItems

            >
            'location_id' ? : number

        'notify_customer' ? : boolean

        'order_id' ? : number

        'receipt' ? : ordersFulfillmentsReceipt

        'service' ? : string

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'status' ? : string

        'tracking_company' ? : "4PX" | "APC" | "Amazon Logistics UK" | "Amazon Logistics US" | "Australia Post" | "Bluedart" | "Canada Post" | "China  Post" | "Correios" | "DHL Express" | "DHL eCommerce" | "DHL eCommerce Asia" | "Delhivery" | "Eagle" | "FSC" | "FedEx" | "FedEx UK" | "GLS" | "Globegistics" | "Japan Post" | "New Zealand Post" | "PostNord" | "Purolator" | "Royal Mail" | "Sagawa (EN)" | "Sagawa (JA)" | "TNT" | "TNT Post" | "UPS" | "USPS" | "Yamato (EN)" | "Yamato (JA)"

        'tracking_number' ? : string

        'tracking_numbers' ? :

            Array < string

            >
            'tracking_url' ? : string

        'tracking_urls' ? :

            Array < string

            >
            'updated_at' ? : string

        'variant_inventory_management' ? : string

    }

;
type ordersRefunds =

    {
        'admin_graphql_api_id' ? : string

        'created_at' ? : string

        'id' ? : number

        'note' ? : string

        'order_adjustments' ? :

            Array <
            refundOrderAdjustments

            >
            'order_id' ? : number

        'processed_at' ? : string

        'refund_line_items' ? :

            Array <
            ordersRefundsLineItem

            >
            'restock' ? : boolean

        'transactions' ? :

            Array <
            refundsTransaction

            >
            'user_id' ? : number

    }

;
type Order =

    {
        'device_id' ? : number

        'source_url' ? : string

        'source_identifier' ? : string

        'landing_site_ref' ? : string

        'reference' ? : string

        'admin_graphql_api_id' ? : string

        'discount_applications' ? :

            Array <
            Orderdiscount_applications

            >
            'checkout_id' ? : number

        'checkout_token' ? : string

        'payment_details' ? : TransactionPaymentDetails

        'confirmed' ? : boolean

        'refunds' ? :

            Array <
            OrderRefund

            >
            'test' ? : boolean

        'payment_gateway_names' ? :

            Array < string

            >
            'note_attributes' ? :

            Array <
            OrderNoteAttribute

            >
            'gateway' ? : string

        'buyer_accepts_marketing' ? : boolean

        'created_at' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'customer' ? : OrderCustomer

        'discount_codes' ? :

            Array <
            AbandonedChkoutDiscount_code

            >
            'email' ? : string

        'financial_status' ? : "authorized" | "pending" | "paid" | "partially_paid" | "refunded" | "voided" | "partially_refunded"

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'fulfillments' ? :

            Array <
            OrderFulfillment

            >
            'id' ? : number

        'line_items' ? :

            Array <
            OrderLineItem

            >
            'name' ? : string

        'number' ? : number

        'order_number' ? : number

        'processed_at' ? : string

        'processing_method' ? : "" | "checkout" | "direct" | "manual" | "offsite" | "express"

        'shipping_lines' ? :

            Array <
            OrderShippingLine

            >
            'source' ? : string

        'source_name' ? : string

        'subtotal_price' ? : string

        'tags' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxes_included' ? : boolean

        'token' ? : string

        'total_discounts' ? : string

        'total_line_items_price' ? : string

        'total_price' ? : string

        'total_price_usd' ? : string

        'total_tax' ? : string

        'total_weight' ? : number

        'transactions' ? :

            Array <
            Transaction

            >
            'updated_at' ? : string

        'url' ? : string

        'note' ? : string

        'billing_address' ? : Address

        'contact_email' ? : string

        'shipping_address' ? : Address

        'app_id' ? : number

        'order_status_url' ? : string

        'user_id' ? : number

        'cancel_reason' ? : "customer" | "fraud" | "inventory" | "other" | "declined" | "null"

        'browser_ip' ? : string

        'cancelled_at' ? : string

        'cart_token' ? : string

        'client_details' ? : OrderClientDetails

        'closed_at' ? : string

        'customer_locale' ? : string

        'landing_site' ? : string

        'location_id' ? : number

        'phone' ? : string

        'referring_site' ? : string

    }

;
type Receipt =

    {}

;
type fulfillmentsLineItems =

    {
        'admin_graphql_api_id' ? : string

        'applied_discounts' ? :

            Array < string

            >
            'destination_location' ? : lineItemDestination_location

        'destination_location_id' ? : number

        'discount_allocations' ? :

            Array <
            lineItemDiscount_allocations

            >
            'discount_amounts' ? :

            Array <
            lineItemDiscount_amounts

            >
            'fulfillable_quantity' ? : number

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'id' ? : number

        'key' ? : string

        'line_price' ? : string

        'name' ? : string

        'origin_location' ? : lineItemOrigin_location

        'origin_location_id' ? : number

        'price' ? : string

        'product_exists' ? : boolean

        'product_id' ? : number

        'properties' ? :

            Array <
            lineItemProperties

            >
            'quantity' ? : number

        'requires_shipping' ? : boolean

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'sku' ? : string

        'tax_lines' ? :

            Array <
            lineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'total_discount' ? : string

        'variant_id' ? : number

        'variant_inventory_management' ? : string

        'variant_title' ? : string

        'vendor' ? : string

    }

;
type OrderRefundLineItem =

    {
        'restock_type' ? : "no_restock" | "cancel" | "return" | "legacy_restock"

        'location_id' ? : number

        'id' ? : number

        'line_item' ? : OrderRefundLineItemLineItem

        'line_item_id' ? : number

        'quantity' ? : number

        'subtotal' ? : number

        'total_tax' ? : number

    }

;
type refundsTransactionPOST =

    {
        'amount' ? : string

        'authorization' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'device_id' ? : number

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : "authorization" | "capture" | "sale" | "void" | "refund"

        'message' ? : string

        'payment_details' ? : refundsPaymentDetailsPOST

        'receipt' ? : refundsTransactionReceipt

        'source_name' ? : string

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

    }

;
type customCollections =

    {
        'body_html' ? : string

        'handle' ? : string

        'id' ? : number

        'image' ? : image

        'products_count' ? : number

        'published_at' ? : string

        'published_scope' ? : string

        'sort_order' ? : string

        'template_suffix' ? : string

        'title' ? : string

        'updated_at' ? : string

    }

;
type fulfillmentEvents =

    {
        'address1' ? : string

        'admin_graphql_api_id' ? : string

        'city' ? : string

        'country' ? : string

        'created_at' ? : string

        'estimated_delivery_at' ? : string

        'fulfillment_id' ? : number

        'happened_at' ? : string

        'id' ? : number

        'latitude' ? : number

        'longitude' ? : number

        'message' ? : string

        'order_id' ? : number

        'province' ? : string

        'shop_id' ? : number

        'status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

        'updated_at' ? : string

        'zip' ? : string

    }

;
type refundsPaymentDetailsReq =

    {
        'avs_result_code' ? : string

        'credit_card_bin' ? : string

        'credit_card_company' ? : string

        'credit_card_number' ? : string

        'cvv_result_code' ? : string

    }

;
type collectsCount =

    {
        'count' ? : number

    }

;
type Transaction =

    {
        'admin_graphql_api_id' ? : string

        'amount' ? : string

        'authorization' ? : string

        'created_at' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'device_id' ? : number

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : "authorization" | "capture" | "sale" | "void" | "refund"

        'location_id' ? : number

        'order_id' ? : number

        'payment_details' ? : TransactionPaymentDetails

        'receipt' ? : Receipt

        'source_name' ? : string

        'status' ? : "pending" | "failure" | "success" | "error"

        'user_id' ? : number

        'test' ? : boolean

        'parent_id' ? : number

        'message' ? : string

    }

;
type smartCollectionsPOST =

    {
        'body_html' ? : string

        'disjunctive' ? : boolean

        'handle' ? : string

        'id' ? : number

        'image' ? : image_POST

        'published': boolean

        'published_at' ? : string

        'published_scope' ? : string

        'rules' ? :

            Array <
            rules

            >
            'sort_order' ? : string

        'template_suffix' ? : string

        'title': string

        'updated_at' ? : string

    }

;
type Option =

    {
        'id' ? : number

        'values' ? :

            Array < string

            >
            'name' ? : string

        'position' ? : number

        'product_id' ? : number

    }

;
type refundsTransactionReceipt =

    {}

;
type refundsLineItemReq =

    {
        'applied_discounts' ? :

            Array < string

            >
            'destination_location_id' ? : number

        'fulfillable_quantity' ? : number

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'id' ? : number

        'key' ? : string

        'line_price' ? : string

        'name' ? : string

        'origin_location_id' ? : number

        'price' ? : string

        'product_exists' ? : boolean

        'product_id' ? : number

        'properties' ? :

            Array <
            lineItemProperties

            >
            'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            refundsTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'total_discount' ? : string

        'variant_id' ? : number

        'variant_inventory_management' ? : string

        'variant_title' ? : string

        'vendor' ? : string

    }

;
type objectsMetadata =

    {
        'fields' ? :

            Array <
            objectsMetadataFields

            >
    }

;
type inventoryItemsObject =

    {
        'admin_graphql_api_id' ? : string

        'created_at' ? : string

        'id' ? : number

        'sku' ? : string

        'tracked' ? : boolean

        'updated_at' ? : string

    }

;
type refundsTaxLine =

    {
        'compare_at' ? : string

        'position' ? : number

        'price' ? : string

        'rate' ? : number

        'source' ? : string

        'title' ? : string

        'zone' ? : string

    }

;
type swaggerschema =

    {
        '$ref' ? : string

    }

;
type ModelDate =

    {
        'value' ? : string

    }

;
type TaxLine =

    {
        'price': string

        'rate': number

        'title': string

    }

;
type swaggerparametersschema =

    {
        '$ref' ? : string

    }

;
type InventoryLevelsListObject =

    {
        'admin_graphql_api_id' ? : string

        'available' ? : number

        'inventory_item_id' ? : number

        'location_id' ? : number

        'updated_at' ? : string

    }

;
type swaggerresponses =

    {
        '200' ? : swagger200

        '400' ? : swagger400

        '401' ? : swagger401

        '403' ? : swagger403

        '404' ? : swagger404

        '405' ? : swagger405

        '406' ? : swagger406

        '409' ? : swagger409

        '415' ? : swagger415

        '500' ? : swagger500

        '502' ? : swagger502

    }

;
type swaggerproperties =

    {
        'definition-property' ? : swaggerdefinition_property

    }

;
type objectmetafields =

    {
        'created_at' ? : string

        'id' ? : number

        'key' ? : string

        'namespace' ? : string

        'owner_id' ? : number

        'owner_resource' ? : string

        'updated_at' ? : string

        'value' ? : number

        'value_type' ? : string

    }

;
type AbandonedChkoutShippingLine =

    {
        'carrier_service_id' ? : string

        'delivery_category' ? : string

        'api_client_id' ? : string

        'phone' ? : string

        'custom_tax_lines' ? : string

        'carrier_identifier' ? : string

        'requested_fulfillment_service_id' ? : string

        'validation_context' ? : string

        'code' ? : string

        'price' ? : string

        'source' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'title' ? : string

        'markup' ? : string

        'id' ? : string

        'applied_discounts' ? :

            Array < string

            >
    }

;
type refundCalculatetransactions =

    {
        'amount' ? : string

        'authorization' ? : string

        'created_at' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'device_id' ? : number

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : string

        'maximum_refundable' ? : string

        'message' ? : string

        'order_id' ? : number

        'parent_id' ? : number

        'payment_details' ? : refundsPaymentDetails

        'receipt' ? : refundsTransactionReceipt

        'source_name' ? : string

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

        'user_id' ? : string

    }

;
type imagePOST =

    {
        'height' ? : number

        'src': string

        'width' ? : number

    }

;
type ProductPATCH =

    {
        'metafields' ? :

            Array <
            MetaFieldPOST

            >
            'metafields_global_description_tag' ? : string

        'metafields_global_title_tag' ? : string

        'body_html' ? : string

        'handle' ? : string

        'id' ? : number

        'image' ? : ImagePATCH

        'images' ? :

            Array <
            ImagePATCH

            >
            'options' ? :

            Array <
            OptionPATCH

            >
            'product_type' ? : string

        'published' ? : boolean

        'published_scope' ? : "web" | "global"

        'tags' ? : string

        'template_suffix' ? : string

        'title' ? : string

        'variants' ? :

            Array <
            Variant

            >
            'vendor' ? : string

    }

;
type LineItem =

    {
        'applied_discounts' ? :

            Array < string

            >
            'key' ? : string

        'fulfillment_service' ? : string

        'fulfillment_status' ? : string

        'gift_card' ? : boolean

        'grams' ? : number

        'line_price' ? : string

        'name' ? : string

        'price' ? : string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            TaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'variant_id' ? : number

        'variant_title' ? : string

        'vendor' ? : string

    }

;
type ordersPayments =

    {
        'admin_graphql_api_id' ? : string

        'amount' ? : string

        'authorization' ? : string

        'created_at' ? : string

        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"

        'device_id' ? : number

        'error_code' ? : "null" | "incorrect_number" | "invalid_number" | "invalid_expiry_date" | "invalid_cvc" | "expired_card" | "incorrect_cvc" | "incorrect_zip" | "incorrect_address" | "card_declined" | "processing_error" | "call_issuer" | "pick_up_card"

        'gateway' ? : string

        'id' ? : number

        'kind' ? : "authorization" | "capture" | "sale" | "void" | "refund"

        'location_id' ? : number

        'message' ? : string

        'order_id' ? : number

        'parent_id' ? : number

        'payment_details' ? : paymentDetails

        'receipt' ? : paymentsReceipt

        'source_name' ? : string

        'status' ? : "pending" | "failure" | "success" | "error"

        'test' ? : boolean

        'user_id' ? : string

    }

;
type PatchInventoryLevels =

    {
        'available_adjustment': number

    }

;
type ordersFulfillmentsPATCH =

    {
        'id' ? : number

        'line_items' ? :

            Array <
            fulfillmentsLineItemsPatch

            >
            'notify_customer' ? : boolean

        'receipt' ? : ordersFulfillmentsReceipt

        'service' ? : string

        'status' ? : string

        'tracking_company' ? : "4PX" | "APC" | "Amazon Logistics UK" | "Amazon Logistics US" | "Australia Post" | "Bluedart" | "Canada Post" | "China  Post" | "Correios" | "DHL Express" | "DHL eCommerce" | "DHL eCommerce Asia" | "Delhivery" | "Eagle" | "FSC" | "FedEx" | "FedEx UK" | "GLS" | "Globegistics" | "Japan Post" | "New Zealand Post" | "PostNord" | "Purolator" | "Royal Mail" | "Sagawa (EN)" | "Sagawa (JA)" | "TNT" | "TNT Post" | "UPS" | "USPS" | "Yamato (EN)" | "Yamato (JA)"

        'tracking_number' ? : string

        'tracking_numbers' ? :

            Array < string

            >
            'tracking_url' ? : string

        'tracking_urls' ? :

            Array < string

            >
            'variant_inventory_management' ? : string

    }

;
type weight_based_shipping_rates =

    {
        'id' ? : number

        'name' ? : string

        'price' ? : string

        'shipping_zone_id' ? : number

        'weight_high' ? : number

        'weight_low' ? : number

    }

;
type shippingZonesListObject =

    {
        'carrier_shipping_rate_providers' ? :

            Array <
            carrier_shipping_rate_providers

            >
            'countries' ? :

            Array <
            countries_custom

            >
            'id' ? : number

        'name' ? : string

        'price_based_shipping_rates' ? :

            Array <
            price_based_shipping_rates

            >
            'weight_based_shipping_rates' ? :

            Array <
            weight_based_shipping_rates

            >
    }

;
type productsVariants =

    {
        'admin_graphql_api_id' ? : string

        'barcode' ? : string

        'compare_at_price' ? : string

        'created_at' ? : string

        'fulfillment_service' ? : string

        'grams' ? : number

        'id' ? : number

        'image_id' ? : number

        'inventory_item_id' ? : number

        'inventory_management' ? : string

        'inventory_policy' ? : "deny" | "continue"

        'inventory_quantity' ? : number

        'inventory_quantity_adjustment' ? : number

        'metafields' ? :

            Array <
            metaField

            >
            'old_inventory_quantity' ? : number

        'option1' ? : string

        'option2' ? : string

        'option3' ? : string

        'position' ? : number

        'price' ? : string

        'product_id' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'taxable' ? : boolean

        'title' ? : string

        'updated_at' ? : string

        'weight' ? : number

        'weight_unit' ? : "g" | "kg" | "oz" | "lb"

    }

;
type ordersRefundsCalculatePOST =

    {
        'id' ? : number

        'refund_line_items' ? :

            Array <
            refundCalculatelineitemReq

            >
            'shipping' ? : ordersRefundsCalculateShippingReq

        'transactions' ? :

            Array <
            refundCalculatetransactionsPOST

            >
    }

;
type FulfillmentLineItem =

    {
        'origin_location' ? : OrderLineItemOrigin_location

        'destination_location' ? : OrderLineItemDestination_location

        'discount_allocations' ? :

            Array <
            OrderLineItemDiscount_allocations

            >
            'discount_amounts' ? :

            Array <
            OrderLineItemDiscount_amounts

            >
            'admin_graphql_api_id' ? : string

        'applied_discounts' ? :

            Array < string

            >
            'key' ? : string

        'fulfillment_service' ? : string

        'fulfillment_status' ? : "fulfilled" | "null" | "partial"

        'gift_card' ? : boolean

        'grams' ? : number

        'line_price' ? : string

        'name' ? : string

        'price' ? : string

        'product_id' ? : number

        'quantity' ? : number

        'requires_shipping' ? : boolean

        'sku' ? : string

        'tax_lines' ? :

            Array <
            LineItemTaxLine

            >
            'taxable' ? : boolean

        'title' ? : string

        'variant_id' ? : number

        'variant_title' ? : string

        'vendor' ? : string

        'origin_location_id' ? : number

        'destination_location_id' ? : number

        'fulfillable_quantity' ? : number

        'total_discount' ? : string

        'product_exists' ? : boolean

        'id' ? : number

        'properties' ? :

            Array <
            LineItemProperties

            >
            'variant_inventory_management' ? : string

        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"

    }

;
type customersAddressPATCH =

    {
        'address1' ? : string

        'address2' ? : string

        'city' ? : string

        'company' ? : string

        'country' ? : string

        'country_code' ? : "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"

        'country_name' ? : string

        'default' ? : boolean

        'first_name' ? : string

        'id' ? : number

        'last_name' ? : string

        'name' ? : string

        'phone' ? : string

        'province' ? : string

        'province_code' ? : string

        'zip' ? : string

    }

;

type Logger = {
    log: (line: string) => any
};

class shopifySDKMethodParameters {
    protected _body: any;
    protected headers: any;
    protected queryParameters: any;
    protected form: any;
    constructor(public superThis: shopifySDK, protected method: string, protected path: string) {
        this.queryParameters = {};
        this.headers = {};
        this.form = {};
    }
}

class getAbandonedCheckoutsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    page(page: number

    ): getAbandonedCheckoutsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getAbandonedCheckoutsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        AbandonedCheckout

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createBulkQueryParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, q: string

    ) {
        super(superThis, method, path);
        this.queryParameters['q'] = q;
    }
    elementsAsyncCallbackUrl(elementsAsyncCallbackUrl: string

    ): createBulkQueryParameters {
        this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
        return this;
    }
    lastRunDate(lastRunDate: string

    ): createBulkQueryParameters {
        this.queryParameters['lastRunDate'] = lastRunDate;
        return this;
    }
    from(from: string

    ): createBulkQueryParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): createBulkQueryParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    continueFromJobId(continueFromJobId: number

    ): createBulkQueryParameters {
        this.queryParameters['continueFromJobId'] = continueFromJobId;
        return this;
    }
    run(): Promise <
        BulkQuery

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceBulkCancelParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        BulkStatus

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getBulkErrorsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    page(page: number

    ): getBulkErrorsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getBulkErrorsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getBulkErrorsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    run(): Promise <

        Array < string

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getBulkStatusParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        BulkStatus

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getBulkByObjectNameParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createBulkByObjectNameParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    elementsAsyncCallbackUrl(elementsAsyncCallbackUrl: string

    ): createBulkByObjectNameParameters {
        this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
        return this;
    }
    metaData(metaData: string

    ): createBulkByObjectNameParameters {
        this.form['metaData'] = metaData;
        return this;
    }
    file(file:

        {}

    ): createBulkByObjectNameParameters {
        this.form['file'] = file;
        return this;
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class createCollectParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, collects:
        collectsPOST

    ) {
        super(superThis, method, path);
        this._body = collects;
    }
    run(): Promise <
        collects

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCollectsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    pageSize(pageSize: string

    ): getCollectsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    where(where: string

    ): getCollectsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: string

    ): getCollectsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        collects

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCollectsCountParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        collectsCount

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCollectByCollectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, collectId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{collectId}', `${collectId}`);
    }
    where(where: string

    ): getCollectByCollectIdParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    run(): Promise <
        collects

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteCollectByCollectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, collectId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{collectId}', `${collectId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getCountriesParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    page(page: string

    ): getCountriesParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    sinceId(sinceId: number

    ): getCountriesParameters {
        this.queryParameters['since_id'] = sinceId;
        return this;
    }
    pageSize(pageSize: string

    ): getCountriesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        countries

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCountryByCountryIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, countryId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{countryId}', `${countryId}`);
    }
    pageSize(pageSize: string

    ): getCountryByCountryIdParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getCountryByCountryIdParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        countries

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createCustomCollectionParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customCollections:
        customCollectionsPOST

    ) {
        super(superThis, method, path);
        this._body = customCollections;
    }
    run(): Promise <
        customCollections

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomCollectionsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    pageSize(pageSize: string

    ): getCustomCollectionsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    where(where: string

    ): getCustomCollectionsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: string

    ): getCustomCollectionsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        customCollections

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomCollectionsCountParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getCustomCollectionsCountParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    run(): Promise <
        customCollectionsCount

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateCustomCollectionByCustomCollectionIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customCollectionId: string

        , customCollections:
        customCollectionsPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customCollectionId}', `${customCollectionId}`);
        this._body = customCollections;
    }
    run(): Promise <
        customCollections

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomCollectionByCustomCollectionIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customCollectionId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customCollectionId}', `${customCollectionId}`);
    }
    where(where: string

    ): getCustomCollectionByCustomCollectionIdParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    pageSize(pageSize: string

    ): getCustomCollectionByCustomCollectionIdParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getCustomCollectionByCustomCollectionIdParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        customCollections

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteCustomCollectionByCustomCollectionIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customCollectionId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customCollectionId}', `${customCollectionId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getCustomersParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getCustomersParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: number

    ): getCustomersParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getCustomersParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    orderBy(orderBy: string

    ): getCustomersParameters {
        this.queryParameters['orderBy'] = orderBy;
        return this;
    }
    returnTotalCount(returnTotalCount: boolean

    ): getCustomersParameters {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    }
    run(): Promise <

        Array <
        Customer

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createCustomerParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customer:
        CustomerPOST

    ) {
        super(superThis, method, path);
        this._body = customer;
    }
    run(): Promise <
        Customer

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createCustomerAddresseParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customerId: string

        , address:
        customersAddressPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customerId}', `${customerId}`);
        this._body = address;
    }
    run(): Promise <
        customersAddress

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersAddressesParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customerId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customerId}', `${customerId}`);
    }
    pageSize(pageSize: number

    ): getCustomersAddressesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: number

    ): getCustomersAddressesParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        customersAddress

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateCustomersAddresseByAddressIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customerId: string

        , addressId: string

        , address:
        customersAddressPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customerId}', `${customerId}`);
        this.path = this.path.replace('{addressId}', `${addressId}`);
        this._body = address;
    }
    run(): Promise <
        customersAddress

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersAddresseByAddressIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customerId: string

        , addressId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customerId}', `${customerId}`);
        this.path = this.path.replace('{addressId}', `${addressId}`);
    }
    run(): Promise <
        customersAddress

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteCustomersAddresseByAddressIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, customerId: string

        , addressId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{customerId}', `${customerId}`);
        this.path = this.path.replace('{addressId}', `${addressId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteCustomerByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getCustomerByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Customer

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateCustomerByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , customer:
        CustomerPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = customer;
    }
    run(): Promise <
        Customer

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersAbandonedCheckoutsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    page(page: number

    ): getCustomersAbandonedCheckoutsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getCustomersAbandonedCheckoutsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        AbandonedCheckout

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersOrdersParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    page(page: number

    ): getCustomersOrdersParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getCustomersOrdersParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        Order

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getDiscountCodeByCodeParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, code: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{code}', `${code}`);
    }
    run(): Promise <
        discountCode

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInventoryItemsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, where: string

    ) {
        super(superThis, method, path);
        this.queryParameters['where'] = where;
    }
    pageSize(pageSize: string

    ): getInventoryItemsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getInventoryItemsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        inventoryItemsObject

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateInventoryItemByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , body:
        PatchinventoryItems

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    run(): Promise <
        PatchRespinventoryItems

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getLocationsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    pageSize(pageSize: string

    ): getLocationsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getLocationsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        locationsObject

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateLocationsInventoryItemsInventoryLevelsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , inventoryItemId: string

        , body:
        PatchInventoryLevels

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{inventoryItemId}', `${inventoryItemId}`);
        this._body = body;
    }
    run(): Promise <
        PatchRespInventoryLevels

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createLocationInventoryItemInventoryLevelParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , inventoryItemId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{inventoryItemId}', `${inventoryItemId}`);
    }
    body(body:
        PostInventoryLevels

    ): createLocationInventoryItemInventoryLevelParameters {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
        return this;
    }
    run(): Promise <
        PostRespInventoryLevels

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getLocationsInventoryItemsInventoryLevelsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , inventoryItemId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{inventoryItemId}', `${inventoryItemId}`);
    }
    pageSize(pageSize: string

    ): getLocationsInventoryItemsInventoryLevelsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getLocationsInventoryItemsInventoryLevelsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        InventoryLevelsListObject

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getLocationsInventoryLevelsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    pageSize(pageSize: string

    ): getLocationsInventoryLevelsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getLocationsInventoryLevelsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        locationsInventoryLevelsObject

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createMetafieldParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, body:
        metafieldsPOST

    ) {
        super(superThis, method, path);
        this._body = body;
    }
    run(): Promise <
        metafields

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetafieldsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getMetafieldsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    pageSize(pageSize: string

    ): getMetafieldsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getMetafieldsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        metafields

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetafieldsCountParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        metafieldsCount

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateMetafieldByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , body:
        metafieldsPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    run(): Promise <
        metafields

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetafieldByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        metafields

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteMetafieldByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getObjectsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <

        Array < string

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getObjectsObjectNameDocsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    discovery(discovery: boolean

    ): getObjectsObjectNameDocsParameters {
        this.queryParameters['discovery'] = discovery;
        return this;
    }
    resolveReferences(resolveReferences: boolean

    ): getObjectsObjectNameDocsParameters {
        this.queryParameters['resolveReferences'] = resolveReferences;
        return this;
    }
    basic(basic: boolean

    ): getObjectsObjectNameDocsParameters {
        this.queryParameters['basic'] = basic;
        return this;
    }
    run(): Promise <
        swaggerDocs

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getObjectsObjectNameMetadataParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        objectsMetadata

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getOrdersParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: number

    ): getOrdersParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getOrdersParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    orderBy(orderBy: string

    ): getOrdersParameters {
        this.queryParameters['orderBy'] = orderBy;
        return this;
    }
    returnTotalCount(returnTotalCount: boolean

    ): getOrdersParameters {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    }
    run(): Promise <

        Array <
        Order

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrderParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, order:
        OrderPOST

    ) {
        super(superThis, method, path);
        this._body = order;
    }
    run(): Promise <
        Order

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrderByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getOrderByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Order

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateOrderByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , order:
        OrderPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = order;
    }
    action(action: string

    ): updateOrderByIdParameters {
        this.queryParameters['action'] = action;
        return this;
    }
    run(): Promise <
        Order

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrderFulfillmentParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillment:
        ordersFulfillmentsPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this._body = fulfillment;
    }
    run(): Promise <
        ordersFulfillments

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersFulfillmentsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
    }
    where(where: string

    ): getOrdersFulfillmentsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    pageSize(pageSize: string

    ): getOrdersFulfillmentsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getOrdersFulfillmentsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        ordersFulfillments

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersFulfillmentsCountParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
    }
    where(where: string

    ): getOrdersFulfillmentsCountParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    run(): Promise <
        ordersFulfillmentsCount

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateOrdersFulfillmentByFulfillmentIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

        , body:
        ordersFulfillmentsPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
        this._body = body;
    }
    run(): Promise <
        ordersFulfillments

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersFulfillmentByFulfillmentIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
    }
    where(where: string

    ): getOrdersFulfillmentByFulfillmentIdParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    run(): Promise <
        ordersFulfillments

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrderFulfillmentFulfillmentEventParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

        , body:
        fulfillmentEventsPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
        this._body = body;
    }
    run(): Promise <
        fulfillmentEvents

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersFulfillmentsFulfillmentEventsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
    }
    run(): Promise <

        Array <
        fulfillmentEvents

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersFulfillmentsFulfillmentEventByEventIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

        , eventId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
        this.path = this.path.replace('{eventId}', `${eventId}`);
    }
    run(): Promise <
        fulfillmentEvents

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

        , eventId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
        this.path = this.path.replace('{eventId}', `${eventId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class updateOrdersFulfillmentsStatusCancelParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
    }
    run(): Promise <
        ordersFulfillmentsStatusCancel

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateOrdersFulfillmentsStatusCompleteParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , fulfillmentId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{fulfillmentId}', `${fulfillmentId}`);
    }
    run(): Promise <
        ordersFulfillments

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersPaymentsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
    }
    where(where: string

    ): getOrdersPaymentsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: number

    ): getOrdersPaymentsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getOrdersPaymentsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        Transaction

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrderPaymentParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , body:
        ordersPaymentsPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this._body = body;
    }
    run(): Promise <
        ordersPayments

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersPaymentsCountParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
    }
    run(): Promise <
        ordersPaymentsCount

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersPaymentByPaymentIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , paymentId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{paymentId}', `${paymentId}`);
    }
    run(): Promise <
        Transaction

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrderRefundParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , refund:
        ordersRefundsPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this._body = refund;
    }
    run(): Promise <
        ordersRefunds

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersRefundsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
    }
    pageSize(pageSize: string

    ): getOrdersRefundsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getOrdersRefundsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    where(where: string

    ): getOrdersRefundsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    run(): Promise <

        Array <
        ordersRefunds

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrderRefundsCalculateParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , refundCalculate:
        ordersRefundsCalculatePOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this._body = refundCalculate;
    }
    run(): Promise <
        ordersRefundsCalculate

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersRefundByRefundIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , refundId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{refundId}', `${refundId}`);
    }
    run(): Promise <
        ordersRefunds

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrderRiskParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , risk:
        ordersRisksPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this._body = risk;
    }
    run(): Promise <
        ordersRisks

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersRisksParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
    }
    run(): Promise <

        Array <
        ordersRisks

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateOrdersRiskByRiskIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , riskId: string

        , risk:
        ordersRisksPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{riskId}', `${riskId}`);
        this._body = risk;
    }
    run(): Promise <
        ordersRisks

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrdersRiskByRiskIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , riskId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{riskId}', `${riskId}`);
    }
    run(): Promise <
        ordersRisks

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrdersRiskByRiskIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, orderId: string

        , riskId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{orderId}', `${orderId}`);
        this.path = this.path.replace('{riskId}', `${riskId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getPingParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        Pong

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createPriceRuleParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, priceRule:
        priceRulesPOST

    ) {
        super(superThis, method, path);
        this._body = priceRule;
    }
    run(): Promise <
        priceRules

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getPriceRulesParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    page(page: string

    ): getPriceRulesParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: string

    ): getPriceRulesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    where(where: string

    ): getPriceRulesParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    run(): Promise <

        Array <
        priceRules

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getPriceRuleByPriceRuleIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, priceRuleId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{priceRuleId}', `${priceRuleId}`);
    }
    run(): Promise <
        priceRules

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deletePriceRuleByPriceRuleIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, priceRuleId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{priceRuleId}', `${priceRuleId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class createPriceRuleDiscountCodeParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, priceRuleId: string

        , discountCode:
        discountCodePOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{priceRuleId}', `${priceRuleId}`);
        this._body = discountCode;
    }
    run(): Promise <
        discountCode

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getPriceRulesDiscountCodesParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, priceRuleId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{priceRuleId}', `${priceRuleId}`);
    }
    run(): Promise <

        Array <
        discountCode

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getPriceRulesDiscountCodeByDiscountCodeIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, priceRuleId: string

        , discountCodeId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{priceRuleId}', `${priceRuleId}`);
        this.path = this.path.replace('{discountCodeId}', `${discountCodeId}`);
    }
    run(): Promise <
        discountCode

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deletePriceRulesDiscountCodeByDiscountCodeIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, priceRuleId: string

        , discountCodeId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{priceRuleId}', `${priceRuleId}`);
        this.path = this.path.replace('{discountCodeId}', `${discountCodeId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getProductsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getProductsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: number

    ): getProductsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getProductsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    orderBy(orderBy: string

    ): getProductsParameters {
        this.queryParameters['orderBy'] = orderBy;
        return this;
    }
    returnTotalCount(returnTotalCount: boolean

    ): getProductsParameters {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    }
    run(): Promise <

        Array <
        Product

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createProductParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, product:
        ProductPOST

    ) {
        super(superThis, method, path);
        this._body = product;
    }
    run(): Promise <
        Product

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteProductByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getProductByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Product

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateProductByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , product:
        ProductPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = product;
    }
    run(): Promise <
        Product

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createProductVariantParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , variant:
        productsVariantsPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = variant;
    }
    run(): Promise <
        productsVariants

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getProductsVariantsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    pageSize(pageSize: number

    ): getProductsVariantsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: number

    ): getProductsVariantsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        productsVariants

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createProductImageParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, productId: string

        , image:
        productsImagesPOST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{productId}', `${productId}`);
        this._body = image;
    }
    run(): Promise <
        productsImages

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getProductsImagesParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, productId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{productId}', `${productId}`);
    }
    run(): Promise <

        Array <
        productsImages

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateProductsImageByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, productId: string

        , id: string

        , image:
        productsImagesPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{productId}', `${productId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = image;
    }
    run(): Promise <
        productsImages

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getProductsImageByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, productId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{productId}', `${productId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        productsImages

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteProductsImageByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, productId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{productId}', `${productId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteProductsVariantByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, productId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{productId}', `${productId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getQueryParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, q: string

    ) {
        super(superThis, method, path);
        this.queryParameters['q'] = q;
    }
    page(page: number

    ): getQueryParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getQueryParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    returnTotalCount(returnTotalCount: boolean

    ): getQueryParameters {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    }
    run(): Promise <

        Array <

        {}

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getShippingZonesParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    pageSize(pageSize: string

    ): getShippingZonesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getShippingZonesParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        shippingZonesListObject

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getShopsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <

        Array <
        Shop

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createSmartCollectionParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, smartCollections:
        smartCollectionsPOST

    ) {
        super(superThis, method, path);
        this._body = smartCollections;
    }
    run(): Promise <
        smartCollections

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getSmartCollectionsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getSmartCollectionsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    pageSize(pageSize: string

    ): getSmartCollectionsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    page(page: string

    ): getSmartCollectionsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    run(): Promise <

        Array <
        smartCollections

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateSmartCollectionByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , smartCollections:
        smartCollectionsPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = smartCollections;
    }
    run(): Promise <
        smartCollections

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getSmartCollectionByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        smartCollections

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteSmartCollectionByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class updateVariantByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

        , variant:
        variantsPATCH

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = variant;
    }
    run(): Promise <
        variants

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getVariantByIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        variants

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getByObjectNameParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    where(where: string

    ): getByObjectNameParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: number

    ): getByObjectNameParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getByObjectNameParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <

        {}

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createByObjectNameParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , body:

        {}

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createObjectNameMetafieldParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , id: string

        , body:
        metafields

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    run(): Promise <
        metafields

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getObjectNameMetafieldsParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <

        Array <
        objectmetafields

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getObjectNameMetafieldsCountParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        metafieldsCount

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateObjectNameMetafieldByMetafieldIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , id: string

        , metafieldId: string

        , body:
        metafields

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{metafieldId}', `${metafieldId}`);
        this._body = body;
    }
    run(): Promise <
        metafields

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getObjectNameMetafieldByMetafieldIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , id: string

        , metafieldId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{metafieldId}', `${metafieldId}`);
    }
    run(): Promise <
        metafields

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteObjectNameMetafieldByMetafieldIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , id: string

        , metafieldId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{metafieldId}', `${metafieldId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteObjectNameByObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , objectId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getObjectNameByObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , objectId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateObjectNameByObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , objectId: string

        , body:
        Object

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this._body = body;
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceObjectNameByObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , objectId: string

        , body:
        Object

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this._body = body;
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getObjectNameByChildObjectNameParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , objectId: string

        , childObjectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this.path = this.path.replace('{childObjectName}', `${childObjectName}`);
    }
    where(where: string

    ): getObjectNameByChildObjectNameParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    page(page: number

    ): getObjectNameByChildObjectNameParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getObjectNameByChildObjectNameParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        Object

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createObjectNameByChildObjectNameParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , objectId: string

        , childObjectName: string

        , body:
        Object

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this.path = this.path.replace('{childObjectName}', `${childObjectName}`);
        this._body = body;
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , childObjectName: string

        , objectId: string

        , childObjectId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{childObjectName}', `${childObjectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this.path = this.path.replace('{childObjectId}', `${childObjectId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , childObjectName: string

        , objectId: string

        , childObjectId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{childObjectName}', `${childObjectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this.path = this.path.replace('{childObjectId}', `${childObjectId}`);
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , childObjectName: string

        , objectId: string

        , childObjectId: string

        , body:
        Object

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{childObjectName}', `${childObjectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this.path = this.path.replace('{childObjectId}', `${childObjectId}`);
        this._body = body;
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters {
    constructor(superThis: shopifySDK, method: string, path: string, objectName: string

        , childObjectName: string

        , objectId: string

        , childObjectId: string

        , body:
        Object

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this.path = this.path.replace('{childObjectName}', `${childObjectName}`);
        this.path = this.path.replace('{objectId}', `${objectId}`);
        this.path = this.path.replace('{childObjectId}', `${childObjectId}`);
        this._body = body;
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};

/**
 * 
 * @class shopifySDK
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class shopifySDK {

    private domain: string = "https://console.cloud-elements.com/elements/api-v2/hubs/ecommerce";
    private logger: Logger = {
        log: msg => console.log(msg)
    };
    private errorHandlers: CallbackHandler[] = [];
    private authorizationHeader: string = null;

    constructor(baseUrl ? : string, authorizationHeader ? : string, logger ? : Logger) {
        if (baseUrl) {
            this.domain = `${baseUrl}/elements/api-v2`;
        }
        if (logger) {
            this.logger = logger;
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    public post(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('POST', path, body, headers, queryParameters, form)
    }

    public put(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('PUT', path, body, headers, queryParameters, form)
    }

    public patch(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('PATCH', path, body, headers, queryParameters, form)
    }

    public delete(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('DELETE', path, body, headers, queryParameters, form)
    }

    public get(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('GET', path, body, headers, queryParameters, form)
    }

    public request(method: string, path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any):
        Promise < request.Response > {
            return new Promise((resolve, reject) => {
                if (!body) {
                    body = {}
                }
                if (!headers) {
                    headers = {}
                }
                if (!queryParameters) {
                    queryParameters = {}
                }
                if (!form) {
                    form = {}
                }
                if (this.authorizationHeader && this.authorizationHeader.length > 0) {
                    headers.authorization = this.authorizationHeader
                }
                let url: string = this.domain + path;
                if (this.logger) {
                    this.logger.log(`Call ${method} ${url}`);
                }

                let req = (request as SuperAgentStatic)(method, url).query(queryParameters);

                Object.keys(headers).forEach(key => {
                    req.set(key, headers[key]);
                });

                if (body) {
                    req.send(body);
                }

                if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
                    req.set('Content-Type', 'application/json');
                }

                if (Object.keys(form).length > 0) {
                    req.type('form');
                    req.send(form);
                }

                req.end((error, response) => {
                    if (error || !response.ok) {
                        reject(error);
                        this.errorHandlers.forEach(handler => handler(error));
                    } else {
                        resolve(response);
                    }
                });
            });
        }

    /**
     * Retrieve abandoned checkouts from Shopify.
     * @method
     * @name shopifySDK#getAbandonedCheckouts
     */
    getAbandonedCheckouts(): getAbandonedCheckoutsParameters {
        return new getAbandonedCheckoutsParameters(this, 'GET', '/abandoned-checkouts');
    }

    /**
     * Create an asynchronous bulk query job.
     * @method
     * @name shopifySDK#createBulkQuery
     * @param {string} q - The CEQL query. When this parameter is omitted, all objects of the given type are returned via the bulk job. Endpoint limiters may still apply.
     */
    createBulkQuery(
        q: string

        ,
    ): createBulkQueryParameters {
        return new createBulkQueryParameters(this, 'POST', '/bulk/query', q);
    }

    /**
     * <span class='betaAPI'>beta</span> Cancel an asynchronous bulk query job.
     * @method
     * @name shopifySDK#replaceBulkCancel
     * @param {string} id - The ID of the bulk job to cancel.
     */
    replaceBulkCancel(
        id: string

        ,
    ): replaceBulkCancelParameters {
        return new replaceBulkCancelParameters(this, 'PUT', '/bulk/{id}/cancel', id);
    }

    /**
     * <span class='betaAPI'>beta</span> Retrieve the errors of a bulk job.
     * @method
     * @name shopifySDK#getBulkErrors
     * @param {string} id - The ID of the bulk job to retrieve its errors.
     */
    getBulkErrors(
        id: string

        ,
    ): getBulkErrorsParameters {
        return new getBulkErrorsParameters(this, 'GET', '/bulk/{id}/errors', id);
    }

    /**
     * Retrieve the status of a bulk job.
     * @method
     * @name shopifySDK#getBulkStatus
     * @param {string} id - The ID of the bulk job to retrieve its status.
     */
    getBulkStatus(
        id: string

        ,
    ): getBulkStatusParameters {
        return new getBulkStatusParameters(this, 'GET', '/bulk/{id}/status', id);
    }

    /**
     * Retrieve the results of an asynchronous bulk query.
     * @method
     * @name shopifySDK#getBulkByObjectName
     * @param {string} id - The ID of the bulk job
     * @param {string} objectName - The name of the object
     */
    getBulkByObjectName(
        id: string

        ,
        objectName: string

        ,
    ): getBulkByObjectNameParameters {
        return new getBulkByObjectNameParameters(this, 'GET', '/bulk/{id}/{objectName}', id, objectName);
    }

    /**
     * <span class='betaAPI'>beta</span> Upload a file of objects to be bulk uploaded to the provider.
     * @method
     * @name shopifySDK#createBulkByObjectName
     * @param {string} objectName - The name of the object for which data needs to be uploaded.
     */
    createBulkByObjectName(
        objectName: string

        ,
    ): createBulkByObjectNameParameters {
        return new createBulkByObjectNameParameters(this, 'POST', '/bulk/{objectName}', objectName);
    }

    /**
     * Add a product to a collection
     * @method
     * @name shopifySDK#createCollect
     * @param {} collects - The body of the collect
     */
    createCollect(
        collects:
        collectsPOST

        ,
    ): createCollectParameters {
        return new createCollectParameters(this, 'POST', '/collects', collects);
    }

    /**
     * List all collects or only those for specific products or collections
     * @method
     * @name shopifySDK#getCollects
     */
    getCollects(): getCollectsParameters {
        return new getCollectsParameters(this, 'GET', '/collects');
    }

    /**
     * Receive a count of all Collects
     * @method
     * @name shopifySDK#getCollectsCount
     */
    getCollectsCount(): getCollectsCountParameters {
        return new getCollectsCountParameters(this, 'GET', '/collects-count');
    }

    /**
     * Get the collect with a certain id, or for a given product and collection
     * @method
     * @name shopifySDK#getCollectByCollectId
     * @param {string} collectId - ID of the collect
     */
    getCollectByCollectId(
        collectId: string

        ,
    ): getCollectByCollectIdParameters {
        return new getCollectByCollectIdParameters(this, 'GET', '/collects/{collectId}', collectId);
    }

    /**
     * Remove a product from a collection
     * @method
     * @name shopifySDK#deleteCollectByCollectId
     * @param {string} collectId - ID of the collect
     */
    deleteCollectByCollectId(
        collectId: string

        ,
    ): deleteCollectByCollectIdParameters {
        return new deleteCollectByCollectIdParameters(this, 'DELETE', '/collects/{collectId}', collectId);
    }

    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountries
     */
    getCountries(): getCountriesParameters {
        return new getCountriesParameters(this, 'GET', '/countries');
    }

    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountryByCountryId
     * @param {string} countryId - ID of the country
     */
    getCountryByCountryId(
        countryId: string

        ,
    ): getCountryByCountryIdParameters {
        return new getCountryByCountryIdParameters(this, 'GET', '/countries/{countryId}', countryId);
    }

    /**
     * Create a new custom collection
     * @method
     * @name shopifySDK#createCustomCollection
     * @param {} customCollections - The custom-collections object
     */
    createCustomCollection(
        customCollections:
        customCollectionsPOST

        ,
    ): createCustomCollectionParameters {
        return new createCustomCollectionParameters(this, 'POST', '/custom-collections', customCollections);
    }

    /**
     * Get a list of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollections
     */
    getCustomCollections(): getCustomCollectionsParameters {
        return new getCustomCollectionsParameters(this, 'GET', '/custom-collections');
    }

    /**
     * Get a count of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollectionsCount
     */
    getCustomCollectionsCount(): getCustomCollectionsCountParameters {
        return new getCustomCollectionsCountParameters(this, 'GET', '/custom-collections-count');
    }

    /**
     * Update an existing custom collection
     * @method
     * @name shopifySDK#updateCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections that needs to be updated
     * @param {} customCollections - The custom-collections object that needs to be updated
     */
    updateCustomCollectionByCustomCollectionId(
        customCollectionId: string

        ,
        customCollections:
        customCollectionsPATCH

        ,
    ): updateCustomCollectionByCustomCollectionIdParameters {
        return new updateCustomCollectionByCustomCollectionIdParameters(this, 'PATCH', '/custom-collections/{customCollectionId}', customCollectionId, customCollections);
    }

    /**
     * Get a single custom collection
     * @method
     * @name shopifySDK#getCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom collection
     */
    getCustomCollectionByCustomCollectionId(
        customCollectionId: string

        ,
    ): getCustomCollectionByCustomCollectionIdParameters {
        return new getCustomCollectionByCustomCollectionIdParameters(this, 'GET', '/custom-collections/{customCollectionId}', customCollectionId);
    }

    /**
     * Remove a custom collection from the database
     * @method
     * @name shopifySDK#deleteCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections
     */
    deleteCustomCollectionByCustomCollectionId(
        customCollectionId: string

        ,
    ): deleteCustomCollectionByCustomCollectionIdParameters {
        return new deleteCustomCollectionByCustomCollectionIdParameters(this, 'DELETE', '/custom-collections/{customCollectionId}', customCollectionId);
    }

    /**
     * Find customers in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getCustomers
     */
    getCustomers(): getCustomersParameters {
        return new getCustomersParameters(this, 'GET', '/customers');
    }

    /**
     * Create a new customer in Shopify.
     * @method
     * @name shopifySDK#createCustomer
     * @param {} customer - The Customer object to be created.
     */
    createCustomer(
        customer:
        CustomerPOST

        ,
    ): createCustomerParameters {
        return new createCustomerParameters(this, 'POST', '/customers', customer);
    }

    /**
     * Creates a new address for a customer
     * @method
     * @name shopifySDK#createCustomerAddresse
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {} address - Body of the address
     */
    createCustomerAddresse(
        customerId: string

        ,
        address:
        customersAddressPOST

        ,
    ): createCustomerAddresseParameters {
        return new createCustomerAddresseParameters(this, 'POST', '/customers/{customerId}/addresses', customerId, address);
    }

    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresses
     * @param {string} customerId - The ID of the customer to get the address
     */
    getCustomersAddresses(
        customerId: string

        ,
    ): getCustomersAddressesParameters {
        return new getCustomersAddressesParameters(this, 'GET', '/customers/{customerId}/addresses', customerId);
    }

    /**
     * Creates a new address for a customer
     * @method
     * @name shopifySDK#updateCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {string} addressId - ID of the address
     * @param {} address - Body of the address
     */
    updateCustomersAddresseByAddressId(
        customerId: string

        ,
        addressId: string

        ,
        address:
        customersAddressPATCH

        ,
    ): updateCustomersAddresseByAddressIdParameters {
        return new updateCustomersAddresseByAddressIdParameters(this, 'PATCH', '/customers/{customerId}/addresses/{addressId}', customerId, addressId, address);
    }

    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     */
    getCustomersAddresseByAddressId(
        customerId: string

        ,
        addressId: string

        ,
    ): getCustomersAddresseByAddressIdParameters {
        return new getCustomersAddresseByAddressIdParameters(this, 'GET', '/customers/{customerId}/addresses/{addressId}', customerId, addressId);
    }

    /**
     * Removes an address from the customers address list
     * @method
     * @name shopifySDK#deleteCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     */
    deleteCustomersAddresseByAddressId(
        customerId: string

        ,
        addressId: string

        ,
    ): deleteCustomersAddresseByAddressIdParameters {
        return new deleteCustomersAddresseByAddressIdParameters(this, 'DELETE', '/customers/{customerId}/addresses/{addressId}', customerId, addressId);
    }

    /**
     * Delete a customer associated with a given ID from Shopify. Specifying a customer ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteCustomerById
     * @param {string} id - The ID of the customer to delete from Shopify.
     */
    deleteCustomerById(
        id: string

        ,
    ): deleteCustomerByIdParameters {
        return new deleteCustomerByIdParameters(this, 'DELETE', '/customers/{id}', id);
    }

    /**
     * Retrieve a customer associated with a given ID from Shopify. Specifying an ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getCustomerById
     * @param {string} id - The ID of the customer to retrieve from Shopify.
     */
    getCustomerById(
        id: string

        ,
    ): getCustomerByIdParameters {
        return new getCustomerByIdParameters(this, 'GET', '/customers/{id}', id);
    }

    /**
     * Update a customer associated with a given ID in Shopify. The update API uses the PATCH HTTP verb, so only those fields provided in the customer object will be updated, and those fields not provided will be left alone. Providing an ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#updateCustomerById
     * @param {string} id - The ID of the customer to update in Shopify.
     * @param {} customer - The customer object, with those fields that are to be updated.
     */
    updateCustomerById(
        id: string

        ,
        customer:
        CustomerPATCH

        ,
    ): updateCustomerByIdParameters {
        return new updateCustomerByIdParameters(this, 'PATCH', '/customers/{id}', id, customer);
    }

    /**
     * Find abandoned checkouts for the customer associated with a given ID. If the customer does not exist, an error response will be returned. If no abandoned checkouts are found in the given customer then an empty array will be returned.
     * @method
     * @name shopifySDK#getCustomersAbandonedCheckouts
     * @param {string} id - The ID of the customer to get abandoned checkouts from in Shopify.
     */
    getCustomersAbandonedCheckouts(
        id: string

        ,
    ): getCustomersAbandonedCheckoutsParameters {
        return new getCustomersAbandonedCheckoutsParameters(this, 'GET', '/customers/{id}/abandoned-checkouts', id);
    }

    /**
     * Find orders associated with a given customer ID. If the customer does not exist, an error response will be returned. If no orders are found in the given customer then an empty array will be returned.
     * @method
     * @name shopifySDK#getCustomersOrders
     * @param {string} id - The ID of the customer to get orders from in Shopify.
     */
    getCustomersOrders(
        id: string

        ,
    ): getCustomersOrdersParameters {
        return new getCustomersOrdersParameters(this, 'GET', '/customers/{id}/orders', id);
    }

    /**
     * Retrieve a discount code by name 
     * @method
     * @name shopifySDK#getDiscountCodeByCode
     * @param {string} code - Name of the discount code
     */
    getDiscountCodeByCode(
        code: string

        ,
    ): getDiscountCodeByCodeParameters {
        return new getDiscountCodeByCodeParameters(this, 'GET', '/discount-codes/{code}', code);
    }

    /**
     * Search for InventoryItems
     * @method
     * @name shopifySDK#getInventoryItems
     * @param {string} where - Show only certain inventory items, specified by a comma-seperated list of IDs. For example, <i> ids='2517889862,2518523974' </i>
     */
    getInventoryItems(
        where: string

        ,
    ): getInventoryItemsParameters {
        return new getInventoryItemsParameters(this, 'GET', '/inventory-items', where);
    }

    /**
     * Update an InventoryItem
     * @method
     * @name shopifySDK#updateInventoryItemById
     * @param {string} id - The InventoryItem ID
     * @param {} body - The InventoryItem body
     */
    updateInventoryItemById(
        id: string

        ,
        body:
        PatchinventoryItems

        ,
    ): updateInventoryItemByIdParameters {
        return new updateInventoryItemByIdParameters(this, 'PATCH', '/inventory-items/{id}', id, body);
    }

    /**
     * Search for Locations
     * @method
     * @name shopifySDK#getLocations
     */
    getLocations(): getLocationsParameters {
        return new getLocationsParameters(this, 'GET', '/locations');
    }

    /**
     * Update an InventoryLevel
     * @method
     * @name shopifySDK#updateLocationsInventoryItemsInventoryLevels
     * @param {string} id - The Location ID
     * @param {string} inventoryItemId - The InventoryItem ID
     * @param {} body - The InventoryLevel body
     */
    updateLocationsInventoryItemsInventoryLevels(
        id: string

        ,
        inventoryItemId: string

        ,
        body:
        PatchInventoryLevels

        ,
    ): updateLocationsInventoryItemsInventoryLevelsParameters {
        return new updateLocationsInventoryItemsInventoryLevelsParameters(this, 'PATCH', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId, body);
    }

    /**
     * Create an InventoryLevel
     * @method
     * @name shopifySDK#createLocationInventoryItemInventoryLevel
     * @param {string} id - The Location ID
     * @param {string} inventoryItemId - The InventoryItem ID
     */
    createLocationInventoryItemInventoryLevel(
        id: string

        ,
        inventoryItemId: string

        ,
    ): createLocationInventoryItemInventoryLevelParameters {
        return new createLocationInventoryItemInventoryLevelParameters(this, 'POST', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId);
    }

    /**
     * Search for InventoryLevels
     * @method
     * @name shopifySDK#getLocationsInventoryItemsInventoryLevels
     * @param {string} id - The comma separated list of Location IDs
     * @param {string} inventoryItemId - The comma separated list of InventoryItem IDs
     */
    getLocationsInventoryItemsInventoryLevels(
        id: string

        ,
        inventoryItemId: string

        ,
    ): getLocationsInventoryItemsInventoryLevelsParameters {
        return new getLocationsInventoryItemsInventoryLevelsParameters(this, 'GET', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId);
    }

    /**
     * Search for InventoryLevels of a location
     * @method
     * @name shopifySDK#getLocationsInventoryLevels
     * @param {string} id - The Location ID
     */
    getLocationsInventoryLevels(
        id: string

        ,
    ): getLocationsInventoryLevelsParameters {
        return new getLocationsInventoryLevelsParameters(this, 'GET', '/locations/{id}/inventory-levels', id);
    }

    /**
     * Create a new metafield for a store
     * @method
     * @name shopifySDK#createMetafield
     * @param {} body - The metafields object
     */
    createMetafield(
        body:
        metafieldsPOST

        ,
    ): createMetafieldParameters {
        return new createMetafieldParameters(this, 'POST', '/metafields', body);
    }

    /**
     * Get metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafields
     */
    getMetafields(): getMetafieldsParameters {
        return new getMetafieldsParameters(this, 'GET', '/metafields');
    }

    /**
     * Get a count of metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafieldsCount
     */
    getMetafieldsCount(): getMetafieldsCountParameters {
        return new getMetafieldsCountParameters(this, 'GET', '/metafields-count');
    }

    /**
     * Update a store metafield
     * @method
     * @name shopifySDK#updateMetafieldById
     * @param {string} id - ID of the metafield
     * @param {} body - The metafields object
     */
    updateMetafieldById(
        id: string

        ,
        body:
        metafieldsPATCH

        ,
    ): updateMetafieldByIdParameters {
        return new updateMetafieldByIdParameters(this, 'PATCH', '/metafields/{id}', id, body);
    }

    /**
     * Get a single store metafield by its ID
     * @method
     * @name shopifySDK#getMetafieldById
     * @param {string} id - The ID of metafields
     */
    getMetafieldById(
        id: string

        ,
    ): getMetafieldByIdParameters {
        return new getMetafieldByIdParameters(this, 'GET', '/metafields/{id}', id);
    }

    /**
     * Delete a store metafield
     * @method
     * @name shopifySDK#deleteMetafieldById
     * @param {string} id - ID of the metafield
     */
    deleteMetafieldById(
        id: string

        ,
    ): deleteMetafieldByIdParameters {
        return new deleteMetafieldByIdParameters(this, 'DELETE', '/metafields/{id}', id);
    }

    /**
     * Get a list of all the available objects.
     * @method
     * @name shopifySDK#getObjects
     */
    getObjects(): getObjectsParameters {
        return new getObjectsParameters(this, 'GET', '/objects');
    }

    /**
     * Get swagger docs for an object.
     * @method
     * @name shopifySDK#getObjectsObjectNameDocs
     * @param {string} objectName - The name of the object
     */
    getObjectsObjectNameDocs(
        objectName: string

        ,
    ): getObjectsObjectNameDocsParameters {
        return new getObjectsObjectNameDocsParameters(this, 'GET', '/objects/{objectName}/docs', objectName);
    }

    /**
     * Get a list of all the field for an object.
     * @method
     * @name shopifySDK#getObjectsObjectNameMetadata
     * @param {string} objectName - The name of the object
     */
    getObjectsObjectNameMetadata(
        objectName: string

        ,
    ): getObjectsObjectNameMetadataParameters {
        return new getObjectsObjectNameMetadataParameters(this, 'GET', '/objects/{objectName}/metadata', objectName);
    }

    /**
     * Find orders in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getOrders
     */
    getOrders(): getOrdersParameters {
        return new getOrdersParameters(this, 'GET', '/orders');
    }

    /**
     * Create a new order in Shopify.
     * @method
     * @name shopifySDK#createOrder
     * @param {} order - The Order object to be created.
     */
    createOrder(
        order:
        OrderPOST

        ,
    ): createOrderParameters {
        return new createOrderParameters(this, 'POST', '/orders', order);
    }

    /**
     * Delete an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteOrderById
     * @param {string} id - The ID of the order to delete from Shopify.
     */
    deleteOrderById(
        id: string

        ,
    ): deleteOrderByIdParameters {
        return new deleteOrderByIdParameters(this, 'DELETE', '/orders/{id}', id);
    }

    /**
     * Retrieve an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getOrderById
     * @param {string} id - The ID of the order to retrieve from Shopify.
     */
    getOrderById(
        id: string

        ,
    ): getOrderByIdParameters {
        return new getOrderByIdParameters(this, 'GET', '/orders/{id}', id);
    }

    /**
     * Update an order associated with a given ID in Shopify. Change an order's attributes such as note, email, buyer-accepts-marketing, or remove the customer association. The update API uses the PATCH HTTP verb, so only those fields provided in the order object will be updated, and those fields not provided will be left alone. Updating an order with an ID that does not exist will result in an error response. NOTE: To remove the customer association, set the 'customer' value to null.
     * @method
     * @name shopifySDK#updateOrderById
     * @param {string} id - The ID of the order to update in Shopify.
     * @param {} order - The order object, with those fields that are to be updated.
     */
    updateOrderById(
        id: string

        ,
        order:
        OrderPATCH

        ,
    ): updateOrderByIdParameters {
        return new updateOrderByIdParameters(this, 'PATCH', '/orders/{id}', id, order);
    }

    /**
     * Creates a fulfillment for the specified order and line items
     * @method
     * @name shopifySDK#createOrderFulfillment
     * @param {string} orderId - ID of the order
     * @param {} fulfillment - Body of the fulfillment
     */
    createOrderFulfillment(
        orderId: string

        ,
        fulfillment:
        ordersFulfillmentsPOST

        ,
    ): createOrderFulfillmentParameters {
        return new createOrderFulfillmentParameters(this, 'POST', '/orders/{orderId}/fulfillments', orderId, fulfillment);
    }

    /**
     * Get a list of all fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillments
     * @param {string} orderId - ID of the order
     */
    getOrdersFulfillments(
        orderId: string

        ,
    ): getOrdersFulfillmentsParameters {
        return new getOrdersFulfillmentsParameters(this, 'GET', '/orders/{orderId}/fulfillments', orderId);
    }

    /**
     * Count all the total number of fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillmentsCount
     * @param {string} orderId - ID of the order
     */
    getOrdersFulfillmentsCount(
        orderId: string

        ,
    ): getOrdersFulfillmentsCountParameters {
        return new getOrdersFulfillmentsCountParameters(this, 'GET', '/orders/{orderId}/fulfillments-count', orderId);
    }

    /**
     * Update tracking number for a fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment to be updated
     */
    updateOrdersFulfillmentByFulfillmentId(
        orderId: string

        ,
        fulfillmentId: string

        ,
        body:
        ordersFulfillmentsPATCH

        ,
    ): updateOrdersFulfillmentByFulfillmentIdParameters {
        return new updateOrdersFulfillmentByFulfillmentIdParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}', orderId, fulfillmentId, body);
    }

    /**
     * Get the representation of a specific fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     */
    getOrdersFulfillmentByFulfillmentId(
        orderId: string

        ,
        fulfillmentId: string

        ,
    ): getOrdersFulfillmentByFulfillmentIdParameters {
        return new getOrdersFulfillmentByFulfillmentIdParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}', orderId, fulfillmentId);
    }

    /**
     * Create a fulfillment event
     * @method
     * @name shopifySDK#createOrderFulfillmentFulfillmentEvent
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment event
     */
    createOrderFulfillmentFulfillmentEvent(
        orderId: string

        ,
        fulfillmentId: string

        ,
        body:
        fulfillmentEventsPOST

        ,
    ): createOrderFulfillmentFulfillmentEventParameters {
        return new createOrderFulfillmentFulfillmentEventParameters(this, 'POST', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events', orderId, fulfillmentId, body);
    }

    /**
     * Get a list of all fulfillment events for a fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEvents
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     */
    getOrdersFulfillmentsFulfillmentEvents(
        orderId: string

        ,
        fulfillmentId: string

        ,
    ): getOrdersFulfillmentsFulfillmentEventsParameters {
        return new getOrdersFulfillmentsFulfillmentEventsParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events', orderId, fulfillmentId);
    }

    /**
     * Get a fulfillment event
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     */
    getOrdersFulfillmentsFulfillmentEventByEventId(
        orderId: string

        ,
        fulfillmentId: string

        ,
        eventId: string

        ,
    ): getOrdersFulfillmentsFulfillmentEventByEventIdParameters {
        return new getOrdersFulfillmentsFulfillmentEventByEventIdParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}', orderId, fulfillmentId, eventId);
    }

    /**
     * Delete a fulfillment event
     * @method
     * @name shopifySDK#deleteOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     */
    deleteOrdersFulfillmentsFulfillmentEventByEventId(
        orderId: string

        ,
        fulfillmentId: string

        ,
        eventId: string

        ,
    ): deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters {
        return new deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters(this, 'DELETE', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}', orderId, fulfillmentId, eventId);
    }

    /**
     * Cancel a pending fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentsStatusCancel
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     */
    updateOrdersFulfillmentsStatusCancel(
        orderId: string

        ,
        fulfillmentId: string

        ,
    ): updateOrdersFulfillmentsStatusCancelParameters {
        return new updateOrdersFulfillmentsStatusCancelParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}/status-cancel', orderId, fulfillmentId);
    }

    /**
     * Complete a pending fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentsStatusComplete
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     */
    updateOrdersFulfillmentsStatusComplete(
        orderId: string

        ,
        fulfillmentId: string

        ,
    ): updateOrdersFulfillmentsStatusCompleteParameters {
        return new updateOrdersFulfillmentsStatusCompleteParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}/status-complete', orderId, fulfillmentId);
    }

    /**
     * Find payments in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getOrdersPayments
     * @param {string} orderId - The ID of the order to retrieve payments from in Shopify.
     */
    getOrdersPayments(
        orderId: string

        ,
    ): getOrdersPaymentsParameters {
        return new getOrdersPaymentsParameters(this, 'GET', '/orders/{orderId}/payments', orderId);
    }

    /**
     * Create a new transaction
     * @method
     * @name shopifySDK#createOrderPayment
     * @param {string} orderId - ID of the order
     * @param {} body - ID of the order
     */
    createOrderPayment(
        orderId: string

        ,
        body:
        ordersPaymentsPOST

        ,
    ): createOrderPaymentParameters {
        return new createOrderPaymentParameters(this, 'POST', '/orders/{orderId}/payments', orderId, body);
    }

    /**
     * Count all a given order’s money transfers
     * @method
     * @name shopifySDK#getOrdersPaymentsCount
     * @param {string} orderId - ID of the order
     */
    getOrdersPaymentsCount(
        orderId: string

        ,
    ): getOrdersPaymentsCountParameters {
        return new getOrdersPaymentsCountParameters(this, 'GET', '/orders/{orderId}/payments-count', orderId);
    }

    /**
     * Retrieve a payment associated with a given ID from Shopify. Specifying a payment ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getOrdersPaymentByPaymentId
     * @param {string} orderId - The ID of the order to retrieve the payment from in Shopify.
     * @param {string} paymentId - The ID of the payment to retrieve the from Shopify.
     */
    getOrdersPaymentByPaymentId(
        orderId: string

        ,
        paymentId: string

        ,
    ): getOrdersPaymentByPaymentIdParameters {
        return new getOrdersPaymentByPaymentIdParameters(this, 'GET', '/orders/{orderId}/payments/{paymentId}', orderId, paymentId);
    }

    /**
     * Create a refund for an existing order
     * @method
     * @name shopifySDK#createOrderRefund
     * @param {string} orderId - The order ID
     * @param {} refund - The refund
     */
    createOrderRefund(
        orderId: string

        ,
        refund:
        ordersRefundsPOST

        ,
    ): createOrderRefundParameters {
        return new createOrderRefundParameters(this, 'POST', '/orders/{orderId}/refunds', orderId, refund);
    }

    /**
     * Search for refunds for an order
     * @method
     * @name shopifySDK#getOrdersRefunds
     * @param {string} orderId - The order ID
     */
    getOrdersRefunds(
        orderId: string

        ,
    ): getOrdersRefundsParameters {
        return new getOrdersRefundsParameters(this, 'GET', '/orders/{orderId}/refunds', orderId);
    }

    /**
     * Calculate refund transactions based on line-items and shipping. The returned response can be used to create a refund
     * @method
     * @name shopifySDK#createOrderRefundsCalculate
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} refundCalculate - The body of the refund-calculate
     */
    createOrderRefundsCalculate(
        orderId: string

        ,
        refundCalculate:
        ordersRefundsCalculatePOST

        ,
    ): createOrderRefundsCalculateParameters {
        return new createOrderRefundsCalculateParameters(this, 'POST', '/orders/{orderId}/refunds-calculate', orderId, refundCalculate);
    }

    /**
     * Retrieve a specific refund
     * @method
     * @name shopifySDK#getOrdersRefundByRefundId
     * @param {string} orderId - The order ID 
     * @param {string} refundId - The refund ID
     */
    getOrdersRefundByRefundId(
        orderId: string

        ,
        refundId: string

        ,
    ): getOrdersRefundByRefundIdParameters {
        return new getOrdersRefundByRefundIdParameters(this, 'GET', '/orders/{orderId}/refunds/{refundId}', orderId, refundId);
    }

    /**
     * Create a new Order Risk for an Order
     * @method
     * @name shopifySDK#createOrderRisk
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} risk - The fraud risk to be created
     */
    createOrderRisk(
        orderId: string

        ,
        risk:
        ordersRisksPOST

        ,
    ): createOrderRiskParameters {
        return new createOrderRiskParameters(this, 'POST', '/orders/{orderId}/risks', orderId, risk);
    }

    /**
     * Get a list of all Order Risks
     * @method
     * @name shopifySDK#getOrdersRisks
     * @param {string} orderId - Id of the order
     */
    getOrdersRisks(
        orderId: string

        ,
    ): getOrdersRisksParameters {
        return new getOrdersRisksParameters(this, 'GET', '/orders/{orderId}/risks', orderId);
    }

    /**
     * Update an Order Risk entry
     * @method
     * @name shopifySDK#updateOrdersRiskByRiskId
     * @param {string} orderId - The ID of the order
     * @param {string} riskId - ID of the risk
     * @param {} risk - The fraud risk body to be updated
     */
    updateOrdersRiskByRiskId(
        orderId: string

        ,
        riskId: string

        ,
        risk:
        ordersRisksPATCH

        ,
    ): updateOrdersRiskByRiskIdParameters {
        return new updateOrdersRiskByRiskIdParameters(this, 'PATCH', '/orders/{orderId}/risks/{riskId}', orderId, riskId, risk);
    }

    /**
     * Get a single Order Risk by its ID
     * @method
     * @name shopifySDK#getOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     */
    getOrdersRiskByRiskId(
        orderId: string

        ,
        riskId: string

        ,
    ): getOrdersRiskByRiskIdParameters {
        return new getOrdersRiskByRiskIdParameters(this, 'GET', '/orders/{orderId}/risks/{riskId}', orderId, riskId);
    }

    /**
     * Delete an order risk entry
     * @method
     * @name shopifySDK#deleteOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     */
    deleteOrdersRiskByRiskId(
        orderId: string

        ,
        riskId: string

        ,
    ): deleteOrdersRiskByRiskIdParameters {
        return new deleteOrdersRiskByRiskIdParameters(this, 'DELETE', '/orders/{orderId}/risks/{riskId}', orderId, riskId);
    }

    /**
     * Ping the Element to confirm that the Hub Element has a heartbeat.  If the Element does not have a heartbeat, an error message will be returned.
     * @method
     * @name shopifySDK#getPing
     */
    getPing(): getPingParameters {
        return new getPingParameters(this, 'GET', '/ping');
    }

    /**
     * Add a price rule
     * @method
     * @name shopifySDK#createPriceRule
     * @param {} priceRule - The body of the price rule
     */
    createPriceRule(
        priceRule:
        priceRulesPOST

        ,
    ): createPriceRuleParameters {
        return new createPriceRuleParameters(this, 'POST', '/price-rules', priceRule);
    }

    /**
     * List all price rules
     * @method
     * @name shopifySDK#getPriceRules
     */
    getPriceRules(): getPriceRulesParameters {
        return new getPriceRulesParameters(this, 'GET', '/price-rules');
    }

    /**
     * Get a price rule with a certain id
     * @method
     * @name shopifySDK#getPriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     */
    getPriceRuleByPriceRuleId(
        priceRuleId: string

        ,
    ): getPriceRuleByPriceRuleIdParameters {
        return new getPriceRuleByPriceRuleIdParameters(this, 'GET', '/price-rules/{priceRuleId}', priceRuleId);
    }

    /**
     * Remove a price rule
     * @method
     * @name shopifySDK#deletePriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     */
    deletePriceRuleByPriceRuleId(
        priceRuleId: string

        ,
    ): deletePriceRuleByPriceRuleIdParameters {
        return new deletePriceRuleByPriceRuleIdParameters(this, 'DELETE', '/price-rules/{priceRuleId}', priceRuleId);
    }

    /**
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#createPriceRuleDiscountCode
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {} discountCode - Discount code to be created
     */
    createPriceRuleDiscountCode(
        priceRuleId: string

        ,
        discountCode:
        discountCodePOST

        ,
    ): createPriceRuleDiscountCodeParameters {
        return new createPriceRuleDiscountCodeParameters(this, 'POST', '/price-rules/{priceRuleId}/discount-codes', priceRuleId, discountCode);
    }

    /**
     * Get all discount codes for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodes
     * @param {string} priceRuleId - ID of the price rule to receive discount codes for
     */
    getPriceRulesDiscountCodes(
        priceRuleId: string

        ,
    ): getPriceRulesDiscountCodesParameters {
        return new getPriceRulesDiscountCodesParameters(this, 'GET', '/price-rules/{priceRuleId}/discount-codes', priceRuleId);
    }

    /**
     * Get all discount code for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discountCodeId
     */
    getPriceRulesDiscountCodeByDiscountCodeId(
        priceRuleId: string

        ,
        discountCodeId: string

        ,
    ): getPriceRulesDiscountCodeByDiscountCodeIdParameters {
        return new getPriceRulesDiscountCodeByDiscountCodeIdParameters(this, 'GET', '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}', priceRuleId, discountCodeId);
    }

    /**
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#deletePriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discount-code ID
     */
    deletePriceRulesDiscountCodeByDiscountCodeId(
        priceRuleId: string

        ,
        discountCodeId: string

        ,
    ): deletePriceRulesDiscountCodeByDiscountCodeIdParameters {
        return new deletePriceRulesDiscountCodeByDiscountCodeIdParameters(this, 'DELETE', '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}', priceRuleId, discountCodeId);
    }

    /**
     * Find products in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getProducts
     */
    getProducts(): getProductsParameters {
        return new getProductsParameters(this, 'GET', '/products');
    }

    /**
     * Create a new product in Shopify.
     * @method
     * @name shopifySDK#createProduct
     * @param {} product - The Product object to be created.
     */
    createProduct(
        product:
        ProductPOST

        ,
    ): createProductParameters {
        return new createProductParameters(this, 'POST', '/products', product);
    }

    /**
     * Delete a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteProductById
     * @param {string} id - The ID of the product to delete from Shopify.
     */
    deleteProductById(
        id: string

        ,
    ): deleteProductByIdParameters {
        return new deleteProductByIdParameters(this, 'DELETE', '/products/{id}', id);
    }

    /**
     * Retrieve a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getProductById
     * @param {string} id - The ID of the product to retrieve from Shopify.
     */
    getProductById(
        id: string

        ,
    ): getProductByIdParameters {
        return new getProductByIdParameters(this, 'GET', '/products/{id}', id);
    }

    /**
     * Update a product associated with a given ID in Shopify. The update API uses the PATCH HTTP verb, so only those fields provided in the product object will be updated, and those fields not provided will be left alone. Providing a product ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#updateProductById
     * @param {string} id - The ID of the product to update in Shopify.
     * @param {} product - The product object, with those fields that are to be updated.
     */
    updateProductById(
        id: string

        ,
        product:
        ProductPATCH

        ,
    ): updateProductByIdParameters {
        return new updateProductByIdParameters(this, 'PATCH', '/products/{id}', id, product);
    }

    /**
     * Create a varient 
     * @method
     * @name shopifySDK#createProductVariant
     * @param {string} id - The product ID to create a variant for
     * @param {} variant - The variant to be created. See model for an example
     */
    createProductVariant(
        id: string

        ,
        variant:
        productsVariantsPOST

        ,
    ): createProductVariantParameters {
        return new createProductVariantParameters(this, 'POST', '/products/{id}/variants', id, variant);
    }

    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getProductsVariants
     * @param {string} id - The ID of the product to retrieve variants for
     */
    getProductsVariants(
        id: string

        ,
    ): getProductsVariantsParameters {
        return new getProductsVariantsParameters(this, 'GET', '/products/{id}/variants', id);
    }

    /**
     * Create a new product image and attach it to product variants
     * @method
     * @name shopifySDK#createProductImage
     * @param {string} productId - The ID of the product to create an image for
     * @param {} image - The image to be uploaded
     */
    createProductImage(
        productId: string

        ,
        image:
        productsImagesPOST

        ,
    ): createProductImageParameters {
        return new createProductImageParameters(this, 'POST', '/products/{productId}/images', productId, image);
    }

    /**
     * Get a list of all images for a product
     * @method
     * @name shopifySDK#getProductsImages
     * @param {string} productId - The ID of the product to return images for
     */
    getProductsImages(
        productId: string

        ,
    ): getProductsImagesParameters {
        return new getProductsImagesParameters(this, 'GET', '/products/{productId}/images', productId);
    }

    /**
     * Modify an existing product image
     * @method
     * @name shopifySDK#updateProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the variant to update
     * @param {} image - The variant body to update
     */
    updateProductsImageById(
        productId: string

        ,
        id: string

        ,
        image:
        productsImagesPATCH

        ,
    ): updateProductsImageByIdParameters {
        return new updateProductsImageByIdParameters(this, 'PATCH', '/products/{productId}/images/{id}', productId, id, image);
    }

    /**
     * Get a single product image by id
     * @method
     * @name shopifySDK#getProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to retrieve
     */
    getProductsImageById(
        productId: string

        ,
        id: string

        ,
    ): getProductsImageByIdParameters {
        return new getProductsImageByIdParameters(this, 'GET', '/products/{productId}/images/{id}', productId, id);
    }

    /**
     * Delete a product image
     * @method
     * @name shopifySDK#deleteProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to delete
     */
    deleteProductsImageById(
        productId: string

        ,
        id: string

        ,
    ): deleteProductsImageByIdParameters {
        return new deleteProductsImageByIdParameters(this, 'DELETE', '/products/{productId}/images/{id}', productId, id);
    }

    /**
     * Delete a variant
     * @method
     * @name shopifySDK#deleteProductsVariantById
     * @param {string} productId - The ID of the product for delete a variant for
     * @param {string} id - The ID of the variant to delete
     */
    deleteProductsVariantById(
        productId: string

        ,
        id: string

        ,
    ): deleteProductsVariantByIdParameters {
        return new deleteProductsVariantByIdParameters(this, 'DELETE', '/products/{productId}/variants/{id}', productId, id);
    }

    /**
    * Returns a list of objects based on a set of search parameters.  Here is an example query:  select id, name			(Fields of that Object)
    from contactX			(Name of Object)
    where name like '%foo%' 	(Search Expression)
    or name like '%bar%;		(Search Expression continued)
    order by createdDate 		(Order of Search)
    limit 10 			(How Many Results to Display)
    offset 0 			(Where to start in the list of objects)
    In this example, I am querying a list of objects from contactX containing the fields id and name where the name contains foo or bar.  The results will be in a list of 10 organized by the date they were created, starting with the earliest.
    * @method
    * @name shopifySDK#getQuery
         * @param {string} q - The search query (i.e. select id, name from contact where name = 'foo')
    */
    getQuery(
        q: string

        ,
    ): getQueryParameters {
        return new getQueryParameters(this, 'GET', '/query', q);
    }

    /**
     * List all shipping zones
     * @method
     * @name shopifySDK#getShippingZones
     */
    getShippingZones(): getShippingZonesParameters {
        return new getShippingZonesParameters(this, 'GET', '/shipping-zones');
    }

    /**
     * Retrieve metadata for the current shop
     * @method
     * @name shopifySDK#getShops
     */
    getShops(): getShopsParameters {
        return new getShopsParameters(this, 'GET', '/shops');
    }

    /**
     * Create a new  smart-collections
     * @method
     * @name shopifySDK#createSmartCollection
     * @param {} smartCollections - The smart-collections object
     */
    createSmartCollection(
        smartCollections:
        smartCollectionsPOST

        ,
    ): createSmartCollectionParameters {
        return new createSmartCollectionParameters(this, 'POST', '/smart-collections', smartCollections);
    }

    /**
     * Get a list of all smart collections
     * @method
     * @name shopifySDK#getSmartCollections
     */
    getSmartCollections(): getSmartCollectionsParameters {
        return new getSmartCollectionsParameters(this, 'GET', '/smart-collections');
    }

    /**
     * Update an existing smart-collection
     * @method
     * @name shopifySDK#updateSmartCollectionById
     * @param {string} id - The smart-collections ID
     * @param {} smartCollections - The smart-collections object
     */
    updateSmartCollectionById(
        id: string

        ,
        smartCollections:
        smartCollectionsPATCH

        ,
    ): updateSmartCollectionByIdParameters {
        return new updateSmartCollectionByIdParameters(this, 'PATCH', '/smart-collections/{id}', id, smartCollections);
    }

    /**
     * Retrieve a single smart collection
     * @method
     * @name shopifySDK#getSmartCollectionById
     * @param {string} id - The smart-collections ID
     */
    getSmartCollectionById(
        id: string

        ,
    ): getSmartCollectionByIdParameters {
        return new getSmartCollectionByIdParameters(this, 'GET', '/smart-collections/{id}', id);
    }

    /**
     * Remove a smart collection from the database
     * @method
     * @name shopifySDK#deleteSmartCollectionById
     * @param {string} id - The smart-collection ID
     */
    deleteSmartCollectionById(
        id: string

        ,
    ): deleteSmartCollectionByIdParameters {
        return new deleteSmartCollectionByIdParameters(this, 'DELETE', '/smart-collections/{id}', id);
    }

    /**
     * Update an existing product variant
     * @method
     * @name shopifySDK#updateVariantById
     * @param {string} id - The ID of the variant to update
     * @param {} variant - The variant body to update
     */
    updateVariantById(
        id: string

        ,
        variant:
        variantsPATCH

        ,
    ): updateVariantByIdParameters {
        return new updateVariantByIdParameters(this, 'PATCH', '/variants/{id}', id, variant);
    }

    /**
     * Retrieve a specific variant by ID
     * @method
     * @name shopifySDK#getVariantById
     * @param {string} id - The ID of the variant to retrieve
     */
    getVariantById(
        id: string

        ,
    ): getVariantByIdParameters {
        return new getVariantByIdParameters(this, 'GET', '/variants/{id}', id);
    }

    /**
     * Search for objects
     * @method
     * @name shopifySDK#getByObjectName
     * @param {string} objectName - The object name
     */
    getByObjectName(
        objectName: string

        ,
    ): getByObjectNameParameters {
        return new getByObjectNameParameters(this, 'GET', '/{objectName}', objectName);
    }

    /**
     * Create an object
     * @method
     * @name shopifySDK#createByObjectName
     * @param {string} objectName - The object name
     * @param {} body - The object
     */
    createByObjectName(
        objectName: string

        ,
        body:

        {}

        ,
    ): createByObjectNameParameters {
        return new createByObjectNameParameters(this, 'POST', '/{objectName}', objectName, body);
    }

    /**
     * Create a new metafield for a resource
     * @method
     * @name shopifySDK#createObjectNameMetafield
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @param {} body - The body of the metafield for a resource
     */
    createObjectNameMetafield(
        objectName: string

        ,
        id: string

        ,
        body:
        metafields

        ,
    ): createObjectNameMetafieldParameters {
        return new createObjectNameMetafieldParameters(this, 'POST', '/{objectName}/{id}/metafields', objectName, id, body);
    }

    /**
     * Get a list of all the field for an object
     * @method
     * @name shopifySDK#getObjectNameMetafields
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     */
    getObjectNameMetafields(
        objectName: string

        ,
        id: string

        ,
    ): getObjectNameMetafieldsParameters {
        return new getObjectNameMetafieldsParameters(this, 'GET', '/{objectName}/{id}/metafields', objectName, id);
    }

    /**
     * Get a count of metafields that belong to a resource
     * @method
     * @name shopifySDK#getObjectNameMetafieldsCount
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     */
    getObjectNameMetafieldsCount(
        objectName: string

        ,
        id: string

        ,
    ): getObjectNameMetafieldsCountParameters {
        return new getObjectNameMetafieldsCountParameters(this, 'GET', '/{objectName}/{id}/metafields-count', objectName, id);
    }

    /**
     * Update a resource metafield
     * @method
     * @name shopifySDK#updateObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @param {} body - The body of the metafield for a resource
     */
    updateObjectNameMetafieldByMetafieldId(
        objectName: string

        ,
        id: string

        ,
        metafieldId: string

        ,
        body:
        metafields

        ,
    ): updateObjectNameMetafieldByMetafieldIdParameters {
        return new updateObjectNameMetafieldByMetafieldIdParameters(this, 'PATCH', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId, body);
    }

    /**
     * Get a single resource metafield by its ID
     * @method
     * @name shopifySDK#getObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     */
    getObjectNameMetafieldByMetafieldId(
        objectName: string

        ,
        id: string

        ,
        metafieldId: string

        ,
    ): getObjectNameMetafieldByMetafieldIdParameters {
        return new getObjectNameMetafieldByMetafieldIdParameters(this, 'GET', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId);
    }

    /**
     * Delete a resource metafield
     * @method
     * @name shopifySDK#deleteObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     */
    deleteObjectNameMetafieldByMetafieldId(
        objectName: string

        ,
        id: string

        ,
        metafieldId: string

        ,
    ): deleteObjectNameMetafieldByMetafieldIdParameters {
        return new deleteObjectNameMetafieldByMetafieldIdParameters(this, 'DELETE', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId);
    }

    /**
     * Delete an {objectName}
     * @method
     * @name shopifySDK#deleteObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     */
    deleteObjectNameByObjectId(
        objectName: string

        ,
        objectId: string

        ,
    ): deleteObjectNameByObjectIdParameters {
        return new deleteObjectNameByObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}', objectName, objectId);
    }

    /**
     * Retrieve an {objectName}
     * @method
     * @name shopifySDK#getObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     */
    getObjectNameByObjectId(
        objectName: string

        ,
        objectId: string

        ,
    ): getObjectNameByObjectIdParameters {
        return new getObjectNameByObjectIdParameters(this, 'GET', '/{objectName}/{objectId}', objectName, objectId);
    }

    /**
     * Update an {objectName}
     * @method
     * @name shopifySDK#updateObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     */
    updateObjectNameByObjectId(
        objectName: string

        ,
        objectId: string

        ,
        body:
        Object

        ,
    ): updateObjectNameByObjectIdParameters {
        return new updateObjectNameByObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}', objectName, objectId, body);
    }

    /**
     * Update an {objectName}
     * @method
     * @name shopifySDK#replaceObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     */
    replaceObjectNameByObjectId(
        objectName: string

        ,
        objectId: string

        ,
        body:
        Object

        ,
    ): replaceObjectNameByObjectIdParameters {
        return new replaceObjectNameByObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}', objectName, objectId, body);
    }

    /**
     * Search for {childObjectName}
     * @method
     * @name shopifySDK#getObjectNameByChildObjectName
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectName - The name of the childObjectName
     */
    getObjectNameByChildObjectName(
        objectName: string

        ,
        objectId: string

        ,
        childObjectName: string

        ,
    ): getObjectNameByChildObjectNameParameters {
        return new getObjectNameByChildObjectNameParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName);
    }

    /**
     * Create an {childObjectName}
     * @method
     * @name shopifySDK#createObjectNameByChildObjectName
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectName - The name of the object
     * @param {} body - The {childObjectName}
     */
    createObjectNameByChildObjectName(
        objectName: string

        ,
        objectId: string

        ,
        childObjectName: string

        ,
        body:
        Object

        ,
    ): createObjectNameByChildObjectNameParameters {
        return new createObjectNameByChildObjectNameParameters(this, 'POST', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName, body);
    }

    /**
     * Delete an {childObjectName}
     * @method
     * @name shopifySDK#deleteObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     */
    deleteObjectNameByChildObjectId(
        objectName: string

        ,
        childObjectName: string

        ,
        objectId: string

        ,
        childObjectId: string

        ,
    ): deleteObjectNameByChildObjectIdParameters {
        return new deleteObjectNameByChildObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    }

    /**
     * Retrieve an {childObjectName}
     * @method
     * @name shopifySDK#getObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     */
    getObjectNameByChildObjectId(
        objectName: string

        ,
        childObjectName: string

        ,
        objectId: string

        ,
        childObjectId: string

        ,
    ): getObjectNameByChildObjectIdParameters {
        return new getObjectNameByChildObjectIdParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    }

    /**
     * Update an {childObjectName}
     * @method
     * @name shopifySDK#updateObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @param {} body - The {objectName}
     */
    updateObjectNameByChildObjectId(
        objectName: string

        ,
        childObjectName: string

        ,
        objectId: string

        ,
        childObjectId: string

        ,
        body:
        Object

        ,
    ): updateObjectNameByChildObjectIdParameters {
        return new updateObjectNameByChildObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    }

    /**
     * Update an {childObjectName}
     * @method
     * @name shopifySDK#replaceObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @param {} body - The {objectName}
     */
    replaceObjectNameByChildObjectId(
        objectName: string

        ,
        childObjectName: string

        ,
        objectId: string

        ,
        childObjectId: string

        ,
        body:
        Object

        ,
    ): replaceObjectNameByChildObjectIdParameters {
        return new replaceObjectNameByChildObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    }
}