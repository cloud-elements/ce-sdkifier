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
var shopifySDKMethodParameters = /** @class */ (function () {
    function shopifySDKMethodParameters(superThis, method, path) {
        this.superThis = superThis;
        this.method = method;
        this.path = path;
        this.queryParameters = {};
        this.headers = {};
        this.form = {};
    }
    return shopifySDKMethodParameters;
}());
var getAbandonedCheckoutsParameters = /** @class */ (function (_super) {
    __extends(getAbandonedCheckoutsParameters, _super);
    function getAbandonedCheckoutsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAbandonedCheckoutsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getAbandonedCheckoutsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAbandonedCheckoutsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAbandonedCheckoutsParameters;
}(shopifySDKMethodParameters));
;
var createBulkQueryParameters = /** @class */ (function (_super) {
    __extends(createBulkQueryParameters, _super);
    function createBulkQueryParameters(superThis, method, path, q) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.queryParameters['q'] = q;
        return _this;
    }
    createBulkQueryParameters.prototype.elementsAsyncCallbackUrl = function (elementsAsyncCallbackUrl) {
        this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
        return this;
    };
    createBulkQueryParameters.prototype.lastRunDate = function (lastRunDate) {
        this.queryParameters['lastRunDate'] = lastRunDate;
        return this;
    };
    createBulkQueryParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    createBulkQueryParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    createBulkQueryParameters.prototype.continueFromJobId = function (continueFromJobId) {
        this.queryParameters['continueFromJobId'] = continueFromJobId;
        return this;
    };
    createBulkQueryParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createBulkQueryParameters;
}(shopifySDKMethodParameters));
;
var replaceBulkCancelParameters = /** @class */ (function (_super) {
    __extends(replaceBulkCancelParameters, _super);
    function replaceBulkCancelParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    replaceBulkCancelParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceBulkCancelParameters;
}(shopifySDKMethodParameters));
;
var getBulkErrorsParameters = /** @class */ (function (_super) {
    __extends(getBulkErrorsParameters, _super);
    function getBulkErrorsParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getBulkErrorsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getBulkErrorsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getBulkErrorsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getBulkErrorsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getBulkErrorsParameters;
}(shopifySDKMethodParameters));
;
var getBulkStatusParameters = /** @class */ (function (_super) {
    __extends(getBulkStatusParameters, _super);
    function getBulkStatusParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getBulkStatusParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getBulkStatusParameters;
}(shopifySDKMethodParameters));
;
var getBulkByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getBulkByObjectNameParameters, _super);
    function getBulkByObjectNameParameters(superThis, method, path, id, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getBulkByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getBulkByObjectNameParameters;
}(shopifySDKMethodParameters));
;
var createBulkByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createBulkByObjectNameParameters, _super);
    function createBulkByObjectNameParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    createBulkByObjectNameParameters.prototype.elementsAsyncCallbackUrl = function (elementsAsyncCallbackUrl) {
        this.headers['Elements-Async-Callback-Url'] = elementsAsyncCallbackUrl;
        return this;
    };
    createBulkByObjectNameParameters.prototype.metaData = function (metaData) {
        this.form['metaData'] = metaData;
        return this;
    };
    createBulkByObjectNameParameters.prototype.file = function (file) {
        this.form['file'] = file;
        return this;
    };
    createBulkByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createBulkByObjectNameParameters;
}(shopifySDKMethodParameters));
;
var createCollectParameters = /** @class */ (function (_super) {
    __extends(createCollectParameters, _super);
    function createCollectParameters(superThis, method, path, collects) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = collects;
        return _this;
    }
    createCollectParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createCollectParameters;
}(shopifySDKMethodParameters));
;
var getCollectsParameters = /** @class */ (function (_super) {
    __extends(getCollectsParameters, _super);
    function getCollectsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCollectsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCollectsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getCollectsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCollectsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCollectsParameters;
}(shopifySDKMethodParameters));
;
var getCollectsCountParameters = /** @class */ (function (_super) {
    __extends(getCollectsCountParameters, _super);
    function getCollectsCountParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCollectsCountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCollectsCountParameters;
}(shopifySDKMethodParameters));
;
var getCollectByCollectIdParameters = /** @class */ (function (_super) {
    __extends(getCollectByCollectIdParameters, _super);
    function getCollectByCollectIdParameters(superThis, method, path, collectId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{collectId}', "" + collectId);
        return _this;
    }
    getCollectByCollectIdParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getCollectByCollectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCollectByCollectIdParameters;
}(shopifySDKMethodParameters));
;
var deleteCollectByCollectIdParameters = /** @class */ (function (_super) {
    __extends(deleteCollectByCollectIdParameters, _super);
    function deleteCollectByCollectIdParameters(superThis, method, path, collectId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{collectId}', "" + collectId);
        return _this;
    }
    deleteCollectByCollectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteCollectByCollectIdParameters;
}(shopifySDKMethodParameters));
;
var getCountriesParameters = /** @class */ (function (_super) {
    __extends(getCountriesParameters, _super);
    function getCountriesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCountriesParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCountriesParameters.prototype.sinceId = function (sinceId) {
        this.queryParameters['since_id'] = sinceId;
        return this;
    };
    getCountriesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCountriesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCountriesParameters;
}(shopifySDKMethodParameters));
;
var getCountryByCountryIdParameters = /** @class */ (function (_super) {
    __extends(getCountryByCountryIdParameters, _super);
    function getCountryByCountryIdParameters(superThis, method, path, countryId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{countryId}', "" + countryId);
        return _this;
    }
    getCountryByCountryIdParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCountryByCountryIdParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCountryByCountryIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCountryByCountryIdParameters;
}(shopifySDKMethodParameters));
;
var createCustomCollectionParameters = /** @class */ (function (_super) {
    __extends(createCustomCollectionParameters, _super);
    function createCustomCollectionParameters(superThis, method, path, customCollections) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = customCollections;
        return _this;
    }
    createCustomCollectionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createCustomCollectionParameters;
}(shopifySDKMethodParameters));
;
var getCustomCollectionsParameters = /** @class */ (function (_super) {
    __extends(getCustomCollectionsParameters, _super);
    function getCustomCollectionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCustomCollectionsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCustomCollectionsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getCustomCollectionsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCustomCollectionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomCollectionsParameters;
}(shopifySDKMethodParameters));
;
var getCustomCollectionsCountParameters = /** @class */ (function (_super) {
    __extends(getCustomCollectionsCountParameters, _super);
    function getCustomCollectionsCountParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCustomCollectionsCountParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getCustomCollectionsCountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomCollectionsCountParameters;
}(shopifySDKMethodParameters));
;
var updateCustomCollectionByCustomCollectionIdParameters = /** @class */ (function (_super) {
    __extends(updateCustomCollectionByCustomCollectionIdParameters, _super);
    function updateCustomCollectionByCustomCollectionIdParameters(superThis, method, path, customCollectionId, customCollections) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customCollectionId}', "" + customCollectionId);
        _this._body = customCollections;
        return _this;
    }
    updateCustomCollectionByCustomCollectionIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateCustomCollectionByCustomCollectionIdParameters;
}(shopifySDKMethodParameters));
;
var getCustomCollectionByCustomCollectionIdParameters = /** @class */ (function (_super) {
    __extends(getCustomCollectionByCustomCollectionIdParameters, _super);
    function getCustomCollectionByCustomCollectionIdParameters(superThis, method, path, customCollectionId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customCollectionId}', "" + customCollectionId);
        return _this;
    }
    getCustomCollectionByCustomCollectionIdParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getCustomCollectionByCustomCollectionIdParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCustomCollectionByCustomCollectionIdParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCustomCollectionByCustomCollectionIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomCollectionByCustomCollectionIdParameters;
}(shopifySDKMethodParameters));
;
var deleteCustomCollectionByCustomCollectionIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomCollectionByCustomCollectionIdParameters, _super);
    function deleteCustomCollectionByCustomCollectionIdParameters(superThis, method, path, customCollectionId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customCollectionId}', "" + customCollectionId);
        return _this;
    }
    deleteCustomCollectionByCustomCollectionIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteCustomCollectionByCustomCollectionIdParameters;
}(shopifySDKMethodParameters));
;
var getCustomersParameters = /** @class */ (function (_super) {
    __extends(getCustomersParameters, _super);
    function getCustomersParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCustomersParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getCustomersParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCustomersParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCustomersParameters.prototype.orderBy = function (orderBy) {
        this.queryParameters['orderBy'] = orderBy;
        return this;
    };
    getCustomersParameters.prototype.returnTotalCount = function (returnTotalCount) {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    };
    getCustomersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersParameters;
}(shopifySDKMethodParameters));
;
var createCustomerParameters = /** @class */ (function (_super) {
    __extends(createCustomerParameters, _super);
    function createCustomerParameters(superThis, method, path, customer) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = customer;
        return _this;
    }
    createCustomerParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createCustomerParameters;
}(shopifySDKMethodParameters));
;
var createCustomerAddresseParameters = /** @class */ (function (_super) {
    __extends(createCustomerAddresseParameters, _super);
    function createCustomerAddresseParameters(superThis, method, path, customerId, address) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customerId}', "" + customerId);
        _this._body = address;
        return _this;
    }
    createCustomerAddresseParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createCustomerAddresseParameters;
}(shopifySDKMethodParameters));
;
var getCustomersAddressesParameters = /** @class */ (function (_super) {
    __extends(getCustomersAddressesParameters, _super);
    function getCustomersAddressesParameters(superThis, method, path, customerId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customerId}', "" + customerId);
        return _this;
    }
    getCustomersAddressesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCustomersAddressesParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCustomersAddressesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersAddressesParameters;
}(shopifySDKMethodParameters));
;
var updateCustomersAddresseByAddressIdParameters = /** @class */ (function (_super) {
    __extends(updateCustomersAddresseByAddressIdParameters, _super);
    function updateCustomersAddresseByAddressIdParameters(superThis, method, path, customerId, addressId, address) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customerId}', "" + customerId);
        _this.path = _this.path.replace('{addressId}', "" + addressId);
        _this._body = address;
        return _this;
    }
    updateCustomersAddresseByAddressIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateCustomersAddresseByAddressIdParameters;
}(shopifySDKMethodParameters));
;
var getCustomersAddresseByAddressIdParameters = /** @class */ (function (_super) {
    __extends(getCustomersAddresseByAddressIdParameters, _super);
    function getCustomersAddresseByAddressIdParameters(superThis, method, path, customerId, addressId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customerId}', "" + customerId);
        _this.path = _this.path.replace('{addressId}', "" + addressId);
        return _this;
    }
    getCustomersAddresseByAddressIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersAddresseByAddressIdParameters;
}(shopifySDKMethodParameters));
;
var deleteCustomersAddresseByAddressIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomersAddresseByAddressIdParameters, _super);
    function deleteCustomersAddresseByAddressIdParameters(superThis, method, path, customerId, addressId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{customerId}', "" + customerId);
        _this.path = _this.path.replace('{addressId}', "" + addressId);
        return _this;
    }
    deleteCustomersAddresseByAddressIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteCustomersAddresseByAddressIdParameters;
}(shopifySDKMethodParameters));
;
var deleteCustomerByIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomerByIdParameters, _super);
    function deleteCustomerByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteCustomerByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteCustomerByIdParameters;
}(shopifySDKMethodParameters));
;
var getCustomerByIdParameters = /** @class */ (function (_super) {
    __extends(getCustomerByIdParameters, _super);
    function getCustomerByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getCustomerByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomerByIdParameters;
}(shopifySDKMethodParameters));
;
var updateCustomerByIdParameters = /** @class */ (function (_super) {
    __extends(updateCustomerByIdParameters, _super);
    function updateCustomerByIdParameters(superThis, method, path, id, customer) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = customer;
        return _this;
    }
    updateCustomerByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateCustomerByIdParameters;
}(shopifySDKMethodParameters));
;
var getCustomersAbandonedCheckoutsParameters = /** @class */ (function (_super) {
    __extends(getCustomersAbandonedCheckoutsParameters, _super);
    function getCustomersAbandonedCheckoutsParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getCustomersAbandonedCheckoutsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCustomersAbandonedCheckoutsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCustomersAbandonedCheckoutsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersAbandonedCheckoutsParameters;
}(shopifySDKMethodParameters));
;
var getCustomersOrdersParameters = /** @class */ (function (_super) {
    __extends(getCustomersOrdersParameters, _super);
    function getCustomersOrdersParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getCustomersOrdersParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getCustomersOrdersParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCustomersOrdersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersOrdersParameters;
}(shopifySDKMethodParameters));
;
var getDiscountCodeByCodeParameters = /** @class */ (function (_super) {
    __extends(getDiscountCodeByCodeParameters, _super);
    function getDiscountCodeByCodeParameters(superThis, method, path, code) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{code}', "" + code);
        return _this;
    }
    getDiscountCodeByCodeParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getDiscountCodeByCodeParameters;
}(shopifySDKMethodParameters));
;
var getInventoryItemsParameters = /** @class */ (function (_super) {
    __extends(getInventoryItemsParameters, _super);
    function getInventoryItemsParameters(superThis, method, path, where) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.queryParameters['where'] = where;
        return _this;
    }
    getInventoryItemsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getInventoryItemsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getInventoryItemsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInventoryItemsParameters;
}(shopifySDKMethodParameters));
;
var updateInventoryItemByIdParameters = /** @class */ (function (_super) {
    __extends(updateInventoryItemByIdParameters, _super);
    function updateInventoryItemByIdParameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    updateInventoryItemByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateInventoryItemByIdParameters;
}(shopifySDKMethodParameters));
;
var getLocationsParameters = /** @class */ (function (_super) {
    __extends(getLocationsParameters, _super);
    function getLocationsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getLocationsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getLocationsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getLocationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getLocationsParameters;
}(shopifySDKMethodParameters));
;
var updateLocationsInventoryItemsInventoryLevelsParameters = /** @class */ (function (_super) {
    __extends(updateLocationsInventoryItemsInventoryLevelsParameters, _super);
    function updateLocationsInventoryItemsInventoryLevelsParameters(superThis, method, path, id, inventoryItemId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{inventoryItemId}', "" + inventoryItemId);
        _this._body = body;
        return _this;
    }
    updateLocationsInventoryItemsInventoryLevelsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateLocationsInventoryItemsInventoryLevelsParameters;
}(shopifySDKMethodParameters));
;
var createLocationInventoryItemInventoryLevelParameters = /** @class */ (function (_super) {
    __extends(createLocationInventoryItemInventoryLevelParameters, _super);
    function createLocationInventoryItemInventoryLevelParameters(superThis, method, path, id, inventoryItemId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{inventoryItemId}', "" + inventoryItemId);
        return _this;
    }
    createLocationInventoryItemInventoryLevelParameters.prototype.body = function (body) {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
        return this;
    };
    createLocationInventoryItemInventoryLevelParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createLocationInventoryItemInventoryLevelParameters;
}(shopifySDKMethodParameters));
;
var getLocationsInventoryItemsInventoryLevelsParameters = /** @class */ (function (_super) {
    __extends(getLocationsInventoryItemsInventoryLevelsParameters, _super);
    function getLocationsInventoryItemsInventoryLevelsParameters(superThis, method, path, id, inventoryItemId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{inventoryItemId}', "" + inventoryItemId);
        return _this;
    }
    getLocationsInventoryItemsInventoryLevelsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getLocationsInventoryItemsInventoryLevelsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getLocationsInventoryItemsInventoryLevelsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getLocationsInventoryItemsInventoryLevelsParameters;
}(shopifySDKMethodParameters));
;
var getLocationsInventoryLevelsParameters = /** @class */ (function (_super) {
    __extends(getLocationsInventoryLevelsParameters, _super);
    function getLocationsInventoryLevelsParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getLocationsInventoryLevelsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getLocationsInventoryLevelsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getLocationsInventoryLevelsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getLocationsInventoryLevelsParameters;
}(shopifySDKMethodParameters));
;
var createMetafieldParameters = /** @class */ (function (_super) {
    __extends(createMetafieldParameters, _super);
    function createMetafieldParameters(superThis, method, path, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = body;
        return _this;
    }
    createMetafieldParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createMetafieldParameters;
}(shopifySDKMethodParameters));
;
var getMetafieldsParameters = /** @class */ (function (_super) {
    __extends(getMetafieldsParameters, _super);
    function getMetafieldsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetafieldsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getMetafieldsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetafieldsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getMetafieldsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetafieldsParameters;
}(shopifySDKMethodParameters));
;
var getMetafieldsCountParameters = /** @class */ (function (_super) {
    __extends(getMetafieldsCountParameters, _super);
    function getMetafieldsCountParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetafieldsCountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetafieldsCountParameters;
}(shopifySDKMethodParameters));
;
var updateMetafieldByIdParameters = /** @class */ (function (_super) {
    __extends(updateMetafieldByIdParameters, _super);
    function updateMetafieldByIdParameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    updateMetafieldByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateMetafieldByIdParameters;
}(shopifySDKMethodParameters));
;
var getMetafieldByIdParameters = /** @class */ (function (_super) {
    __extends(getMetafieldByIdParameters, _super);
    function getMetafieldByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getMetafieldByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetafieldByIdParameters;
}(shopifySDKMethodParameters));
;
var deleteMetafieldByIdParameters = /** @class */ (function (_super) {
    __extends(deleteMetafieldByIdParameters, _super);
    function deleteMetafieldByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteMetafieldByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteMetafieldByIdParameters;
}(shopifySDKMethodParameters));
;
var getObjectsParameters = /** @class */ (function (_super) {
    __extends(getObjectsParameters, _super);
    function getObjectsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getObjectsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectsParameters;
}(shopifySDKMethodParameters));
;
var getObjectsObjectNameDocsParameters = /** @class */ (function (_super) {
    __extends(getObjectsObjectNameDocsParameters, _super);
    function getObjectsObjectNameDocsParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getObjectsObjectNameDocsParameters.prototype.discovery = function (discovery) {
        this.queryParameters['discovery'] = discovery;
        return this;
    };
    getObjectsObjectNameDocsParameters.prototype.resolveReferences = function (resolveReferences) {
        this.queryParameters['resolveReferences'] = resolveReferences;
        return this;
    };
    getObjectsObjectNameDocsParameters.prototype.basic = function (basic) {
        this.queryParameters['basic'] = basic;
        return this;
    };
    getObjectsObjectNameDocsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectsObjectNameDocsParameters;
}(shopifySDKMethodParameters));
;
var getObjectsObjectNameMetadataParameters = /** @class */ (function (_super) {
    __extends(getObjectsObjectNameMetadataParameters, _super);
    function getObjectsObjectNameMetadataParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getObjectsObjectNameMetadataParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectsObjectNameMetadataParameters;
}(shopifySDKMethodParameters));
;
var getOrdersParameters = /** @class */ (function (_super) {
    __extends(getOrdersParameters, _super);
    function getOrdersParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getOrdersParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrdersParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getOrdersParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getOrdersParameters.prototype.orderBy = function (orderBy) {
        this.queryParameters['orderBy'] = orderBy;
        return this;
    };
    getOrdersParameters.prototype.returnTotalCount = function (returnTotalCount) {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    };
    getOrdersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersParameters;
}(shopifySDKMethodParameters));
;
var createOrderParameters = /** @class */ (function (_super) {
    __extends(createOrderParameters, _super);
    function createOrderParameters(superThis, method, path, order) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = order;
        return _this;
    }
    createOrderParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrderParameters;
}(shopifySDKMethodParameters));
;
var deleteOrderByIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrderByIdParameters, _super);
    function deleteOrderByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteOrderByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrderByIdParameters;
}(shopifySDKMethodParameters));
;
var getOrderByIdParameters = /** @class */ (function (_super) {
    __extends(getOrderByIdParameters, _super);
    function getOrderByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getOrderByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrderByIdParameters;
}(shopifySDKMethodParameters));
;
var updateOrderByIdParameters = /** @class */ (function (_super) {
    __extends(updateOrderByIdParameters, _super);
    function updateOrderByIdParameters(superThis, method, path, id, order) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = order;
        return _this;
    }
    updateOrderByIdParameters.prototype.action = function (action) {
        this.queryParameters['action'] = action;
        return this;
    };
    updateOrderByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateOrderByIdParameters;
}(shopifySDKMethodParameters));
;
var createOrderFulfillmentParameters = /** @class */ (function (_super) {
    __extends(createOrderFulfillmentParameters, _super);
    function createOrderFulfillmentParameters(superThis, method, path, orderId, fulfillment) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this._body = fulfillment;
        return _this;
    }
    createOrderFulfillmentParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrderFulfillmentParameters;
}(shopifySDKMethodParameters));
;
var getOrdersFulfillmentsParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsParameters, _super);
    function getOrdersFulfillmentsParameters(superThis, method, path, orderId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        return _this;
    }
    getOrdersFulfillmentsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrdersFulfillmentsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getOrdersFulfillmentsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getOrdersFulfillmentsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersFulfillmentsParameters;
}(shopifySDKMethodParameters));
;
var getOrdersFulfillmentsCountParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsCountParameters, _super);
    function getOrdersFulfillmentsCountParameters(superThis, method, path, orderId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        return _this;
    }
    getOrdersFulfillmentsCountParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrdersFulfillmentsCountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersFulfillmentsCountParameters;
}(shopifySDKMethodParameters));
;
var updateOrdersFulfillmentByFulfillmentIdParameters = /** @class */ (function (_super) {
    __extends(updateOrdersFulfillmentByFulfillmentIdParameters, _super);
    function updateOrdersFulfillmentByFulfillmentIdParameters(superThis, method, path, orderId, fulfillmentId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        _this._body = body;
        return _this;
    }
    updateOrdersFulfillmentByFulfillmentIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateOrdersFulfillmentByFulfillmentIdParameters;
}(shopifySDKMethodParameters));
;
var getOrdersFulfillmentByFulfillmentIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentByFulfillmentIdParameters, _super);
    function getOrdersFulfillmentByFulfillmentIdParameters(superThis, method, path, orderId, fulfillmentId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        return _this;
    }
    getOrdersFulfillmentByFulfillmentIdParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrdersFulfillmentByFulfillmentIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersFulfillmentByFulfillmentIdParameters;
}(shopifySDKMethodParameters));
;
var createOrderFulfillmentFulfillmentEventParameters = /** @class */ (function (_super) {
    __extends(createOrderFulfillmentFulfillmentEventParameters, _super);
    function createOrderFulfillmentFulfillmentEventParameters(superThis, method, path, orderId, fulfillmentId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        _this._body = body;
        return _this;
    }
    createOrderFulfillmentFulfillmentEventParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrderFulfillmentFulfillmentEventParameters;
}(shopifySDKMethodParameters));
;
var getOrdersFulfillmentsFulfillmentEventsParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsFulfillmentEventsParameters, _super);
    function getOrdersFulfillmentsFulfillmentEventsParameters(superThis, method, path, orderId, fulfillmentId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        return _this;
    }
    getOrdersFulfillmentsFulfillmentEventsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersFulfillmentsFulfillmentEventsParameters;
}(shopifySDKMethodParameters));
;
var getOrdersFulfillmentsFulfillmentEventByEventIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersFulfillmentsFulfillmentEventByEventIdParameters, _super);
    function getOrdersFulfillmentsFulfillmentEventByEventIdParameters(superThis, method, path, orderId, fulfillmentId, eventId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        _this.path = _this.path.replace('{eventId}', "" + eventId);
        return _this;
    }
    getOrdersFulfillmentsFulfillmentEventByEventIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersFulfillmentsFulfillmentEventByEventIdParameters;
}(shopifySDKMethodParameters));
;
var deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters, _super);
    function deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters(superThis, method, path, orderId, fulfillmentId, eventId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        _this.path = _this.path.replace('{eventId}', "" + eventId);
        return _this;
    }
    deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters;
}(shopifySDKMethodParameters));
;
var updateOrdersFulfillmentsStatusCancelParameters = /** @class */ (function (_super) {
    __extends(updateOrdersFulfillmentsStatusCancelParameters, _super);
    function updateOrdersFulfillmentsStatusCancelParameters(superThis, method, path, orderId, fulfillmentId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        return _this;
    }
    updateOrdersFulfillmentsStatusCancelParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateOrdersFulfillmentsStatusCancelParameters;
}(shopifySDKMethodParameters));
;
var updateOrdersFulfillmentsStatusCompleteParameters = /** @class */ (function (_super) {
    __extends(updateOrdersFulfillmentsStatusCompleteParameters, _super);
    function updateOrdersFulfillmentsStatusCompleteParameters(superThis, method, path, orderId, fulfillmentId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{fulfillmentId}', "" + fulfillmentId);
        return _this;
    }
    updateOrdersFulfillmentsStatusCompleteParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateOrdersFulfillmentsStatusCompleteParameters;
}(shopifySDKMethodParameters));
;
var getOrdersPaymentsParameters = /** @class */ (function (_super) {
    __extends(getOrdersPaymentsParameters, _super);
    function getOrdersPaymentsParameters(superThis, method, path, orderId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        return _this;
    }
    getOrdersPaymentsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrdersPaymentsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getOrdersPaymentsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getOrdersPaymentsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersPaymentsParameters;
}(shopifySDKMethodParameters));
;
var createOrderPaymentParameters = /** @class */ (function (_super) {
    __extends(createOrderPaymentParameters, _super);
    function createOrderPaymentParameters(superThis, method, path, orderId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this._body = body;
        return _this;
    }
    createOrderPaymentParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrderPaymentParameters;
}(shopifySDKMethodParameters));
;
var getOrdersPaymentsCountParameters = /** @class */ (function (_super) {
    __extends(getOrdersPaymentsCountParameters, _super);
    function getOrdersPaymentsCountParameters(superThis, method, path, orderId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        return _this;
    }
    getOrdersPaymentsCountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersPaymentsCountParameters;
}(shopifySDKMethodParameters));
;
var getOrdersPaymentByPaymentIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersPaymentByPaymentIdParameters, _super);
    function getOrdersPaymentByPaymentIdParameters(superThis, method, path, orderId, paymentId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{paymentId}', "" + paymentId);
        return _this;
    }
    getOrdersPaymentByPaymentIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersPaymentByPaymentIdParameters;
}(shopifySDKMethodParameters));
;
var createOrderRefundParameters = /** @class */ (function (_super) {
    __extends(createOrderRefundParameters, _super);
    function createOrderRefundParameters(superThis, method, path, orderId, refund) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this._body = refund;
        return _this;
    }
    createOrderRefundParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrderRefundParameters;
}(shopifySDKMethodParameters));
;
var getOrdersRefundsParameters = /** @class */ (function (_super) {
    __extends(getOrdersRefundsParameters, _super);
    function getOrdersRefundsParameters(superThis, method, path, orderId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        return _this;
    }
    getOrdersRefundsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getOrdersRefundsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getOrdersRefundsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrdersRefundsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersRefundsParameters;
}(shopifySDKMethodParameters));
;
var createOrderRefundsCalculateParameters = /** @class */ (function (_super) {
    __extends(createOrderRefundsCalculateParameters, _super);
    function createOrderRefundsCalculateParameters(superThis, method, path, orderId, refundCalculate) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this._body = refundCalculate;
        return _this;
    }
    createOrderRefundsCalculateParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrderRefundsCalculateParameters;
}(shopifySDKMethodParameters));
;
var getOrdersRefundByRefundIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersRefundByRefundIdParameters, _super);
    function getOrdersRefundByRefundIdParameters(superThis, method, path, orderId, refundId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{refundId}', "" + refundId);
        return _this;
    }
    getOrdersRefundByRefundIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersRefundByRefundIdParameters;
}(shopifySDKMethodParameters));
;
var createOrderRiskParameters = /** @class */ (function (_super) {
    __extends(createOrderRiskParameters, _super);
    function createOrderRiskParameters(superThis, method, path, orderId, risk) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this._body = risk;
        return _this;
    }
    createOrderRiskParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrderRiskParameters;
}(shopifySDKMethodParameters));
;
var getOrdersRisksParameters = /** @class */ (function (_super) {
    __extends(getOrdersRisksParameters, _super);
    function getOrdersRisksParameters(superThis, method, path, orderId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        return _this;
    }
    getOrdersRisksParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersRisksParameters;
}(shopifySDKMethodParameters));
;
var updateOrdersRiskByRiskIdParameters = /** @class */ (function (_super) {
    __extends(updateOrdersRiskByRiskIdParameters, _super);
    function updateOrdersRiskByRiskIdParameters(superThis, method, path, orderId, riskId, risk) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{riskId}', "" + riskId);
        _this._body = risk;
        return _this;
    }
    updateOrdersRiskByRiskIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateOrdersRiskByRiskIdParameters;
}(shopifySDKMethodParameters));
;
var getOrdersRiskByRiskIdParameters = /** @class */ (function (_super) {
    __extends(getOrdersRiskByRiskIdParameters, _super);
    function getOrdersRiskByRiskIdParameters(superThis, method, path, orderId, riskId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{riskId}', "" + riskId);
        return _this;
    }
    getOrdersRiskByRiskIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrdersRiskByRiskIdParameters;
}(shopifySDKMethodParameters));
;
var deleteOrdersRiskByRiskIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrdersRiskByRiskIdParameters, _super);
    function deleteOrdersRiskByRiskIdParameters(superThis, method, path, orderId, riskId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{orderId}', "" + orderId);
        _this.path = _this.path.replace('{riskId}', "" + riskId);
        return _this;
    }
    deleteOrdersRiskByRiskIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrdersRiskByRiskIdParameters;
}(shopifySDKMethodParameters));
;
var getPingParameters = /** @class */ (function (_super) {
    __extends(getPingParameters, _super);
    function getPingParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getPingParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getPingParameters;
}(shopifySDKMethodParameters));
;
var createPriceRuleParameters = /** @class */ (function (_super) {
    __extends(createPriceRuleParameters, _super);
    function createPriceRuleParameters(superThis, method, path, priceRule) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = priceRule;
        return _this;
    }
    createPriceRuleParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createPriceRuleParameters;
}(shopifySDKMethodParameters));
;
var getPriceRulesParameters = /** @class */ (function (_super) {
    __extends(getPriceRulesParameters, _super);
    function getPriceRulesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getPriceRulesParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getPriceRulesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getPriceRulesParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getPriceRulesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getPriceRulesParameters;
}(shopifySDKMethodParameters));
;
var getPriceRuleByPriceRuleIdParameters = /** @class */ (function (_super) {
    __extends(getPriceRuleByPriceRuleIdParameters, _super);
    function getPriceRuleByPriceRuleIdParameters(superThis, method, path, priceRuleId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{priceRuleId}', "" + priceRuleId);
        return _this;
    }
    getPriceRuleByPriceRuleIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getPriceRuleByPriceRuleIdParameters;
}(shopifySDKMethodParameters));
;
var deletePriceRuleByPriceRuleIdParameters = /** @class */ (function (_super) {
    __extends(deletePriceRuleByPriceRuleIdParameters, _super);
    function deletePriceRuleByPriceRuleIdParameters(superThis, method, path, priceRuleId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{priceRuleId}', "" + priceRuleId);
        return _this;
    }
    deletePriceRuleByPriceRuleIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deletePriceRuleByPriceRuleIdParameters;
}(shopifySDKMethodParameters));
;
var createPriceRuleDiscountCodeParameters = /** @class */ (function (_super) {
    __extends(createPriceRuleDiscountCodeParameters, _super);
    function createPriceRuleDiscountCodeParameters(superThis, method, path, priceRuleId, discountCode) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{priceRuleId}', "" + priceRuleId);
        _this._body = discountCode;
        return _this;
    }
    createPriceRuleDiscountCodeParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createPriceRuleDiscountCodeParameters;
}(shopifySDKMethodParameters));
;
var getPriceRulesDiscountCodesParameters = /** @class */ (function (_super) {
    __extends(getPriceRulesDiscountCodesParameters, _super);
    function getPriceRulesDiscountCodesParameters(superThis, method, path, priceRuleId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{priceRuleId}', "" + priceRuleId);
        return _this;
    }
    getPriceRulesDiscountCodesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getPriceRulesDiscountCodesParameters;
}(shopifySDKMethodParameters));
;
var getPriceRulesDiscountCodeByDiscountCodeIdParameters = /** @class */ (function (_super) {
    __extends(getPriceRulesDiscountCodeByDiscountCodeIdParameters, _super);
    function getPriceRulesDiscountCodeByDiscountCodeIdParameters(superThis, method, path, priceRuleId, discountCodeId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{priceRuleId}', "" + priceRuleId);
        _this.path = _this.path.replace('{discountCodeId}', "" + discountCodeId);
        return _this;
    }
    getPriceRulesDiscountCodeByDiscountCodeIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getPriceRulesDiscountCodeByDiscountCodeIdParameters;
}(shopifySDKMethodParameters));
;
var deletePriceRulesDiscountCodeByDiscountCodeIdParameters = /** @class */ (function (_super) {
    __extends(deletePriceRulesDiscountCodeByDiscountCodeIdParameters, _super);
    function deletePriceRulesDiscountCodeByDiscountCodeIdParameters(superThis, method, path, priceRuleId, discountCodeId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{priceRuleId}', "" + priceRuleId);
        _this.path = _this.path.replace('{discountCodeId}', "" + discountCodeId);
        return _this;
    }
    deletePriceRulesDiscountCodeByDiscountCodeIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deletePriceRulesDiscountCodeByDiscountCodeIdParameters;
}(shopifySDKMethodParameters));
;
var getProductsParameters = /** @class */ (function (_super) {
    __extends(getProductsParameters, _super);
    function getProductsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getProductsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getProductsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getProductsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getProductsParameters.prototype.orderBy = function (orderBy) {
        this.queryParameters['orderBy'] = orderBy;
        return this;
    };
    getProductsParameters.prototype.returnTotalCount = function (returnTotalCount) {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    };
    getProductsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getProductsParameters;
}(shopifySDKMethodParameters));
;
var createProductParameters = /** @class */ (function (_super) {
    __extends(createProductParameters, _super);
    function createProductParameters(superThis, method, path, product) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = product;
        return _this;
    }
    createProductParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createProductParameters;
}(shopifySDKMethodParameters));
;
var deleteProductByIdParameters = /** @class */ (function (_super) {
    __extends(deleteProductByIdParameters, _super);
    function deleteProductByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteProductByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteProductByIdParameters;
}(shopifySDKMethodParameters));
;
var getProductByIdParameters = /** @class */ (function (_super) {
    __extends(getProductByIdParameters, _super);
    function getProductByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getProductByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getProductByIdParameters;
}(shopifySDKMethodParameters));
;
var updateProductByIdParameters = /** @class */ (function (_super) {
    __extends(updateProductByIdParameters, _super);
    function updateProductByIdParameters(superThis, method, path, id, product) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = product;
        return _this;
    }
    updateProductByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateProductByIdParameters;
}(shopifySDKMethodParameters));
;
var createProductVariantParameters = /** @class */ (function (_super) {
    __extends(createProductVariantParameters, _super);
    function createProductVariantParameters(superThis, method, path, id, variant) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = variant;
        return _this;
    }
    createProductVariantParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createProductVariantParameters;
}(shopifySDKMethodParameters));
;
var getProductsVariantsParameters = /** @class */ (function (_super) {
    __extends(getProductsVariantsParameters, _super);
    function getProductsVariantsParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getProductsVariantsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getProductsVariantsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getProductsVariantsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getProductsVariantsParameters;
}(shopifySDKMethodParameters));
;
var createProductImageParameters = /** @class */ (function (_super) {
    __extends(createProductImageParameters, _super);
    function createProductImageParameters(superThis, method, path, productId, image) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{productId}', "" + productId);
        _this._body = image;
        return _this;
    }
    createProductImageParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createProductImageParameters;
}(shopifySDKMethodParameters));
;
var getProductsImagesParameters = /** @class */ (function (_super) {
    __extends(getProductsImagesParameters, _super);
    function getProductsImagesParameters(superThis, method, path, productId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{productId}', "" + productId);
        return _this;
    }
    getProductsImagesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getProductsImagesParameters;
}(shopifySDKMethodParameters));
;
var updateProductsImageByIdParameters = /** @class */ (function (_super) {
    __extends(updateProductsImageByIdParameters, _super);
    function updateProductsImageByIdParameters(superThis, method, path, productId, id, image) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{productId}', "" + productId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = image;
        return _this;
    }
    updateProductsImageByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateProductsImageByIdParameters;
}(shopifySDKMethodParameters));
;
var getProductsImageByIdParameters = /** @class */ (function (_super) {
    __extends(getProductsImageByIdParameters, _super);
    function getProductsImageByIdParameters(superThis, method, path, productId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{productId}', "" + productId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getProductsImageByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getProductsImageByIdParameters;
}(shopifySDKMethodParameters));
;
var deleteProductsImageByIdParameters = /** @class */ (function (_super) {
    __extends(deleteProductsImageByIdParameters, _super);
    function deleteProductsImageByIdParameters(superThis, method, path, productId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{productId}', "" + productId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteProductsImageByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteProductsImageByIdParameters;
}(shopifySDKMethodParameters));
;
var deleteProductsVariantByIdParameters = /** @class */ (function (_super) {
    __extends(deleteProductsVariantByIdParameters, _super);
    function deleteProductsVariantByIdParameters(superThis, method, path, productId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{productId}', "" + productId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteProductsVariantByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteProductsVariantByIdParameters;
}(shopifySDKMethodParameters));
;
var getQueryParameters = /** @class */ (function (_super) {
    __extends(getQueryParameters, _super);
    function getQueryParameters(superThis, method, path, q) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.queryParameters['q'] = q;
        return _this;
    }
    getQueryParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getQueryParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getQueryParameters.prototype.returnTotalCount = function (returnTotalCount) {
        this.queryParameters['returnTotalCount'] = returnTotalCount;
        return this;
    };
    getQueryParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getQueryParameters;
}(shopifySDKMethodParameters));
;
var getShippingZonesParameters = /** @class */ (function (_super) {
    __extends(getShippingZonesParameters, _super);
    function getShippingZonesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getShippingZonesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getShippingZonesParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getShippingZonesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getShippingZonesParameters;
}(shopifySDKMethodParameters));
;
var getShopsParameters = /** @class */ (function (_super) {
    __extends(getShopsParameters, _super);
    function getShopsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getShopsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getShopsParameters;
}(shopifySDKMethodParameters));
;
var createSmartCollectionParameters = /** @class */ (function (_super) {
    __extends(createSmartCollectionParameters, _super);
    function createSmartCollectionParameters(superThis, method, path, smartCollections) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = smartCollections;
        return _this;
    }
    createSmartCollectionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createSmartCollectionParameters;
}(shopifySDKMethodParameters));
;
var getSmartCollectionsParameters = /** @class */ (function (_super) {
    __extends(getSmartCollectionsParameters, _super);
    function getSmartCollectionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getSmartCollectionsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getSmartCollectionsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getSmartCollectionsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getSmartCollectionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getSmartCollectionsParameters;
}(shopifySDKMethodParameters));
;
var updateSmartCollectionByIdParameters = /** @class */ (function (_super) {
    __extends(updateSmartCollectionByIdParameters, _super);
    function updateSmartCollectionByIdParameters(superThis, method, path, id, smartCollections) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = smartCollections;
        return _this;
    }
    updateSmartCollectionByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateSmartCollectionByIdParameters;
}(shopifySDKMethodParameters));
;
var getSmartCollectionByIdParameters = /** @class */ (function (_super) {
    __extends(getSmartCollectionByIdParameters, _super);
    function getSmartCollectionByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getSmartCollectionByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getSmartCollectionByIdParameters;
}(shopifySDKMethodParameters));
;
var deleteSmartCollectionByIdParameters = /** @class */ (function (_super) {
    __extends(deleteSmartCollectionByIdParameters, _super);
    function deleteSmartCollectionByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteSmartCollectionByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteSmartCollectionByIdParameters;
}(shopifySDKMethodParameters));
;
var updateVariantByIdParameters = /** @class */ (function (_super) {
    __extends(updateVariantByIdParameters, _super);
    function updateVariantByIdParameters(superThis, method, path, id, variant) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = variant;
        return _this;
    }
    updateVariantByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateVariantByIdParameters;
}(shopifySDKMethodParameters));
;
var getVariantByIdParameters = /** @class */ (function (_super) {
    __extends(getVariantByIdParameters, _super);
    function getVariantByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getVariantByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getVariantByIdParameters;
}(shopifySDKMethodParameters));
;
var getByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getByObjectNameParameters, _super);
    function getByObjectNameParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getByObjectNameParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getByObjectNameParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getByObjectNameParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getByObjectNameParameters;
}(shopifySDKMethodParameters));
;
var createByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createByObjectNameParameters, _super);
    function createByObjectNameParameters(superThis, method, path, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    createByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createByObjectNameParameters;
}(shopifySDKMethodParameters));
;
var createObjectNameMetafieldParameters = /** @class */ (function (_super) {
    __extends(createObjectNameMetafieldParameters, _super);
    function createObjectNameMetafieldParameters(superThis, method, path, objectName, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    createObjectNameMetafieldParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createObjectNameMetafieldParameters;
}(shopifySDKMethodParameters));
;
var getObjectNameMetafieldsParameters = /** @class */ (function (_super) {
    __extends(getObjectNameMetafieldsParameters, _super);
    function getObjectNameMetafieldsParameters(superThis, method, path, objectName, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getObjectNameMetafieldsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectNameMetafieldsParameters;
}(shopifySDKMethodParameters));
;
var getObjectNameMetafieldsCountParameters = /** @class */ (function (_super) {
    __extends(getObjectNameMetafieldsCountParameters, _super);
    function getObjectNameMetafieldsCountParameters(superThis, method, path, objectName, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getObjectNameMetafieldsCountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectNameMetafieldsCountParameters;
}(shopifySDKMethodParameters));
;
var updateObjectNameMetafieldByMetafieldIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameMetafieldByMetafieldIdParameters, _super);
    function updateObjectNameMetafieldByMetafieldIdParameters(superThis, method, path, objectName, id, metafieldId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{metafieldId}', "" + metafieldId);
        _this._body = body;
        return _this;
    }
    updateObjectNameMetafieldByMetafieldIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateObjectNameMetafieldByMetafieldIdParameters;
}(shopifySDKMethodParameters));
;
var getObjectNameMetafieldByMetafieldIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameMetafieldByMetafieldIdParameters, _super);
    function getObjectNameMetafieldByMetafieldIdParameters(superThis, method, path, objectName, id, metafieldId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{metafieldId}', "" + metafieldId);
        return _this;
    }
    getObjectNameMetafieldByMetafieldIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectNameMetafieldByMetafieldIdParameters;
}(shopifySDKMethodParameters));
;
var deleteObjectNameMetafieldByMetafieldIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameMetafieldByMetafieldIdParameters, _super);
    function deleteObjectNameMetafieldByMetafieldIdParameters(superThis, method, path, objectName, id, metafieldId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{metafieldId}', "" + metafieldId);
        return _this;
    }
    deleteObjectNameMetafieldByMetafieldIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteObjectNameMetafieldByMetafieldIdParameters;
}(shopifySDKMethodParameters));
;
var deleteObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameByObjectIdParameters, _super);
    function deleteObjectNameByObjectIdParameters(superThis, method, path, objectName, objectId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        return _this;
    }
    deleteObjectNameByObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
;
var getObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByObjectIdParameters, _super);
    function getObjectNameByObjectIdParameters(superThis, method, path, objectName, objectId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        return _this;
    }
    getObjectNameByObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
;
var updateObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameByObjectIdParameters, _super);
    function updateObjectNameByObjectIdParameters(superThis, method, path, objectName, objectId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this._body = body;
        return _this;
    }
    updateObjectNameByObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
;
var replaceObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(replaceObjectNameByObjectIdParameters, _super);
    function replaceObjectNameByObjectIdParameters(superThis, method, path, objectName, objectId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this._body = body;
        return _this;
    }
    replaceObjectNameByObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceObjectNameByObjectIdParameters;
}(shopifySDKMethodParameters));
;
var getObjectNameByChildObjectNameParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByChildObjectNameParameters, _super);
    function getObjectNameByChildObjectNameParameters(superThis, method, path, objectName, objectId, childObjectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this.path = _this.path.replace('{childObjectName}', "" + childObjectName);
        return _this;
    }
    getObjectNameByChildObjectNameParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getObjectNameByChildObjectNameParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getObjectNameByChildObjectNameParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getObjectNameByChildObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectNameByChildObjectNameParameters;
}(shopifySDKMethodParameters));
;
var createObjectNameByChildObjectNameParameters = /** @class */ (function (_super) {
    __extends(createObjectNameByChildObjectNameParameters, _super);
    function createObjectNameByChildObjectNameParameters(superThis, method, path, objectName, objectId, childObjectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this.path = _this.path.replace('{childObjectName}', "" + childObjectName);
        _this._body = body;
        return _this;
    }
    createObjectNameByChildObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createObjectNameByChildObjectNameParameters;
}(shopifySDKMethodParameters));
;
var deleteObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameByChildObjectIdParameters, _super);
    function deleteObjectNameByChildObjectIdParameters(superThis, method, path, objectName, childObjectName, objectId, childObjectId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{childObjectName}', "" + childObjectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this.path = _this.path.replace('{childObjectId}', "" + childObjectId);
        return _this;
    }
    deleteObjectNameByChildObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
;
var getObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByChildObjectIdParameters, _super);
    function getObjectNameByChildObjectIdParameters(superThis, method, path, objectName, childObjectName, objectId, childObjectId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{childObjectName}', "" + childObjectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this.path = _this.path.replace('{childObjectId}', "" + childObjectId);
        return _this;
    }
    getObjectNameByChildObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
;
var updateObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameByChildObjectIdParameters, _super);
    function updateObjectNameByChildObjectIdParameters(superThis, method, path, objectName, childObjectName, objectId, childObjectId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{childObjectName}', "" + childObjectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this.path = _this.path.replace('{childObjectId}', "" + childObjectId);
        _this._body = body;
        return _this;
    }
    updateObjectNameByChildObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
;
var replaceObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(replaceObjectNameByChildObjectIdParameters, _super);
    function replaceObjectNameByChildObjectIdParameters(superThis, method, path, objectName, childObjectName, objectId, childObjectId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this.path = _this.path.replace('{childObjectName}', "" + childObjectName);
        _this.path = _this.path.replace('{objectId}', "" + objectId);
        _this.path = _this.path.replace('{childObjectId}', "" + childObjectId);
        _this._body = body;
        return _this;
    }
    replaceObjectNameByChildObjectIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceObjectNameByChildObjectIdParameters;
}(shopifySDKMethodParameters));
;
/**
 *
 * @class shopifySDK
 * @param {(string)} [domainOrOptions] - The project domain.
 */
var shopifySDK = /** @class */ (function () {
    function shopifySDK(baseUrl, authorizationHeader, logger) {
        this.domain = "https://console.cloud-elements.com/elements/api-v2/hubs/ecommerce";
        this.logger = {
            log: function (msg) { return console.log(msg); }
        };
        this.errorHandlers = [];
        this.authorizationHeader = null;
        if (baseUrl) {
            this.domain = baseUrl + "/elements/api-v2";
        }
        if (logger) {
            this.logger = logger;
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }
    shopifySDK.prototype.getDomain = function () {
        return this.domain;
    };
    shopifySDK.prototype.addErrorHandler = function (handler) {
        this.errorHandlers.push(handler);
    };
    shopifySDK.prototype.post = function (path, body, headers, queryParameters, form) {
        return this.request('POST', path, body, headers, queryParameters, form);
    };
    shopifySDK.prototype.put = function (path, body, headers, queryParameters, form) {
        return this.request('PUT', path, body, headers, queryParameters, form);
    };
    shopifySDK.prototype.patch = function (path, body, headers, queryParameters, form) {
        return this.request('PATCH', path, body, headers, queryParameters, form);
    };
    shopifySDK.prototype["delete"] = function (path, body, headers, queryParameters, form) {
        return this.request('DELETE', path, body, headers, queryParameters, form);
    };
    shopifySDK.prototype.get = function (path, body, headers, queryParameters, form) {
        return this.request('GET', path, body, headers, queryParameters, form);
    };
    shopifySDK.prototype.request = function (method, path, body, headers, queryParameters, form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!body) {
                body = {};
            }
            if (!headers) {
                headers = {};
            }
            if (!queryParameters) {
                queryParameters = {};
            }
            if (!form) {
                form = {};
            }
            if (_this.authorizationHeader && _this.authorizationHeader.length > 0) {
                headers.authorization = _this.authorizationHeader;
            }
            var url = _this.domain + path;
            if (_this.logger) {
                _this.logger.log("Call " + method + " " + url);
            }
            var req = request(method, url).query(queryParameters);
            Object.keys(headers).forEach(function (key) {
                req.set(key, headers[key]);
            });
            if (body) {
                req.send(body);
            }
            if (typeof (body) === 'object' && !(body.constructor.name === 'Buffer')) {
                req.set('Content-Type', 'application/json');
            }
            if (Object.keys(form).length > 0) {
                req.type('form');
                req.send(form);
            }
            req.end(function (error, response) {
                if (error || !response.ok) {
                    reject(error);
                    _this.errorHandlers.forEach(function (handler) { return handler(error); });
                }
                else {
                    resolve(response);
                }
            });
        });
    };
    /**
     * Retrieve abandoned checkouts from Shopify.
     * @method
     * @name shopifySDK#getAbandonedCheckouts
     */
    shopifySDK.prototype.getAbandonedCheckouts = function () {
        return new getAbandonedCheckoutsParameters(this, 'GET', '/abandoned-checkouts');
    };
    /**
     * Create an asynchronous bulk query job.
     * @method
     * @name shopifySDK#createBulkQuery
     * @param {string} q - The CEQL query. When this parameter is omitted, all objects of the given type are returned via the bulk job. Endpoint limiters may still apply.
     */
    shopifySDK.prototype.createBulkQuery = function (q) {
        return new createBulkQueryParameters(this, 'POST', '/bulk/query', q);
    };
    /**
     * <span class='betaAPI'>beta</span> Cancel an asynchronous bulk query job.
     * @method
     * @name shopifySDK#replaceBulkCancel
     * @param {string} id - The ID of the bulk job to cancel.
     */
    shopifySDK.prototype.replaceBulkCancel = function (id) {
        return new replaceBulkCancelParameters(this, 'PUT', '/bulk/{id}/cancel', id);
    };
    /**
     * <span class='betaAPI'>beta</span> Retrieve the errors of a bulk job.
     * @method
     * @name shopifySDK#getBulkErrors
     * @param {string} id - The ID of the bulk job to retrieve its errors.
     */
    shopifySDK.prototype.getBulkErrors = function (id) {
        return new getBulkErrorsParameters(this, 'GET', '/bulk/{id}/errors', id);
    };
    /**
     * Retrieve the status of a bulk job.
     * @method
     * @name shopifySDK#getBulkStatus
     * @param {string} id - The ID of the bulk job to retrieve its status.
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
     */
    shopifySDK.prototype.getBulkByObjectName = function (id, objectName) {
        return new getBulkByObjectNameParameters(this, 'GET', '/bulk/{id}/{objectName}', id, objectName);
    };
    /**
     * <span class='betaAPI'>beta</span> Upload a file of objects to be bulk uploaded to the provider.
     * @method
     * @name shopifySDK#createBulkByObjectName
     * @param {string} objectName - The name of the object for which data needs to be uploaded.
     */
    shopifySDK.prototype.createBulkByObjectName = function (objectName) {
        return new createBulkByObjectNameParameters(this, 'POST', '/bulk/{objectName}', objectName);
    };
    /**
     * Add a product to a collection
     * @method
     * @name shopifySDK#createCollect
     * @param {} collects - The body of the collect
     */
    shopifySDK.prototype.createCollect = function (collects) {
        return new createCollectParameters(this, 'POST', '/collects', collects);
    };
    /**
     * List all collects or only those for specific products or collections
     * @method
     * @name shopifySDK#getCollects
     */
    shopifySDK.prototype.getCollects = function () {
        return new getCollectsParameters(this, 'GET', '/collects');
    };
    /**
     * Receive a count of all Collects
     * @method
     * @name shopifySDK#getCollectsCount
     */
    shopifySDK.prototype.getCollectsCount = function () {
        return new getCollectsCountParameters(this, 'GET', '/collects-count');
    };
    /**
     * Get the collect with a certain id, or for a given product and collection
     * @method
     * @name shopifySDK#getCollectByCollectId
     * @param {string} collectId - ID of the collect
     */
    shopifySDK.prototype.getCollectByCollectId = function (collectId) {
        return new getCollectByCollectIdParameters(this, 'GET', '/collects/{collectId}', collectId);
    };
    /**
     * Remove a product from a collection
     * @method
     * @name shopifySDK#deleteCollectByCollectId
     * @param {string} collectId - ID of the collect
     */
    shopifySDK.prototype.deleteCollectByCollectId = function (collectId) {
        return new deleteCollectByCollectIdParameters(this, 'DELETE', '/collects/{collectId}', collectId);
    };
    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountries
     */
    shopifySDK.prototype.getCountries = function () {
        return new getCountriesParameters(this, 'GET', '/countries');
    };
    /**
     * List all countries
     * @method
     * @name shopifySDK#getCountryByCountryId
     * @param {string} countryId - ID of the country
     */
    shopifySDK.prototype.getCountryByCountryId = function (countryId) {
        return new getCountryByCountryIdParameters(this, 'GET', '/countries/{countryId}', countryId);
    };
    /**
     * Create a new custom collection
     * @method
     * @name shopifySDK#createCustomCollection
     * @param {} customCollections - The custom-collections object
     */
    shopifySDK.prototype.createCustomCollection = function (customCollections) {
        return new createCustomCollectionParameters(this, 'POST', '/custom-collections', customCollections);
    };
    /**
     * Get a list of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollections
     */
    shopifySDK.prototype.getCustomCollections = function () {
        return new getCustomCollectionsParameters(this, 'GET', '/custom-collections');
    };
    /**
     * Get a count of all custom collections that contain a given product
     * @method
     * @name shopifySDK#getCustomCollectionsCount
     */
    shopifySDK.prototype.getCustomCollectionsCount = function () {
        return new getCustomCollectionsCountParameters(this, 'GET', '/custom-collections-count');
    };
    /**
     * Update an existing custom collection
     * @method
     * @name shopifySDK#updateCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections that needs to be updated
     * @param {} customCollections - The custom-collections object that needs to be updated
     */
    shopifySDK.prototype.updateCustomCollectionByCustomCollectionId = function (customCollectionId, customCollections) {
        return new updateCustomCollectionByCustomCollectionIdParameters(this, 'PATCH', '/custom-collections/{customCollectionId}', customCollectionId, customCollections);
    };
    /**
     * Get a single custom collection
     * @method
     * @name shopifySDK#getCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom collection
     */
    shopifySDK.prototype.getCustomCollectionByCustomCollectionId = function (customCollectionId) {
        return new getCustomCollectionByCustomCollectionIdParameters(this, 'GET', '/custom-collections/{customCollectionId}', customCollectionId);
    };
    /**
     * Remove a custom collection from the database
     * @method
     * @name shopifySDK#deleteCustomCollectionByCustomCollectionId
     * @param {string} customCollectionId - ID of the custom-collections
     */
    shopifySDK.prototype.deleteCustomCollectionByCustomCollectionId = function (customCollectionId) {
        return new deleteCustomCollectionByCustomCollectionIdParameters(this, 'DELETE', '/custom-collections/{customCollectionId}', customCollectionId);
    };
    /**
     * Find customers in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getCustomers
     */
    shopifySDK.prototype.getCustomers = function () {
        return new getCustomersParameters(this, 'GET', '/customers');
    };
    /**
     * Create a new customer in Shopify.
     * @method
     * @name shopifySDK#createCustomer
     * @param {} customer - The Customer object to be created.
     */
    shopifySDK.prototype.createCustomer = function (customer) {
        return new createCustomerParameters(this, 'POST', '/customers', customer);
    };
    /**
     * Creates a new address for a customer
     * @method
     * @name shopifySDK#createCustomerAddresse
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {} address - Body of the address
     */
    shopifySDK.prototype.createCustomerAddresse = function (customerId, address) {
        return new createCustomerAddresseParameters(this, 'POST', '/customers/{customerId}/addresses', customerId, address);
    };
    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresses
     * @param {string} customerId - The ID of the customer to get the address
     */
    shopifySDK.prototype.getCustomersAddresses = function (customerId) {
        return new getCustomersAddressesParameters(this, 'GET', '/customers/{customerId}/addresses', customerId);
    };
    /**
     * Creates a new address for a customer
     * @method
     * @name shopifySDK#updateCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer for which address is to be added
     * @param {string} addressId - ID of the address
     * @param {} address - Body of the address
     */
    shopifySDK.prototype.updateCustomersAddresseByAddressId = function (customerId, addressId, address) {
        return new updateCustomersAddresseByAddressIdParameters(this, 'PATCH', '/customers/{customerId}/addresses/{addressId}', customerId, addressId, address);
    };
    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     */
    shopifySDK.prototype.getCustomersAddresseByAddressId = function (customerId, addressId) {
        return new getCustomersAddresseByAddressIdParameters(this, 'GET', '/customers/{customerId}/addresses/{addressId}', customerId, addressId);
    };
    /**
     * Removes an address from the customers address list
     * @method
     * @name shopifySDK#deleteCustomersAddresseByAddressId
     * @param {string} customerId - ID of the customer
     * @param {string} addressId - The ID of the address for a customer
     */
    shopifySDK.prototype.deleteCustomersAddresseByAddressId = function (customerId, addressId) {
        return new deleteCustomersAddresseByAddressIdParameters(this, 'DELETE', '/customers/{customerId}/addresses/{addressId}', customerId, addressId);
    };
    /**
     * Delete a customer associated with a given ID from Shopify. Specifying a customer ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteCustomerById
     * @param {string} id - The ID of the customer to delete from Shopify.
     */
    shopifySDK.prototype.deleteCustomerById = function (id) {
        return new deleteCustomerByIdParameters(this, 'DELETE', '/customers/{id}', id);
    };
    /**
     * Retrieve a customer associated with a given ID from Shopify. Specifying an ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getCustomerById
     * @param {string} id - The ID of the customer to retrieve from Shopify.
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
     */
    shopifySDK.prototype.updateCustomerById = function (id, customer) {
        return new updateCustomerByIdParameters(this, 'PATCH', '/customers/{id}', id, customer);
    };
    /**
     * Find abandoned checkouts for the customer associated with a given ID. If the customer does not exist, an error response will be returned. If no abandoned checkouts are found in the given customer then an empty array will be returned.
     * @method
     * @name shopifySDK#getCustomersAbandonedCheckouts
     * @param {string} id - The ID of the customer to get abandoned checkouts from in Shopify.
     */
    shopifySDK.prototype.getCustomersAbandonedCheckouts = function (id) {
        return new getCustomersAbandonedCheckoutsParameters(this, 'GET', '/customers/{id}/abandoned-checkouts', id);
    };
    /**
     * Find orders associated with a given customer ID. If the customer does not exist, an error response will be returned. If no orders are found in the given customer then an empty array will be returned.
     * @method
     * @name shopifySDK#getCustomersOrders
     * @param {string} id - The ID of the customer to get orders from in Shopify.
     */
    shopifySDK.prototype.getCustomersOrders = function (id) {
        return new getCustomersOrdersParameters(this, 'GET', '/customers/{id}/orders', id);
    };
    /**
     * Retrieve a discount code by name
     * @method
     * @name shopifySDK#getDiscountCodeByCode
     * @param {string} code - Name of the discount code
     */
    shopifySDK.prototype.getDiscountCodeByCode = function (code) {
        return new getDiscountCodeByCodeParameters(this, 'GET', '/discount-codes/{code}', code);
    };
    /**
     * Search for InventoryItems
     * @method
     * @name shopifySDK#getInventoryItems
     * @param {string} where - Show only certain inventory items, specified by a comma-seperated list of IDs. For example, <i> ids='2517889862,2518523974' </i>
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
     */
    shopifySDK.prototype.updateInventoryItemById = function (id, body) {
        return new updateInventoryItemByIdParameters(this, 'PATCH', '/inventory-items/{id}', id, body);
    };
    /**
     * Search for Locations
     * @method
     * @name shopifySDK#getLocations
     */
    shopifySDK.prototype.getLocations = function () {
        return new getLocationsParameters(this, 'GET', '/locations');
    };
    /**
     * Update an InventoryLevel
     * @method
     * @name shopifySDK#updateLocationsInventoryItemsInventoryLevels
     * @param {string} id - The Location ID
     * @param {string} inventoryItemId - The InventoryItem ID
     * @param {} body - The InventoryLevel body
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
     */
    shopifySDK.prototype.createLocationInventoryItemInventoryLevel = function (id, inventoryItemId) {
        return new createLocationInventoryItemInventoryLevelParameters(this, 'POST', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId);
    };
    /**
     * Search for InventoryLevels
     * @method
     * @name shopifySDK#getLocationsInventoryItemsInventoryLevels
     * @param {string} id - The comma separated list of Location IDs
     * @param {string} inventoryItemId - The comma separated list of InventoryItem IDs
     */
    shopifySDK.prototype.getLocationsInventoryItemsInventoryLevels = function (id, inventoryItemId) {
        return new getLocationsInventoryItemsInventoryLevelsParameters(this, 'GET', '/locations/{id}/inventory-items/{inventoryItemId}/inventory-levels', id, inventoryItemId);
    };
    /**
     * Search for InventoryLevels of a location
     * @method
     * @name shopifySDK#getLocationsInventoryLevels
     * @param {string} id - The Location ID
     */
    shopifySDK.prototype.getLocationsInventoryLevels = function (id) {
        return new getLocationsInventoryLevelsParameters(this, 'GET', '/locations/{id}/inventory-levels', id);
    };
    /**
     * Create a new metafield for a store
     * @method
     * @name shopifySDK#createMetafield
     * @param {} body - The metafields object
     */
    shopifySDK.prototype.createMetafield = function (body) {
        return new createMetafieldParameters(this, 'POST', '/metafields', body);
    };
    /**
     * Get metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafields
     */
    shopifySDK.prototype.getMetafields = function () {
        return new getMetafieldsParameters(this, 'GET', '/metafields');
    };
    /**
     * Get a count of metafields that belong to a store
     * @method
     * @name shopifySDK#getMetafieldsCount
     */
    shopifySDK.prototype.getMetafieldsCount = function () {
        return new getMetafieldsCountParameters(this, 'GET', '/metafields-count');
    };
    /**
     * Update a store metafield
     * @method
     * @name shopifySDK#updateMetafieldById
     * @param {string} id - ID of the metafield
     * @param {} body - The metafields object
     */
    shopifySDK.prototype.updateMetafieldById = function (id, body) {
        return new updateMetafieldByIdParameters(this, 'PATCH', '/metafields/{id}', id, body);
    };
    /**
     * Get a single store metafield by its ID
     * @method
     * @name shopifySDK#getMetafieldById
     * @param {string} id - The ID of metafields
     */
    shopifySDK.prototype.getMetafieldById = function (id) {
        return new getMetafieldByIdParameters(this, 'GET', '/metafields/{id}', id);
    };
    /**
     * Delete a store metafield
     * @method
     * @name shopifySDK#deleteMetafieldById
     * @param {string} id - ID of the metafield
     */
    shopifySDK.prototype.deleteMetafieldById = function (id) {
        return new deleteMetafieldByIdParameters(this, 'DELETE', '/metafields/{id}', id);
    };
    /**
     * Get a list of all the available objects.
     * @method
     * @name shopifySDK#getObjects
     */
    shopifySDK.prototype.getObjects = function () {
        return new getObjectsParameters(this, 'GET', '/objects');
    };
    /**
     * Get swagger docs for an object.
     * @method
     * @name shopifySDK#getObjectsObjectNameDocs
     * @param {string} objectName - The name of the object
     */
    shopifySDK.prototype.getObjectsObjectNameDocs = function (objectName) {
        return new getObjectsObjectNameDocsParameters(this, 'GET', '/objects/{objectName}/docs', objectName);
    };
    /**
     * Get a list of all the field for an object.
     * @method
     * @name shopifySDK#getObjectsObjectNameMetadata
     * @param {string} objectName - The name of the object
     */
    shopifySDK.prototype.getObjectsObjectNameMetadata = function (objectName) {
        return new getObjectsObjectNameMetadataParameters(this, 'GET', '/objects/{objectName}/metadata', objectName);
    };
    /**
     * Find orders in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getOrders
     */
    shopifySDK.prototype.getOrders = function () {
        return new getOrdersParameters(this, 'GET', '/orders');
    };
    /**
     * Create a new order in Shopify.
     * @method
     * @name shopifySDK#createOrder
     * @param {} order - The Order object to be created.
     */
    shopifySDK.prototype.createOrder = function (order) {
        return new createOrderParameters(this, 'POST', '/orders', order);
    };
    /**
     * Delete an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteOrderById
     * @param {string} id - The ID of the order to delete from Shopify.
     */
    shopifySDK.prototype.deleteOrderById = function (id) {
        return new deleteOrderByIdParameters(this, 'DELETE', '/orders/{id}', id);
    };
    /**
     * Retrieve an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getOrderById
     * @param {string} id - The ID of the order to retrieve from Shopify.
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
     */
    shopifySDK.prototype.updateOrderById = function (id, order) {
        return new updateOrderByIdParameters(this, 'PATCH', '/orders/{id}', id, order);
    };
    /**
     * Creates a fulfillment for the specified order and line items
     * @method
     * @name shopifySDK#createOrderFulfillment
     * @param {string} orderId - ID of the order
     * @param {} fulfillment - Body of the fulfillment
     */
    shopifySDK.prototype.createOrderFulfillment = function (orderId, fulfillment) {
        return new createOrderFulfillmentParameters(this, 'POST', '/orders/{orderId}/fulfillments', orderId, fulfillment);
    };
    /**
     * Get a list of all fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillments
     * @param {string} orderId - ID of the order
     */
    shopifySDK.prototype.getOrdersFulfillments = function (orderId) {
        return new getOrdersFulfillmentsParameters(this, 'GET', '/orders/{orderId}/fulfillments', orderId);
    };
    /**
     * Count all the total number of fulfillments for an order
     * @method
     * @name shopifySDK#getOrdersFulfillmentsCount
     * @param {string} orderId - ID of the order
     */
    shopifySDK.prototype.getOrdersFulfillmentsCount = function (orderId) {
        return new getOrdersFulfillmentsCountParameters(this, 'GET', '/orders/{orderId}/fulfillments-count', orderId);
    };
    /**
     * Update tracking number for a fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment to be updated
     */
    shopifySDK.prototype.updateOrdersFulfillmentByFulfillmentId = function (orderId, fulfillmentId, body) {
        return new updateOrdersFulfillmentByFulfillmentIdParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}', orderId, fulfillmentId, body);
    };
    /**
     * Get the representation of a specific fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentByFulfillmentId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     */
    shopifySDK.prototype.getOrdersFulfillmentByFulfillmentId = function (orderId, fulfillmentId) {
        return new getOrdersFulfillmentByFulfillmentIdParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}', orderId, fulfillmentId);
    };
    /**
     * Create a fulfillment event
     * @method
     * @name shopifySDK#createOrderFulfillmentFulfillmentEvent
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {} body - Body of the fulfillment event
     */
    shopifySDK.prototype.createOrderFulfillmentFulfillmentEvent = function (orderId, fulfillmentId, body) {
        return new createOrderFulfillmentFulfillmentEventParameters(this, 'POST', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events', orderId, fulfillmentId, body);
    };
    /**
     * Get a list of all fulfillment events for a fulfillment
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEvents
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     */
    shopifySDK.prototype.getOrdersFulfillmentsFulfillmentEvents = function (orderId, fulfillmentId) {
        return new getOrdersFulfillmentsFulfillmentEventsParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events', orderId, fulfillmentId);
    };
    /**
     * Get a fulfillment event
     * @method
     * @name shopifySDK#getOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     */
    shopifySDK.prototype.getOrdersFulfillmentsFulfillmentEventByEventId = function (orderId, fulfillmentId, eventId) {
        return new getOrdersFulfillmentsFulfillmentEventByEventIdParameters(this, 'GET', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}', orderId, fulfillmentId, eventId);
    };
    /**
     * Delete a fulfillment event
     * @method
     * @name shopifySDK#deleteOrdersFulfillmentsFulfillmentEventByEventId
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
     * @param {string} eventId - ID of the event
     */
    shopifySDK.prototype.deleteOrdersFulfillmentsFulfillmentEventByEventId = function (orderId, fulfillmentId, eventId) {
        return new deleteOrdersFulfillmentsFulfillmentEventByEventIdParameters(this, 'DELETE', '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}', orderId, fulfillmentId, eventId);
    };
    /**
     * Cancel a pending fulfillment
     * @method
     * @name shopifySDK#updateOrdersFulfillmentsStatusCancel
     * @param {string} orderId - ID of the order
     * @param {string} fulfillmentId - ID of the fulfillment
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
     */
    shopifySDK.prototype.updateOrdersFulfillmentsStatusComplete = function (orderId, fulfillmentId) {
        return new updateOrdersFulfillmentsStatusCompleteParameters(this, 'PATCH', '/orders/{orderId}/fulfillments/{fulfillmentId}/status-complete', orderId, fulfillmentId);
    };
    /**
     * Find payments in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getOrdersPayments
     * @param {string} orderId - The ID of the order to retrieve payments from in Shopify.
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
     */
    shopifySDK.prototype.createOrderPayment = function (orderId, body) {
        return new createOrderPaymentParameters(this, 'POST', '/orders/{orderId}/payments', orderId, body);
    };
    /**
     * Count all a given order’s money transfers
     * @method
     * @name shopifySDK#getOrdersPaymentsCount
     * @param {string} orderId - ID of the order
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
     */
    shopifySDK.prototype.getOrdersPaymentByPaymentId = function (orderId, paymentId) {
        return new getOrdersPaymentByPaymentIdParameters(this, 'GET', '/orders/{orderId}/payments/{paymentId}', orderId, paymentId);
    };
    /**
     * Create a refund for an existing order
     * @method
     * @name shopifySDK#createOrderRefund
     * @param {string} orderId - The order ID
     * @param {} refund - The refund
     */
    shopifySDK.prototype.createOrderRefund = function (orderId, refund) {
        return new createOrderRefundParameters(this, 'POST', '/orders/{orderId}/refunds', orderId, refund);
    };
    /**
     * Search for refunds for an order
     * @method
     * @name shopifySDK#getOrdersRefunds
     * @param {string} orderId - The order ID
     */
    shopifySDK.prototype.getOrdersRefunds = function (orderId) {
        return new getOrdersRefundsParameters(this, 'GET', '/orders/{orderId}/refunds', orderId);
    };
    /**
     * Calculate refund transactions based on line-items and shipping. The returned response can be used to create a refund
     * @method
     * @name shopifySDK#createOrderRefundsCalculate
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} refundCalculate - The body of the refund-calculate
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
     */
    shopifySDK.prototype.getOrdersRefundByRefundId = function (orderId, refundId) {
        return new getOrdersRefundByRefundIdParameters(this, 'GET', '/orders/{orderId}/refunds/{refundId}', orderId, refundId);
    };
    /**
     * Create a new Order Risk for an Order
     * @method
     * @name shopifySDK#createOrderRisk
     * @param {string} orderId - ID of the order for which order risk is to created
     * @param {} risk - The fraud risk to be created
     */
    shopifySDK.prototype.createOrderRisk = function (orderId, risk) {
        return new createOrderRiskParameters(this, 'POST', '/orders/{orderId}/risks', orderId, risk);
    };
    /**
     * Get a list of all Order Risks
     * @method
     * @name shopifySDK#getOrdersRisks
     * @param {string} orderId - Id of the order
     */
    shopifySDK.prototype.getOrdersRisks = function (orderId) {
        return new getOrdersRisksParameters(this, 'GET', '/orders/{orderId}/risks', orderId);
    };
    /**
     * Update an Order Risk entry
     * @method
     * @name shopifySDK#updateOrdersRiskByRiskId
     * @param {string} orderId - The ID of the order
     * @param {string} riskId - ID of the risk
     * @param {} risk - The fraud risk body to be updated
     */
    shopifySDK.prototype.updateOrdersRiskByRiskId = function (orderId, riskId, risk) {
        return new updateOrdersRiskByRiskIdParameters(this, 'PATCH', '/orders/{orderId}/risks/{riskId}', orderId, riskId, risk);
    };
    /**
     * Get a single Order Risk by its ID
     * @method
     * @name shopifySDK#getOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     */
    shopifySDK.prototype.getOrdersRiskByRiskId = function (orderId, riskId) {
        return new getOrdersRiskByRiskIdParameters(this, 'GET', '/orders/{orderId}/risks/{riskId}', orderId, riskId);
    };
    /**
     * Delete an order risk entry
     * @method
     * @name shopifySDK#deleteOrdersRiskByRiskId
     * @param {string} orderId - ID of the order
     * @param {string} riskId - ID of the risk
     */
    shopifySDK.prototype.deleteOrdersRiskByRiskId = function (orderId, riskId) {
        return new deleteOrdersRiskByRiskIdParameters(this, 'DELETE', '/orders/{orderId}/risks/{riskId}', orderId, riskId);
    };
    /**
     * Ping the Element to confirm that the Hub Element has a heartbeat.  If the Element does not have a heartbeat, an error message will be returned.
     * @method
     * @name shopifySDK#getPing
     */
    shopifySDK.prototype.getPing = function () {
        return new getPingParameters(this, 'GET', '/ping');
    };
    /**
     * Add a price rule
     * @method
     * @name shopifySDK#createPriceRule
     * @param {} priceRule - The body of the price rule
     */
    shopifySDK.prototype.createPriceRule = function (priceRule) {
        return new createPriceRuleParameters(this, 'POST', '/price-rules', priceRule);
    };
    /**
     * List all price rules
     * @method
     * @name shopifySDK#getPriceRules
     */
    shopifySDK.prototype.getPriceRules = function () {
        return new getPriceRulesParameters(this, 'GET', '/price-rules');
    };
    /**
     * Get a price rule with a certain id
     * @method
     * @name shopifySDK#getPriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     */
    shopifySDK.prototype.getPriceRuleByPriceRuleId = function (priceRuleId) {
        return new getPriceRuleByPriceRuleIdParameters(this, 'GET', '/price-rules/{priceRuleId}', priceRuleId);
    };
    /**
     * Remove a price rule
     * @method
     * @name shopifySDK#deletePriceRuleByPriceRuleId
     * @param {string} priceRuleId - ID of the price rule
     */
    shopifySDK.prototype.deletePriceRuleByPriceRuleId = function (priceRuleId) {
        return new deletePriceRuleByPriceRuleIdParameters(this, 'DELETE', '/price-rules/{priceRuleId}', priceRuleId);
    };
    /**
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#createPriceRuleDiscountCode
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {} discountCode - Discount code to be created
     */
    shopifySDK.prototype.createPriceRuleDiscountCode = function (priceRuleId, discountCode) {
        return new createPriceRuleDiscountCodeParameters(this, 'POST', '/price-rules/{priceRuleId}/discount-codes', priceRuleId, discountCode);
    };
    /**
     * Get all discount codes for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodes
     * @param {string} priceRuleId - ID of the price rule to receive discount codes for
     */
    shopifySDK.prototype.getPriceRulesDiscountCodes = function (priceRuleId) {
        return new getPriceRulesDiscountCodesParameters(this, 'GET', '/price-rules/{priceRuleId}/discount-codes', priceRuleId);
    };
    /**
     * Get all discount code for a given price rule
     * @method
     * @name shopifySDK#getPriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discountCodeId
     */
    shopifySDK.prototype.getPriceRulesDiscountCodeByDiscountCodeId = function (priceRuleId, discountCodeId) {
        return new getPriceRulesDiscountCodeByDiscountCodeIdParameters(this, 'GET', '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}', priceRuleId, discountCodeId);
    };
    /**
     * Create a discount code for a given price rule
     * @method
     * @name shopifySDK#deletePriceRulesDiscountCodeByDiscountCodeId
     * @param {string} priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} discountCodeId - discount-code ID
     */
    shopifySDK.prototype.deletePriceRulesDiscountCodeByDiscountCodeId = function (priceRuleId, discountCodeId) {
        return new deletePriceRulesDiscountCodeByDiscountCodeIdParameters(this, 'DELETE', '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}', priceRuleId, discountCodeId);
    };
    /**
     * Find products in Shopify, using the provided CEQL search expression.
     * @method
     * @name shopifySDK#getProducts
     */
    shopifySDK.prototype.getProducts = function () {
        return new getProductsParameters(this, 'GET', '/products');
    };
    /**
     * Create a new product in Shopify.
     * @method
     * @name shopifySDK#createProduct
     * @param {} product - The Product object to be created.
     */
    shopifySDK.prototype.createProduct = function (product) {
        return new createProductParameters(this, 'POST', '/products', product);
    };
    /**
     * Delete a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error message.
     * @method
     * @name shopifySDK#deleteProductById
     * @param {string} id - The ID of the product to delete from Shopify.
     */
    shopifySDK.prototype.deleteProductById = function (id) {
        return new deleteProductByIdParameters(this, 'DELETE', '/products/{id}', id);
    };
    /**
     * Retrieve a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error response.
     * @method
     * @name shopifySDK#getProductById
     * @param {string} id - The ID of the product to retrieve from Shopify.
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
     */
    shopifySDK.prototype.updateProductById = function (id, product) {
        return new updateProductByIdParameters(this, 'PATCH', '/products/{id}', id, product);
    };
    /**
     * Create a varient
     * @method
     * @name shopifySDK#createProductVariant
     * @param {string} id - The product ID to create a variant for
     * @param {} variant - The variant to be created. See model for an example
     */
    shopifySDK.prototype.createProductVariant = function (id, variant) {
        return new createProductVariantParameters(this, 'POST', '/products/{id}/variants', id, variant);
    };
    /**
     * Get all variants for a given product
     * @method
     * @name shopifySDK#getProductsVariants
     * @param {string} id - The ID of the product to retrieve variants for
     */
    shopifySDK.prototype.getProductsVariants = function (id) {
        return new getProductsVariantsParameters(this, 'GET', '/products/{id}/variants', id);
    };
    /**
     * Create a new product image and attach it to product variants
     * @method
     * @name shopifySDK#createProductImage
     * @param {string} productId - The ID of the product to create an image for
     * @param {} image - The image to be uploaded
     */
    shopifySDK.prototype.createProductImage = function (productId, image) {
        return new createProductImageParameters(this, 'POST', '/products/{productId}/images', productId, image);
    };
    /**
     * Get a list of all images for a product
     * @method
     * @name shopifySDK#getProductsImages
     * @param {string} productId - The ID of the product to return images for
     */
    shopifySDK.prototype.getProductsImages = function (productId) {
        return new getProductsImagesParameters(this, 'GET', '/products/{productId}/images', productId);
    };
    /**
     * Modify an existing product image
     * @method
     * @name shopifySDK#updateProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the variant to update
     * @param {} image - The variant body to update
     */
    shopifySDK.prototype.updateProductsImageById = function (productId, id, image) {
        return new updateProductsImageByIdParameters(this, 'PATCH', '/products/{productId}/images/{id}', productId, id, image);
    };
    /**
     * Get a single product image by id
     * @method
     * @name shopifySDK#getProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to retrieve
     */
    shopifySDK.prototype.getProductsImageById = function (productId, id) {
        return new getProductsImageByIdParameters(this, 'GET', '/products/{productId}/images/{id}', productId, id);
    };
    /**
     * Delete a product image
     * @method
     * @name shopifySDK#deleteProductsImageById
     * @param {string} productId - The ID of the product
     * @param {string} id - The ID of the image to delete
     */
    shopifySDK.prototype.deleteProductsImageById = function (productId, id) {
        return new deleteProductsImageByIdParameters(this, 'DELETE', '/products/{productId}/images/{id}', productId, id);
    };
    /**
     * Delete a variant
     * @method
     * @name shopifySDK#deleteProductsVariantById
     * @param {string} productId - The ID of the product for delete a variant for
     * @param {string} id - The ID of the variant to delete
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
    */
    shopifySDK.prototype.getQuery = function (q) {
        return new getQueryParameters(this, 'GET', '/query', q);
    };
    /**
     * List all shipping zones
     * @method
     * @name shopifySDK#getShippingZones
     */
    shopifySDK.prototype.getShippingZones = function () {
        return new getShippingZonesParameters(this, 'GET', '/shipping-zones');
    };
    /**
     * Retrieve metadata for the current shop
     * @method
     * @name shopifySDK#getShops
     */
    shopifySDK.prototype.getShops = function () {
        return new getShopsParameters(this, 'GET', '/shops');
    };
    /**
     * Create a new  smart-collections
     * @method
     * @name shopifySDK#createSmartCollection
     * @param {} smartCollections - The smart-collections object
     */
    shopifySDK.prototype.createSmartCollection = function (smartCollections) {
        return new createSmartCollectionParameters(this, 'POST', '/smart-collections', smartCollections);
    };
    /**
     * Get a list of all smart collections
     * @method
     * @name shopifySDK#getSmartCollections
     */
    shopifySDK.prototype.getSmartCollections = function () {
        return new getSmartCollectionsParameters(this, 'GET', '/smart-collections');
    };
    /**
     * Update an existing smart-collection
     * @method
     * @name shopifySDK#updateSmartCollectionById
     * @param {string} id - The smart-collections ID
     * @param {} smartCollections - The smart-collections object
     */
    shopifySDK.prototype.updateSmartCollectionById = function (id, smartCollections) {
        return new updateSmartCollectionByIdParameters(this, 'PATCH', '/smart-collections/{id}', id, smartCollections);
    };
    /**
     * Retrieve a single smart collection
     * @method
     * @name shopifySDK#getSmartCollectionById
     * @param {string} id - The smart-collections ID
     */
    shopifySDK.prototype.getSmartCollectionById = function (id) {
        return new getSmartCollectionByIdParameters(this, 'GET', '/smart-collections/{id}', id);
    };
    /**
     * Remove a smart collection from the database
     * @method
     * @name shopifySDK#deleteSmartCollectionById
     * @param {string} id - The smart-collection ID
     */
    shopifySDK.prototype.deleteSmartCollectionById = function (id) {
        return new deleteSmartCollectionByIdParameters(this, 'DELETE', '/smart-collections/{id}', id);
    };
    /**
     * Update an existing product variant
     * @method
     * @name shopifySDK#updateVariantById
     * @param {string} id - The ID of the variant to update
     * @param {} variant - The variant body to update
     */
    shopifySDK.prototype.updateVariantById = function (id, variant) {
        return new updateVariantByIdParameters(this, 'PATCH', '/variants/{id}', id, variant);
    };
    /**
     * Retrieve a specific variant by ID
     * @method
     * @name shopifySDK#getVariantById
     * @param {string} id - The ID of the variant to retrieve
     */
    shopifySDK.prototype.getVariantById = function (id) {
        return new getVariantByIdParameters(this, 'GET', '/variants/{id}', id);
    };
    /**
     * Search for objects
     * @method
     * @name shopifySDK#getByObjectName
     * @param {string} objectName - The object name
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
     */
    shopifySDK.prototype.createByObjectName = function (objectName, body) {
        return new createByObjectNameParameters(this, 'POST', '/{objectName}', objectName, body);
    };
    /**
     * Create a new metafield for a resource
     * @method
     * @name shopifySDK#createObjectNameMetafield
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     * @param {} body - The body of the metafield for a resource
     */
    shopifySDK.prototype.createObjectNameMetafield = function (objectName, id, body) {
        return new createObjectNameMetafieldParameters(this, 'POST', '/{objectName}/{id}/metafields', objectName, id, body);
    };
    /**
     * Get a list of all the field for an object
     * @method
     * @name shopifySDK#getObjectNameMetafields
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     */
    shopifySDK.prototype.getObjectNameMetafields = function (objectName, id) {
        return new getObjectNameMetafieldsParameters(this, 'GET', '/{objectName}/{id}/metafields', objectName, id);
    };
    /**
     * Get a count of metafields that belong to a resource
     * @method
     * @name shopifySDK#getObjectNameMetafieldsCount
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of the resource
     */
    shopifySDK.prototype.getObjectNameMetafieldsCount = function (objectName, id) {
        return new getObjectNameMetafieldsCountParameters(this, 'GET', '/{objectName}/{id}/metafields-count', objectName, id);
    };
    /**
     * Update a resource metafield
     * @method
     * @name shopifySDK#updateObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     * @param {} body - The body of the metafield for a resource
     */
    shopifySDK.prototype.updateObjectNameMetafieldByMetafieldId = function (objectName, id, metafieldId, body) {
        return new updateObjectNameMetafieldByMetafieldIdParameters(this, 'PATCH', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId, body);
    };
    /**
     * Get a single resource metafield by its ID
     * @method
     * @name shopifySDK#getObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     */
    shopifySDK.prototype.getObjectNameMetafieldByMetafieldId = function (objectName, id, metafieldId) {
        return new getObjectNameMetafieldByMetafieldIdParameters(this, 'GET', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId);
    };
    /**
     * Delete a resource metafield
     * @method
     * @name shopifySDK#deleteObjectNameMetafieldByMetafieldId
     * @param {string} objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} id - ID of a resource
     * @param {string} metafieldId - ID of the metafield belonging to a resource
     */
    shopifySDK.prototype.deleteObjectNameMetafieldByMetafieldId = function (objectName, id, metafieldId) {
        return new deleteObjectNameMetafieldByMetafieldIdParameters(this, 'DELETE', '/{objectName}/{id}/metafields/{metafieldId}', objectName, id, metafieldId);
    };
    /**
     * Delete an {objectName}
     * @method
     * @name shopifySDK#deleteObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
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
     */
    shopifySDK.prototype.replaceObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId, body) {
        return new replaceObjectNameByChildObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    };
    return shopifySDK;
}());
exports.shopifySDK = shopifySDK;
