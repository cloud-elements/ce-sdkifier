"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var request = require("superagent");
/**
 *
 * @class shopifySDK
 * Methods return a superagent compatible instance that fully supports the superagent API
 */
var shopifySDK = /** @class */ (function () {
    /**
     * Create an instance of the SDK
     * @param {string} baseUrl - The URL of the host environment (e.g., https://staging.cloud-elements.com)
     * @param {string} authorizationHeader - A valid auth header for Cloud Elements (User and Org tokens)
     */
    function shopifySDK(baseUrl, authorizationHeader) {
        this.domain = "https://staging.cloud-elements.com/elements/api-v2";
        this.authorizationHeader = null;
        if (baseUrl) {
            this.domain = baseUrl + "/elements/api-v2";
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }
    shopifySDK.prototype.getDomain = function () {
        return this.domain;
    };
    /**
     * Perform a POST to the given path
     * @method
     * @name platformSDK#post
     * @param {string} path
     */
    shopifySDK.prototype.post = function (path) {
        return new shopifySDKMethodParameters(this, 'post', path);
    };
    /**
     * Perform a PUT to the given path
     * @method
     * @name platformSDK#put
     * @param {string} path
     */
    shopifySDK.prototype.put = function (path) {
        return new shopifySDKMethodParameters(this, 'put', path);
    };
    /**
     * Perform a PATCH to the given path
     * @method
     * @name platformSDK#patch
     * @param {string} path
     */
    shopifySDK.prototype.patch = function (path) {
        return new shopifySDKMethodParameters(this, 'patch', path);
    };
    /**
     * Perform a DELETE to the given path
     * @method
     * @name platformSDK#delete
     * @param {string} path
     */
    shopifySDK.prototype["delete"] = function (path) {
        return new shopifySDKMethodParameters(this, 'delete', path);
    };
    /**
     * Perform a GET to the given path
     * @method
     * @name platformSDK#get
     * @param {string} path
     */
    shopifySDK.prototype.get = function (path) {
        return new shopifySDKMethodParameters(this, 'get', path);
    };
    /**
     * Retrieve abandoned checkouts from Shopify.
     * @method
     * @name shopifySDK#getAbandonedCheckouts
     * @return { getAbandonedCheckoutsParameters } To allow chaining
     */
    shopifySDK.prototype.getAbandonedCheckouts = function () {
        return new getAbandonedCheckoutsParameters(this, 'GET', '/abandoned-checkouts');
    };
    /**
     * Create an asynchronous bulk query job.
     * @method
     * @name shopifySDK#createBulkQuery
     * @param {string} q - The CEQL query. When this parameter is omitted, all objects of the given type are returned via the bulk job. Endpoint limiters may still apply.
     * @return { createBulkQueryParameters } To allow chaining
     */
    shopifySDK.prototype.createBulkQuery = function (q) {
        return new createBulkQueryParameters(this, 'POST', '/bulk/query', q);
    };
    /**
     * <span class='betaAPI'>beta</span> Cancel an asynchronous bulk query job.
     * @method
     * @name shopifySDK#replaceBulkCancel
     * @param {string} id - The ID of the bulk job to cancel.
     * @return { replaceBulkCancelParameters } To allow chaining
     */
    shopifySDK.prototype.replaceBulkCancel = function (id) {
        return new replaceBulkCancelParameters(this, 'PUT', '/bulk/{id}/cancel', id);
    };
    /**
     * <span class='betaAPI'>beta</span> Retrieve the errors of a bulk job.
     * @method
     * @name shopifySDK#getBulkErrors
     * @param {string} id - The ID of the bulk job to retrieve its errors.
     * @return { getBulkErrorsParameters } To allow chaining
     */
    shopifySDK.prototype.getBulkErrors = function (id) {
        return new getBulkErrorsParameters(this, 'GET', '/bulk/{id}/errors', id);
    };
    /**
     * Retrieve the status of a bulk job.
     * @method
     * @name shopifySDK#getBulkStatus
     * @param {string} id - The ID of the bulk job to retrieve its status.
     * @return { getBulkStatusParameters } To allow chaining
     */
    shopifySDK.prototype.getBulkStatus = function (id) {
        return new getBulkStatusParameters(this, 'GET', '/bulk/{id}/status', id);
    };
    /**
     * Retrieve the results of an asynchronous bulk query.
     * @method
     * @name shopifySDK#getBulkByObjectName
     * @param {string} id - The ID of the bulk job
     * @param {string} objectName - The name of the object
     * @return { getBulkByObjectNameParameters } To allow chaining
     */
    shopifySDK.prototype.getBulkByObjectName = function (id, objectName) {
        return new getBulkByObjectNameParameters(this, 'GET', '/bulk/{id}/{objectName}', id, objectName);
    };
    /**
     * <span class='betaAPI'>beta</span> Upload a file of objects to be bulk uploaded to the provider.
     * @method
     * @name shopifySDK#createBulkByObjectName
     * @param {string} objectName - The name of the object for which data needs to be uploaded.
     * @return { createBulkByObjectNameParameters } To allow chaining
     */
    shopifySDK.prototype.createBulkByObjectName = function (objectName) {
        return new createBulkByObjectNameParameters(this, 'POST', '/bulk/{objectName}', objectName);
    };
    /**
     * List all collects or only those for specific products or collections
     * @method
     * @name shopifySDK#getCollects
     * @return { getCollectsParameters } To allow chaining
     */
    shopifySDK.prototype.getCollects = function () {
        return new getCollectsParameters(this, 'GET', '/collects');
    };
    /**
     * Add a product to a collection
     * @method
     * @name shopifySDK#createCollect
     * @param {} collects - The body of the collect
     * @return { createCollectParameters } To allow chaining
     */
    shopifySDK.prototype.createCollect = function (collects) {
        return new createCollectParameters(this, 'POST', '/collects', collects);
    };
    /**
     * Receive a count of all Collects
     * @method
     * @name shopifySDK#getCollectsCount
     * @return { getCollectsCountParameters } To allow chaining
     */
    shopifySDK.prototype.getCollectsCount = function () {
        return new getCollectsCountParameters(this, 'GET', '/collects-count');
    };
    /**
     * Remove a product from a collection
     * @method
     * @name shopifySDK#deleteCollectByCollectId
     * @param {string} collectId - ID of the collect
     * @return { deleteCollectByCollectIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteCollectByCollectId = function (collectId) {
        return new deleteCollectByCollectIdParameters(this, 'DELETE', '/collects/{collectId}', collectId);
    };
    /**
     * Get the collect with a certain id, or for a given product and collection
     * @method
     * @name shopifySDK#getCollectByCollectId
     * @param {string} collectId - ID of the collect
     * @return { getCollectByCollectIdParameters } To allow chaining
     */
    shopifySDK.prototype.getCollectByCollectId = function (collectId) {
        return new getCollectByCollectIdParameters(this, 'GET', '/collects/{collectId}', collectId);
    };
    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountries
     * @return { getCountriesParameters } To allow chaining
     */
    shopifySDK.prototype.getCountries = function () {
        return new getCountriesParameters(this, 'GET', '/countries');
    };
    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountryByCountryId
     * @param {string} countryId - ID of the country
     * @return { getCountryByCountryIdParameters } To allow chaining
     */
    shopifySDK.prototype.getCountryByCountryId = function (countryId) {
        return new getCountryByCountryIdParameters(this, 'GET', '/countries/{countryId}', countryId);
    };
    /**
     * Get a list of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollections
     * @return { getCustomCollectionsParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomCollections = function () {
        return new getCustomCollectionsParameters(this, 'GET', '/custom-collections');
    };
    /**
     * Create a new custom collection
     * @method
     * @name shopifySDK#createCustomCollection
     * @param {} customCollections - The custom-collections object
     * @return { createCustomCollectionParameters } To allow chaining
     */
    shopifySDK.prototype.createCustomCollection = function (customCollections) {
        return new createCustomCollectionParameters(this, 'POST', '/custom-collections', customCollections);
    };
    /**
     * Get a count of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollectionsCount
     * @return { getCustomCollectionsCountParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomCollectionsCount = function () {
        return new getCustomCollectionsCountParameters(this, 'GET', '/custom-collections-count');
    };
    /**
     * Remove a custom collection from the database
     * @method
     * @name shopifySDK#deleteCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections
     * @return { deleteCustomCollectionByCustomCollectionIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteCustomCollectionByCustomCollectionId = function (customCollectionId) {
        return new deleteCustomCollectionByCustomCollectionIdParameters(this, 'DELETE', '/custom-collections/{customCollectionId}', customCollectionId);
    };
    /**
     * Get a single custom collection
     * @method
     * @name shopifySDK#getCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom collection
     * @return { getCustomCollectionByCustomCollectionIdParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomCollectionByCustomCollectionId = function (customCollectionId) {
        return new getCustomCollectionByCustomCollectionIdParameters(this, 'GET', '/custom-collections/{customCollectionId}', customCollectionId);
    };
    /**
     * Update an existing custom collection
     * @method
     * @name shopifySDK#updateCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections that needs to be updated
     * @param {} customCollections - The custom-collections object that needs to be updated
     * @return { updateCustomCollectionByCustomCollectionIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateCustomCollectionByCustomCollectionId = function (customCollectionId, customCollections) {
        return new updateCustomCollectionByCustomCollectionIdParameters(this, 'PATCH', '/custom-collections/{customCollectionId}', customCollectionId, customCollections);
    };
    /**
     * Find customers in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getCustomers
     * @return { getCustomersParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomers = function () {
        return new getCustomersParameters(this, 'GET', '/customers');
    };
    /**
     * Create a new customer in Shopify.
     * @method
     * @name shopifySDK#createCustomer
     * @param {} customer - The Customer object to be created.
     * @return { createCustomerParameters } To allow chaining
     */
    shopifySDK.prototype.createCustomer = function (customer) {
        return new createCustomerParameters(this, 'POST', '/customers', customer);
    };
    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresses
     * @param {string} customerId - The ID of the customer to get the address
     * @return { getCustomersAddressesParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomersAddresses = function (customerId) {
        return new getCustomersAddressesParameters(this, 'GET', '/customers/{customerId}/addresses', customerId);
    };
    /**
     * Creates a new address for a customer
     * @method
     * @name shopifySDK#createCustomerAddresse
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {} address - Body of the address
     * @return { createCustomerAddresseParameters } To allow chaining
     */
    shopifySDK.prototype.createCustomerAddresse = function (customerId, address) {
        return new createCustomerAddresseParameters(this, 'POST', '/customers/{customerId}/addresses', customerId, address);
    };
    /**
     * Removes an address from the customers address list
     * @method
     * @name shopifySDK#deleteCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     * @return { deleteCustomersAddresseByAddressIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteCustomersAddresseByAddressId = function (customerId, addressId) {
        return new deleteCustomersAddresseByAddressIdParameters(this, 'DELETE', '/customers/{customerId}/addresses/{addressId}', customerId, addressId);
    };
    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     * @return { getCustomersAddresseByAddressIdParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomersAddresseByAddressId = function (customerId, addressId) {
        return new getCustomersAddresseByAddressIdParameters(this, 'GET', '/customers/{customerId}/addresses/{addressId}', customerId, addressId);
    };
    /**
     * Creates a new address for a customer
     * @method
     * @name shopifySDK#updateCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {string} addressId - ID of the address
     * @param {} address - Body of the address
     * @return { updateCustomersAddresseByAddressIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateCustomersAddresseByAddressId = function (customerId, addressId, address) {
        return new updateCustomersAddresseByAddressIdParameters(this, 'PATCH', '/customers/{customerId}/addresses/{addressId}', customerId, addressId, address);
    };
    /**
     * Delete a customer associated with a given ID from Shopify. Specifying a customer ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteCustomerById
     * @param {string} id - The ID of the customer to delete from Shopify.
     * @return { deleteCustomerByIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteCustomerById = function (id) {
        return new deleteCustomerByIdParameters(this, 'DELETE', '/customers/{id}', id);
    };
    /**
     * Retrieve a customer associated with a given ID from Shopify. Specifying an ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getCustomerById
     * @param {string} id - The ID of the customer to retrieve from Shopify.
     * @return { getCustomerByIdParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomerById = function (id) {
        return new getCustomerByIdParameters(this, 'GET', '/customers/{id}', id);
    };
    /**
     * Update a customer associated with a given ID in Shopify. The update API uses the PATCH HTTP verb, so only those fields provided in the customer object will be updated, and those fields not provided will be left alone. Providing an ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#updateCustomerById
     * @param {string} id - The ID of the customer to update in Shopify.
     * @param {} customer - The customer object, with those fields that are to be updated.
     * @return { updateCustomerByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateCustomerById = function (id, customer) {
        return new updateCustomerByIdParameters(this, 'PATCH', '/customers/{id}', id, customer);
    };
    /**
     * Find abandoned checkouts for the customer associated with a given ID. If the customer does not exist, an error response will be returned. If no abandoned checkouts are found in the given customer then an empty array will be returned.
     * @method
     * @name shopifySDK#getCustomersAbandonedCheckouts
     * @param {string} id - The ID of the customer to get abandoned checkouts from in Shopify.
     * @return { getCustomersAbandonedCheckoutsParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomersAbandonedCheckouts = function (id) {
        return new getCustomersAbandonedCheckoutsParameters(this, 'GET', '/customers/{id}/abandoned-checkouts', id);
    };
    /**
     * Find orders associated with a given customer ID. If the customer does not exist, an error response will be returned. If no orders are found in the given customer then an empty array will be returned.
     * @method
     * @name shopifySDK#getCustomersOrders
     * @param {string} id - The ID of the customer to get orders from in Shopify.
     * @return { getCustomersOrdersParameters } To allow chaining
     */
    shopifySDK.prototype.getCustomersOrders = function (id) {
        return new getCustomersOrdersParameters(this, 'GET', '/customers/{id}/orders', id);
    };
    /**
     * Retrieve a discount code by name
     * @method
     * @name shopifySDK#getDiscountCodeByCode
     * @param {string} code - Name of the discount code
     * @return { getDiscountCodeByCodeParameters } To allow chaining
     */
    shopifySDK.prototype.getDiscountCodeByCode = function (code) {
        return new getDiscountCodeByCodeParameters(this, 'GET', '/discount-codes/{code}', code);
    };
    /**
     * Search for InventoryItems
     * @method
     * @name shopifySDK#getInventoryItems
     * @param {string} where - Show only certain inventory items, specified by a comma-seperated list of IDs. For example, <i> ids='2517889862,2518523974' </i>
     * @return { getInventoryItemsParameters } To allow chaining
     */
    shopifySDK.prototype.getInventoryItems = function (where) {
        return new getInventoryItemsParameters(this, 'GET', '/inventory-items', where);
    };
    /**
     * Update an InventoryItem
     * @method
     * @name shopifySDK#updateInventoryItemById
     * @param {string} id - The InventoryItem ID
     * @param {} body - The InventoryItem body
     * @return { updateInventoryItemByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateInventoryItemById = function (id, body) {
        return new updateInventoryItemByIdParameters(this, 'PATCH', '/inventory-items/{id}', id, body);
    };
    /**
     * Search for Locations
     * @method
     * @name shopifySDK#getLocations
     * @return { getLocationsParameters } To allow chaining
     */
    shopifySDK.prototype.getLocations = function () {
        return new getLocationsParameters(this, 'GET', '/locations');
    };
    /**
     * Search for InventoryLevels
     * @method
     * @name shopifySDK#getLocationsInventoryItemsInventoryLevels
     * @param {string} id - The comma separated list of Location IDs
     * @param {string} inventoryItemId - The comma separated list of InventoryItem IDs
     * @return { getLocationsInventoryItemsInventoryLevelsParameters } To allow chaining
     */
    shopifySDK.prototype.getLocationsInventoryItemsInventoryLevels = function (id, inventoryItemId) {
        return new getLocationsInventoryItemsInventoryLevelsParameters(this, 'GET', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId);
    };
    /**
     * Update an InventoryLevel
     * @method
     * @name shopifySDK#updateLocationsInventoryItemsInventoryLevels
     * @param {string} id - The Location ID
     * @param {string} inventoryItemId - The InventoryItem ID
     * @param {} body - The InventoryLevel body
     * @return { updateLocationsInventoryItemsInventoryLevelsParameters } To allow chaining
     */
    shopifySDK.prototype.updateLocationsInventoryItemsInventoryLevels = function (id, inventoryItemId, body) {
        return new updateLocationsInventoryItemsInventoryLevelsParameters(this, 'PATCH', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId, body);
    };
    /**
     * Create an InventoryLevel
     * @method
     * @name shopifySDK#createLocationInventoryItemInventoryLevel
     * @param {string} id - The Location ID
     * @param {string} inventoryItemId - The InventoryItem ID
     * @return { createLocationInventoryItemInventoryLevelParameters } To allow chaining
     */
    shopifySDK.prototype.createLocationInventoryItemInventoryLevel = function (id, inventoryItemId) {
        return new createLocationInventoryItemInventoryLevelParameters(this, 'POST', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId);
    };
    /**
     * Search for InventoryLevels of a location
     * @method
     * @name shopifySDK#getLocationsInventoryLevels
     * @param {string} id - The Location ID
     * @return { getLocationsInventoryLevelsParameters } To allow chaining
     */
    shopifySDK.prototype.getLocationsInventoryLevels = function (id) {
        return new getLocationsInventoryLevelsParameters(this, 'GET', '/locations/{id}/inventory-levels', id);
    };
    /**
     * Get metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafields
     * @return { getMetafieldsParameters } To allow chaining
     */
    shopifySDK.prototype.getMetafields = function () {
        return new getMetafieldsParameters(this, 'GET', '/metafields');
    };
    /**
     * Create a new metafield for a store
     * @method
     * @name shopifySDK#createMetafield
     * @param {} body - The metafields object
     * @return { createMetafieldParameters } To allow chaining
     */
    shopifySDK.prototype.createMetafield = function (body) {
        return new createMetafieldParameters(this, 'POST', '/metafields', body);
    };
    /**
     * Get a count of metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafieldsCount
     * @return { getMetafieldsCountParameters } To allow chaining
     */
    shopifySDK.prototype.getMetafieldsCount = function () {
        return new getMetafieldsCountParameters(this, 'GET', '/metafields-count');
    };
    /**
     * Delete a store metafield
     * @method
     * @name shopifySDK#deleteMetafieldById
     * @param {string} id - ID of the metafield
     * @return { deleteMetafieldByIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteMetafieldById = function (id) {
        return new deleteMetafieldByIdParameters(this, 'DELETE', '/metafields/{id}', id);
    };
    /**
     * Get a single store metafield by its ID
     * @method
     * @name shopifySDK#getMetafieldById
     * @param {string} id - The ID of metafields
     * @return { getMetafieldByIdParameters } To allow chaining
     */
    shopifySDK.prototype.getMetafieldById = function (id) {
        return new getMetafieldByIdParameters(this, 'GET', '/metafields/{id}', id);
    };
    /**
     * Update a store metafield
     * @method
     * @name shopifySDK#updateMetafieldById
     * @param {string} id - ID of the metafield
     * @param {} body - The metafields object
     * @return { updateMetafieldByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateMetafieldById = function (id, body) {
        return new updateMetafieldByIdParameters(this, 'PATCH', '/metafields/{id}', id, body);
    };
    /**
     * Get a list of all the available objects.
     * @method
     * @name shopifySDK#getObjects
     * @return { getObjectsParameters } To allow chaining
     */
    shopifySDK.prototype.getObjects = function () {
        return new getObjectsParameters(this, 'GET', '/objects');
    };
    /**
     * Get swagger docs for an object.
     * @method
     * @name shopifySDK#getObjectsObjectNameDocs
     * @param {string} objectName - The name of the object
     * @return { getObjectsObjectNameDocsParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectsObjectNameDocs = function (objectName) {
        return new getObjectsObjectNameDocsParameters(this, 'GET', '/objects/{objectName}/docs', objectName);
    };
    /**
     * Get a list of all the field for an object.
     * @method
     * @name shopifySDK#getObjectsObjectNameMetadata
     * @param {string} objectName - The name of the object
     * @return { getObjectsObjectNameMetadataParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectsObjectNameMetadata = function (objectName) {
        return new getObjectsObjectNameMetadataParameters(this, 'GET', '/objects/{objectName}/metadata', objectName);
    };
    /**
     * Find orders in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getOrders
     * @return { getOrdersParameters } To allow chaining
     */
    shopifySDK.prototype.getOrders = function () {
        return new getOrdersParameters(this, 'GET', '/orders');
    };
    /**
     * Create a new order in Shopify.
     * @method
     * @name shopifySDK#createOrder
     * @param {} order - The Order object to be created.
     * @return { createOrderParameters } To allow chaining
     */
    shopifySDK.prototype.createOrder = function (order) {
        return new createOrderParameters(this, 'POST', '/orders', order);
    };
    /**
     * Delete an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteOrderById
     * @param {string} id - The ID of the order to delete from Shopify.
     * @return { deleteOrderByIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteOrderById = function (id) {
        return new deleteOrderByIdParameters(this, 'DELETE', '/orders/{id}', id);
    };
    /**
     * Retrieve an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getOrderById
     * @param {string} id - The ID of the order to retrieve from Shopify.
     * @return { getOrderByIdParameters } To allow chaining
     */
    shopifySDK.prototype.getOrderById = function (id) {
        return new getOrderByIdParameters(this, 'GET', '/orders/{id}', id);
    };
    /**
     * Update an order associated with a given ID in Shopify. Change an order's attributes such as note, email, buyer-accepts-marketing, or remove the customer association. The update API uses the PATCH HTTP verb, so only those fields provided in the order object will be updated, and those fields not provided will be left alone. Updating an order with an ID that does not exist will result in an error response. NOTE: To remove the customer association, set the 'customer' value to null.
     * @method
     * @name shopifySDK#updateOrderById
     * @param {string} id - The ID of the order to update in Shopify.
     * @param {} order - The order object, with those fields that are to be updated.
     * @return { updateOrderByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateOrderById = function (id, order) {
        return new updateOrderByIdParameters(this, 'PATCH', '/orders/{id}', id, order);
    };
    /**
     * Get a list of all fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillments
     * @param {string} orderId - ID of the order
     * @return { getOrdersFulfillmentsParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersFulfillments = function (orderId) {
        return new getOrdersFulfillmentsParameters(this, 'GET', '/orders/{orderId}/fulfillments', orderId);
    };
    /**
     * Creates a fulfillment for the specified order and line items
     * @method
     * @name shopifySDK#createOrderFulfillment
     * @param {string} orderId - ID of the order
     * @param {} fulfillment - Body of the fulfillment
     * @return { createOrderFulfillmentParameters } To allow chaining
     */
    shopifySDK.prototype.createOrderFulfillment = function (orderId, fulfillment) {
        return new createOrderFulfillmentParameters(this, 'POST', '/orders/{orderId}/fulfillments', orderId, fulfillment);
    };
    /**
     * Count all the total number of fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillmentsCount
     * @param {string} orderId - ID of the order
     * @return { getOrdersFulfillmentsCountParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersFulfillmentsCount = function (orderId) {
        return new getOrdersFulfillmentsCountParameters(this, 'GET', '/orders/{orderId}/fulfillments-count', orderId);
    };
    /**
     * Get the representation of a specific fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @return { getOrdersFulfillmentByFulfillmentIdParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersFulfillmentByFulfillmentId = function (orderId, fulfillmentId) {
        return new getOrdersFulfillmentByFulfillmentIdParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}', orderId, fulfillmentId);
    };
    /**
     * Update tracking number for a fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment to be updated
     * @return { updateOrdersFulfillmentByFulfillmentIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateOrdersFulfillmentByFulfillmentId = function (orderId, fulfillmentId, body) {
        return new updateOrdersFulfillmentByFulfillmentIdParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}', orderId, fulfillmentId, body);
    };
    /**
     * Get a list of all fulfillment events for a fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEvents
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @return { getOrdersFulfillmentsFulfillmentEventsParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersFulfillmentsFulfillmentEvents = function (orderId, fulfillmentId) {
        return new getOrdersFulfillmentsFulfillmentEventsParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events', orderId, fulfillmentId);
    };
    /**
     * Create a fulfillment event
     * @method
     * @name shopifySDK#createOrderFulfillmentFulfillmentEvent
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment event
     * @return { createOrderFulfillmentFulfillmentEventParameters } To allow chaining
     */
    shopifySDK.prototype.createOrderFulfillmentFulfillmentEvent = function (orderId, fulfillmentId, body) {
        return new createOrderFulfillmentFulfillmentEventParameters(this, 'POST', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events', orderId, fulfillmentId, body);
    };
    /**
     * Delete a fulfillment event
     * @method
     * @name shopifySDK#deleteOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     * @return { deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteOrdersFulfillmentsFulfillmentEventByEventId = function (orderId, fulfillmentId, eventId) {
        return new deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters(this, 'DELETE', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}', orderId, fulfillmentId, eventId);
    };
    /**
     * Get a fulfillment event
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     * @return { getOrdersFulfillmentsFulfillmentEventByEventIdParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersFulfillmentsFulfillmentEventByEventId = function (orderId, fulfillmentId, eventId) {
        return new getOrdersFulfillmentsFulfillmentEventByEventIdParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}', orderId, fulfillmentId, eventId);
    };
    /**
     * Cancel a pending fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentsStatusCancel
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @return { updateOrdersFulfillmentsStatusCancelParameters } To allow chaining
     */
    shopifySDK.prototype.updateOrdersFulfillmentsStatusCancel = function (orderId, fulfillmentId) {
        return new updateOrdersFulfillmentsStatusCancelParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}/status-cancel', orderId, fulfillmentId);
    };
    /**
     * Complete a pending fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentsStatusComplete
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @return { updateOrdersFulfillmentsStatusCompleteParameters } To allow chaining
     */
    shopifySDK.prototype.updateOrdersFulfillmentsStatusComplete = function (orderId, fulfillmentId) {
        return new updateOrdersFulfillmentsStatusCompleteParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}/status-complete', orderId, fulfillmentId);
    };
    /**
     * Find payments in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getOrdersPayments
     * @param {string} orderId - The ID of the order to retrieve payments from in Shopify.
     * @return { getOrdersPaymentsParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersPayments = function (orderId) {
        return new getOrdersPaymentsParameters(this, 'GET', '/orders/{orderId}/payments', orderId);
    };
    /**
     * Create a new transaction
     * @method
     * @name shopifySDK#createOrderPayment
     * @param {string} orderId - ID of the order
     * @param {} body - ID of the order
     * @return { createOrderPaymentParameters } To allow chaining
     */
    shopifySDK.prototype.createOrderPayment = function (orderId, body) {
        return new createOrderPaymentParameters(this, 'POST', '/orders/{orderId}/payments', orderId, body);
    };
    /**
     * Count all a given order’s money transfers
     * @method
     * @name shopifySDK#getOrdersPaymentsCount
     * @param {string} orderId - ID of the order
     * @return { getOrdersPaymentsCountParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersPaymentsCount = function (orderId) {
        return new getOrdersPaymentsCountParameters(this, 'GET', '/orders/{orderId}/payments-count', orderId);
    };
    /**
     * Retrieve a payment associated with a given ID from Shopify. Specifying a payment ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getOrdersPaymentByPaymentId
     * @param {string} orderId - The ID of the order to retrieve the payment from in Shopify.
     * @param {string} paymentId - The ID of the payment to retrieve the from Shopify.
     * @return { getOrdersPaymentByPaymentIdParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersPaymentByPaymentId = function (orderId, paymentId) {
        return new getOrdersPaymentByPaymentIdParameters(this, 'GET', '/orders/{orderId}/payments/{paymentId}', orderId, paymentId);
    };
    /**
     * Search for refunds for an order
     * @method
     * @name shopifySDK#getOrdersRefunds
     * @param {string} orderId - The order ID
     * @return { getOrdersRefundsParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersRefunds = function (orderId) {
        return new getOrdersRefundsParameters(this, 'GET', '/orders/{orderId}/refunds', orderId);
    };
    /**
     * Create a refund for an existing order
     * @method
     * @name shopifySDK#createOrderRefund
     * @param {string} orderId - The order ID
     * @param {} refund - The refund
     * @return { createOrderRefundParameters } To allow chaining
     */
    shopifySDK.prototype.createOrderRefund = function (orderId, refund) {
        return new createOrderRefundParameters(this, 'POST', '/orders/{orderId}/refunds', orderId, refund);
    };
    /**
     * Calculate refund transactions based on line-items and shipping. The returned response can be used to create a refund
     * @method
     * @name shopifySDK#createOrderRefundsCalculate
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} refundCalculate - The body of the refund-calculate
     * @return { createOrderRefundsCalculateParameters } To allow chaining
     */
    shopifySDK.prototype.createOrderRefundsCalculate = function (orderId, refundCalculate) {
        return new createOrderRefundsCalculateParameters(this, 'POST', '/orders/{orderId}/refunds-calculate', orderId, refundCalculate);
    };
    /**
     * Retrieve a specific refund
     * @method
     * @name shopifySDK#getOrdersRefundByRefundId
     * @param {string} orderId - The order ID
     * @param {string} refundId - The refund ID
     * @return { getOrdersRefundByRefundIdParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersRefundByRefundId = function (orderId, refundId) {
        return new getOrdersRefundByRefundIdParameters(this, 'GET', '/orders/{orderId}/refunds/{refundId}', orderId, refundId);
    };
    /**
     * Get a list of all Order Risks
     * @method
     * @name shopifySDK#getOrdersRisks
     * @param {string} orderId - Id of the order
     * @return { getOrdersRisksParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersRisks = function (orderId) {
        return new getOrdersRisksParameters(this, 'GET', '/orders/{orderId}/risks', orderId);
    };
    /**
     * Create a new Order Risk for an Order
     * @method
     * @name shopifySDK#createOrderRisk
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} risk - The fraud risk to be created
     * @return { createOrderRiskParameters } To allow chaining
     */
    shopifySDK.prototype.createOrderRisk = function (orderId, risk) {
        return new createOrderRiskParameters(this, 'POST', '/orders/{orderId}/risks', orderId, risk);
    };
    /**
     * Delete an order risk entry
     * @method
     * @name shopifySDK#deleteOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     * @return { deleteOrdersRiskByRiskIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteOrdersRiskByRiskId = function (orderId, riskId) {
        return new deleteOrdersRiskByRiskIdParameters(this, 'DELETE', '/orders/{orderId}/risks/{riskId}', orderId, riskId);
    };
    /**
     * Get a single Order Risk by its ID
     * @method
     * @name shopifySDK#getOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     * @return { getOrdersRiskByRiskIdParameters } To allow chaining
     */
    shopifySDK.prototype.getOrdersRiskByRiskId = function (orderId, riskId) {
        return new getOrdersRiskByRiskIdParameters(this, 'GET', '/orders/{orderId}/risks/{riskId}', orderId, riskId);
    };
    /**
     * Update an Order Risk entry
     * @method
     * @name shopifySDK#updateOrdersRiskByRiskId
     * @param {string} orderId - The ID of the order
     * @param {string} riskId - ID of the risk
     * @param {} risk - The fraud risk body to be updated
     * @return { updateOrdersRiskByRiskIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateOrdersRiskByRiskId = function (orderId, riskId, risk) {
        return new updateOrdersRiskByRiskIdParameters(this, 'PATCH', '/orders/{orderId}/risks/{riskId}', orderId, riskId, risk);
    };
    /**
     * Ping the Element to confirm that the Hub Element has a heartbeat.  If the Element does not have a heartbeat, an error message will be returned.
     * @method
     * @name shopifySDK#getPing
     * @return { getPingParameters } To allow chaining
     */
    shopifySDK.prototype.getPing = function () {
        return new getPingParameters(this, 'GET', '/ping');
    };
    /**
     * List all price rules
     * @method
     * @name shopifySDK#getPriceRules
     * @return { getPriceRulesParameters } To allow chaining
     */
    shopifySDK.prototype.getPriceRules = function () {
        return new getPriceRulesParameters(this, 'GET', '/price-rules');
    };
    /**
     * Add a price rule
     * @method
     * @name shopifySDK#createPriceRule
     * @param {} priceRule - The body of the price rule
     * @return { createPriceRuleParameters } To allow chaining
     */
    shopifySDK.prototype.createPriceRule = function (priceRule) {
        return new createPriceRuleParameters(this, 'POST', '/price-rules', priceRule);
    };
    /**
     * Remove a price rule
     * @method
     * @name shopifySDK#deletePriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     * @return { deletePriceRuleByPriceRuleIdParameters } To allow chaining
     */
    shopifySDK.prototype.deletePriceRuleByPriceRuleId = function (priceRuleId) {
        return new deletePriceRuleByPriceRuleIdParameters(this, 'DELETE', '/price-rules/{priceRuleId}', priceRuleId);
    };
    /**
     * Get a price rule with a certain id
     * @method
     * @name shopifySDK#getPriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     * @return { getPriceRuleByPriceRuleIdParameters } To allow chaining
     */
    shopifySDK.prototype.getPriceRuleByPriceRuleId = function (priceRuleId) {
        return new getPriceRuleByPriceRuleIdParameters(this, 'GET', '/price-rules/{priceRuleId}', priceRuleId);
    };
    /**
     * Get all discount codes for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodes
     * @param {string} priceRuleId - ID of the price rule to receive discount codes for
     * @return { getPriceRulesDiscountCodesParameters } To allow chaining
     */
    shopifySDK.prototype.getPriceRulesDiscountCodes = function (priceRuleId) {
        return new getPriceRulesDiscountCodesParameters(this, 'GET', '/price-rules/{priceRuleId}/discount-codes', priceRuleId);
    };
    /**
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#createPriceRuleDiscountCode
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {} discountCode - Discount code to be created
     * @return { createPriceRuleDiscountCodeParameters } To allow chaining
     */
    shopifySDK.prototype.createPriceRuleDiscountCode = function (priceRuleId, discountCode) {
        return new createPriceRuleDiscountCodeParameters(this, 'POST', '/price-rules/{priceRuleId}/discount-codes', priceRuleId, discountCode);
    };
    /**
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#deletePriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discount-code ID
     * @return { deletePriceRulesDiscountCodeByDiscountCodeIdParameters } To allow chaining
     */
    shopifySDK.prototype.deletePriceRulesDiscountCodeByDiscountCodeId = function (priceRuleId, discountCodeId) {
        return new deletePriceRulesDiscountCodeByDiscountCodeIdParameters(this, 'DELETE', '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}', priceRuleId, discountCodeId);
    };
    /**
     * Get all discount code for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discountCodeId
     * @return { getPriceRulesDiscountCodeByDiscountCodeIdParameters } To allow chaining
     */
    shopifySDK.prototype.getPriceRulesDiscountCodeByDiscountCodeId = function (priceRuleId, discountCodeId) {
        return new getPriceRulesDiscountCodeByDiscountCodeIdParameters(this, 'GET', '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}', priceRuleId, discountCodeId);
    };
    /**
     * Find products in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getProducts
     * @return { getProductsParameters } To allow chaining
     */
    shopifySDK.prototype.getProducts = function () {
        return new getProductsParameters(this, 'GET', '/products');
    };
    /**
     * Create a new product in Shopify.
     * @method
     * @name shopifySDK#createProduct
     * @param {} product - The Product object to be created.
     * @return { createProductParameters } To allow chaining
     */
    shopifySDK.prototype.createProduct = function (product) {
        return new createProductParameters(this, 'POST', '/products', product);
    };
    /**
     * Delete a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteProductById
     * @param {string} id - The ID of the product to delete from Shopify.
     * @return { deleteProductByIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteProductById = function (id) {
        return new deleteProductByIdParameters(this, 'DELETE', '/products/{id}', id);
    };
    /**
     * Retrieve a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getProductById
     * @param {string} id - The ID of the product to retrieve from Shopify.
     * @return { getProductByIdParameters } To allow chaining
     */
    shopifySDK.prototype.getProductById = function (id) {
        return new getProductByIdParameters(this, 'GET', '/products/{id}', id);
    };
    /**
     * Update a product associated with a given ID in Shopify. The update API uses the PATCH HTTP verb, so only those fields provided in the product object will be updated, and those fields not provided will be left alone. Providing a product ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#updateProductById
     * @param {string} id - The ID of the product to update in Shopify.
     * @param {} product - The product object, with those fields that are to be updated.
     * @return { updateProductByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateProductById = function (id, product) {
        return new updateProductByIdParameters(this, 'PATCH', '/products/{id}', id, product);
    };
    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getProductsVariants
     * @param {string} id - The ID of the product to retrieve variants for
     * @return { getProductsVariantsParameters } To allow chaining
     */
    shopifySDK.prototype.getProductsVariants = function (id) {
        return new getProductsVariantsParameters(this, 'GET', '/products/{id}/variants', id);
    };
    /**
     * Create a varient
     * @method
     * @name shopifySDK#createProductVariant
     * @param {string} id - The product ID to create a variant for
     * @param {} variant - The variant to be created. See model for an example
     * @return { createProductVariantParameters } To allow chaining
     */
    shopifySDK.prototype.createProductVariant = function (id, variant) {
        return new createProductVariantParameters(this, 'POST', '/products/{id}/variants', id, variant);
    };
    /**
     * Get a list of all images for a product
     * @method
     * @name shopifySDK#getProductsImages
     * @param {string} productId - The ID of the product to return images for
     * @return { getProductsImagesParameters } To allow chaining
     */
    shopifySDK.prototype.getProductsImages = function (productId) {
        return new getProductsImagesParameters(this, 'GET', '/products/{productId}/images', productId);
    };
    /**
     * Create a new product image and attach it to product variants
     * @method
     * @name shopifySDK#createProductImage
     * @param {string} productId - The ID of the product to create an image for
     * @param {} image - The image to be uploaded
     * @return { createProductImageParameters } To allow chaining
     */
    shopifySDK.prototype.createProductImage = function (productId, image) {
        return new createProductImageParameters(this, 'POST', '/products/{productId}/images', productId, image);
    };
    /**
     * Delete a product image
     * @method
     * @name shopifySDK#deleteProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to delete
     * @return { deleteProductsImageByIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteProductsImageById = function (productId, id) {
        return new deleteProductsImageByIdParameters(this, 'DELETE', '/products/{productId}/images/{id}', productId, id);
    };
    /**
     * Get a single product image by id
     * @method
     * @name shopifySDK#getProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to retrieve
     * @return { getProductsImageByIdParameters } To allow chaining
     */
    shopifySDK.prototype.getProductsImageById = function (productId, id) {
        return new getProductsImageByIdParameters(this, 'GET', '/products/{productId}/images/{id}', productId, id);
    };
    /**
     * Modify an existing product image
     * @method
     * @name shopifySDK#updateProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the variant to update
     * @param {} image - The variant body to update
     * @return { updateProductsImageByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateProductsImageById = function (productId, id, image) {
        return new updateProductsImageByIdParameters(this, 'PATCH', '/products/{productId}/images/{id}', productId, id, image);
    };
    /**
     * Delete a variant
     * @method
     * @name shopifySDK#deleteProductsVariantById
     * @param {string} productId - The ID of the product for delete a variant for
     * @param {string} id - The ID of the variant to delete
     * @return { deleteProductsVariantByIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteProductsVariantById = function (productId, id) {
        return new deleteProductsVariantByIdParameters(this, 'DELETE', '/products/{productId}/variants/{id}', productId, id);
    };
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
    * @return { getQueryParameters } To allow chaining
    */
    shopifySDK.prototype.getQuery = function (q) {
        return new getQueryParameters(this, 'GET', '/query', q);
    };
    /**
     * List all shipping zones
     * @method
     * @name shopifySDK#getShippingZones
     * @return { getShippingZonesParameters } To allow chaining
     */
    shopifySDK.prototype.getShippingZones = function () {
        return new getShippingZonesParameters(this, 'GET', '/shipping-zones');
    };
    /**
     * Retrieve metadata for the current shop
     * @method
     * @name shopifySDK#getShops
     * @return { getShopsParameters } To allow chaining
     */
    shopifySDK.prototype.getShops = function () {
        return new getShopsParameters(this, 'GET', '/shops');
    };
    /**
     * Get a list of all smart collections
     * @method
     * @name shopifySDK#getSmartCollections
     * @return { getSmartCollectionsParameters } To allow chaining
     */
    shopifySDK.prototype.getSmartCollections = function () {
        return new getSmartCollectionsParameters(this, 'GET', '/smart-collections');
    };
    /**
     * Create a new  smart-collections
     * @method
     * @name shopifySDK#createSmartCollection
     * @param {} smartCollections - The smart-collections object
     * @return { createSmartCollectionParameters } To allow chaining
     */
    shopifySDK.prototype.createSmartCollection = function (smartCollections) {
        return new createSmartCollectionParameters(this, 'POST', '/smart-collections', smartCollections);
    };
    /**
     * Remove a smart collection from the database
     * @method
     * @name shopifySDK#deleteSmartCollectionById
     * @param {string} id - The smart-collection ID
     * @return { deleteSmartCollectionByIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteSmartCollectionById = function (id) {
        return new deleteSmartCollectionByIdParameters(this, 'DELETE', '/smart-collections/{id}', id);
    };
    /**
     * Retrieve a single smart collection
     * @method
     * @name shopifySDK#getSmartCollectionById
     * @param {string} id - The smart-collections ID
     * @return { getSmartCollectionByIdParameters } To allow chaining
     */
    shopifySDK.prototype.getSmartCollectionById = function (id) {
        return new getSmartCollectionByIdParameters(this, 'GET', '/smart-collections/{id}', id);
    };
    /**
     * Update an existing smart-collection
     * @method
     * @name shopifySDK#updateSmartCollectionById
     * @param {string} id - The smart-collections ID
     * @param {} smartCollections - The smart-collections object
     * @return { updateSmartCollectionByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateSmartCollectionById = function (id, smartCollections) {
        return new updateSmartCollectionByIdParameters(this, 'PATCH', '/smart-collections/{id}', id, smartCollections);
    };
    /**
     * Retrieve a specific variant by ID
     * @method
     * @name shopifySDK#getVariantById
     * @param {string} id - The ID of the variant to retrieve
     * @return { getVariantByIdParameters } To allow chaining
     */
    shopifySDK.prototype.getVariantById = function (id) {
        return new getVariantByIdParameters(this, 'GET', '/variants/{id}', id);
    };
    /**
     * Update an existing product variant
     * @method
     * @name shopifySDK#updateVariantById
     * @param {string} id - The ID of the variant to update
     * @param {} variant - The variant body to update
     * @return { updateVariantByIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateVariantById = function (id, variant) {
        return new updateVariantByIdParameters(this, 'PATCH', '/variants/{id}', id, variant);
    };
    /**
     * Search for objects
     * @method
     * @name shopifySDK#getByObjectName
     * @param {string} objectName - The object name
     * @return { getByObjectNameParameters } To allow chaining
     */
    shopifySDK.prototype.getByObjectName = function (objectName) {
        return new getByObjectNameParameters(this, 'GET', '/{objectName}', objectName);
    };
    /**
     * Create an object
     * @method
     * @name shopifySDK#createByObjectName
     * @param {string} objectName - The object name
     * @param {} body - The object
     * @return { createByObjectNameParameters } To allow chaining
     */
    shopifySDK.prototype.createByObjectName = function (objectName, body) {
        return new createByObjectNameParameters(this, 'POST', '/{objectName}', objectName, body);
    };
    /**
     * Get a list of all the field for an object
     * @method
     * @name shopifySDK#getObjectNameMetafields
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @return { getObjectNameMetafieldsParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectNameMetafields = function (objectName, id) {
        return new getObjectNameMetafieldsParameters(this, 'GET', '/{objectName}/{id}/metafields', objectName, id);
    };
    /**
     * Create a new metafield for a resource
     * @method
     * @name shopifySDK#createObjectNameMetafield
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @param {} body - The body of the metafield for a resource
     * @return { createObjectNameMetafieldParameters } To allow chaining
     */
    shopifySDK.prototype.createObjectNameMetafield = function (objectName, id, body) {
        return new createObjectNameMetafieldParameters(this, 'POST', '/{objectName}/{id}/metafields', objectName, id, body);
    };
    /**
     * Get a count of metafields that belong to a resource
     * @method
     * @name shopifySDK#getObjectNameMetafieldsCount
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @return { getObjectNameMetafieldsCountParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectNameMetafieldsCount = function (objectName, id) {
        return new getObjectNameMetafieldsCountParameters(this, 'GET', '/{objectName}/{id}/metafields-count', objectName, id);
    };
    /**
     * Delete a resource metafield
     * @method
     * @name shopifySDK#deleteObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @return { deleteObjectNameMetafieldByMetafieldIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteObjectNameMetafieldByMetafieldId = function (objectName, id, metafieldId) {
        return new deleteObjectNameMetafieldByMetafieldIdParameters(this, 'DELETE', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId);
    };
    /**
     * Get a single resource metafield by its ID
     * @method
     * @name shopifySDK#getObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @return { getObjectNameMetafieldByMetafieldIdParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectNameMetafieldByMetafieldId = function (objectName, id, metafieldId) {
        return new getObjectNameMetafieldByMetafieldIdParameters(this, 'GET', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId);
    };
    /**
     * Update a resource metafield
     * @method
     * @name shopifySDK#updateObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @param {} body - The body of the metafield for a resource
     * @return { updateObjectNameMetafieldByMetafieldIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateObjectNameMetafieldByMetafieldId = function (objectName, id, metafieldId, body) {
        return new updateObjectNameMetafieldByMetafieldIdParameters(this, 'PATCH', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId, body);
    };
    /**
     * Delete an {objectName}
     * @method
     * @name shopifySDK#deleteObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @return { deleteObjectNameByObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteObjectNameByObjectId = function (objectName, objectId) {
        return new deleteObjectNameByObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}', objectName, objectId);
    };
    /**
     * Retrieve an {objectName}
     * @method
     * @name shopifySDK#getObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @return { getObjectNameByObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectNameByObjectId = function (objectName, objectId) {
        return new getObjectNameByObjectIdParameters(this, 'GET', '/{objectName}/{objectId}', objectName, objectId);
    };
    /**
     * Update an {objectName}
     * @method
     * @name shopifySDK#updateObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     * @return { updateObjectNameByObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateObjectNameByObjectId = function (objectName, objectId, body) {
        return new updateObjectNameByObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}', objectName, objectId, body);
    };
    /**
     * Update an {objectName}
     * @method
     * @name shopifySDK#replaceObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     * @return { replaceObjectNameByObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.replaceObjectNameByObjectId = function (objectName, objectId, body) {
        return new replaceObjectNameByObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}', objectName, objectId, body);
    };
    /**
     * Search for {childObjectName}
     * @method
     * @name shopifySDK#getObjectNameByChildObjectName
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectName - The name of the childObjectName
     * @return { getObjectNameByChildObjectNameParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectNameByChildObjectName = function (objectName, objectId, childObjectName) {
        return new getObjectNameByChildObjectNameParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName);
    };
    /**
     * Create an {childObjectName}
     * @method
     * @name shopifySDK#createObjectNameByChildObjectName
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectName - The name of the object
     * @param {} body - The {childObjectName}
     * @return { createObjectNameByChildObjectNameParameters } To allow chaining
     */
    shopifySDK.prototype.createObjectNameByChildObjectName = function (objectName, objectId, childObjectName, body) {
        return new createObjectNameByChildObjectNameParameters(this, 'POST', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName, body);
    };
    /**
     * Delete an {childObjectName}
     * @method
     * @name shopifySDK#deleteObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @return { deleteObjectNameByChildObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.deleteObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId) {
        return new deleteObjectNameByChildObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    };
    /**
     * Retrieve an {childObjectName}
     * @method
     * @name shopifySDK#getObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @return { getObjectNameByChildObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.getObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId) {
        return new getObjectNameByChildObjectIdParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    };
    /**
     * Update an {childObjectName}
     * @method
     * @name shopifySDK#updateObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @param {} body - The {objectName}
     * @return { updateObjectNameByChildObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.updateObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId, body) {
        return new updateObjectNameByChildObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    };
    /**
     * Update an {childObjectName}
     * @method
     * @name shopifySDK#replaceObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @param {} body - The {objectName}
     * @return { replaceObjectNameByChildObjectIdParameters } To allow chaining
     */
    shopifySDK.prototype.replaceObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId, body) {
        return new replaceObjectNameByChildObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    };
    return shopifySDK;
}());
exports.shopifySDK = shopifySDK;
var shopifySDKMethodParameters = /** @class */ (function (_super) {
    __extends(shopifySDKMethodParameters, _super);
    function shopifySDKMethodParameters(superThis, method, _path) {
        var _this = _super.call(this, method, superThis.getDomain() + _path) || this;
        _this.superThis = superThis;
        _this.method = method;
        _this._path = _path;
        _this["catch"] = _super.prototype["catch"];
        if (superThis.authorizationHeader) {
            _this.set('Authorization', superThis.authorizationHeader);
        }
        return _this;
    }
    shopifySDKMethodParameters.prototype.then = function (a, b) {
        return _super.prototype.then.call(this, function (r) { return a(r.body); }, b);
    };
    ;
    return shopifySDKMethodParameters;
}(request.Request));
var getAbandonedCheckoutsParameters = /** @class */ (function (_super) {
    __extends(getAbandonedCheckoutsParameters, _super);
    function getAbandonedCheckoutsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getAbandonedCheckoutsParameters#page
     */
    getAbandonedCheckoutsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAbandonedCheckoutsParameters#pageSize
     */
    getAbandonedCheckoutsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAbandonedCheckoutsParameters;
}(shopifySDKMethodParameters));
var createBulkQueryParameters = /** @class */ (function (_super) {
    __extends(createBulkQueryParameters, _super);
    function createBulkQueryParameters(superThis, method, _path, q) {
        var _this = _super.call(this, superThis, method, _path) || this;
        return _this.query({
            'q': q
        });
    }
    /**
     * Set the 'elementsAsyncCallbackUrl' optional parameter
     * @method
     * @name createBulkQueryParameters#elementsAsyncCallbackUrl
     */
    createBulkQueryParameters.prototype.elementsAsyncCallbackUrl = function (elementsAsyncCallbackUrl) {
        this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
    };
    /**
     * Set the 'lastRunDate' optional parameter
     * @method
     * @name createBulkQueryParameters#lastRunDate
     */
    createBulkQueryParameters.prototype.lastRunDate = function (lastRunDate) {
        return this.query({
            'lastRunDate': lastRunDate
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name createBulkQueryParameters#from
     */
    createBulkQueryParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name createBulkQueryParameters#to
     */
    createBulkQueryParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'continueFromJobId' optional parameter
     * @method
     * @name createBulkQueryParameters#continueFromJobId
     */
    createBulkQueryParameters.prototype.continueFromJobId = function (continueFromJobId) {
        return this.query({
            'continueFromJobId': continueFromJobId
        });
    };
    return createBulkQueryParameters;
}(shopifySDKMethodParameters));
var replaceBulkCancelParameters = /** @class */ (function (_super) {
    __extends(replaceBulkCancelParameters, _super);
    function replaceBulkCancelParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return replaceBulkCancelParameters;
}(shopifySDKMethodParameters));
var getBulkErrorsParameters = /** @class */ (function (_super) {
    __extends(getBulkErrorsParameters, _super);
    function getBulkErrorsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getBulkErrorsParameters#page
     */
    getBulkErrorsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getBulkErrorsParameters#pageSize
     */
    getBulkErrorsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getBulkErrorsParameters#nextPage
     */
    getBulkErrorsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    return getBulkErrorsParameters;
}(shopifySDKMethodParameters));
var getBulkStatusParameters = /** @class */ (function (_super) {
    __extends(getBulkStatusParameters, _super);
    function getBulkStatusParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getBulkStatusParameters;
}(shopifySDKMethodParameters));
var getBulkByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getBulkByObjectNameParameters, _super);
    function getBulkByObjectNameParameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getBulkByObjectNameParameters;
}(shopifySDKMethodParameters));
var createBulkByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createBulkByObjectNameParameters, _super);
    function createBulkByObjectNameParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    /**
     * Set the 'elementsAsyncCallbackUrl' optional parameter
     * @method
     * @name createBulkByObjectNameParameters#elementsAsyncCallbackUrl
     */
    createBulkByObjectNameParameters.prototype.elementsAsyncCallbackUrl = function (elementsAsyncCallbackUrl) {
        this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
    };
    /**
     * Set the 'metaData' optional parameter
     * @method
     * @name createBulkByObjectNameParameters#metaData
     */
    createBulkByObjectNameParameters.prototype.metaData = function (metaData) {
        this.form['metaData'] = metaData;
    };
    /**
     * Set the 'file' optional parameter
     * @method
     * @name createBulkByObjectNameParameters#file
     */
    createBulkByObjectNameParameters.prototype.file = function (file) {
        this.form['file'] = file;
    };
    return createBulkByObjectNameParameters;
}(shopifySDKMethodParameters));
var getCollectsParameters = /** @class */ (function (_super) {
    __extends(getCollectsParameters, _super);
    function getCollectsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCollectsParameters#pageSize
     */
    getCollectsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getCollectsParameters#where
     */
    getCollectsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCollectsParameters#page
     */
    getCollectsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getCollectsParameters;
}(shopifySDKMethodParameters));
var createCollectParameters = /** @class */ (function (_super) {
    __extends(createCollectParameters, _super);
    function createCollectParameters(superThis, method, _path, collects) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(collects);
        return _this;
    }
    return createCollectParameters;
}(shopifySDKMethodParameters));
var getCollectsCountParameters = /** @class */ (function (_super) {
    __extends(getCollectsCountParameters, _super);
    function getCollectsCountParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getCollectsCountParameters;
}(shopifySDKMethodParameters));
var deleteCollectByCollectIdParameters = /** @class */ (function (_super) {
    __extends(deleteCollectByCollectIdParameters, _super);
    function deleteCollectByCollectIdParameters(superThis, method, _path, collectId) {
        return _super.call(this, superThis, method, _path
            .replace('{collectId}', "" + collectId)) || this;
    }
    return deleteCollectByCollectIdParameters;
}(shopifySDKMethodParameters));
var getCollectByCollectIdParameters = /** @class */ (function (_super) {
    __extends(getCollectByCollectIdParameters, _super);
    function getCollectByCollectIdParameters(superThis, method, _path, collectId) {
        return _super.call(this, superThis, method, _path
            .replace('{collectId}', "" + collectId)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getCollectByCollectIdParameters#where
     */
    getCollectByCollectIdParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    return getCollectByCollectIdParameters;
}(shopifySDKMethodParameters));
var getCountriesParameters = /** @class */ (function (_super) {
    __extends(getCountriesParameters, _super);
    function getCountriesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCountriesParameters#page
     */
    getCountriesParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'sinceId' optional parameter
     * @method
     * @name getCountriesParameters#sinceId
     */
    getCountriesParameters.prototype.sinceId = function (sinceId) {
        return this.query({
            'since_id': sinceId
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCountriesParameters#pageSize
     */
    getCountriesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getCountriesParameters;
}(shopifySDKMethodParameters));
var getCountryByCountryIdParameters = /** @class */ (function (_super) {
    __extends(getCountryByCountryIdParameters, _super);
    function getCountryByCountryIdParameters(superThis, method, _path, countryId) {
        return _super.call(this, superThis, method, _path
            .replace('{countryId}', "" + countryId)) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCountryByCountryIdParameters#pageSize
     */
    getCountryByCountryIdParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCountryByCountryIdParameters#page
     */
    getCountryByCountryIdParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getCountryByCountryIdParameters;
}(shopifySDKMethodParameters));
var getCustomCollectionsParameters = /** @class */ (function (_super) {
    __extends(getCustomCollectionsParameters, _super);
    function getCustomCollectionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCustomCollectionsParameters#pageSize
     */
    getCustomCollectionsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getCustomCollectionsParameters#where
     */
    getCustomCollectionsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCustomCollectionsParameters#page
     */
    getCustomCollectionsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getCustomCollectionsParameters;
}(shopifySDKMethodParameters));
var createCustomCollectionParameters = /** @class */ (function (_super) {
    __extends(createCustomCollectionParameters, _super);
    function createCustomCollectionParameters(superThis, method, _path, customCollections) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(customCollections);
        return _this;
    }
    return createCustomCollectionParameters;
}(shopifySDKMethodParameters));
var getCustomCollectionsCountParameters = /** @class */ (function (_super) {
    __extends(getCustomCollectionsCountParameters, _super);
    function getCustomCollectionsCountParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getCustomCollectionsCountParameters#where
     */
    getCustomCollectionsCountParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    return getCustomCollectionsCountParameters;
}(shopifySDKMethodParameters));
var deleteCustomCollectionByCustomCollectionIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomCollectionByCustomCollectionIdParameters, _super);
    function deleteCustomCollectionByCustomCollectionIdParameters(superThis, method, _path, customCollectionId) {
        return _super.call(this, superThis, method, _path
            .replace('{customCollectionId}', "" + customCollectionId)) || this;
    }
    return deleteCustomCollectionByCustomCollectionIdParameters;
}(shopifySDKMethodParameters));
var getCustomCollectionByCustomCollectionIdParameters = /** @class */ (function (_super) {
    __extends(getCustomCollectionByCustomCollectionIdParameters, _super);
    function getCustomCollectionByCustomCollectionIdParameters(superThis, method, _path, customCollectionId) {
        return _super.call(this, superThis, method, _path
            .replace('{customCollectionId}', "" + customCollectionId)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getCustomCollectionByCustomCollectionIdParameters#where
     */
    getCustomCollectionByCustomCollectionIdParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCustomCollectionByCustomCollectionIdParameters#pageSize
     */
    getCustomCollectionByCustomCollectionIdParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCustomCollectionByCustomCollectionIdParameters#page
     */
    getCustomCollectionByCustomCollectionIdParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getCustomCollectionByCustomCollectionIdParameters;
}(shopifySDKMethodParameters));
var updateCustomCollectionByCustomCollectionIdParameters = /** @class */ (function (_super) {
    __extends(updateCustomCollectionByCustomCollectionIdParameters, _super);
    function updateCustomCollectionByCustomCollectionIdParameters(superThis, method, _path, customCollectionId, customCollections) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{customCollectionId}', "" + customCollectionId)) || this;
        _this.send(customCollections);
        return _this;
    }
    return updateCustomCollectionByCustomCollectionIdParameters;
}(shopifySDKMethodParameters));
var getCustomersParameters = /** @class */ (function (_super) {
    __extends(getCustomersParameters, _super);
    function getCustomersParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getCustomersParameters#where
     */
    getCustomersParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCustomersParameters#page
     */
    getCustomersParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCustomersParameters#pageSize
     */
    getCustomersParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'orderBy' optional parameter
     * @method
     * @name getCustomersParameters#orderBy
     */
    getCustomersParameters.prototype.orderBy = function (orderBy) {
        return this.query({
            'orderBy': orderBy
        });
    };
    /**
     * Set the 'returnTotalCount' optional parameter
     * @method
     * @name getCustomersParameters#returnTotalCount
     */
    getCustomersParameters.prototype.returnTotalCount = function (returnTotalCount) {
        return this.query({
            'returnTotalCount': returnTotalCount
        });
    };
    return getCustomersParameters;
}(shopifySDKMethodParameters));
var createCustomerParameters = /** @class */ (function (_super) {
    __extends(createCustomerParameters, _super);
    function createCustomerParameters(superThis, method, _path, customer) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(customer);
        return _this;
    }
    return createCustomerParameters;
}(shopifySDKMethodParameters));
var getCustomersAddressesParameters = /** @class */ (function (_super) {
    __extends(getCustomersAddressesParameters, _super);
    function getCustomersAddressesParameters(superThis, method, _path, customerId) {
        return _super.call(this, superThis, method, _path
            .replace('{customerId}', "" + customerId)) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCustomersAddressesParameters#pageSize
     */
    getCustomersAddressesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCustomersAddressesParameters#page
     */
    getCustomersAddressesParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getCustomersAddressesParameters;
}(shopifySDKMethodParameters));
var createCustomerAddresseParameters = /** @class */ (function (_super) {
    __extends(createCustomerAddresseParameters, _super);
    function createCustomerAddresseParameters(superThis, method, _path, customerId, address) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{customerId}', "" + customerId)) || this;
        _this.send(address);
        return _this;
    }
    return createCustomerAddresseParameters;
}(shopifySDKMethodParameters));
var deleteCustomersAddresseByAddressIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomersAddresseByAddressIdParameters, _super);
    function deleteCustomersAddresseByAddressIdParameters(superThis, method, _path, customerId, addressId) {
        return _super.call(this, superThis, method, _path
            .replace('{customerId}', "" + customerId)
            .replace('{addressId}', "" + addressId)) || this;
    }
    return deleteCustomersAddresseByAddressIdParameters;
}(shopifySDKMethodParameters));
var getCustomersAddresseByAddressIdParameters = /** @class */ (function (_super) {
    __extends(getCustomersAddresseByAddressIdParameters, _super);
    function getCustomersAddresseByAddressIdParameters(superThis, method, _path, customerId, addressId) {
        return _super.call(this, superThis, method, _path
            .replace('{customerId}', "" + customerId)
            .replace('{addressId}', "" + addressId)) || this;
    }
    return getCustomersAddresseByAddressIdParameters;
}(shopifySDKMethodParameters));
var updateCustomersAddresseByAddressIdParameters = /** @class */ (function (_super) {
    __extends(updateCustomersAddresseByAddressIdParameters, _super);
    function updateCustomersAddresseByAddressIdParameters(superThis, method, _path, customerId, addressId, address) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{customerId}', "" + customerId)
            .replace('{addressId}', "" + addressId)) || this;
        _this.send(address);
        return _this;
    }
    return updateCustomersAddresseByAddressIdParameters;
}(shopifySDKMethodParameters));
var deleteCustomerByIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomerByIdParameters, _super);
    function deleteCustomerByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteCustomerByIdParameters;
}(shopifySDKMethodParameters));
var getCustomerByIdParameters = /** @class */ (function (_super) {
    __extends(getCustomerByIdParameters, _super);
    function getCustomerByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getCustomerByIdParameters;
}(shopifySDKMethodParameters));
var updateCustomerByIdParameters = /** @class */ (function (_super) {
    __extends(updateCustomerByIdParameters, _super);
    function updateCustomerByIdParameters(superThis, method, _path, id, customer) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(customer);
        return _this;
    }
    return updateCustomerByIdParameters;
}(shopifySDKMethodParameters));
var getCustomersAbandonedCheckoutsParameters = /** @class */ (function (_super) {
    __extends(getCustomersAbandonedCheckoutsParameters, _super);
    function getCustomersAbandonedCheckoutsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCustomersAbandonedCheckoutsParameters#page
     */
    getCustomersAbandonedCheckoutsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCustomersAbandonedCheckoutsParameters#pageSize
     */
    getCustomersAbandonedCheckoutsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getCustomersAbandonedCheckoutsParameters;
}(shopifySDKMethodParameters));
var getCustomersOrdersParameters = /** @class */ (function (_super) {
    __extends(getCustomersOrdersParameters, _super);
    function getCustomersOrdersParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getCustomersOrdersParameters#page
     */
    getCustomersOrdersParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCustomersOrdersParameters#pageSize
     */
    getCustomersOrdersParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getCustomersOrdersParameters;
}(shopifySDKMethodParameters));
var getDiscountCodeByCodeParameters = /** @class */ (function (_super) {
    __extends(getDiscountCodeByCodeParameters, _super);
    function getDiscountCodeByCodeParameters(superThis, method, _path, code) {
        return _super.call(this, superThis, method, _path
            .replace('{code}', "" + code)) || this;
    }
    return getDiscountCodeByCodeParameters;
}(shopifySDKMethodParameters));
var getInventoryItemsParameters = /** @class */ (function (_super) {
    __extends(getInventoryItemsParameters, _super);
    function getInventoryItemsParameters(superThis, method, _path, where) {
        var _this = _super.call(this, superThis, method, _path) || this;
        return _this.query({
            'where': where
        });
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getInventoryItemsParameters#pageSize
     */
    getInventoryItemsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getInventoryItemsParameters#page
     */
    getInventoryItemsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getInventoryItemsParameters;
}(shopifySDKMethodParameters));
var updateInventoryItemByIdParameters = /** @class */ (function (_super) {
    __extends(updateInventoryItemByIdParameters, _super);
    function updateInventoryItemByIdParameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    return updateInventoryItemByIdParameters;
}(shopifySDKMethodParameters));
var getLocationsParameters = /** @class */ (function (_super) {
    __extends(getLocationsParameters, _super);
    function getLocationsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getLocationsParameters#pageSize
     */
    getLocationsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getLocationsParameters#page
     */
    getLocationsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getLocationsParameters;
}(shopifySDKMethodParameters));
var getLocationsInventoryItemsInventoryLevelsParameters = /** @class */ (function (_super) {
    __extends(getLocationsInventoryItemsInventoryLevelsParameters, _super);
    function getLocationsInventoryItemsInventoryLevelsParameters(superThis, method, _path, id, inventoryItemId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{inventoryItemId}', "" + inventoryItemId)) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getLocationsInventoryItemsInventoryLevelsParameters#pageSize
     */
    getLocationsInventoryItemsInventoryLevelsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getLocationsInventoryItemsInventoryLevelsParameters#page
     */
    getLocationsInventoryItemsInventoryLevelsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getLocationsInventoryItemsInventoryLevelsParameters;
}(shopifySDKMethodParameters));
var updateLocationsInventoryItemsInventoryLevelsParameters = /** @class */ (function (_super) {
    __extends(updateLocationsInventoryItemsInventoryLevelsParameters, _super);
    function updateLocationsInventoryItemsInventoryLevelsParameters(superThis, method, _path, id, inventoryItemId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{inventoryItemId}', "" + inventoryItemId)) || this;
        _this.send(body);
        return _this;
    }
    return updateLocationsInventoryItemsInventoryLevelsParameters;
}(shopifySDKMethodParameters));
var createLocationInventoryItemInventoryLevelParameters = /** @class */ (function (_super) {
    __extends(createLocationInventoryItemInventoryLevelParameters, _super);
    function createLocationInventoryItemInventoryLevelParameters(superThis, method, _path, id, inventoryItemId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{inventoryItemId}', "" + inventoryItemId)) || this;
    }
    /**
     * Set the 'body' optional parameter
     * @method
     * @name createLocationInventoryItemInventoryLevelParameters#body
     */
    createLocationInventoryItemInventoryLevelParameters.prototype.body = function (body) {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
    };
    return createLocationInventoryItemInventoryLevelParameters;
}(shopifySDKMethodParameters));
var getLocationsInventoryLevelsParameters = /** @class */ (function (_super) {
    __extends(getLocationsInventoryLevelsParameters, _super);
    function getLocationsInventoryLevelsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getLocationsInventoryLevelsParameters#pageSize
     */
    getLocationsInventoryLevelsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getLocationsInventoryLevelsParameters#page
     */
    getLocationsInventoryLevelsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getLocationsInventoryLevelsParameters;
}(shopifySDKMethodParameters));
var getMetafieldsParameters = /** @class */ (function (_super) {
    __extends(getMetafieldsParameters, _super);
    function getMetafieldsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getMetafieldsParameters#where
     */
    getMetafieldsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetafieldsParameters#pageSize
     */
    getMetafieldsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getMetafieldsParameters#page
     */
    getMetafieldsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getMetafieldsParameters;
}(shopifySDKMethodParameters));
var createMetafieldParameters = /** @class */ (function (_super) {
    __extends(createMetafieldParameters, _super);
    function createMetafieldParameters(superThis, method, _path, body) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(body);
        return _this;
    }
    return createMetafieldParameters;
}(shopifySDKMethodParameters));
var getMetafieldsCountParameters = /** @class */ (function (_super) {
    __extends(getMetafieldsCountParameters, _super);
    function getMetafieldsCountParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getMetafieldsCountParameters;
}(shopifySDKMethodParameters));
var deleteMetafieldByIdParameters = /** @class */ (function (_super) {
    __extends(deleteMetafieldByIdParameters, _super);
    function deleteMetafieldByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteMetafieldByIdParameters;
}(shopifySDKMethodParameters));
var getMetafieldByIdParameters = /** @class */ (function (_super) {
    __extends(getMetafieldByIdParameters, _super);
    function getMetafieldByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getMetafieldByIdParameters;
}(shopifySDKMethodParameters));
var updateMetafieldByIdParameters = /** @class */ (function (_super) {
    __extends(updateMetafieldByIdParameters, _super);
    function updateMetafieldByIdParameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    return updateMetafieldByIdParameters;
}(shopifySDKMethodParameters));
var getObjectsParameters = /** @class */ (function (_super) {
    __extends(getObjectsParameters, _super);
    function getObjectsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getObjectsParameters;
}(shopifySDKMethodParameters));
var getObjectsObjectNameDocsParameters = /** @class */ (function (_super) {
    __extends(getObjectsObjectNameDocsParameters, _super);
    function getObjectsObjectNameDocsParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    /**
     * Set the 'discovery' optional parameter
     * @method
     * @name getObjectsObjectNameDocsParameters#discovery
     */
    getObjectsObjectNameDocsParameters.prototype.discovery = function (discovery) {
        return this.query({
            'discovery': discovery
        });
    };
    /**
     * Set the 'resolveReferences' optional parameter
     * @method
     * @name getObjectsObjectNameDocsParameters#resolveReferences
     */
    getObjectsObjectNameDocsParameters.prototype.resolveReferences = function (resolveReferences) {
        return this.query({
            'resolveReferences': resolveReferences
        });
    };
    /**
     * Set the 'basic' optional parameter
     * @method
     * @name getObjectsObjectNameDocsParameters#basic
     */
    getObjectsObjectNameDocsParameters.prototype.basic = function (basic) {
        return this.query({
            'basic': basic
        });
    };
    return getObjectsObjectNameDocsParameters;
}(shopifySDKMethodParameters));
var getObjectsObjectNameMetadataParameters = /** @class */ (function (_super) {
    __extends(getObjectsObjectNameMetadataParameters, _super);
    function getObjectsObjectNameMetadataParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getObjectsObjectNameMetadataParameters;
}(shopifySDKMethodParameters));
var getOrdersParameters = /** @class */ (function (_super) {
    __extends(getOrdersParameters, _super);
    function getOrdersParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getOrdersParameters#where
     */
    getOrdersParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getOrdersParameters#page
     */
    getOrdersParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getOrdersParameters#pageSize
     */
    getOrdersParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'orderBy' optional parameter
     * @method
     * @name getOrdersParameters#orderBy
     */
    getOrdersParameters.prototype.orderBy = function (orderBy) {
        return this.query({
            'orderBy': orderBy
        });
    };
    /**
     * Set the 'returnTotalCount' optional parameter
     * @method
     * @name getOrdersParameters#returnTotalCount
     */
    getOrdersParameters.prototype.returnTotalCount = function (returnTotalCount) {
        return this.query({
            'returnTotalCount': returnTotalCount
        });
    };
    return getOrdersParameters;
}(shopifySDKMethodParameters));
var createOrderParameters = /** @class */ (function (_super) {
    __extends(createOrderParameters, _super);
    function createOrderParameters(superThis, method, _path, order) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(order);
        return _this;
    }
    return createOrderParameters;
}(shopifySDKMethodParameters));
var deleteOrderByIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrderByIdParameters, _super);
    function deleteOrderByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteOrderByIdParameters;
}(shopifySDKMethodParameters));
var getOrderByIdParameters = /** @class */ (function (_super) {
    __extends(getOrderByIdParameters, _super);
    function getOrderByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getOrderByIdParameters;
}(shopifySDKMethodParameters));
var updateOrderByIdParameters = /** @class */ (function (_super) {
    __extends(updateOrderByIdParameters, _super);
    function updateOrderByIdParameters(superThis, method, _path, id, order) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(order);
        return _this;
    }
    /**
     * Set the 'action' optional parameter
     * @method
     * @name updateOrderByIdParameters#action
     */
    updateOrderByIdParameters.prototype.action = function (action) {
        return this.query({
            'action': action
        });
    };
    return updateOrderByIdParameters;
}(shopifySDKMethodParameters));
var getOrdersFulfillmentsParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsParameters, _super);
    function getOrdersFulfillmentsParameters(superThis, method, _path, orderId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getOrdersFulfillmentsParameters#where
     */
    getOrdersFulfillmentsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getOrdersFulfillmentsParameters#pageSize
     */
    getOrdersFulfillmentsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getOrdersFulfillmentsParameters#page
     */
    getOrdersFulfillmentsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getOrdersFulfillmentsParameters;
}(shopifySDKMethodParameters));
var createOrderFulfillmentParameters = /** @class */ (function (_super) {
    __extends(createOrderFulfillmentParameters, _super);
    function createOrderFulfillmentParameters(superThis, method, _path, orderId, fulfillment) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
        _this.send(fulfillment);
        return _this;
    }
    return createOrderFulfillmentParameters;
}(shopifySDKMethodParameters));
var getOrdersFulfillmentsCountParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsCountParameters, _super);
    function getOrdersFulfillmentsCountParameters(superThis, method, _path, orderId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
    }
    return getOrdersFulfillmentsCountParameters;
}(shopifySDKMethodParameters));
var getOrdersFulfillmentByFulfillmentIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentByFulfillmentIdParameters, _super);
    function getOrdersFulfillmentByFulfillmentIdParameters(superThis, method, _path, orderId, fulfillmentId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)) || this;
    }
    return getOrdersFulfillmentByFulfillmentIdParameters;
}(shopifySDKMethodParameters));
var updateOrdersFulfillmentByFulfillmentIdParameters = /** @class */ (function (_super) {
    __extends(updateOrdersFulfillmentByFulfillmentIdParameters, _super);
    function updateOrdersFulfillmentByFulfillmentIdParameters(superThis, method, _path, orderId, fulfillmentId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)) || this;
        _this.send(body);
        return _this;
    }
    return updateOrdersFulfillmentByFulfillmentIdParameters;
}(shopifySDKMethodParameters));
var getOrdersFulfillmentsFulfillmentEventsParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsFulfillmentEventsParameters, _super);
    function getOrdersFulfillmentsFulfillmentEventsParameters(superThis, method, _path, orderId, fulfillmentId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)) || this;
    }
    return getOrdersFulfillmentsFulfillmentEventsParameters;
}(shopifySDKMethodParameters));
var createOrderFulfillmentFulfillmentEventParameters = /** @class */ (function (_super) {
    __extends(createOrderFulfillmentFulfillmentEventParameters, _super);
    function createOrderFulfillmentFulfillmentEventParameters(superThis, method, _path, orderId, fulfillmentId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)) || this;
        _this.send(body);
        return _this;
    }
    return createOrderFulfillmentFulfillmentEventParameters;
}(shopifySDKMethodParameters));
var deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters, _super);
    function deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters(superThis, method, _path, orderId, fulfillmentId, eventId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)
            .replace('{eventId}', "" + eventId)) || this;
    }
    return deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters;
}(shopifySDKMethodParameters));
var getOrdersFulfillmentsFulfillmentEventByEventIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsFulfillmentEventByEventIdParameters, _super);
    function getOrdersFulfillmentsFulfillmentEventByEventIdParameters(superThis, method, _path, orderId, fulfillmentId, eventId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)
            .replace('{eventId}', "" + eventId)) || this;
    }
    return getOrdersFulfillmentsFulfillmentEventByEventIdParameters;
}(shopifySDKMethodParameters));
var updateOrdersFulfillmentsStatusCancelParameters = /** @class */ (function (_super) {
    __extends(updateOrdersFulfillmentsStatusCancelParameters, _super);
    function updateOrdersFulfillmentsStatusCancelParameters(superThis, method, _path, orderId, fulfillmentId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)) || this;
    }
    return updateOrdersFulfillmentsStatusCancelParameters;
}(shopifySDKMethodParameters));
var updateOrdersFulfillmentsStatusCompleteParameters = /** @class */ (function (_super) {
    __extends(updateOrdersFulfillmentsStatusCompleteParameters, _super);
    function updateOrdersFulfillmentsStatusCompleteParameters(superThis, method, _path, orderId, fulfillmentId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{fulfillmentId}', "" + fulfillmentId)) || this;
    }
    return updateOrdersFulfillmentsStatusCompleteParameters;
}(shopifySDKMethodParameters));
var getOrdersPaymentsParameters = /** @class */ (function (_super) {
    __extends(getOrdersPaymentsParameters, _super);
    function getOrdersPaymentsParameters(superThis, method, _path, orderId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getOrdersPaymentsParameters#where
     */
    getOrdersPaymentsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getOrdersPaymentsParameters#page
     */
    getOrdersPaymentsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getOrdersPaymentsParameters#pageSize
     */
    getOrdersPaymentsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getOrdersPaymentsParameters;
}(shopifySDKMethodParameters));
var createOrderPaymentParameters = /** @class */ (function (_super) {
    __extends(createOrderPaymentParameters, _super);
    function createOrderPaymentParameters(superThis, method, _path, orderId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
        _this.send(body);
        return _this;
    }
    return createOrderPaymentParameters;
}(shopifySDKMethodParameters));
var getOrdersPaymentsCountParameters = /** @class */ (function (_super) {
    __extends(getOrdersPaymentsCountParameters, _super);
    function getOrdersPaymentsCountParameters(superThis, method, _path, orderId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
    }
    return getOrdersPaymentsCountParameters;
}(shopifySDKMethodParameters));
var getOrdersPaymentByPaymentIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersPaymentByPaymentIdParameters, _super);
    function getOrdersPaymentByPaymentIdParameters(superThis, method, _path, orderId, paymentId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{paymentId}', "" + paymentId)) || this;
    }
    return getOrdersPaymentByPaymentIdParameters;
}(shopifySDKMethodParameters));
var getOrdersRefundsParameters = /** @class */ (function (_super) {
    __extends(getOrdersRefundsParameters, _super);
    function getOrdersRefundsParameters(superThis, method, _path, orderId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getOrdersRefundsParameters#pageSize
     */
    getOrdersRefundsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getOrdersRefundsParameters#page
     */
    getOrdersRefundsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getOrdersRefundsParameters;
}(shopifySDKMethodParameters));
var createOrderRefundParameters = /** @class */ (function (_super) {
    __extends(createOrderRefundParameters, _super);
    function createOrderRefundParameters(superThis, method, _path, orderId, refund) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
        _this.send(refund);
        return _this;
    }
    return createOrderRefundParameters;
}(shopifySDKMethodParameters));
var createOrderRefundsCalculateParameters = /** @class */ (function (_super) {
    __extends(createOrderRefundsCalculateParameters, _super);
    function createOrderRefundsCalculateParameters(superThis, method, _path, orderId, refundCalculate) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
        _this.send(refundCalculate);
        return _this;
    }
    return createOrderRefundsCalculateParameters;
}(shopifySDKMethodParameters));
var getOrdersRefundByRefundIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersRefundByRefundIdParameters, _super);
    function getOrdersRefundByRefundIdParameters(superThis, method, _path, orderId, refundId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{refundId}', "" + refundId)) || this;
    }
    return getOrdersRefundByRefundIdParameters;
}(shopifySDKMethodParameters));
var getOrdersRisksParameters = /** @class */ (function (_super) {
    __extends(getOrdersRisksParameters, _super);
    function getOrdersRisksParameters(superThis, method, _path, orderId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
    }
    return getOrdersRisksParameters;
}(shopifySDKMethodParameters));
var createOrderRiskParameters = /** @class */ (function (_super) {
    __extends(createOrderRiskParameters, _super);
    function createOrderRiskParameters(superThis, method, _path, orderId, risk) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)) || this;
        _this.send(risk);
        return _this;
    }
    return createOrderRiskParameters;
}(shopifySDKMethodParameters));
var deleteOrdersRiskByRiskIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrdersRiskByRiskIdParameters, _super);
    function deleteOrdersRiskByRiskIdParameters(superThis, method, _path, orderId, riskId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{riskId}', "" + riskId)) || this;
    }
    return deleteOrdersRiskByRiskIdParameters;
}(shopifySDKMethodParameters));
var getOrdersRiskByRiskIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersRiskByRiskIdParameters, _super);
    function getOrdersRiskByRiskIdParameters(superThis, method, _path, orderId, riskId) {
        return _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{riskId}', "" + riskId)) || this;
    }
    return getOrdersRiskByRiskIdParameters;
}(shopifySDKMethodParameters));
var updateOrdersRiskByRiskIdParameters = /** @class */ (function (_super) {
    __extends(updateOrdersRiskByRiskIdParameters, _super);
    function updateOrdersRiskByRiskIdParameters(superThis, method, _path, orderId, riskId, risk) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{orderId}', "" + orderId)
            .replace('{riskId}', "" + riskId)) || this;
        _this.send(risk);
        return _this;
    }
    return updateOrdersRiskByRiskIdParameters;
}(shopifySDKMethodParameters));
var getPingParameters = /** @class */ (function (_super) {
    __extends(getPingParameters, _super);
    function getPingParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getPingParameters;
}(shopifySDKMethodParameters));
var getPriceRulesParameters = /** @class */ (function (_super) {
    __extends(getPriceRulesParameters, _super);
    function getPriceRulesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getPriceRulesParameters#page
     */
    getPriceRulesParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getPriceRulesParameters#pageSize
     */
    getPriceRulesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getPriceRulesParameters#where
     */
    getPriceRulesParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    return getPriceRulesParameters;
}(shopifySDKMethodParameters));
var createPriceRuleParameters = /** @class */ (function (_super) {
    __extends(createPriceRuleParameters, _super);
    function createPriceRuleParameters(superThis, method, _path, priceRule) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(priceRule);
        return _this;
    }
    return createPriceRuleParameters;
}(shopifySDKMethodParameters));
var deletePriceRuleByPriceRuleIdParameters = /** @class */ (function (_super) {
    __extends(deletePriceRuleByPriceRuleIdParameters, _super);
    function deletePriceRuleByPriceRuleIdParameters(superThis, method, _path, priceRuleId) {
        return _super.call(this, superThis, method, _path
            .replace('{priceRuleId}', "" + priceRuleId)) || this;
    }
    return deletePriceRuleByPriceRuleIdParameters;
}(shopifySDKMethodParameters));
var getPriceRuleByPriceRuleIdParameters = /** @class */ (function (_super) {
    __extends(getPriceRuleByPriceRuleIdParameters, _super);
    function getPriceRuleByPriceRuleIdParameters(superThis, method, _path, priceRuleId) {
        return _super.call(this, superThis, method, _path
            .replace('{priceRuleId}', "" + priceRuleId)) || this;
    }
    return getPriceRuleByPriceRuleIdParameters;
}(shopifySDKMethodParameters));
var getPriceRulesDiscountCodesParameters = /** @class */ (function (_super) {
    __extends(getPriceRulesDiscountCodesParameters, _super);
    function getPriceRulesDiscountCodesParameters(superThis, method, _path, priceRuleId) {
        return _super.call(this, superThis, method, _path
            .replace('{priceRuleId}', "" + priceRuleId)) || this;
    }
    return getPriceRulesDiscountCodesParameters;
}(shopifySDKMethodParameters));
var createPriceRuleDiscountCodeParameters = /** @class */ (function (_super) {
    __extends(createPriceRuleDiscountCodeParameters, _super);
    function createPriceRuleDiscountCodeParameters(superThis, method, _path, priceRuleId, discountCode) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{priceRuleId}', "" + priceRuleId)) || this;
        _this.send(discountCode);
        return _this;
    }
    return createPriceRuleDiscountCodeParameters;
}(shopifySDKMethodParameters));
var deletePriceRulesDiscountCodeByDiscountCodeIdParameters = /** @class */ (function (_super) {
    __extends(deletePriceRulesDiscountCodeByDiscountCodeIdParameters, _super);
    function deletePriceRulesDiscountCodeByDiscountCodeIdParameters(superThis, method, _path, priceRuleId, discountCodeId) {
        return _super.call(this, superThis, method, _path
            .replace('{priceRuleId}', "" + priceRuleId)
            .replace('{discountCodeId}', "" + discountCodeId)) || this;
    }
    return deletePriceRulesDiscountCodeByDiscountCodeIdParameters;
}(shopifySDKMethodParameters));
var getPriceRulesDiscountCodeByDiscountCodeIdParameters = /** @class */ (function (_super) {
    __extends(getPriceRulesDiscountCodeByDiscountCodeIdParameters, _super);
    function getPriceRulesDiscountCodeByDiscountCodeIdParameters(superThis, method, _path, priceRuleId, discountCodeId) {
        return _super.call(this, superThis, method, _path
            .replace('{priceRuleId}', "" + priceRuleId)
            .replace('{discountCodeId}', "" + discountCodeId)) || this;
    }
    return getPriceRulesDiscountCodeByDiscountCodeIdParameters;
}(shopifySDKMethodParameters));
var getProductsParameters = /** @class */ (function (_super) {
    __extends(getProductsParameters, _super);
    function getProductsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getProductsParameters#where
     */
    getProductsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getProductsParameters#page
     */
    getProductsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getProductsParameters#pageSize
     */
    getProductsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'orderBy' optional parameter
     * @method
     * @name getProductsParameters#orderBy
     */
    getProductsParameters.prototype.orderBy = function (orderBy) {
        return this.query({
            'orderBy': orderBy
        });
    };
    /**
     * Set the 'returnTotalCount' optional parameter
     * @method
     * @name getProductsParameters#returnTotalCount
     */
    getProductsParameters.prototype.returnTotalCount = function (returnTotalCount) {
        return this.query({
            'returnTotalCount': returnTotalCount
        });
    };
    return getProductsParameters;
}(shopifySDKMethodParameters));
var createProductParameters = /** @class */ (function (_super) {
    __extends(createProductParameters, _super);
    function createProductParameters(superThis, method, _path, product) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(product);
        return _this;
    }
    return createProductParameters;
}(shopifySDKMethodParameters));
var deleteProductByIdParameters = /** @class */ (function (_super) {
    __extends(deleteProductByIdParameters, _super);
    function deleteProductByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteProductByIdParameters;
}(shopifySDKMethodParameters));
var getProductByIdParameters = /** @class */ (function (_super) {
    __extends(getProductByIdParameters, _super);
    function getProductByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getProductByIdParameters;
}(shopifySDKMethodParameters));
var updateProductByIdParameters = /** @class */ (function (_super) {
    __extends(updateProductByIdParameters, _super);
    function updateProductByIdParameters(superThis, method, _path, id, product) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(product);
        return _this;
    }
    return updateProductByIdParameters;
}(shopifySDKMethodParameters));
var getProductsVariantsParameters = /** @class */ (function (_super) {
    __extends(getProductsVariantsParameters, _super);
    function getProductsVariantsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getProductsVariantsParameters#pageSize
     */
    getProductsVariantsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getProductsVariantsParameters#page
     */
    getProductsVariantsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getProductsVariantsParameters;
}(shopifySDKMethodParameters));
var createProductVariantParameters = /** @class */ (function (_super) {
    __extends(createProductVariantParameters, _super);
    function createProductVariantParameters(superThis, method, _path, id, variant) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(variant);
        return _this;
    }
    return createProductVariantParameters;
}(shopifySDKMethodParameters));
var getProductsImagesParameters = /** @class */ (function (_super) {
    __extends(getProductsImagesParameters, _super);
    function getProductsImagesParameters(superThis, method, _path, productId) {
        return _super.call(this, superThis, method, _path
            .replace('{productId}', "" + productId)) || this;
    }
    return getProductsImagesParameters;
}(shopifySDKMethodParameters));
var createProductImageParameters = /** @class */ (function (_super) {
    __extends(createProductImageParameters, _super);
    function createProductImageParameters(superThis, method, _path, productId, image) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{productId}', "" + productId)) || this;
        _this.send(image);
        return _this;
    }
    return createProductImageParameters;
}(shopifySDKMethodParameters));
var deleteProductsImageByIdParameters = /** @class */ (function (_super) {
    __extends(deleteProductsImageByIdParameters, _super);
    function deleteProductsImageByIdParameters(superThis, method, _path, productId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{productId}', "" + productId)
            .replace('{id}', "" + id)) || this;
    }
    return deleteProductsImageByIdParameters;
}(shopifySDKMethodParameters));
var getProductsImageByIdParameters = /** @class */ (function (_super) {
    __extends(getProductsImageByIdParameters, _super);
    function getProductsImageByIdParameters(superThis, method, _path, productId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{productId}', "" + productId)
            .replace('{id}', "" + id)) || this;
    }
    return getProductsImageByIdParameters;
}(shopifySDKMethodParameters));
var updateProductsImageByIdParameters = /** @class */ (function (_super) {
    __extends(updateProductsImageByIdParameters, _super);
    function updateProductsImageByIdParameters(superThis, method, _path, productId, id, image) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{productId}', "" + productId)
            .replace('{id}', "" + id)) || this;
        _this.send(image);
        return _this;
    }
    return updateProductsImageByIdParameters;
}(shopifySDKMethodParameters));
var deleteProductsVariantByIdParameters = /** @class */ (function (_super) {
    __extends(deleteProductsVariantByIdParameters, _super);
    function deleteProductsVariantByIdParameters(superThis, method, _path, productId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{productId}', "" + productId)
            .replace('{id}', "" + id)) || this;
    }
    return deleteProductsVariantByIdParameters;
}(shopifySDKMethodParameters));
var getQueryParameters = /** @class */ (function (_super) {
    __extends(getQueryParameters, _super);
    function getQueryParameters(superThis, method, _path, q) {
        var _this = _super.call(this, superThis, method, _path) || this;
        return _this.query({
            'q': q
        });
    }
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getQueryParameters#page
     */
    getQueryParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getQueryParameters#pageSize
     */
    getQueryParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'returnTotalCount' optional parameter
     * @method
     * @name getQueryParameters#returnTotalCount
     */
    getQueryParameters.prototype.returnTotalCount = function (returnTotalCount) {
        return this.query({
            'returnTotalCount': returnTotalCount
        });
    };
    return getQueryParameters;
}(shopifySDKMethodParameters));
var getShippingZonesParameters = /** @class */ (function (_super) {
    __extends(getShippingZonesParameters, _super);
    function getShippingZonesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getShippingZonesParameters#pageSize
     */
    getShippingZonesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getShippingZonesParameters#page
     */
    getShippingZonesParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getShippingZonesParameters;
}(shopifySDKMethodParameters));
var getShopsParameters = /** @class */ (function (_super) {
    __extends(getShopsParameters, _super);
    function getShopsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getShopsParameters;
}(shopifySDKMethodParameters));
var getSmartCollectionsParameters = /** @class */ (function (_super) {
    __extends(getSmartCollectionsParameters, _super);
    function getSmartCollectionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getSmartCollectionsParameters#where
     */
    getSmartCollectionsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getSmartCollectionsParameters#pageSize
     */
    getSmartCollectionsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getSmartCollectionsParameters#page
     */
    getSmartCollectionsParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    return getSmartCollectionsParameters;
}(shopifySDKMethodParameters));
var createSmartCollectionParameters = /** @class */ (function (_super) {
    __extends(createSmartCollectionParameters, _super);
    function createSmartCollectionParameters(superThis, method, _path, smartCollections) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(smartCollections);
        return _this;
    }
    return createSmartCollectionParameters;
}(shopifySDKMethodParameters));
var deleteSmartCollectionByIdParameters = /** @class */ (function (_super) {
    __extends(deleteSmartCollectionByIdParameters, _super);
    function deleteSmartCollectionByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteSmartCollectionByIdParameters;
}(shopifySDKMethodParameters));
var getSmartCollectionByIdParameters = /** @class */ (function (_super) {
    __extends(getSmartCollectionByIdParameters, _super);
    function getSmartCollectionByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getSmartCollectionByIdParameters;
}(shopifySDKMethodParameters));
var updateSmartCollectionByIdParameters = /** @class */ (function (_super) {
    __extends(updateSmartCollectionByIdParameters, _super);
    function updateSmartCollectionByIdParameters(superThis, method, _path, id, smartCollections) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(smartCollections);
        return _this;
    }
    return updateSmartCollectionByIdParameters;
}(shopifySDKMethodParameters));
var getVariantByIdParameters = /** @class */ (function (_super) {
    __extends(getVariantByIdParameters, _super);
    function getVariantByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getVariantByIdParameters;
}(shopifySDKMethodParameters));
var updateVariantByIdParameters = /** @class */ (function (_super) {
    __extends(updateVariantByIdParameters, _super);
    function updateVariantByIdParameters(superThis, method, _path, id, variant) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(variant);
        return _this;
    }
    return updateVariantByIdParameters;
}(shopifySDKMethodParameters));
var getByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getByObjectNameParameters, _super);
    function getByObjectNameParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getByObjectNameParameters#where
     */
    getByObjectNameParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getByObjectNameParameters#page
     */
    getByObjectNameParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getByObjectNameParameters#pageSize
     */
    getByObjectNameParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getByObjectNameParameters;
}(shopifySDKMethodParameters));
var createByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createByObjectNameParameters, _super);
    function createByObjectNameParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return createByObjectNameParameters;
}(shopifySDKMethodParameters));
var getObjectNameMetafieldsParameters = /** @class */ (function (_super) {
    __extends(getObjectNameMetafieldsParameters, _super);
    function getObjectNameMetafieldsParameters(superThis, method, _path, objectName, id) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{id}', "" + id)) || this;
    }
    return getObjectNameMetafieldsParameters;
}(shopifySDKMethodParameters));
var createObjectNameMetafieldParameters = /** @class */ (function (_super) {
    __extends(createObjectNameMetafieldParameters, _super);
    function createObjectNameMetafieldParameters(superThis, method, _path, objectName, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    return createObjectNameMetafieldParameters;
}(shopifySDKMethodParameters));
var getObjectNameMetafieldsCountParameters = /** @class */ (function (_super) {
    __extends(getObjectNameMetafieldsCountParameters, _super);
    function getObjectNameMetafieldsCountParameters(superThis, method, _path, objectName, id) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{id}', "" + id)) || this;
    }
    return getObjectNameMetafieldsCountParameters;
}(shopifySDKMethodParameters));
var deleteObjectNameMetafieldByMetafieldIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameMetafieldByMetafieldIdParameters, _super);
    function deleteObjectNameMetafieldByMetafieldIdParameters(superThis, method, _path, objectName, id, metafieldId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{id}', "" + id)
            .replace('{metafieldId}', "" + metafieldId)) || this;
    }
    return deleteObjectNameMetafieldByMetafieldIdParameters;
}(shopifySDKMethodParameters));
var getObjectNameMetafieldByMetafieldIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameMetafieldByMetafieldIdParameters, _super);
    function getObjectNameMetafieldByMetafieldIdParameters(superThis, method, _path, objectName, id, metafieldId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{id}', "" + id)
            .replace('{metafieldId}', "" + metafieldId)) || this;
    }
    return getObjectNameMetafieldByMetafieldIdParameters;
}(shopifySDKMethodParameters));
var updateObjectNameMetafieldByMetafieldIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameMetafieldByMetafieldIdParameters, _super);
    function updateObjectNameMetafieldByMetafieldIdParameters(superThis, method, _path, objectName, id, metafieldId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{id}', "" + id)
            .replace('{metafieldId}', "" + metafieldId)) || this;
        _this.send(body);
        return _this;
    }
    return updateObjectNameMetafieldByMetafieldIdParameters;
}(shopifySDKMethodParameters));
var deleteObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameByObjectIdParameters, _super);
    function deleteObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
    }
    return deleteObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
var getObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByObjectIdParameters, _super);
    function getObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
    }
    return getObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
var updateObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameByObjectIdParameters, _super);
    function updateObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
        _this.send(body);
        return _this;
    }
    return updateObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
var replaceObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(replaceObjectNameByObjectIdParameters, _super);
    function replaceObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
        _this.send(body);
        return _this;
    }
    return replaceObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
var getObjectNameByChildObjectNameParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByChildObjectNameParameters, _super);
    function getObjectNameByChildObjectNameParameters(superThis, method, _path, objectName, objectId, childObjectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectName}', "" + childObjectName)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getObjectNameByChildObjectNameParameters#where
     */
    getObjectNameByChildObjectNameParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'page' optional parameter
     * @method
     * @name getObjectNameByChildObjectNameParameters#page
     */
    getObjectNameByChildObjectNameParameters.prototype.page = function (page) {
        return this.query({
            'page': page
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getObjectNameByChildObjectNameParameters#pageSize
     */
    getObjectNameByChildObjectNameParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getObjectNameByChildObjectNameParameters;
}(shopifySDKMethodParameters));
var createObjectNameByChildObjectNameParameters = /** @class */ (function (_super) {
    __extends(createObjectNameByChildObjectNameParameters, _super);
    function createObjectNameByChildObjectNameParameters(superThis, method, _path, objectName, objectId, childObjectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectName}', "" + childObjectName)) || this;
        _this.send(body);
        return _this;
    }
    return createObjectNameByChildObjectNameParameters;
}(shopifySDKMethodParameters));
var deleteObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameByChildObjectIdParameters, _super);
    function deleteObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
    }
    return deleteObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
var getObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByChildObjectIdParameters, _super);
    function getObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
    }
    return getObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
var updateObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameByChildObjectIdParameters, _super);
    function updateObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
        _this.send(body);
        return _this;
    }
    return updateObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
var replaceObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(replaceObjectNameByChildObjectIdParameters, _super);
    function replaceObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
        _this.send(body);
        return _this;
    }
    return replaceObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
