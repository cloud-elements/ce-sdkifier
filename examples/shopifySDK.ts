import * as request from "superagent";
type integer = number;
/**
 * 
 * @class shopifySDK
 * Methods return a superagent compatible instance that fully supports the superagent API
 */
export class shopifySDK {
    domain: string = "https://staging.cloud-elements.com/elements/api-v2";
    authorizationHeader: string = null;
    /**
     * Create an instance of the SDK
     * @param {string} baseUrl - The URL of the host environment (e.g., https://staging.cloud-elements.com)
     * @param {string} authorizationHeader - A valid auth header for Cloud Elements (User and Org tokens)
     */
    constructor(baseUrl ? : string, authorizationHeader ? : string) {
        if (baseUrl) {
            this.domain = `${baseUrl}/elements/api-v2`;
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }
    getDomain() {
        return this.domain;
    }
    /**
     * Perform a POST to the given path
     * @method
     * @name platformSDK#post
     * @param {string} path
     */
    post(path: string): shopifySDKMethodParameters < request.Response > {
        return new shopifySDKMethodParameters < request.Response > (this, 'post', path)
    }
    /**
     * Perform a PUT to the given path
     * @method
     * @name platformSDK#put
     * @param {string} path
     */
    put(path: string): shopifySDKMethodParameters < request.Response > {
        return new shopifySDKMethodParameters < request.Response > (this, 'put', path)
    }
    /**
     * Perform a PATCH to the given path
     * @method
     * @name platformSDK#patch
     * @param {string} path
     */
    patch(path: string): shopifySDKMethodParameters < request.Response > {
        return new shopifySDKMethodParameters < request.Response > (this, 'patch', path)
    }
    /**
     * Perform a DELETE to the given path
     * @method
     * @name platformSDK#delete
     * @param {string} path
     */
    delete(path: string): shopifySDKMethodParameters < request.Response > {
        return new shopifySDKMethodParameters < request.Response > (this, 'delete', path)
    }
    /**
     * Perform a GET to the given path
     * @method
     * @name platformSDK#get
     * @param {string} path
     */
    get(path: string): shopifySDKMethodParameters < request.Response > {
        return new shopifySDKMethodParameters < request.Response > (this, 'get', path)
    }
    /**
     * Retrieve abandoned checkouts from Shopify.
     * @method
     * @name shopifySDK#getAbandonedCheckouts
     * @return { getAbandonedCheckoutsParameters } To allow chaining
     */
    getAbandonedCheckouts(): getAbandonedCheckoutsParameters {
        return new getAbandonedCheckoutsParameters(this, 'GET', '/abandoned-checkouts');
    }
    /**
     * Create an asynchronous bulk query job.
     * @method
     * @name shopifySDK#createBulkQuery
     * @param {string} q - The CEQL query. When this parameter is omitted, all objects of the given type are returned via the bulk job. Endpoint limiters may still apply.
     * @return { createBulkQueryParameters } To allow chaining
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
     * @return { replaceBulkCancelParameters } To allow chaining
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
     * @return { getBulkErrorsParameters } To allow chaining
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
     * @return { getBulkStatusParameters } To allow chaining
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
     * @return { getBulkByObjectNameParameters } To allow chaining
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
     * @return { createBulkByObjectNameParameters } To allow chaining
     */
    createBulkByObjectName(
        objectName: string
        ,
    ): createBulkByObjectNameParameters {
        return new createBulkByObjectNameParameters(this, 'POST', '/bulk/{objectName}', objectName);
    }
    /**
     * List all collects or only those for specific products or collections
     * @method
     * @name shopifySDK#getCollects
     * @return { getCollectsParameters } To allow chaining
     */
    getCollects(): getCollectsParameters {
        return new getCollectsParameters(this, 'GET', '/collects');
    }
    /**
     * Add a product to a collection
     * @method
     * @name shopifySDK#createCollect
     * @param {} collects - The body of the collect
     * @return { createCollectParameters } To allow chaining
     */
    createCollect(
        collects:
        collectsPOST
        ,
    ): createCollectParameters {
        return new createCollectParameters(this, 'POST', '/collects', collects);
    }
    /**
     * Receive a count of all Collects
     * @method
     * @name shopifySDK#getCollectsCount
     * @return { getCollectsCountParameters } To allow chaining
     */
    getCollectsCount(): getCollectsCountParameters {
        return new getCollectsCountParameters(this, 'GET', '/collects-count');
    }
    /**
     * Remove a product from a collection
     * @method
     * @name shopifySDK#deleteCollectByCollectId
     * @param {string} collectId - ID of the collect
     * @return { deleteCollectByCollectIdParameters } To allow chaining
     */
    deleteCollectByCollectId(
        collectId: string
        ,
    ): deleteCollectByCollectIdParameters {
        return new deleteCollectByCollectIdParameters(this, 'DELETE', '/collects/{collectId}', collectId);
    }
    /**
     * Get the collect with a certain id, or for a given product and collection
     * @method
     * @name shopifySDK#getCollectByCollectId
     * @param {string} collectId - ID of the collect
     * @return { getCollectByCollectIdParameters } To allow chaining
     */
    getCollectByCollectId(
        collectId: string
        ,
    ): getCollectByCollectIdParameters {
        return new getCollectByCollectIdParameters(this, 'GET', '/collects/{collectId}', collectId);
    }
    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountries
     * @return { getCountriesParameters } To allow chaining
     */
    getCountries(): getCountriesParameters {
        return new getCountriesParameters(this, 'GET', '/countries');
    }
    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountryByCountryId
     * @param {string} countryId - ID of the country
     * @return { getCountryByCountryIdParameters } To allow chaining
     */
    getCountryByCountryId(
        countryId: string
        ,
    ): getCountryByCountryIdParameters {
        return new getCountryByCountryIdParameters(this, 'GET', '/countries/{countryId}', countryId);
    }
    /**
     * Get a list of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollections
     * @return { getCustomCollectionsParameters } To allow chaining
     */
    getCustomCollections(): getCustomCollectionsParameters {
        return new getCustomCollectionsParameters(this, 'GET', '/custom-collections');
    }
    /**
     * Create a new custom collection
     * @method
     * @name shopifySDK#createCustomCollection
     * @param {} customCollections - The custom-collections object
     * @return { createCustomCollectionParameters } To allow chaining
     */
    createCustomCollection(
        customCollections:
        customCollectionsPOST
        ,
    ): createCustomCollectionParameters {
        return new createCustomCollectionParameters(this, 'POST', '/custom-collections', customCollections);
    }
    /**
     * Get a count of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollectionsCount
     * @return { getCustomCollectionsCountParameters } To allow chaining
     */
    getCustomCollectionsCount(): getCustomCollectionsCountParameters {
        return new getCustomCollectionsCountParameters(this, 'GET', '/custom-collections-count');
    }
    /**
     * Remove a custom collection from the database
     * @method
     * @name shopifySDK#deleteCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections
     * @return { deleteCustomCollectionByCustomCollectionIdParameters } To allow chaining
     */
    deleteCustomCollectionByCustomCollectionId(
        customCollectionId: string
        ,
    ): deleteCustomCollectionByCustomCollectionIdParameters {
        return new deleteCustomCollectionByCustomCollectionIdParameters(this, 'DELETE', '/custom-collections/{customCollectionId}', customCollectionId);
    }
    /**
     * Get a single custom collection
     * @method
     * @name shopifySDK#getCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom collection
     * @return { getCustomCollectionByCustomCollectionIdParameters } To allow chaining
     */
    getCustomCollectionByCustomCollectionId(
        customCollectionId: string
        ,
    ): getCustomCollectionByCustomCollectionIdParameters {
        return new getCustomCollectionByCustomCollectionIdParameters(this, 'GET', '/custom-collections/{customCollectionId}', customCollectionId);
    }
    /**
     * Update an existing custom collection
     * @method
     * @name shopifySDK#updateCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections that needs to be updated
     * @param {} customCollections - The custom-collections object that needs to be updated
     * @return { updateCustomCollectionByCustomCollectionIdParameters } To allow chaining
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
     * Find customers in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getCustomers
     * @return { getCustomersParameters } To allow chaining
     */
    getCustomers(): getCustomersParameters {
        return new getCustomersParameters(this, 'GET', '/customers');
    }
    /**
     * Create a new customer in Shopify.
     * @method
     * @name shopifySDK#createCustomer
     * @param {} customer - The Customer object to be created.
     * @return { createCustomerParameters } To allow chaining
     */
    createCustomer(
        customer:
        CustomerPOST
        ,
    ): createCustomerParameters {
        return new createCustomerParameters(this, 'POST', '/customers', customer);
    }
    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresses
     * @param {string} customerId - The ID of the customer to get the address
     * @return { getCustomersAddressesParameters } To allow chaining
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
     * @name shopifySDK#createCustomerAddresse
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {} address - Body of the address
     * @return { createCustomerAddresseParameters } To allow chaining
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
     * Removes an address from the customers address list
     * @method
     * @name shopifySDK#deleteCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     * @return { deleteCustomersAddresseByAddressIdParameters } To allow chaining
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
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     * @return { getCustomersAddresseByAddressIdParameters } To allow chaining
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
     * Creates a new address for a customer
     * @method
     * @name shopifySDK#updateCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {string} addressId - ID of the address
     * @param {} address - Body of the address
     * @return { updateCustomersAddresseByAddressIdParameters } To allow chaining
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
     * Delete a customer associated with a given ID from Shopify. Specifying a customer ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteCustomerById
     * @param {string} id - The ID of the customer to delete from Shopify.
     * @return { deleteCustomerByIdParameters } To allow chaining
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
     * @return { getCustomerByIdParameters } To allow chaining
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
     * @return { updateCustomerByIdParameters } To allow chaining
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
     * @return { getCustomersAbandonedCheckoutsParameters } To allow chaining
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
     * @return { getCustomersOrdersParameters } To allow chaining
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
     * @return { getDiscountCodeByCodeParameters } To allow chaining
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
     * @return { getInventoryItemsParameters } To allow chaining
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
     * @return { updateInventoryItemByIdParameters } To allow chaining
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
     * @return { getLocationsParameters } To allow chaining
     */
    getLocations(): getLocationsParameters {
        return new getLocationsParameters(this, 'GET', '/locations');
    }
    /**
     * Search for InventoryLevels
     * @method
     * @name shopifySDK#getLocationsInventoryItemsInventoryLevels
     * @param {string} id - The comma separated list of Location IDs
     * @param {string} inventoryItemId - The comma separated list of InventoryItem IDs
     * @return { getLocationsInventoryItemsInventoryLevelsParameters } To allow chaining
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
     * Update an InventoryLevel
     * @method
     * @name shopifySDK#updateLocationsInventoryItemsInventoryLevels
     * @param {string} id - The Location ID
     * @param {string} inventoryItemId - The InventoryItem ID
     * @param {} body - The InventoryLevel body
     * @return { updateLocationsInventoryItemsInventoryLevelsParameters } To allow chaining
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
     * @return { createLocationInventoryItemInventoryLevelParameters } To allow chaining
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
     * Search for InventoryLevels of a location
     * @method
     * @name shopifySDK#getLocationsInventoryLevels
     * @param {string} id - The Location ID
     * @return { getLocationsInventoryLevelsParameters } To allow chaining
     */
    getLocationsInventoryLevels(
        id: string
        ,
    ): getLocationsInventoryLevelsParameters {
        return new getLocationsInventoryLevelsParameters(this, 'GET', '/locations/{id}/inventory-levels', id);
    }
    /**
     * Get metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafields
     * @return { getMetafieldsParameters } To allow chaining
     */
    getMetafields(): getMetafieldsParameters {
        return new getMetafieldsParameters(this, 'GET', '/metafields');
    }
    /**
     * Create a new metafield for a store
     * @method
     * @name shopifySDK#createMetafield
     * @param {} body - The metafields object
     * @return { createMetafieldParameters } To allow chaining
     */
    createMetafield(
        body:
        metafieldsPOST
        ,
    ): createMetafieldParameters {
        return new createMetafieldParameters(this, 'POST', '/metafields', body);
    }
    /**
     * Get a count of metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafieldsCount
     * @return { getMetafieldsCountParameters } To allow chaining
     */
    getMetafieldsCount(): getMetafieldsCountParameters {
        return new getMetafieldsCountParameters(this, 'GET', '/metafields-count');
    }
    /**
     * Delete a store metafield
     * @method
     * @name shopifySDK#deleteMetafieldById
     * @param {string} id - ID of the metafield
     * @return { deleteMetafieldByIdParameters } To allow chaining
     */
    deleteMetafieldById(
        id: string
        ,
    ): deleteMetafieldByIdParameters {
        return new deleteMetafieldByIdParameters(this, 'DELETE', '/metafields/{id}', id);
    }
    /**
     * Get a single store metafield by its ID
     * @method
     * @name shopifySDK#getMetafieldById
     * @param {string} id - The ID of metafields
     * @return { getMetafieldByIdParameters } To allow chaining
     */
    getMetafieldById(
        id: string
        ,
    ): getMetafieldByIdParameters {
        return new getMetafieldByIdParameters(this, 'GET', '/metafields/{id}', id);
    }
    /**
     * Update a store metafield
     * @method
     * @name shopifySDK#updateMetafieldById
     * @param {string} id - ID of the metafield
     * @param {} body - The metafields object
     * @return { updateMetafieldByIdParameters } To allow chaining
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
     * Get a list of all the available objects.
     * @method
     * @name shopifySDK#getObjects
     * @return { getObjectsParameters } To allow chaining
     */
    getObjects(): getObjectsParameters {
        return new getObjectsParameters(this, 'GET', '/objects');
    }
    /**
     * Get swagger docs for an object.
     * @method
     * @name shopifySDK#getObjectsObjectNameDocs
     * @param {string} objectName - The name of the object
     * @return { getObjectsObjectNameDocsParameters } To allow chaining
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
     * @return { getObjectsObjectNameMetadataParameters } To allow chaining
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
     * @return { getOrdersParameters } To allow chaining
     */
    getOrders(): getOrdersParameters {
        return new getOrdersParameters(this, 'GET', '/orders');
    }
    /**
     * Create a new order in Shopify.
     * @method
     * @name shopifySDK#createOrder
     * @param {} order - The Order object to be created.
     * @return { createOrderParameters } To allow chaining
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
     * @return { deleteOrderByIdParameters } To allow chaining
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
     * @return { getOrderByIdParameters } To allow chaining
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
     * @return { updateOrderByIdParameters } To allow chaining
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
     * Get a list of all fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillments
     * @param {string} orderId - ID of the order
     * @return { getOrdersFulfillmentsParameters } To allow chaining
     */
    getOrdersFulfillments(
        orderId: string
        ,
    ): getOrdersFulfillmentsParameters {
        return new getOrdersFulfillmentsParameters(this, 'GET', '/orders/{orderId}/fulfillments', orderId);
    }
    /**
     * Creates a fulfillment for the specified order and line items
     * @method
     * @name shopifySDK#createOrderFulfillment
     * @param {string} orderId - ID of the order
     * @param {} fulfillment - Body of the fulfillment
     * @return { createOrderFulfillmentParameters } To allow chaining
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
     * Count all the total number of fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillmentsCount
     * @param {string} orderId - ID of the order
     * @return { getOrdersFulfillmentsCountParameters } To allow chaining
     */
    getOrdersFulfillmentsCount(
        orderId: string
        ,
    ): getOrdersFulfillmentsCountParameters {
        return new getOrdersFulfillmentsCountParameters(this, 'GET', '/orders/{orderId}/fulfillments-count', orderId);
    }
    /**
     * Get the representation of a specific fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @return { getOrdersFulfillmentByFulfillmentIdParameters } To allow chaining
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
     * Update tracking number for a fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment to be updated
     * @return { updateOrdersFulfillmentByFulfillmentIdParameters } To allow chaining
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
     * Get a list of all fulfillment events for a fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEvents
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @return { getOrdersFulfillmentsFulfillmentEventsParameters } To allow chaining
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
     * Create a fulfillment event
     * @method
     * @name shopifySDK#createOrderFulfillmentFulfillmentEvent
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment event
     * @return { createOrderFulfillmentFulfillmentEventParameters } To allow chaining
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
     * Delete a fulfillment event
     * @method
     * @name shopifySDK#deleteOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     * @return { deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters } To allow chaining
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
     * Get a fulfillment event
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     * @return { getOrdersFulfillmentsFulfillmentEventByEventIdParameters } To allow chaining
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
     * Cancel a pending fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentsStatusCancel
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @return { updateOrdersFulfillmentsStatusCancelParameters } To allow chaining
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
     * @return { updateOrdersFulfillmentsStatusCompleteParameters } To allow chaining
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
     * @return { getOrdersPaymentsParameters } To allow chaining
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
     * @return { createOrderPaymentParameters } To allow chaining
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
     * @return { getOrdersPaymentsCountParameters } To allow chaining
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
     * @return { getOrdersPaymentByPaymentIdParameters } To allow chaining
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
     * Search for refunds for an order
     * @method
     * @name shopifySDK#getOrdersRefunds
     * @param {string} orderId - The order ID
     * @return { getOrdersRefundsParameters } To allow chaining
     */
    getOrdersRefunds(
        orderId: string
        ,
    ): getOrdersRefundsParameters {
        return new getOrdersRefundsParameters(this, 'GET', '/orders/{orderId}/refunds', orderId);
    }
    /**
     * Create a refund for an existing order
     * @method
     * @name shopifySDK#createOrderRefund
     * @param {string} orderId - The order ID
     * @param {} refund - The refund
     * @return { createOrderRefundParameters } To allow chaining
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
     * Calculate refund transactions based on line-items and shipping. The returned response can be used to create a refund
     * @method
     * @name shopifySDK#createOrderRefundsCalculate
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} refundCalculate - The body of the refund-calculate
     * @return { createOrderRefundsCalculateParameters } To allow chaining
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
     * @return { getOrdersRefundByRefundIdParameters } To allow chaining
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
     * Get a list of all Order Risks
     * @method
     * @name shopifySDK#getOrdersRisks
     * @param {string} orderId - Id of the order
     * @return { getOrdersRisksParameters } To allow chaining
     */
    getOrdersRisks(
        orderId: string
        ,
    ): getOrdersRisksParameters {
        return new getOrdersRisksParameters(this, 'GET', '/orders/{orderId}/risks', orderId);
    }
    /**
     * Create a new Order Risk for an Order
     * @method
     * @name shopifySDK#createOrderRisk
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} risk - The fraud risk to be created
     * @return { createOrderRiskParameters } To allow chaining
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
     * Delete an order risk entry
     * @method
     * @name shopifySDK#deleteOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     * @return { deleteOrdersRiskByRiskIdParameters } To allow chaining
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
     * Get a single Order Risk by its ID
     * @method
     * @name shopifySDK#getOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     * @return { getOrdersRiskByRiskIdParameters } To allow chaining
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
     * Update an Order Risk entry
     * @method
     * @name shopifySDK#updateOrdersRiskByRiskId
     * @param {string} orderId - The ID of the order
     * @param {string} riskId - ID of the risk
     * @param {} risk - The fraud risk body to be updated
     * @return { updateOrdersRiskByRiskIdParameters } To allow chaining
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
     * Ping the Element to confirm that the Hub Element has a heartbeat.  If the Element does not have a heartbeat, an error message will be returned.
     * @method
     * @name shopifySDK#getPing
     * @return { getPingParameters } To allow chaining
     */
    getPing(): getPingParameters {
        return new getPingParameters(this, 'GET', '/ping');
    }
    /**
     * List all price rules
     * @method
     * @name shopifySDK#getPriceRules
     * @return { getPriceRulesParameters } To allow chaining
     */
    getPriceRules(): getPriceRulesParameters {
        return new getPriceRulesParameters(this, 'GET', '/price-rules');
    }
    /**
     * Add a price rule
     * @method
     * @name shopifySDK#createPriceRule
     * @param {} priceRule - The body of the price rule
     * @return { createPriceRuleParameters } To allow chaining
     */
    createPriceRule(
        priceRule:
        priceRulesPOST
        ,
    ): createPriceRuleParameters {
        return new createPriceRuleParameters(this, 'POST', '/price-rules', priceRule);
    }
    /**
     * Remove a price rule
     * @method
     * @name shopifySDK#deletePriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     * @return { deletePriceRuleByPriceRuleIdParameters } To allow chaining
     */
    deletePriceRuleByPriceRuleId(
        priceRuleId: string
        ,
    ): deletePriceRuleByPriceRuleIdParameters {
        return new deletePriceRuleByPriceRuleIdParameters(this, 'DELETE', '/price-rules/{priceRuleId}', priceRuleId);
    }
    /**
     * Get a price rule with a certain id
     * @method
     * @name shopifySDK#getPriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     * @return { getPriceRuleByPriceRuleIdParameters } To allow chaining
     */
    getPriceRuleByPriceRuleId(
        priceRuleId: string
        ,
    ): getPriceRuleByPriceRuleIdParameters {
        return new getPriceRuleByPriceRuleIdParameters(this, 'GET', '/price-rules/{priceRuleId}', priceRuleId);
    }
    /**
     * Get all discount codes for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodes
     * @param {string} priceRuleId - ID of the price rule to receive discount codes for
     * @return { getPriceRulesDiscountCodesParameters } To allow chaining
     */
    getPriceRulesDiscountCodes(
        priceRuleId: string
        ,
    ): getPriceRulesDiscountCodesParameters {
        return new getPriceRulesDiscountCodesParameters(this, 'GET', '/price-rules/{priceRuleId}/discount-codes', priceRuleId);
    }
    /**
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#createPriceRuleDiscountCode
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {} discountCode - Discount code to be created
     * @return { createPriceRuleDiscountCodeParameters } To allow chaining
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
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#deletePriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discount-code ID
     * @return { deletePriceRulesDiscountCodeByDiscountCodeIdParameters } To allow chaining
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
     * Get all discount code for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discountCodeId
     * @return { getPriceRulesDiscountCodeByDiscountCodeIdParameters } To allow chaining
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
     * Find products in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getProducts
     * @return { getProductsParameters } To allow chaining
     */
    getProducts(): getProductsParameters {
        return new getProductsParameters(this, 'GET', '/products');
    }
    /**
     * Create a new product in Shopify.
     * @method
     * @name shopifySDK#createProduct
     * @param {} product - The Product object to be created.
     * @return { createProductParameters } To allow chaining
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
     * @return { deleteProductByIdParameters } To allow chaining
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
     * @return { getProductByIdParameters } To allow chaining
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
     * @return { updateProductByIdParameters } To allow chaining
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
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getProductsVariants
     * @param {string} id - The ID of the product to retrieve variants for
     * @return { getProductsVariantsParameters } To allow chaining
     */
    getProductsVariants(
        id: string
        ,
    ): getProductsVariantsParameters {
        return new getProductsVariantsParameters(this, 'GET', '/products/{id}/variants', id);
    }
    /**
     * Create a varient 
     * @method
     * @name shopifySDK#createProductVariant
     * @param {string} id - The product ID to create a variant for
     * @param {} variant - The variant to be created. See model for an example
     * @return { createProductVariantParameters } To allow chaining
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
     * Get a list of all images for a product
     * @method
     * @name shopifySDK#getProductsImages
     * @param {string} productId - The ID of the product to return images for
     * @return { getProductsImagesParameters } To allow chaining
     */
    getProductsImages(
        productId: string
        ,
    ): getProductsImagesParameters {
        return new getProductsImagesParameters(this, 'GET', '/products/{productId}/images', productId);
    }
    /**
     * Create a new product image and attach it to product variants
     * @method
     * @name shopifySDK#createProductImage
     * @param {string} productId - The ID of the product to create an image for
     * @param {} image - The image to be uploaded
     * @return { createProductImageParameters } To allow chaining
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
     * Delete a product image
     * @method
     * @name shopifySDK#deleteProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to delete
     * @return { deleteProductsImageByIdParameters } To allow chaining
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
     * Get a single product image by id
     * @method
     * @name shopifySDK#getProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to retrieve
     * @return { getProductsImageByIdParameters } To allow chaining
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
     * Modify an existing product image
     * @method
     * @name shopifySDK#updateProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the variant to update
     * @param {} image - The variant body to update
     * @return { updateProductsImageByIdParameters } To allow chaining
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
     * Delete a variant
     * @method
     * @name shopifySDK#deleteProductsVariantById
     * @param {string} productId - The ID of the product for delete a variant for
     * @param {string} id - The ID of the variant to delete
     * @return { deleteProductsVariantByIdParameters } To allow chaining
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
    * @return { getQueryParameters } To allow chaining
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
     * @return { getShippingZonesParameters } To allow chaining
     */
    getShippingZones(): getShippingZonesParameters {
        return new getShippingZonesParameters(this, 'GET', '/shipping-zones');
    }
    /**
     * Retrieve metadata for the current shop
     * @method
     * @name shopifySDK#getShops
     * @return { getShopsParameters } To allow chaining
     */
    getShops(): getShopsParameters {
        return new getShopsParameters(this, 'GET', '/shops');
    }
    /**
     * Get a list of all smart collections
     * @method
     * @name shopifySDK#getSmartCollections
     * @return { getSmartCollectionsParameters } To allow chaining
     */
    getSmartCollections(): getSmartCollectionsParameters {
        return new getSmartCollectionsParameters(this, 'GET', '/smart-collections');
    }
    /**
     * Create a new  smart-collections
     * @method
     * @name shopifySDK#createSmartCollection
     * @param {} smartCollections - The smart-collections object
     * @return { createSmartCollectionParameters } To allow chaining
     */
    createSmartCollection(
        smartCollections:
        smartCollectionsPOST
        ,
    ): createSmartCollectionParameters {
        return new createSmartCollectionParameters(this, 'POST', '/smart-collections', smartCollections);
    }
    /**
     * Remove a smart collection from the database
     * @method
     * @name shopifySDK#deleteSmartCollectionById
     * @param {string} id - The smart-collection ID
     * @return { deleteSmartCollectionByIdParameters } To allow chaining
     */
    deleteSmartCollectionById(
        id: string
        ,
    ): deleteSmartCollectionByIdParameters {
        return new deleteSmartCollectionByIdParameters(this, 'DELETE', '/smart-collections/{id}', id);
    }
    /**
     * Retrieve a single smart collection
     * @method
     * @name shopifySDK#getSmartCollectionById
     * @param {string} id - The smart-collections ID
     * @return { getSmartCollectionByIdParameters } To allow chaining
     */
    getSmartCollectionById(
        id: string
        ,
    ): getSmartCollectionByIdParameters {
        return new getSmartCollectionByIdParameters(this, 'GET', '/smart-collections/{id}', id);
    }
    /**
     * Update an existing smart-collection
     * @method
     * @name shopifySDK#updateSmartCollectionById
     * @param {string} id - The smart-collections ID
     * @param {} smartCollections - The smart-collections object
     * @return { updateSmartCollectionByIdParameters } To allow chaining
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
     * Retrieve a specific variant by ID
     * @method
     * @name shopifySDK#getVariantById
     * @param {string} id - The ID of the variant to retrieve
     * @return { getVariantByIdParameters } To allow chaining
     */
    getVariantById(
        id: string
        ,
    ): getVariantByIdParameters {
        return new getVariantByIdParameters(this, 'GET', '/variants/{id}', id);
    }
    /**
     * Update an existing product variant
     * @method
     * @name shopifySDK#updateVariantById
     * @param {string} id - The ID of the variant to update
     * @param {} variant - The variant body to update
     * @return { updateVariantByIdParameters } To allow chaining
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
     * Search for objects
     * @method
     * @name shopifySDK#getByObjectName
     * @param {string} objectName - The object name
     * @return { getByObjectNameParameters } To allow chaining
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
     * @return { createByObjectNameParameters } To allow chaining
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
     * Get a list of all the field for an object
     * @method
     * @name shopifySDK#getObjectNameMetafields
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @return { getObjectNameMetafieldsParameters } To allow chaining
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
     * Create a new metafield for a resource
     * @method
     * @name shopifySDK#createObjectNameMetafield
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @param {} body - The body of the metafield for a resource
     * @return { createObjectNameMetafieldParameters } To allow chaining
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
     * Get a count of metafields that belong to a resource
     * @method
     * @name shopifySDK#getObjectNameMetafieldsCount
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @return { getObjectNameMetafieldsCountParameters } To allow chaining
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
     * Delete a resource metafield
     * @method
     * @name shopifySDK#deleteObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @return { deleteObjectNameMetafieldByMetafieldIdParameters } To allow chaining
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
     * Get a single resource metafield by its ID
     * @method
     * @name shopifySDK#getObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @return { getObjectNameMetafieldByMetafieldIdParameters } To allow chaining
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
     * Update a resource metafield
     * @method
     * @name shopifySDK#updateObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @param {} body - The body of the metafield for a resource
     * @return { updateObjectNameMetafieldByMetafieldIdParameters } To allow chaining
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
     * Delete an {objectName}
     * @method
     * @name shopifySDK#deleteObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @return { deleteObjectNameByObjectIdParameters } To allow chaining
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
     * @return { getObjectNameByObjectIdParameters } To allow chaining
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
     * @return { updateObjectNameByObjectIdParameters } To allow chaining
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
     * @return { replaceObjectNameByObjectIdParameters } To allow chaining
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
     * @return { getObjectNameByChildObjectNameParameters } To allow chaining
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
     * @return { createObjectNameByChildObjectNameParameters } To allow chaining
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
     * @return { deleteObjectNameByChildObjectIdParameters } To allow chaining
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
     * @return { getObjectNameByChildObjectIdParameters } To allow chaining
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
     * @return { updateObjectNameByChildObjectIdParameters } To allow chaining
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
     * @return { replaceObjectNameByChildObjectIdParameters } To allow chaining
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
type AbandonedCheckout =
    {
        'abandoned_checkout_url' ? : string
        'admin_graphql_api_id' ? : string
        'billing_address' ? : Address
        'buyer_accepts_marketing' ? : boolean
        'cancel_reason' ? : "customer" | "fraud" | "inventory" | "other" | "null"
        'cart_token' ? : string
        'closed_at' ? : string
        'completed_at' ? : string
        'created_at' ? : string
        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"
        'customer' ? : Customer
        'customer_locale' ? : string
        'device_id' ? : number
        'discount_codes' ? :
            Array <
            AbandonedChkoutDiscount_code
            >
            'email' ? : string
        'gateway' ? : string
        'id' ? : number
        'landing_site' ? : string
        'line_items' ? :
            Array <
            AbandonedChkoutLineItem
            >
            'location_id' ? : number
        'name' ? : string
        'note' ? : string
        'note_attributes' ? :
            Array < string
            >
            'phone' ? : string
        'referring_site' ? : string
        'shipping_address' ? : Address
        'shipping_lines' ? :
            Array <
            AbandonedChkoutShippingLine
            >
            'source' ? : string
        'source_identifier' ? : string
        'source_name' ? : "web" | "pos" | "iphone" | "android"
        'source_url' ? : string
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
        'user_id' ? : number
    }
;
type AbandonedChkoutDiscount_code =
    {
        'amount' ? : string
        'code' ? : string
        'type' ? : "fixed_amount" | "percentage" | "shipping"
    }
;
type AbandonedChkoutLineItem =
    {
        'admin_graphql_api_id' ? : string
        'applied_discounts' ? :
            Array < string
            >
            'compare_at_price' ? : string
        'destination_location' ? : OrderLineItemDestination_location
        'destination_location_id' ? : number
        'discount_allocations' ? :
            Array <
            OrderLineItemDiscount_allocations
            >
            'discount_amounts' ? :
            Array <
            OrderLineItemDiscount_amounts
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
        'origin_location' ? : OrderLineItemOrigin_location
        'origin_location_id' ? : number
        'price' ? : string
        'product_exists' ? : boolean
        'product_id' ? : number
        'properties' ? :
            Array <
            LineItemProperties
            >
            'quantity' ? : number
        'requires_shipping' ? : boolean
        'sku' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
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
type AbandonedChkoutShippingLine =
    {
        'api_client_id' ? : string
        'applied_discounts' ? :
            Array < string
            >
            'carrier_identifier' ? : string
        'carrier_service_id' ? : string
        'code' ? : string
        'custom_tax_lines' ? : string
        'delivery_category' ? : string
        'id' ? : string
        'markup' ? : string
        'phone' ? : string
        'price' ? : string
        'requested_fulfillment_service_id' ? : string
        'source' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
            >
            'title' ? : string
        'validation_context' ? : string
    }
;
type Address =
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
        'latitude' ? : number
        'longitude' ? : number
        'name' ? : string
        'phone' ? : string
        'province' ? : string
        'province_code' ? : string
        'zip' ? : string
    }
;
type BulkLoad =
    {
        'id' ? : number
        'status' ? : string
    }
;
type BulkQuery =
    {
        'id' ? : number
        'status' ? : string
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
type BulkUploadResponse =
    {
        'id' ? : string
        'instanceId' ? : number
        'status' ? : string
    }
;
type Customer =
    {
        'accepts_marketing' ? : boolean
        'addresses' ? :
            Array <
            CustomerAddress
            >
            'admin_graphql_api_id' ? : string
        'created_at' ? : string
        'default_address' ? : CustomerAddress
        'email' ? : string
        'first_name' ? : string
        'id' ? : number
        'last_name' ? : string
        'last_order_id' ? : number
        'last_order_name' ? : string
        'multipass_identifier' ? : string
        'note' ? : string
        'orders_count' ? : number
        'phone' ? : string
        'state' ? : "disabled" | "invited" | "enabled" | "declined"
        'tags' ? : string
        'tax_exempt' ? : boolean
        'total_spent' ? : string
        'updated_at' ? : string
        'verified_email' ? : boolean
    }
;
type CustomerAddress =
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
type CustomerPATCH =
    {
        'accepts_marketing' ? : boolean
        'email' ? : string
        'first_name' ? : string
        'id' ? : number
        'last_name' ? : string
        'metafield' ? :
            Array <
            MetaFieldPOST
            >
            'note' ? : string
        'phone' ? : string
        'tags' ? : string
        'tax_exempt' ? : boolean
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
        'first_name' ? : string
        'id' ? : number
        'last_name' ? : string
        'metafield' ? :
            Array <
            MetaFieldPOST
            >
            'multipass_identifier' ? : string
        'note' ? : string
        'password' ? : string
        'password_confirmation' ? : string
        'phone' ? : string
        'send_email_invite' ? : boolean
        'send_email_welcome' ? : boolean
        'tags' ? : string
        'tax_exempt' ? : boolean
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
        'tracking_number' ? : string
        'tracking_numbers' ? :
            Array < string
            >
            'updated_at' ? : string
    }
;
type FulfillmentLineItem =
    {
        'admin_graphql_api_id' ? : string
        'applied_discounts' ? :
            Array < string
            >
            'destination_location' ? : OrderLineItemDestination_location
        'destination_location_id' ? : number
        'discount_allocations' ? :
            Array <
            OrderLineItemDiscount_allocations
            >
            'discount_amounts' ? :
            Array <
            OrderLineItemDiscount_amounts
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
        'origin_location' ? : OrderLineItemOrigin_location
        'origin_location_id' ? : number
        'price' ? : string
        'product_exists' ? : boolean
        'product_id' ? : number
        'properties' ? :
            Array <
            LineItemProperties
            >
            'quantity' ? : number
        'requires_shipping' ? : boolean
        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"
        'sku' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
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
type FulfillmentLineItemReq =
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
            LineItemProperties
            >
            'quantity' ? : number
        'requires_shipping' ? : boolean
        'shipment_status' ? : "confirmed" | "in_transit" | "out_for_delivery" | "delivered" | "failure"
        'sku' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
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
type Image =
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
type ImagePATCH =
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
type ImagePOST =
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
type InventoryLevelsListObject =
    {
        'admin_graphql_api_id' ? : string
        'available' ? : number
        'inventory_item_id' ? : number
        'location_id' ? : number
        'updated_at' ? : string
    }
;
type LineItem =
    {
        'applied_discounts' ? :
            Array < string
            >
            'fulfillment_service' ? : string
        'fulfillment_status' ? : string
        'gift_card' ? : boolean
        'grams' ? : number
        'key' ? : string
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
type LineItemProperties =
    {
        'name' ? : string
        'value' ? : string
    }
;
type LineItemTaxLine =
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
type MetaField =
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
type ModelDate =
    {
        'value' ? : string
    }
;
type Object =
    {
        'objectField' ? : string
    }
;
type Option =
    {
        'id' ? : number
        'name' ? : string
        'position' ? : number
        'product_id' ? : number
        'values' ? :
            Array < string
            >
    }
;
type OptionPATCH =
    {
        'id' ? : number
        'name': string
    }
;
type OptionPOST =
    {
        'id' ? : number
        'name': string
        'values' ? :
            Array < string
            >
    }
;
type Order =
    {
        'admin_graphql_api_id' ? : string
        'app_id' ? : number
        'billing_address' ? : Address
        'browser_ip' ? : string
        'buyer_accepts_marketing' ? : boolean
        'cancel_reason' ? : "customer" | "fraud" | "inventory" | "other" | "declined" | "null"
        'cancelled_at' ? : string
        'cart_token' ? : string
        'checkout_id' ? : number
        'checkout_token' ? : string
        'client_details' ? : OrderClientDetails
        'closed_at' ? : string
        'confirmed' ? : boolean
        'contact_email' ? : string
        'created_at' ? : string
        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"
        'customer' ? : OrderCustomer
        'customer_locale' ? : string
        'device_id' ? : number
        'discount_applications' ? :
            Array <
            Orderdiscount_applications
            >
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
            'gateway' ? : string
        'id' ? : number
        'landing_site' ? : string
        'landing_site_ref' ? : string
        'line_items' ? :
            Array <
            OrderLineItem
            >
            'location_id' ? : number
        'name' ? : string
        'note' ? : string
        'note_attributes' ? :
            Array <
            OrderNoteAttribute
            >
            'number' ? : number
        'order_number' ? : number
        'order_status_url' ? : string
        'payment_details' ? : TransactionPaymentDetails
        'payment_gateway_names' ? :
            Array < string
            >
            'phone' ? : string
        'processed_at' ? : string
        'processing_method' ? : "" | "checkout" | "direct" | "manual" | "offsite" | "express"
        'reference' ? : string
        'referring_site' ? : string
        'refunds' ? :
            Array <
            OrderRefund
            >
            'shipping_address' ? : Address
        'shipping_lines' ? :
            Array <
            OrderShippingLine
            >
            'source' ? : string
        'source_identifier' ? : string
        'source_name' ? : string
        'source_url' ? : string
        'subtotal_price' ? : string
        'tags' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
            >
            'taxes_included' ? : boolean
        'test' ? : boolean
        'token' ? : string
        'total_discounts' ? : string
        'total_line_items_price' ? : string
        'total_price' ? : string
        'total_price_usd' ? : string
        'total_tax' ? : string
        'total_tip_received' ? : string
        'total_weight' ? : number
        'transactions' ? :
            Array <
            Transaction
            >
            'updated_at' ? : string
        'url' ? : string
        'user_id' ? : number
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
type OrderCustomer =
    {
        'accepts_marketing' ? : boolean
        'admin_graphql_api_id' ? : string
        'created_at' ? : string
        'default_address' ? : CustomerAddress
        'email' ? : string
        'first_name' ? : string
        'id' ? : number
        'last_name' ? : string
        'last_order_id' ? : number
        'last_order_name' ? : string
        'multipass_identifier' ? : string
        'note' ? : string
        'orders_count' ? : number
        'phone' ? : string
        'state' ? : "disabled" | "invited" | "enabled" | "declined"
        'tags' ? : string
        'tax_exempt' ? : boolean
        'total_spent' ? : string
        'updated_at' ? : string
        'verified_email' ? : boolean
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
        'tags' ? : string
        'tax_exempt' ? : boolean
        'total_spent' ? : string
        'verified_email' ? : boolean
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
        'tags' ? : string
        'tax_exempt' ? : boolean
        'total_spent' ? : string
        'verified_email' ? : boolean
    }
;
type OrderFulfillment =
    {
        'admin_graphql_api_id' ? : string
        'created_at' ? : string
        'id' ? : number
        'line_items' ? :
            Array <
            FulfillmentLineItem
            >
            'location_id' ? : number
        'name' ? : string
        'notify_customer' ? : boolean
        'order_id' ? : number
        'receipt' ? : Receipt
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
type OrderFulfillmentReq =
    {
        'created_at' ? : string
        'id' ? : number
        'line_items' ? :
            Array <
            FulfillmentLineItemReq
            >
            'location_id' ? : number
        'notify_customer' ? : boolean
        'order_id' ? : number
        'receipt' ? : Receipt
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
type OrderLineItem =
    {
        'admin_graphql_api_id' ? : string
        'destination_location' ? : OrderLineItemDestination_location
        'discount_allocations' ? :
            Array <
            OrderLineItemDiscount_allocations
            >
            'discount_amounts' ? :
            Array <
            OrderLineItemDiscount_amounts
            >
            'fulfillable_quantity' ? : number
        'fulfillment_service' ? : string
        'fulfillment_status' ? : "fulfilled" | "null" | "partial"
        'gift_card' ? : boolean
        'grams' ? : number
        'id' ? : number
        'name' ? : string
        'origin_location' ? : OrderLineItemOrigin_location
        'price' ? : string
        'product_exists' ? : boolean
        'product_id' ? : number
        'properties' ? :
            Array <
            LineItemProperties
            >
            'quantity' ? : number
        'requires_shipping' ? : boolean
        'sku' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
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
type OrderLineItemDestination_location =
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
type OrderLineItemDiscount_allocations =
    {
        'amount' ? : string
        'discount_application_index' ? : number
    }
;
type OrderLineItemDiscount_amounts =
    {
        'amount' ? : string
        'discount_application_index' ? : number
    }
;
type OrderLineItemOrigin_location =
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
type OrderLineItemPATCH =
    {
        'fulfillable_quantity' ? : number
        'fulfillment_service' ? : string
        'fulfillment_status' ? : "fulfilled" | "null" | "partial"
        'gift_card' ? : boolean
        'grams' ? : number
        'id' ? : number
        'name' ? : string
        'price' ? : string
        'product_id' ? : number
        'properties' ? :
            Array <
            LineItemProperties
            >
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
    }
;
type OrderLineItemPOST =
    {
        'fulfillable_quantity' ? : number
        'fulfillment_service' ? : string
        'fulfillment_status' ? : "fulfilled" | "null" | "partial"
        'gift_card' ? : boolean
        'grams' ? : number
        'id' ? : number
        'name' ? : string
        'price': string
        'product_id' ? : number
        'properties' ? :
            Array <
            LineItemProperties
            >
            'quantity' ? : number
        'requires_shipping' ? : boolean
        'sku' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
            >
            'taxable' ? : boolean
        'title': string
        'variant_id' ? : number
        'variant_title' ? : string
        'vendor' ? : string
    }
;
type OrderNoteAttribute =
    {
        'name' ? : string
        'value' ? : string
    }
;
type OrderPATCH =
    {
        'billing_address' ? : Address
        'buyer_accepts_marketing' ? : boolean
        'contact_email' ? : string
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
            'gateway' ? : string
        'id' ? : number
        'inventory_behaviour' ? : "bypass" | "decrement_ignoring_policy" | "decrement_obeying_policy"
        'line_items' ? :
            Array <
            OrderLineItemPATCH
            >
            'metafields' ? :
            Array <
            MetaFieldPOST
            >
            'name' ? : string
        'note' ? : string
        'note_attributes' ? :
            Array <
            OrderNoteAttribute
            >
            'payment_gateway_names' ? :
            Array < string
            >
            'phone' ? : string
        'processed_at' ? : string
        'processing_method' ? : "" | "checkout" | "direct" | "manual" | "offsite" | "express"
        'referring_site' ? : string
        'send_fulfillment_receipt' ? : boolean
        'send_receipt' ? : boolean
        'shipping_address' ? : Address
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
    }
;
type OrderPOST =
    {
        'billing_address' ? : Address
        'buyer_accepts_marketing' ? : boolean
        'contact_email' ? : string
        'currency' ? : "AFA" | "ALL" | "DZD" | "USD" | "ESP" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "ATS" | "AZM" | "BSD" | "BHD" | "BDT" | "BBD" | "BYB" | "BEF" | "BZD" | "BMD" | "BTN" | "BOB" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGL" | "BGN" | "BIF" | "KHR" | "XAF" | "CAD" | "CVE" | "KYD" | "CLP" | "CLF" | "CNY" | "HKD" | "MOP" | "COP" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CYP" | "CZK" | "DKK" | "DJF" | "DOP" | "TPE" | "IDE" | "ECS" | "ECV" | "EGP" | "SVC" | "ERN" | "EEK" | "ETB" | "XEU" | "EUR" | "FKP" | "FJD" | "FIM" | "FRF" | "XPF" | "GMD" | "GEL" | "DEM" | "GHC" | "GIP" | "GRD" | "GTQ" | "GNF" | "GWP" | "GYD" | "HTG" | "ITL" | "HNL" | "HUF" | "ISK" | "INR" | "IDR" | "XDR" | "IRR" | "IQD" | "IEP" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "ZAR" | "LSL" | "LRD" | "LYD" | "CHF" | "LTL" | "LUF" | "MKD" | "MGF" | "MWK" | "MYR" | "MVR" | "MTL" | "MRO" | "MUR" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZM" | "MMK" | "NPR" | "ANG" | "NLG" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "PTE" | "QAR" | "ROL" | "RUR" | "RWF" | "SHP" | "WST" | "STD" | "SAR" | "SCR" | "SLL" | "SGD" | "SKK" | "SIT" | "SBD" | "SOS" | "LKR" | "SDP" | "SRG" | "SZL" | "SEK" | "SYP" | "TWD" | "TJR" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRL" | "TMM" | "UGX" | "UAH" | "AED" | "GBP" | "USS" | "USN" | "UYU" | "UZS" | "VUV" | "VEB" | "VND" | "YER" | "YUN" | "ZRN" | "ZMK" | "ZWD" | "ADP" | "NAD" | "RUB" | "RYR" | "BOV"
        'customer' ? : OrderCustomerPOST
        'device_id' ? : number
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
            'gateway' ? : string
        'id' ? : number
        'inventory_behaviour' ? : "bypass" | "decrement_ignoring_policy" | "decrement_obeying_policy"
        'line_items':
            Array <
            OrderLineItemPOST
            >
            'name' ? : string
        'note' ? : string
        'note_attributes' ? :
            Array <
            OrderNoteAttribute
            >
            'payment_gateway_names' ? :
            Array < string
            >
            'phone' ? : string
        'processed_at' ? : string
        'processing_method' ? : "" | "checkout" | "direct" | "manual" | "offsite" | "express"
        'referring_site' ? : string
        'send_fulfillment_receipt' ? : boolean
        'send_receipt' ? : boolean
        'shipping_address' ? : Address
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
    }
;
type OrderRefund =
    {
        'admin_graphql_api_id' ? : string
        'created_at' ? : string
        'id' ? : number
        'note' ? : string
        'order_adjustments' ? :
            Array <
            RefundOrderAdjustments
            >
            'order_id' ? : number
        'processed_at' ? : string
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
    }
;
type OrderRefundLineItem =
    {
        'id' ? : number
        'line_item' ? : OrderRefundLineItemLineItem
        'line_item_id' ? : number
        'location_id' ? : number
        'quantity' ? : number
        'restock_type' ? : "no_restock" | "cancel" | "return" | "legacy_restock"
        'subtotal' ? : number
        'total_tax' ? : number
    }
;
type OrderRefundLineItemLineItem =
    {
        'admin_graphql_api_id' ? : string
        'applied_discounts' ? :
            Array < string
            >
            'destination_location' ? : OrderLineItemDestination_location
        'destination_location_id' ? : number
        'discount_allocations' ? :
            Array <
            OrderLineItemDiscount_allocations
            >
            'discount_amounts' ? :
            Array <
            OrderLineItemDiscount_amounts
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
        'origin_location' ? : OrderLineItemOrigin_location
        'origin_location_id' ? : number
        'price' ? : string
        'product_exists' ? : boolean
        'product_id' ? : number
        'properties' ? :
            Array <
            LineItemProperties
            >
            'quantity' ? : number
        'requires_shipping' ? : boolean
        'sku' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
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
type OrderShippingLine =
    {
        'carrier_identifier' ? : string
        'code' ? : string
        'delivery_category' ? : string
        'discount_allocations' ? :
            Array <
            OrderLineItemDiscount_allocations
            >
            'discount_amounts' ? :
            Array <
            OrderLineItemDiscount_amounts
            >
            'discounted_price' ? : string
        'id' ? : number
        'phone' ? : string
        'price' ? : string
        'requested_fulfillment_service_id' ? : string
        'source' ? : string
        'tax_lines' ? :
            Array <
            LineItemTaxLine
            >
            'title' ? : string
    }
;
type Orderdiscount_applications =
    {
        'allocation_method' ? : "across" | "each" | "one"
        'code' ? : string
        'description' ? : string
        'target_selection' ? : "all" | "entitled" | "explicit"
        'target_type' ? : "line_item" | "shipping_line"
        'title' ? : string
        'type' ? : "discount_code" | "manual" | "script"
        'value' ? : string
        'value_type' ? : "percentage" | "fixed_amount"
    }
;
type PatchInventoryLevels =
    {
        'available_adjustment': number
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
type PatchinventoryItems =
    {
        'sku' ? : string
        'tracked' ? : boolean
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
type Pong =
    {
        'dateTime' ? : string
        'endpoint' ? : string
    }
;
type PostInventoryLevels =
    {
        'available' ? : number
        'disconnect_if_necessary' ? : boolean
        'relocate_if_necessary' ? : boolean
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
type Product =
    {
        'admin_graphql_api_id' ? : string
        'body_html' ? : string
        'created_at' ? : string
        'handle' ? : string
        'id' ? : number
        'image' ? : Image
        'images' ? :
            Array <
            Image
            >
            'metafields' ? :
            Array <
            MetaField
            >
            'metafields_global_description_tag' ? : string
        'metafields_global_title_tag' ? : string
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
type ProductPATCH =
    {
        'body_html' ? : string
        'handle' ? : string
        'id' ? : number
        'image' ? : ImagePATCH
        'images' ? :
            Array <
            ImagePATCH
            >
            'metafields' ? :
            Array <
            MetaFieldPOST
            >
            'metafields_global_description_tag' ? : string
        'metafields_global_title_tag' ? : string
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
type ProductPOST =
    {
        'body_html' ? : string
        'handle' ? : string
        'id' ? : number
        'image' ? : ImagePOST
        'images' ? :
            Array <
            ImagePOST
            >
            'metafields' ? :
            Array <
            MetaFieldPOST
            >
            'metafields_global_description_tag' ? : string
        'metafields_global_title_tag' ? : string
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
type Receipt =
    {}
;
type RefundOrderAdjustments =
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
        'finances' ? : string
        'force_ssl' ? : string
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
        'weight_unit' ? : string
        'zip' ? : string
    }
;
type TaxLine =
    {
        'price': string
        'rate': number
        'title': string
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
        'message' ? : string
        'order_id' ? : number
        'parent_id' ? : number
        'payment_details' ? : TransactionPaymentDetails
        'receipt' ? : Receipt
        'source_name' ? : string
        'status' ? : "pending" | "failure" | "success" | "error"
        'test' ? : boolean
        'user_id' ? : number
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
        'message' ? : string
        'payment_details' ? : TransactionPaymentDetails
        'receipt' ? : Receipt
        'status' ? : "pending" | "failure" | "success" | "error"
        'test' ? : boolean
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
        'message' ? : string
        'payment_details' ? : TransactionPaymentDetails
        'receipt' ? : Receipt
        'status' ? : "pending" | "failure" | "success" | "error"
        'test' ? : boolean
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
        'inventory_item_id' ? : number
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
type carrier_shipping_rate_providers =
    {
        'carrier_service_id' ? : number
        'flat_modifier' ? : string
        'id' ? : number
        'percent_modifier' ? : number
        'shipping_zone_id' ? : number
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
type collectsCount =
    {
        'count' ? : number
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
type customCollectionsCount =
    {
        'count' ? : number
    }
;
type customCollectionsList =
    Array <
    customCollections
    >
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
type discountCodePOST =
    {
        'code': string
        'id' ? : number
        'usage_count' ? : number
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
type image =
    {
        'created_at' ? : string
        'height' ? : number
        'src' ? : string
        'width' ? : number
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
type imagePOST =
    {
        'height' ? : number
        'src': string
        'width' ? : number
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
type lineItemDiscount_allocations =
    {
        'amount' ? : string
        'discount_application_index' ? : number
    }
;
type lineItemDiscount_allocationsGet =
    {
        'amount' ? : string
        'discount_application_index' ? : number
    }
;
type lineItemDiscount_amounts =
    {
        'amount' ? : string
        'discount_application_index' ? : number
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
type lineItemProperties =
    {
        'name' ? : string
        'value' ? : string
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
type locationsInventoryLevelsObject =
    {
        'admin_graphql_api_id' ? : string
        'available' ? : number
        'inventory_item_id' ? : number
        'location_id' ? : number
        'updated_at' ? : string
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
type metaFieldGet =
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
type metafields_POST =
    {
        'description' ? : string
        'key': string
        'namespace': string
        'value': string
        'value_type': string
    }
;
type metafieldsCount =
    {
        'count' ? : number
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
type metafieldsPOST =
    {
        'description' ? : string
        'key': string
        'namespace': string
        'value': string
        'value_type': string
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
type objectsMetadata =
    {
        'fields' ? :
            Array <
            objectsMetadataFields
            >
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
type ordersFulfillmentsCount =
    {
        'count' ? : number
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
type ordersFulfillmentsReceipt =
    {}
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
type ordersPaymentsCount =
    {
        'count' ? : number
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
type ordersRefundsCalculateShipping =
    {
        'amount' ? : string
        'maximum_refundable' ? : string
        'tax' ? : string
    }
;
type ordersRefundsCalculateShippingReq =
    {
        'amount' ? : string
        'full_refund' ? : boolean
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
type ordersRefundsLineItemGet =
    {
        'id' ? : number
        'line_item' ? : refundsLineItemGet
        'line_item_id' ? : number
        'location_id' ? : number
        'quantity' ? : number
        'restock_type' ? : "no_restock" | "cancel" | "return" | "legacy_restock"
        'subtotal' ? : number
        'total_tax' ? : number
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
type ordersRefundsObject =
    {
        'admin_graphql_api_id' ? : string
        'created_at' ? : string
        'id' ? : number
        'note' ? : string
        'order_adjustments' ? :
            Array <
            refundOrderAdjustmentsGetById
            >
            'order_id' ? : number
        'processed_at' ? : string
        'refund_line_items' ? :
            Array <
            ordersRefundsLineItemGet
            >
            'restock' ? : boolean
        'transactions' ? :
            Array <
            refundsTransactionGetById
            >
            'user_id' ? : number
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
type ordersRefundsShippingReq =
    {
        'amount' ? : string
        'full_refund' ? : boolean
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
type paymentDetails =
    {
        'avs_result_code' ? : string
        'credit_card_bin' ? : string
        'credit_card_company' ? : string
        'credit_card_number' ? : string
        'cvv_result_code' ? : string
    }
;
type paymentsReceipt =
    {}
;
type prerequisite_shipping_price_range =
    {
        'less_than_or_equal_to' ? : number
    }
;
type prerequisite_subtotal_range =
    {
        'greater_than_or_equal_to' ? : number
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
type productsVariantsObject =
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
            metaFieldGet
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
type refundOrderAdjustmentsGetById =
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
type refundsLineItemGet =
    {
        'admin_graphql_api_id' ? : string
        'applied_discounts' ? :
            Array < string
            >
            'destination_location_id' ? : number
        'discount_allocations' ? :
            Array <
            lineItemDiscount_allocationsGet
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
type refundsPaymentDetails =
    {
        'avs_result_code' ? : string
        'credit_card_bin' ? : string
        'credit_card_company' ? : string
        'credit_card_number' ? : string
        'cvv_result_code' ? : string
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
type refundsPaymentDetailsReq =
    {
        'avs_result_code' ? : string
        'credit_card_bin' ? : string
        'credit_card_company' ? : string
        'credit_card_number' ? : string
        'cvv_result_code' ? : string
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
type refundsTransactionGetById =
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
        'message' ? : string
        'order_id' ? : number
        'parent_id' ? : number
        'payment_details' ? : refundsPaymentDetails
        'receipt' ? : refundsTransactionReceiptGet
        'source_name' ? : string
        'status' ? : "pending" | "failure" | "success" | "error"
        'test' ? : boolean
        'user_id' ? : number
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
type refundsTransactionReceipt =
    {}
;
type refundsTransactionReceiptGet =
    {
        'authorization' ? : string
        'testcase' ? : boolean
    }
;
type rules =
    {
        'column' ? : string
        'condition' ? : string
        'relation' ? : string
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
type swagger_contacts_path =
    {
        'post' ? : swaggerpost
    }
;
type swagger200 =
    {
        'description' ? : string
        'schema' ? : swaggerschema
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
type swagger406 =
    {
        'description' ? : string
    }
;
type swagger409 =
    {
        'description' ? : string
    }
;
type swagger415 =
    {
        'description' ? : string
    }
;
type swagger500 =
    {
        'description' ? : string
    }
;
type swagger502 =
    {
        'description' ? : string
    }
;
type swaggerDocs =
    {
        'basePath' ? : string
        'definitions' ? : swaggerdefinitions
        'host' ? : string
        'info' ? : swaggerinfo
        'paths' ? : swaggerpaths
        'schemes' ? :
            Array < string
            >
            'swagger' ? : string
        'tags' ? :
            Array <
            swaggertags
            >
    }
;
type swaggercontact =
    {
        'email' ? : string
    }
;
type swaggerdefinition_name =
    {
        'properties' ? : swaggerproperties
    }
;
type swaggerdefinition_property =
    {
        'type' ? : string
    }
;
type swaggerdefinitions =
    {
        'definition-name' ? : swaggerdefinition_name
    }
;
type swaggerinfo =
    {
        'contact' ? : swaggercontact
        'title' ? : string
        'version' ? : string
    }
;
type swaggerparameters =
    {
        'description' ? : string
        'in' ? : string
        'name' ? : string
        'required' ? : boolean
        'schema' ? : swaggerparametersschema
        'type' ? : string
    }
;
type swaggerparametersschema =
    {
        '$ref' ? : string
    }
;
type swaggerpaths =
    {
        '&#x2F;contacts' ? : swagger_contacts_path
    }
;
type swaggerpost =
    {
        'operationId' ? : string
        'parameters' ? :
            Array <
            swaggerparameters
            >
            'responses' ? : swaggerresponses
        'summary' ? : string
        'tags' ? :
            Array < string
            >
    }
;
type swaggerproperties =
    {
        'definition-property' ? : swaggerdefinition_property
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
type swaggerschema =
    {
        '$ref' ? : string
    }
;
type swaggertags =
    {
        'name' ? : string
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
class shopifySDKMethodParameters < T > extends request.Request implements Promise < T > {
    constructor(public superThis: shopifySDK, protected method: string, protected _path: string) {
        super(method, superThis.getDomain() + _path);
        if (superThis.authorizationHeader) {
            this.set('Authorization', superThis.authorizationHeader);
        }
    }
    then(a: (r: T) => any, b): any {
        return super.then(r => a(r.body), b)
    };
    catch = super.catch;
}
class getAbandonedCheckoutsParameters extends shopifySDKMethodParameters <
    Array <
    AbandonedCheckout
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getAbandonedCheckoutsParameters#page
         */
        page(page: number
        ): getAbandonedCheckoutsParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAbandonedCheckoutsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAbandonedCheckoutsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createBulkQueryParameters extends shopifySDKMethodParameters <
    BulkQuery
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, q: string
        ) {
            super(superThis, method, _path);
            return this.query({
                'q': q
            });
        }
        /**
         * Set the 'elementsAsyncCallbackUrl' optional parameter
         * @method
         * @name createBulkQueryParameters#elementsAsyncCallbackUrl
         */
        elementsAsyncCallbackUrl(elementsAsyncCallbackUrl: string
        ): createBulkQueryParameters {
            this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
        }
        /**
         * Set the 'lastRunDate' optional parameter
         * @method
         * @name createBulkQueryParameters#lastRunDate
         */
        lastRunDate(lastRunDate: string
        ): createBulkQueryParameters {
            return this.query({
                'lastRunDate': lastRunDate
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name createBulkQueryParameters#from
         */
        from(from: string
        ): createBulkQueryParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name createBulkQueryParameters#to
         */
        to(to: string
        ): createBulkQueryParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'continueFromJobId' optional parameter
         * @method
         * @name createBulkQueryParameters#continueFromJobId
         */
        continueFromJobId(continueFromJobId: number
        ): createBulkQueryParameters {
            return this.query({
                'continueFromJobId': continueFromJobId
            });
        }
    }
class replaceBulkCancelParameters extends shopifySDKMethodParameters <
    BulkStatus
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getBulkErrorsParameters extends shopifySDKMethodParameters <
    Array < string
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getBulkErrorsParameters#page
         */
        page(page: number
        ): getBulkErrorsParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getBulkErrorsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getBulkErrorsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getBulkErrorsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getBulkErrorsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
    }
class getBulkStatusParameters extends shopifySDKMethodParameters <
    BulkStatus
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getBulkByObjectNameParameters extends shopifySDKMethodParameters <
    {}
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , objectName: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createBulkByObjectNameParameters extends shopifySDKMethodParameters <
    BulkUploadResponse
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
        /**
         * Set the 'elementsAsyncCallbackUrl' optional parameter
         * @method
         * @name createBulkByObjectNameParameters#elementsAsyncCallbackUrl
         */
        elementsAsyncCallbackUrl(elementsAsyncCallbackUrl: string
        ): createBulkByObjectNameParameters {
            this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
        }
        /**
         * Set the 'metaData' optional parameter
         * @method
         * @name createBulkByObjectNameParameters#metaData
         */
        metaData(metaData: string
        ): createBulkByObjectNameParameters {
            this.form['metaData'] = metaData;
        }
        /**
         * Set the 'file' optional parameter
         * @method
         * @name createBulkByObjectNameParameters#file
         */
        file(file:
            {}
        ): createBulkByObjectNameParameters {
            this.form['file'] = file;
        }
    }
class getCollectsParameters extends shopifySDKMethodParameters <
    Array <
    collects
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCollectsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getCollectsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getCollectsParameters#where
         */
        where(where: string
        ): getCollectsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCollectsParameters#page
         */
        page(page: string
        ): getCollectsParameters {
            return this.query({
                'page': page
            });
        }
    }
class createCollectParameters extends shopifySDKMethodParameters <
    collects
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, collects:
            collectsPOST
        ) {
            super(superThis, method, _path);
            this.send(collects);
        }
    }
class getCollectsCountParameters extends shopifySDKMethodParameters <
    collectsCount
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class deleteCollectByCollectIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, collectId: string
    ) {
        super(superThis, method, _path
            .replace('{collectId}', `${collectId}`)
        );
    }
}
class getCollectByCollectIdParameters extends shopifySDKMethodParameters <
    collects
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, collectId: string
        ) {
            super(superThis, method, _path
                .replace('{collectId}', `${collectId}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getCollectByCollectIdParameters#where
         */
        where(where: string
        ): getCollectByCollectIdParameters {
            return this.query({
                'where': where
            });
        }
    }
class getCountriesParameters extends shopifySDKMethodParameters <
    Array <
    countries
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCountriesParameters#page
         */
        page(page: string
        ): getCountriesParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'sinceId' optional parameter
         * @method
         * @name getCountriesParameters#sinceId
         */
        sinceId(sinceId: number
        ): getCountriesParameters {
            return this.query({
                'since_id': sinceId
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCountriesParameters#pageSize
         */
        pageSize(pageSize: string
        ): getCountriesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getCountryByCountryIdParameters extends shopifySDKMethodParameters <
    Array <
    countries
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, countryId: string
        ) {
            super(superThis, method, _path
                .replace('{countryId}', `${countryId}`)
            );
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCountryByCountryIdParameters#pageSize
         */
        pageSize(pageSize: string
        ): getCountryByCountryIdParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCountryByCountryIdParameters#page
         */
        page(page: string
        ): getCountryByCountryIdParameters {
            return this.query({
                'page': page
            });
        }
    }
class getCustomCollectionsParameters extends shopifySDKMethodParameters <
    Array <
    customCollections
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCustomCollectionsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getCustomCollectionsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getCustomCollectionsParameters#where
         */
        where(where: string
        ): getCustomCollectionsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCustomCollectionsParameters#page
         */
        page(page: string
        ): getCustomCollectionsParameters {
            return this.query({
                'page': page
            });
        }
    }
class createCustomCollectionParameters extends shopifySDKMethodParameters <
    customCollections
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customCollections:
            customCollectionsPOST
        ) {
            super(superThis, method, _path);
            this.send(customCollections);
        }
    }
class getCustomCollectionsCountParameters extends shopifySDKMethodParameters <
    customCollectionsCount
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getCustomCollectionsCountParameters#where
         */
        where(where: string
        ): getCustomCollectionsCountParameters {
            return this.query({
                'where': where
            });
        }
    }
class deleteCustomCollectionByCustomCollectionIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, customCollectionId: string
    ) {
        super(superThis, method, _path
            .replace('{customCollectionId}', `${customCollectionId}`)
        );
    }
}
class getCustomCollectionByCustomCollectionIdParameters extends shopifySDKMethodParameters <
    Array <
    customCollections
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customCollectionId: string
        ) {
            super(superThis, method, _path
                .replace('{customCollectionId}', `${customCollectionId}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getCustomCollectionByCustomCollectionIdParameters#where
         */
        where(where: string
        ): getCustomCollectionByCustomCollectionIdParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCustomCollectionByCustomCollectionIdParameters#pageSize
         */
        pageSize(pageSize: string
        ): getCustomCollectionByCustomCollectionIdParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCustomCollectionByCustomCollectionIdParameters#page
         */
        page(page: string
        ): getCustomCollectionByCustomCollectionIdParameters {
            return this.query({
                'page': page
            });
        }
    }
class updateCustomCollectionByCustomCollectionIdParameters extends shopifySDKMethodParameters <
    customCollections
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customCollectionId: string
            , customCollections:
            customCollectionsPATCH
        ) {
            super(superThis, method, _path
                .replace('{customCollectionId}', `${customCollectionId}`)
            );
            this.send(customCollections);
        }
    }
class getCustomersParameters extends shopifySDKMethodParameters <
    Array <
    Customer
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getCustomersParameters#where
         */
        where(where: string
        ): getCustomersParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCustomersParameters#page
         */
        page(page: number
        ): getCustomersParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCustomersParameters#pageSize
         */
        pageSize(pageSize: number
        ): getCustomersParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'orderBy' optional parameter
         * @method
         * @name getCustomersParameters#orderBy
         */
        orderBy(orderBy: string
        ): getCustomersParameters {
            return this.query({
                'orderBy': orderBy
            });
        }
        /**
         * Set the 'returnTotalCount' optional parameter
         * @method
         * @name getCustomersParameters#returnTotalCount
         */
        returnTotalCount(returnTotalCount: boolean
        ): getCustomersParameters {
            return this.query({
                'returnTotalCount': returnTotalCount
            });
        }
    }
class createCustomerParameters extends shopifySDKMethodParameters <
    Customer
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customer:
            CustomerPOST
        ) {
            super(superThis, method, _path);
            this.send(customer);
        }
    }
class getCustomersAddressesParameters extends shopifySDKMethodParameters <
    Array <
    customersAddress
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customerId: string
        ) {
            super(superThis, method, _path
                .replace('{customerId}', `${customerId}`)
            );
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCustomersAddressesParameters#pageSize
         */
        pageSize(pageSize: number
        ): getCustomersAddressesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCustomersAddressesParameters#page
         */
        page(page: number
        ): getCustomersAddressesParameters {
            return this.query({
                'page': page
            });
        }
    }
class createCustomerAddresseParameters extends shopifySDKMethodParameters <
    customersAddress
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customerId: string
            , address:
            customersAddressPOST
        ) {
            super(superThis, method, _path
                .replace('{customerId}', `${customerId}`)
            );
            this.send(address);
        }
    }
class deleteCustomersAddresseByAddressIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, customerId: string
        , addressId: string
    ) {
        super(superThis, method, _path
            .replace('{customerId}', `${customerId}`)
            .replace('{addressId}', `${addressId}`)
        );
    }
}
class getCustomersAddresseByAddressIdParameters extends shopifySDKMethodParameters <
    customersAddress
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customerId: string
            , addressId: string
        ) {
            super(superThis, method, _path
                .replace('{customerId}', `${customerId}`)
                .replace('{addressId}', `${addressId}`)
            );
        }
    }
class updateCustomersAddresseByAddressIdParameters extends shopifySDKMethodParameters <
    customersAddress
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, customerId: string
            , addressId: string
            , address:
            customersAddressPATCH
        ) {
            super(superThis, method, _path
                .replace('{customerId}', `${customerId}`)
                .replace('{addressId}', `${addressId}`)
            );
            this.send(address);
        }
    }
class deleteCustomerByIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getCustomerByIdParameters extends shopifySDKMethodParameters <
    Customer
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class updateCustomerByIdParameters extends shopifySDKMethodParameters <
    Customer
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , customer:
            CustomerPATCH
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(customer);
        }
    }
class getCustomersAbandonedCheckoutsParameters extends shopifySDKMethodParameters <
    Array <
    AbandonedCheckout
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCustomersAbandonedCheckoutsParameters#page
         */
        page(page: number
        ): getCustomersAbandonedCheckoutsParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCustomersAbandonedCheckoutsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getCustomersAbandonedCheckoutsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getCustomersOrdersParameters extends shopifySDKMethodParameters <
    Array <
    Order
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getCustomersOrdersParameters#page
         */
        page(page: number
        ): getCustomersOrdersParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCustomersOrdersParameters#pageSize
         */
        pageSize(pageSize: number
        ): getCustomersOrdersParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getDiscountCodeByCodeParameters extends shopifySDKMethodParameters <
    discountCode
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, code: string
        ) {
            super(superThis, method, _path
                .replace('{code}', `${code}`)
            );
        }
    }
class getInventoryItemsParameters extends shopifySDKMethodParameters <
    Array <
    inventoryItemsObject
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, where: string
        ) {
            super(superThis, method, _path);
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getInventoryItemsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getInventoryItemsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getInventoryItemsParameters#page
         */
        page(page: string
        ): getInventoryItemsParameters {
            return this.query({
                'page': page
            });
        }
    }
class updateInventoryItemByIdParameters extends shopifySDKMethodParameters <
    PatchRespinventoryItems
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , body:
            PatchinventoryItems
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
    }
class getLocationsParameters extends shopifySDKMethodParameters <
    Array <
    locationsObject
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getLocationsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getLocationsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getLocationsParameters#page
         */
        page(page: string
        ): getLocationsParameters {
            return this.query({
                'page': page
            });
        }
    }
class getLocationsInventoryItemsInventoryLevelsParameters extends shopifySDKMethodParameters <
    Array <
    InventoryLevelsListObject
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , inventoryItemId: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{inventoryItemId}', `${inventoryItemId}`)
            );
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getLocationsInventoryItemsInventoryLevelsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getLocationsInventoryItemsInventoryLevelsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getLocationsInventoryItemsInventoryLevelsParameters#page
         */
        page(page: string
        ): getLocationsInventoryItemsInventoryLevelsParameters {
            return this.query({
                'page': page
            });
        }
    }
class updateLocationsInventoryItemsInventoryLevelsParameters extends shopifySDKMethodParameters <
    PatchRespInventoryLevels
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , inventoryItemId: string
            , body:
            PatchInventoryLevels
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{inventoryItemId}', `${inventoryItemId}`)
            );
            this.send(body);
        }
    }
class createLocationInventoryItemInventoryLevelParameters extends shopifySDKMethodParameters <
    PostRespInventoryLevels
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , inventoryItemId: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{inventoryItemId}', `${inventoryItemId}`)
            );
        }
        /**
         * Set the 'body' optional parameter
         * @method
         * @name createLocationInventoryItemInventoryLevelParameters#body
         */
        body(body:
            PostInventoryLevels
        ): createLocationInventoryItemInventoryLevelParameters {
            if (this.queryParameters['body'] !== undefined) {
                this._body = this.queryParameters['body'];
            }
        }
    }
class getLocationsInventoryLevelsParameters extends shopifySDKMethodParameters <
    Array <
    locationsInventoryLevelsObject
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getLocationsInventoryLevelsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getLocationsInventoryLevelsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getLocationsInventoryLevelsParameters#page
         */
        page(page: string
        ): getLocationsInventoryLevelsParameters {
            return this.query({
                'page': page
            });
        }
    }
class getMetafieldsParameters extends shopifySDKMethodParameters <
    Array <
    metafields
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getMetafieldsParameters#where
         */
        where(where: string
        ): getMetafieldsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetafieldsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getMetafieldsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getMetafieldsParameters#page
         */
        page(page: string
        ): getMetafieldsParameters {
            return this.query({
                'page': page
            });
        }
    }
class createMetafieldParameters extends shopifySDKMethodParameters <
    metafields
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, body:
            metafieldsPOST
        ) {
            super(superThis, method, _path);
            this.send(body);
        }
    }
class getMetafieldsCountParameters extends shopifySDKMethodParameters <
    metafieldsCount
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class deleteMetafieldByIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getMetafieldByIdParameters extends shopifySDKMethodParameters <
    metafields
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class updateMetafieldByIdParameters extends shopifySDKMethodParameters <
    metafields
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , body:
            metafieldsPATCH
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
    }
class getObjectsParameters extends shopifySDKMethodParameters <
    Array < string
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class getObjectsObjectNameDocsParameters extends shopifySDKMethodParameters <
    swaggerDocs
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
        /**
         * Set the 'discovery' optional parameter
         * @method
         * @name getObjectsObjectNameDocsParameters#discovery
         */
        discovery(discovery: boolean
        ): getObjectsObjectNameDocsParameters {
            return this.query({
                'discovery': discovery
            });
        }
        /**
         * Set the 'resolveReferences' optional parameter
         * @method
         * @name getObjectsObjectNameDocsParameters#resolveReferences
         */
        resolveReferences(resolveReferences: boolean
        ): getObjectsObjectNameDocsParameters {
            return this.query({
                'resolveReferences': resolveReferences
            });
        }
        /**
         * Set the 'basic' optional parameter
         * @method
         * @name getObjectsObjectNameDocsParameters#basic
         */
        basic(basic: boolean
        ): getObjectsObjectNameDocsParameters {
            return this.query({
                'basic': basic
            });
        }
    }
class getObjectsObjectNameMetadataParameters extends shopifySDKMethodParameters <
    objectsMetadata
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class getOrdersParameters extends shopifySDKMethodParameters <
    Array <
    Order
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getOrdersParameters#where
         */
        where(where: string
        ): getOrdersParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getOrdersParameters#page
         */
        page(page: number
        ): getOrdersParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getOrdersParameters#pageSize
         */
        pageSize(pageSize: number
        ): getOrdersParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'orderBy' optional parameter
         * @method
         * @name getOrdersParameters#orderBy
         */
        orderBy(orderBy: string
        ): getOrdersParameters {
            return this.query({
                'orderBy': orderBy
            });
        }
        /**
         * Set the 'returnTotalCount' optional parameter
         * @method
         * @name getOrdersParameters#returnTotalCount
         */
        returnTotalCount(returnTotalCount: boolean
        ): getOrdersParameters {
            return this.query({
                'returnTotalCount': returnTotalCount
            });
        }
    }
class createOrderParameters extends shopifySDKMethodParameters <
    Order
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, order:
            OrderPOST
        ) {
            super(superThis, method, _path);
            this.send(order);
        }
    }
class deleteOrderByIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getOrderByIdParameters extends shopifySDKMethodParameters <
    Order
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class updateOrderByIdParameters extends shopifySDKMethodParameters <
    Order
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , order:
            OrderPATCH
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(order);
        }
        /**
         * Set the 'action' optional parameter
         * @method
         * @name updateOrderByIdParameters#action
         */
        action(action: string
        ): updateOrderByIdParameters {
            return this.query({
                'action': action
            });
        }
    }
class getOrdersFulfillmentsParameters extends shopifySDKMethodParameters <
    Array <
    ordersFulfillments
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getOrdersFulfillmentsParameters#where
         */
        where(where: string
        ): getOrdersFulfillmentsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getOrdersFulfillmentsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getOrdersFulfillmentsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getOrdersFulfillmentsParameters#page
         */
        page(page: string
        ): getOrdersFulfillmentsParameters {
            return this.query({
                'page': page
            });
        }
    }
class createOrderFulfillmentParameters extends shopifySDKMethodParameters <
    ordersFulfillments
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillment:
            ordersFulfillmentsPOST
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
            this.send(fulfillment);
        }
    }
class getOrdersFulfillmentsCountParameters extends shopifySDKMethodParameters <
    ordersFulfillmentsCount
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
        }
    }
class getOrdersFulfillmentByFulfillmentIdParameters extends shopifySDKMethodParameters <
    ordersFulfillments
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillmentId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{fulfillmentId}', `${fulfillmentId}`)
            );
        }
    }
class updateOrdersFulfillmentByFulfillmentIdParameters extends shopifySDKMethodParameters <
    ordersFulfillments
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillmentId: string
            , body:
            ordersFulfillmentsPATCH
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{fulfillmentId}', `${fulfillmentId}`)
            );
            this.send(body);
        }
    }
class getOrdersFulfillmentsFulfillmentEventsParameters extends shopifySDKMethodParameters <
    Array <
    fulfillmentEvents
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillmentId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{fulfillmentId}', `${fulfillmentId}`)
            );
        }
    }
class createOrderFulfillmentFulfillmentEventParameters extends shopifySDKMethodParameters <
    fulfillmentEvents
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillmentId: string
            , body:
            fulfillmentEventsPOST
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{fulfillmentId}', `${fulfillmentId}`)
            );
            this.send(body);
        }
    }
class deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        , fulfillmentId: string
        , eventId: string
    ) {
        super(superThis, method, _path
            .replace('{orderId}', `${orderId}`)
            .replace('{fulfillmentId}', `${fulfillmentId}`)
            .replace('{eventId}', `${eventId}`)
        );
    }
}
class getOrdersFulfillmentsFulfillmentEventByEventIdParameters extends shopifySDKMethodParameters <
    fulfillmentEvents
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillmentId: string
            , eventId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{fulfillmentId}', `${fulfillmentId}`)
                .replace('{eventId}', `${eventId}`)
            );
        }
    }
class updateOrdersFulfillmentsStatusCancelParameters extends shopifySDKMethodParameters <
    ordersFulfillmentsStatusCancel
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillmentId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{fulfillmentId}', `${fulfillmentId}`)
            );
        }
    }
class updateOrdersFulfillmentsStatusCompleteParameters extends shopifySDKMethodParameters <
    ordersFulfillments
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , fulfillmentId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{fulfillmentId}', `${fulfillmentId}`)
            );
        }
    }
class getOrdersPaymentsParameters extends shopifySDKMethodParameters <
    Array <
    Transaction
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getOrdersPaymentsParameters#where
         */
        where(where: string
        ): getOrdersPaymentsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getOrdersPaymentsParameters#page
         */
        page(page: number
        ): getOrdersPaymentsParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getOrdersPaymentsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getOrdersPaymentsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createOrderPaymentParameters extends shopifySDKMethodParameters <
    ordersPayments
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , body:
            ordersPaymentsPOST
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
            this.send(body);
        }
    }
class getOrdersPaymentsCountParameters extends shopifySDKMethodParameters <
    ordersPaymentsCount
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
        }
    }
class getOrdersPaymentByPaymentIdParameters extends shopifySDKMethodParameters <
    Transaction
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , paymentId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{paymentId}', `${paymentId}`)
            );
        }
    }
class getOrdersRefundsParameters extends shopifySDKMethodParameters <
    Array <
    ordersRefundsObject
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getOrdersRefundsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getOrdersRefundsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getOrdersRefundsParameters#page
         */
        page(page: string
        ): getOrdersRefundsParameters {
            return this.query({
                'page': page
            });
        }
    }
class createOrderRefundParameters extends shopifySDKMethodParameters <
    ordersRefunds
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , refund:
            ordersRefundsPOST
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
            this.send(refund);
        }
    }
class createOrderRefundsCalculateParameters extends shopifySDKMethodParameters <
    ordersRefundsCalculate
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , refundCalculate:
            ordersRefundsCalculatePOST
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
            this.send(refundCalculate);
        }
    }
class getOrdersRefundByRefundIdParameters extends shopifySDKMethodParameters <
    ordersRefunds
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , refundId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{refundId}', `${refundId}`)
            );
        }
    }
class getOrdersRisksParameters extends shopifySDKMethodParameters <
    Array <
    ordersRisks
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
        }
    }
class createOrderRiskParameters extends shopifySDKMethodParameters <
    ordersRisks
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , risk:
            ordersRisksPOST
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
            );
            this.send(risk);
        }
    }
class deleteOrdersRiskByRiskIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
        , riskId: string
    ) {
        super(superThis, method, _path
            .replace('{orderId}', `${orderId}`)
            .replace('{riskId}', `${riskId}`)
        );
    }
}
class getOrdersRiskByRiskIdParameters extends shopifySDKMethodParameters <
    ordersRisks
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , riskId: string
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{riskId}', `${riskId}`)
            );
        }
    }
class updateOrdersRiskByRiskIdParameters extends shopifySDKMethodParameters <
    ordersRisks
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, orderId: string
            , riskId: string
            , risk:
            ordersRisksPATCH
        ) {
            super(superThis, method, _path
                .replace('{orderId}', `${orderId}`)
                .replace('{riskId}', `${riskId}`)
            );
            this.send(risk);
        }
    }
class getPingParameters extends shopifySDKMethodParameters <
    Pong
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class getPriceRulesParameters extends shopifySDKMethodParameters <
    Array <
    priceRules
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getPriceRulesParameters#page
         */
        page(page: string
        ): getPriceRulesParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getPriceRulesParameters#pageSize
         */
        pageSize(pageSize: string
        ): getPriceRulesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getPriceRulesParameters#where
         */
        where(where: string
        ): getPriceRulesParameters {
            return this.query({
                'where': where
            });
        }
    }
class createPriceRuleParameters extends shopifySDKMethodParameters <
    priceRules
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, priceRule:
            priceRulesPOST
        ) {
            super(superThis, method, _path);
            this.send(priceRule);
        }
    }
class deletePriceRuleByPriceRuleIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, priceRuleId: string
    ) {
        super(superThis, method, _path
            .replace('{priceRuleId}', `${priceRuleId}`)
        );
    }
}
class getPriceRuleByPriceRuleIdParameters extends shopifySDKMethodParameters <
    priceRules
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, priceRuleId: string
        ) {
            super(superThis, method, _path
                .replace('{priceRuleId}', `${priceRuleId}`)
            );
        }
    }
class getPriceRulesDiscountCodesParameters extends shopifySDKMethodParameters <
    Array <
    discountCode
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, priceRuleId: string
        ) {
            super(superThis, method, _path
                .replace('{priceRuleId}', `${priceRuleId}`)
            );
        }
    }
class createPriceRuleDiscountCodeParameters extends shopifySDKMethodParameters <
    discountCode
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, priceRuleId: string
            , discountCode:
            discountCodePOST
        ) {
            super(superThis, method, _path
                .replace('{priceRuleId}', `${priceRuleId}`)
            );
            this.send(discountCode);
        }
    }
class deletePriceRulesDiscountCodeByDiscountCodeIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, priceRuleId: string
        , discountCodeId: string
    ) {
        super(superThis, method, _path
            .replace('{priceRuleId}', `${priceRuleId}`)
            .replace('{discountCodeId}', `${discountCodeId}`)
        );
    }
}
class getPriceRulesDiscountCodeByDiscountCodeIdParameters extends shopifySDKMethodParameters <
    discountCode
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, priceRuleId: string
            , discountCodeId: string
        ) {
            super(superThis, method, _path
                .replace('{priceRuleId}', `${priceRuleId}`)
                .replace('{discountCodeId}', `${discountCodeId}`)
            );
        }
    }
class getProductsParameters extends shopifySDKMethodParameters <
    Array <
    Product
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getProductsParameters#where
         */
        where(where: string
        ): getProductsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getProductsParameters#page
         */
        page(page: number
        ): getProductsParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getProductsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getProductsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'orderBy' optional parameter
         * @method
         * @name getProductsParameters#orderBy
         */
        orderBy(orderBy: string
        ): getProductsParameters {
            return this.query({
                'orderBy': orderBy
            });
        }
        /**
         * Set the 'returnTotalCount' optional parameter
         * @method
         * @name getProductsParameters#returnTotalCount
         */
        returnTotalCount(returnTotalCount: boolean
        ): getProductsParameters {
            return this.query({
                'returnTotalCount': returnTotalCount
            });
        }
    }
class createProductParameters extends shopifySDKMethodParameters <
    Product
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, product:
            ProductPOST
        ) {
            super(superThis, method, _path);
            this.send(product);
        }
    }
class deleteProductByIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getProductByIdParameters extends shopifySDKMethodParameters <
    Product
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class updateProductByIdParameters extends shopifySDKMethodParameters <
    Product
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , product:
            ProductPATCH
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(product);
        }
    }
class getProductsVariantsParameters extends shopifySDKMethodParameters <
    Array <
    productsVariantsObject
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getProductsVariantsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getProductsVariantsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getProductsVariantsParameters#page
         */
        page(page: number
        ): getProductsVariantsParameters {
            return this.query({
                'page': page
            });
        }
    }
class createProductVariantParameters extends shopifySDKMethodParameters <
    productsVariants
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , variant:
            productsVariantsPOST
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(variant);
        }
    }
class getProductsImagesParameters extends shopifySDKMethodParameters <
    Array <
    productsImages
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, productId: string
        ) {
            super(superThis, method, _path
                .replace('{productId}', `${productId}`)
            );
        }
    }
class createProductImageParameters extends shopifySDKMethodParameters <
    productsImages
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, productId: string
            , image:
            productsImagesPOST
        ) {
            super(superThis, method, _path
                .replace('{productId}', `${productId}`)
            );
            this.send(image);
        }
    }
class deleteProductsImageByIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, productId: string
        , id: string
    ) {
        super(superThis, method, _path
            .replace('{productId}', `${productId}`)
            .replace('{id}', `${id}`)
        );
    }
}
class getProductsImageByIdParameters extends shopifySDKMethodParameters <
    productsImages
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, productId: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{productId}', `${productId}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class updateProductsImageByIdParameters extends shopifySDKMethodParameters <
    productsImages
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, productId: string
            , id: string
            , image:
            productsImagesPATCH
        ) {
            super(superThis, method, _path
                .replace('{productId}', `${productId}`)
                .replace('{id}', `${id}`)
            );
            this.send(image);
        }
    }
class deleteProductsVariantByIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, productId: string
        , id: string
    ) {
        super(superThis, method, _path
            .replace('{productId}', `${productId}`)
            .replace('{id}', `${id}`)
        );
    }
}
class getQueryParameters extends shopifySDKMethodParameters <
    Array <
    {}
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, q: string
        ) {
            super(superThis, method, _path);
            return this.query({
                'q': q
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getQueryParameters#page
         */
        page(page: number
        ): getQueryParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getQueryParameters#pageSize
         */
        pageSize(pageSize: number
        ): getQueryParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'returnTotalCount' optional parameter
         * @method
         * @name getQueryParameters#returnTotalCount
         */
        returnTotalCount(returnTotalCount: boolean
        ): getQueryParameters {
            return this.query({
                'returnTotalCount': returnTotalCount
            });
        }
    }
class getShippingZonesParameters extends shopifySDKMethodParameters <
    Array <
    shippingZonesListObject
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getShippingZonesParameters#pageSize
         */
        pageSize(pageSize: string
        ): getShippingZonesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getShippingZonesParameters#page
         */
        page(page: string
        ): getShippingZonesParameters {
            return this.query({
                'page': page
            });
        }
    }
class getShopsParameters extends shopifySDKMethodParameters <
    Array <
    Shop
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class getSmartCollectionsParameters extends shopifySDKMethodParameters <
    Array <
    smartCollections
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getSmartCollectionsParameters#where
         */
        where(where: string
        ): getSmartCollectionsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getSmartCollectionsParameters#pageSize
         */
        pageSize(pageSize: string
        ): getSmartCollectionsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getSmartCollectionsParameters#page
         */
        page(page: string
        ): getSmartCollectionsParameters {
            return this.query({
                'page': page
            });
        }
    }
class createSmartCollectionParameters extends shopifySDKMethodParameters <
    smartCollections
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, smartCollections:
            smartCollectionsPOST
        ) {
            super(superThis, method, _path);
            this.send(smartCollections);
        }
    }
class deleteSmartCollectionByIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getSmartCollectionByIdParameters extends shopifySDKMethodParameters <
    smartCollections
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class updateSmartCollectionByIdParameters extends shopifySDKMethodParameters <
    smartCollections
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , smartCollections:
            smartCollectionsPATCH
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(smartCollections);
        }
    }
class getVariantByIdParameters extends shopifySDKMethodParameters <
    variants
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class updateVariantByIdParameters extends shopifySDKMethodParameters <
    variants
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, id: string
            , variant:
            variantsPATCH
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(variant);
        }
    }
class getByObjectNameParameters extends shopifySDKMethodParameters <
    Array <
    {}
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getByObjectNameParameters#where
         */
        where(where: string
        ): getByObjectNameParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getByObjectNameParameters#page
         */
        page(page: number
        ): getByObjectNameParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getByObjectNameParameters#pageSize
         */
        pageSize(pageSize: number
        ): getByObjectNameParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createByObjectNameParameters extends shopifySDKMethodParameters <
    {}
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , body:
            {}
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class getObjectNameMetafieldsParameters extends shopifySDKMethodParameters <
    Array <
    objectmetafields
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class createObjectNameMetafieldParameters extends shopifySDKMethodParameters <
    metafields
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , id: string
            , body:
            metafields
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
    }
class getObjectNameMetafieldsCountParameters extends shopifySDKMethodParameters <
    metafieldsCount
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class deleteObjectNameMetafieldByMetafieldIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        , id: string
        , metafieldId: string
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
            .replace('{id}', `${id}`)
            .replace('{metafieldId}', `${metafieldId}`)
        );
    }
}
class getObjectNameMetafieldByMetafieldIdParameters extends shopifySDKMethodParameters <
    metafields
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , id: string
            , metafieldId: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{id}', `${id}`)
                .replace('{metafieldId}', `${metafieldId}`)
            );
        }
    }
class updateObjectNameMetafieldByMetafieldIdParameters extends shopifySDKMethodParameters <
    metafields
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , id: string
            , metafieldId: string
            , body:
            metafields
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{id}', `${id}`)
                .replace('{metafieldId}', `${metafieldId}`)
            );
            this.send(body);
        }
    }
class deleteObjectNameByObjectIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        , objectId: string
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
            .replace('{objectId}', `${objectId}`)
        );
    }
}
class getObjectNameByObjectIdParameters extends shopifySDKMethodParameters <
    Object
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , objectId: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
            );
        }
    }
class updateObjectNameByObjectIdParameters extends shopifySDKMethodParameters <
    Object
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , objectId: string
            , body:
            Object
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
            );
            this.send(body);
        }
    }
class replaceObjectNameByObjectIdParameters extends shopifySDKMethodParameters <
    Object
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , objectId: string
            , body:
            Object
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
            );
            this.send(body);
        }
    }
class getObjectNameByChildObjectNameParameters extends shopifySDKMethodParameters <
    Array <
    Object
    >
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , objectId: string
            , childObjectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectName}', `${childObjectName}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getObjectNameByChildObjectNameParameters#where
         */
        where(where: string
        ): getObjectNameByChildObjectNameParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'page' optional parameter
         * @method
         * @name getObjectNameByChildObjectNameParameters#page
         */
        page(page: number
        ): getObjectNameByChildObjectNameParameters {
            return this.query({
                'page': page
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getObjectNameByChildObjectNameParameters#pageSize
         */
        pageSize(pageSize: number
        ): getObjectNameByChildObjectNameParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createObjectNameByChildObjectNameParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        , objectId: string
        , childObjectName: string
        , body:
        Object
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
            .replace('{objectId}', `${objectId}`)
            .replace('{childObjectName}', `${childObjectName}`)
        );
        this.send(body);
    }
}
class deleteObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters < > {
    constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
        , childObjectName: string
        , objectId: string
        , childObjectId: string
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
            .replace('{childObjectName}', `${childObjectName}`)
            .replace('{objectId}', `${objectId}`)
            .replace('{childObjectId}', `${childObjectId}`)
        );
    }
}
class getObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters <
    Object
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , childObjectName: string
            , objectId: string
            , childObjectId: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{childObjectName}', `${childObjectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectId}', `${childObjectId}`)
            );
        }
    }
class updateObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters <
    Object
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , childObjectName: string
            , objectId: string
            , childObjectId: string
            , body:
            Object
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{childObjectName}', `${childObjectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectId}', `${childObjectId}`)
            );
            this.send(body);
        }
    }
class replaceObjectNameByChildObjectIdParameters extends shopifySDKMethodParameters <
    Object
    >
    {
        constructor(superThis: shopifySDK, method: string, _path: string, objectName: string
            , childObjectName: string
            , objectId: string
            , childObjectId: string
            , body:
            Object
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{childObjectName}', `${childObjectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectId}', `${childObjectId}`)
            );
            this.send(body);
        }
    }