/*jshint -W069 */
/**
 * 
 * @class Shopify
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var Shopify = (function() {
    'use strict';

    var request = require('request');
    var Q = require('q');

    function Shopify(options) {
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://staging.cloud-elements.com/elements/api-v2/hubs/ecommerce';
        if (this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name Shopify#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    Shopify.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred) {
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {}
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });
    };

    /**
     * Retrieve abandoned checkouts from Shopify.
     * @method
     * @name Shopify#getAbandonedCheckouts
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     */
    Shopify.prototype.getAbandonedCheckouts = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/abandoned-checkouts';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create an asynchronous bulk query job.
     * @method
     * @name Shopify#createBulkQuery
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.elementsAsyncCallbackUrl - The Notification URL. We will post data to this URL with the status of the Job
     * @param {string} parameters.q - The CEQL query. When this parameter is omitted, all objects of the given type are returned via the bulk job. Endpoint limiters may still apply.
     * @param {string} parameters.lastRunDate - The last time this query was run. This is optional. You can also have this parameter in the query and leave this blank - optional eg. '2014-10-06T13:22:17-08:00'
     * @param {string} parameters.from - The created/updated date of the object to filter on - optional eg. '2014-10-06T13:22:17-08:00'
     * @param {string} parameters.to - The created/updated date of the object to filter on - optional eg. '2014-10-06T13:22:17-08:00'
     * @param {number} parameters.continueFromJobId - If this id is supplied the previous job will be continued from where it left off and continue to get all records to the time the new job was started. If this value is passed in - the query parameter is ignored
     */
    Shopify.prototype.createBulkQuery = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/bulk/query';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['elementsAsyncCallbackUrl'] !== undefined) {
            headers['Elements-Async-Callback-Url'] = parameters['elementsAsyncCallbackUrl'];
        }

        if (parameters['q'] !== undefined) {
            queryParameters['q'] = parameters['q'];
        }

        if (parameters['q'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: q'));
            return deferred.promise;
        }

        if (parameters['lastRunDate'] !== undefined) {
            queryParameters['lastRunDate'] = parameters['lastRunDate'];
        }

        if (parameters['from'] !== undefined) {
            queryParameters['from'] = parameters['from'];
        }

        if (parameters['to'] !== undefined) {
            queryParameters['to'] = parameters['to'];
        }

        if (parameters['continueFromJobId'] !== undefined) {
            queryParameters['continueFromJobId'] = parameters['continueFromJobId'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * <span class='betaAPI'>beta</span> Cancel an asynchronous bulk query job.
     * @method
     * @name Shopify#replaceBulkCancel
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the bulk job to cancel.
     */
    Shopify.prototype.replaceBulkCancel = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/bulk/{id}/cancel';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * <span class='betaAPI'>beta</span> Retrieve the errors of a bulk job.
     * @method
     * @name Shopify#getBulkErrors
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the bulk job to retrieve its errors.
     * @param {integer} parameters.page - The start page for pagination, which defaults to 1 if not supplied
     * @param {integer} parameters.pageSize - The page size for pagination, which defaults to 200 if not supplied
     * @param {string} parameters.nextPage - The Next page to get from set of bulk results
     */
    Shopify.prototype.getBulkErrors = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/bulk/{id}/errors';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['nextPage'] !== undefined) {
            queryParameters['nextPage'] = parameters['nextPage'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve the status of a bulk job.
     * @method
     * @name Shopify#getBulkStatus
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the bulk job to retrieve its status.
     */
    Shopify.prototype.getBulkStatus = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/bulk/{id}/status';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve the results of an asynchronous bulk query.
     * @method
     * @name Shopify#getBulkByObjectName
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the bulk job
     * @param {string} parameters.objectName - The name of the object
     */
    Shopify.prototype.getBulkByObjectName = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/bulk/{id}/{objectName}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers['Accept'] = ['application/json, text/csv'];

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * <span class='betaAPI'>beta</span> Upload a file of objects to be bulk uploaded to the provider.
     * @method
     * @name Shopify#createBulkByObjectName
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.elementsAsyncCallbackUrl - The Url to send the notification to when the Job is completed
     * @param {string} parameters.objectName - The name of the object for which data needs to be uploaded.
     * @param {string} parameters.metaData - Optional JSON MetaData that contains path or format, ex: {"path" : <path for the sub resource>, "format": <json/csv>}. path - is passed to the endpoint for bulk loading the data into a nested object. Optional JSON Metadata that contains identifierFieldName, action, listId or campaignId. The identifierField name is used for upserts and the optional fields like listId or campaignId. Example: {"listId":"1014","action":"upsert"}. If the Upload format is JSON pass metadata as {"format":"json"}.
     * @param {file} parameters.file - The file of objects to bulk load. If the JSON file upload, each JSON record should be in a single line
     */
    Shopify.prototype.createBulkByObjectName = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/bulk/{objectName}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers['Content-Type'] = ['multipart/form-data'];

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['elementsAsyncCallbackUrl'] !== undefined) {
            headers['Elements-Async-Callback-Url'] = parameters['elementsAsyncCallbackUrl'];
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        if (parameters['metaData'] !== undefined) {
            form['metaData'] = parameters['metaData'];
        }

        if (parameters['file'] !== undefined) {
            form['file'] = parameters['file'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Add a product to a collection
     * @method
     * @name Shopify#createCollect
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.collects - The body of the collect
     */
    Shopify.prototype.createCollect = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/collects';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['collects'] !== undefined) {
            body = parameters['collects'];
        }

        if (parameters['collects'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: collects'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * List all collects or only those for specific products or collections
     * @method
     * @name Shopify#getCollects
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for objects where name equals foo, the search expression will be <i>name='foo'</i>. When this parameter is omitted, all objects are returned in a paginated fashion.
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getCollects = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/collects';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Receive a count of all Collects
     * @method
     * @name Shopify#getCollectsCount
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     */
    Shopify.prototype.getCollectsCount = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/collects-count';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get the collect with a certain id, or for a given product and collection
     * @method
     * @name Shopify#getCollectByCollectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.collectId - ID of the collect
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for objects where name equals foo, the search expression will be <i>name='foo'</i>. When this parameter is omitted, all objects are returned in a paginated fashion.
     */
    Shopify.prototype.getCollectByCollectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/collects/{collectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{collectId}', parameters['collectId']);

        if (parameters['collectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: collectId'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Remove a product from a collection
     * @method
     * @name Shopify#deleteCollectByCollectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.collectId - ID of the collect
     */
    Shopify.prototype.deleteCollectByCollectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/collects/{collectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{collectId}', parameters['collectId']);

        if (parameters['collectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: collectId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * List all countries
     * @method
     * @name Shopify#getCountries
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.page - The page number of resources to retrieve
     * @param {integer} parameters.sinceId - Restrict results to after the specified ID
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     */
    Shopify.prototype.getCountries = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/countries';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['sinceId'] !== undefined) {
            queryParameters['since_id'] = parameters['sinceId'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * List all countries
     * @method
     * @name Shopify#getCountryByCountryId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.countryId - ID of the country
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getCountryByCountryId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/countries/{countryId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{countryId}', parameters['countryId']);

        if (parameters['countryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: countryId'));
            return deferred.promise;
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new custom collection
     * @method
     * @name Shopify#createCustomCollection
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.customCollections - The custom-collections object
     */
    Shopify.prototype.createCustomCollection = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/custom-collections';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['customCollections'] !== undefined) {
            body = parameters['customCollections'];
        }

        if (parameters['customCollections'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customCollections'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all custom collections that contain a given product
     * @method
     * @name Shopify#getCustomCollections
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.where - The CEQL search expression.
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getCustomCollections = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/custom-collections';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a count of all custom collections that contain a given product
     * @method
     * @name Shopify#getCustomCollectionsCount
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.where - The CEQL search expression.
     */
    Shopify.prototype.getCustomCollectionsCount = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/custom-collections-count';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an existing custom collection
     * @method
     * @name Shopify#updateCustomCollectionByCustomCollectionId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customCollectionId - ID of the custom-collections that needs to be updated
     * @param {} parameters.customCollections - The custom-collections object that needs to be updated
     */
    Shopify.prototype.updateCustomCollectionByCustomCollectionId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/custom-collections/{customCollectionId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customCollectionId}', parameters['customCollectionId']);

        if (parameters['customCollectionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customCollectionId'));
            return deferred.promise;
        }

        if (parameters['customCollections'] !== undefined) {
            body = parameters['customCollections'];
        }

        if (parameters['customCollections'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customCollections'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a single custom collection
     * @method
     * @name Shopify#getCustomCollectionByCustomCollectionId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customCollectionId - ID of the custom collection
     * @param {string} parameters.where - The CEQL search expression.
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getCustomCollectionByCustomCollectionId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/custom-collections/{customCollectionId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customCollectionId}', parameters['customCollectionId']);

        if (parameters['customCollectionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customCollectionId'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Remove a custom collection from the database
     * @method
     * @name Shopify#deleteCustomCollectionByCustomCollectionId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customCollectionId - ID of the custom-collections
     */
    Shopify.prototype.deleteCustomCollectionByCustomCollectionId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/custom-collections/{customCollectionId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customCollectionId}', parameters['customCollectionId']);

        if (parameters['customCollectionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customCollectionId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Find customers in Shopify, using the provided CEQL search expression.
     * @method
     * @name Shopify#getCustomers
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for customers with an address in the United States, the where parameter will be <i>country='United States'</i>. When this parameter is omitted, all customers are returned in a paginated fashion. Supported fields are those that are non-metadata. For instance, first_name is supported, but  last_order_id is not supported. It is possible to search by Customer ID as well, for example with <i>id='1234'</i>.
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     * @param {string} parameters.orderBy - Optionally return orders in a particular order. Current supported values are 'updated_at' and 'last_order_date'. By default this returns in ascending order, for descending order use 'updated_at desc'.
     * @param {boolean} parameters.returnTotalCount - Optionally return the total count of customers. Returned in response headers.
     */
    Shopify.prototype.getCustomers = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['orderBy'] !== undefined) {
            queryParameters['orderBy'] = parameters['orderBy'];
        }

        if (parameters['returnTotalCount'] !== undefined) {
            queryParameters['returnTotalCount'] = parameters['returnTotalCount'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new customer in Shopify.
     * @method
     * @name Shopify#createCustomer
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.customer - The Customer object to be created.
     */
    Shopify.prototype.createCustomer = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['customer'] !== undefined) {
            body = parameters['customer'];
        }

        if (parameters['customer'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customer'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Creates a new address for a customer
     * @method
     * @name Shopify#createCustomerAddresse
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customerId - ID of the customer for which address is to be added
     * @param {} parameters.address - Body of the address
     */
    Shopify.prototype.createCustomerAddresse = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{customerId}/addresses';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters['address'] !== undefined) {
            body = parameters['address'];
        }

        if (parameters['address'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: address'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get all variants for a given product
     * @method
     * @name Shopify#getCustomersAddresses
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customerId - The ID of the customer to get the address
     * @param {integer} parameters.pageSize - The size of the page to return (Maximum: 250)
     * @param {integer} parameters.page - The page of results to return
     */
    Shopify.prototype.getCustomersAddresses = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{customerId}/addresses';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Creates a new address for a customer
     * @method
     * @name Shopify#updateCustomersAddresseByAddressId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customerId - ID of the customer for which address is to be added
     * @param {string} parameters.addressId - ID of the address
     * @param {} parameters.address - Body of the address
     */
    Shopify.prototype.updateCustomersAddresseByAddressId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{customerId}/addresses/{addressId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        path = path.replace('{addressId}', parameters['addressId']);

        if (parameters['addressId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: addressId'));
            return deferred.promise;
        }

        if (parameters['address'] !== undefined) {
            body = parameters['address'];
        }

        if (parameters['address'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: address'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get all variants for a given product
     * @method
     * @name Shopify#getCustomersAddresseByAddressId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customerId - ID of the customer
     * @param {string} parameters.addressId - The ID of the address for a customer
     */
    Shopify.prototype.getCustomersAddresseByAddressId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{customerId}/addresses/{addressId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        path = path.replace('{addressId}', parameters['addressId']);

        if (parameters['addressId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: addressId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Removes an address from the customers address list
     * @method
     * @name Shopify#deleteCustomersAddresseByAddressId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.customerId - ID of the customer
     * @param {string} parameters.addressId - The ID of the address for a customer
     */
    Shopify.prototype.deleteCustomersAddresseByAddressId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{customerId}/addresses/{addressId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        path = path.replace('{addressId}', parameters['addressId']);

        if (parameters['addressId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: addressId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete a customer associated with a given ID from Shopify. Specifying a customer ID that does not exist will result in an error message.
     * @method
     * @name Shopify#deleteCustomerById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the customer to delete from Shopify.
     */
    Shopify.prototype.deleteCustomerById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve a customer associated with a given ID from Shopify. Specifying an ID that does not exist will result in an error response.
     * @method
     * @name Shopify#getCustomerById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the customer to retrieve from Shopify.
     */
    Shopify.prototype.getCustomerById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update a customer associated with a given ID in Shopify. The update API uses the PATCH HTTP verb, so only those fields provided in the customer object will be updated, and those fields not provided will be left alone. Providing an ID that does not exist will result in an error response.
     * @method
     * @name Shopify#updateCustomerById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the customer to update in Shopify.
     * @param {} parameters.customer - The customer object, with those fields that are to be updated.
     */
    Shopify.prototype.updateCustomerById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['customer'] !== undefined) {
            body = parameters['customer'];
        }

        if (parameters['customer'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customer'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Find abandoned checkouts for the customer associated with a given ID. If the customer does not exist, an error response will be returned. If no abandoned checkouts are found in the given customer then an empty array will be returned.
     * @method
     * @name Shopify#getCustomersAbandonedCheckouts
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the customer to get abandoned checkouts from in Shopify.
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     */
    Shopify.prototype.getCustomersAbandonedCheckouts = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{id}/abandoned-checkouts';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Find orders associated with a given customer ID. If the customer does not exist, an error response will be returned. If no orders are found in the given customer then an empty array will be returned.
     * @method
     * @name Shopify#getCustomersOrders
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the customer to get orders from in Shopify.
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     */
    Shopify.prototype.getCustomersOrders = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/customers/{id}/orders';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve a discount code by name 
     * @method
     * @name Shopify#getDiscountCodeByCode
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.code - Name of the discount code
     */
    Shopify.prototype.getDiscountCodeByCode = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/discount-codes/{code}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{code}', parameters['code']);

        if (parameters['code'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: code'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new metafield for a store
     * @method
     * @name Shopify#createMetafield
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.body - The metafields object
     */
    Shopify.prototype.createMetafield = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/metafields';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get metafields that belong to a store
     * @method
     * @name Shopify#getMetafields
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for objects where name equals foo, the search expression will be <i>name='foo'</i>. When this parameter is omitted, all objects are returned in a paginated fashion
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getMetafields = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/metafields';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a count of metafields that belong to a store
     * @method
     * @name Shopify#getMetafieldsCount
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     */
    Shopify.prototype.getMetafieldsCount = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/metafields-count';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update a store metafield
     * @method
     * @name Shopify#updateMetafieldById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - ID of the metafield
     * @param {} parameters.body - The metafields object
     */
    Shopify.prototype.updateMetafieldById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/metafields/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a single store metafield by its ID
     * @method
     * @name Shopify#getMetafieldById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of metafields
     */
    Shopify.prototype.getMetafieldById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/metafields/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete a store metafield
     * @method
     * @name Shopify#deleteMetafieldById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - ID of the metafield
     */
    Shopify.prototype.deleteMetafieldById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/metafields/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all the available objects.
     * @method
     * @name Shopify#getObjects
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     */
    Shopify.prototype.getObjects = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/objects';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all the field for an object.
     * @method
     * @name Shopify#getObjectsObjectNameMetadata
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     */
    Shopify.prototype.getObjectsObjectNameMetadata = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/objects/{objectName}/metadata';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Find orders in Shopify, using the provided CEQL search expression.
     * @method
     * @name Shopify#getOrders
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for orders that have been fulfilled, the where parameter would be <i>fulfillment_status='shipped'</i>. When this parameter is omitted, all orders are returned in a paginated fashion.
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     * @param {string} parameters.orderBy - Optionally return orders in a particular order. Current supported values are 'created_at' and 'updated_at'. By default this returns in ascending order, for descending order use 'updated_at desc'.
     * @param {boolean} parameters.returnTotalCount - Optionally return the total count of orders. Returned in response headers.
     */
    Shopify.prototype.getOrders = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['orderBy'] !== undefined) {
            queryParameters['orderBy'] = parameters['orderBy'];
        }

        if (parameters['returnTotalCount'] !== undefined) {
            queryParameters['returnTotalCount'] = parameters['returnTotalCount'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new order in Shopify.
     * @method
     * @name Shopify#createOrder
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.order - The Order object to be created.
     */
    Shopify.prototype.createOrder = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['order'] !== undefined) {
            body = parameters['order'];
        }

        if (parameters['order'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: order'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error message.
     * @method
     * @name Shopify#deleteOrderById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the order to delete from Shopify.
     */
    Shopify.prototype.deleteOrderById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve an order associated with a given ID from Shopify. Specifying an order ID that does not exist will result in an error response.
     * @method
     * @name Shopify#getOrderById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the order to retrieve from Shopify.
     */
    Shopify.prototype.getOrderById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an order associated with a given ID in Shopify. Change an order's attributes such as note, email, buyer-accepts-marketing, or remove the customer association. The update API uses the PATCH HTTP verb, so only those fields provided in the order object will be updated, and those fields not provided will be left alone. Updating an order with an ID that does not exist will result in an error response. NOTE: To remove the customer association, set the 'customer' value to null.
     * @method
     * @name Shopify#updateOrderById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the order to update in Shopify.
     * @param {} parameters.order - The order object, with those fields that are to be updated.
     * @param {string} parameters.action - An action to perform on the order: cancel, reopen or close. If left blank then the order is updated but no action is taken.
     */
    Shopify.prototype.updateOrderById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['order'] !== undefined) {
            body = parameters['order'];
        }

        if (parameters['order'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: order'));
            return deferred.promise;
        }

        if (parameters['action'] !== undefined) {
            queryParameters['action'] = parameters['action'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Creates a fulfillment for the specified order and line items
     * @method
     * @name Shopify#createOrderFulfillment
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {} parameters.fulfillment - Body of the fulfillment
     */
    Shopify.prototype.createOrderFulfillment = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['fulfillment'] !== undefined) {
            body = parameters['fulfillment'];
        }

        if (parameters['fulfillment'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillment'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all fulfillments for an order
     * @method
     * @name Shopify#getOrdersFulfillments
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for objects where name equals foo, the search expression will be <i>name='foo'</i>. When this parameter is omitted, all objects are returned in a paginated fashion.
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getOrdersFulfillments = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Count all the total number of fulfillments for an order
     * @method
     * @name Shopify#getOrdersFulfillmentsCount
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for objects where name equals foo, the search expression will be <i>name='foo'</i>. When this parameter is omitted, all objects are returned in a paginated fashion.
     */
    Shopify.prototype.getOrdersFulfillmentsCount = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments-count';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update tracking number for a fulfillment
     * @method
     * @name Shopify#updateOrdersFulfillmentByFulfillmentId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     * @param {} parameters.body - Body of the fulfillment to be updated
     */
    Shopify.prototype.updateOrdersFulfillmentByFulfillmentId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get the representation of a specific fulfillment
     * @method
     * @name Shopify#getOrdersFulfillmentByFulfillmentId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for objects where name equals foo, the search expression will be <i>name='foo'</i>. When this parameter is omitted, all objects are returned in a paginated fashion.
     */
    Shopify.prototype.getOrdersFulfillmentByFulfillmentId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a fulfillment event
     * @method
     * @name Shopify#createOrderFulfillmentFulfillmentEvent
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     * @param {} parameters.body - Body of the fulfillment event
     */
    Shopify.prototype.createOrderFulfillmentFulfillmentEvent = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all fulfillment events for a fulfillment
     * @method
     * @name Shopify#getOrdersFulfillmentsFulfillmentEvents
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     */
    Shopify.prototype.getOrdersFulfillmentsFulfillmentEvents = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a fulfillment event
     * @method
     * @name Shopify#getOrdersFulfillmentsFulfillmentEventByEventId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     * @param {string} parameters.eventId - ID of the event
     */
    Shopify.prototype.getOrdersFulfillmentsFulfillmentEventByEventId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        path = path.replace('{eventId}', parameters['eventId']);

        if (parameters['eventId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: eventId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete a fulfillment event
     * @method
     * @name Shopify#deleteOrdersFulfillmentsFulfillmentEventByEventId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     * @param {string} parameters.eventId - ID of the event
     */
    Shopify.prototype.deleteOrdersFulfillmentsFulfillmentEventByEventId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}/fulfillment-events/{eventId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        path = path.replace('{eventId}', parameters['eventId']);

        if (parameters['eventId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: eventId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Cancel a pending fulfillment
     * @method
     * @name Shopify#updateOrdersFulfillmentsStatusCancel
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     */
    Shopify.prototype.updateOrdersFulfillmentsStatusCancel = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}/status-cancel';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Complete a pending fulfillment
     * @method
     * @name Shopify#updateOrdersFulfillmentsStatusComplete
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.fulfillmentId - ID of the fulfillment
     */
    Shopify.prototype.updateOrdersFulfillmentsStatusComplete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/fulfillments/{fulfillmentId}/status-complete';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{fulfillmentId}', parameters['fulfillmentId']);

        if (parameters['fulfillmentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: fulfillmentId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Find payments in Shopify, using the provided CEQL search expression.
     * @method
     * @name Shopify#getOrdersPayments
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - The ID of the order to retrieve payments from in Shopify.
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for payments since a particular ID, the where parameter would be <i>since_id=1234</i>. The since_id field is the only supported search field.
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     */
    Shopify.prototype.getOrdersPayments = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/payments';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new transaction
     * @method
     * @name Shopify#createOrderPayment
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {} parameters.body - ID of the order
     */
    Shopify.prototype.createOrderPayment = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/payments';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Count all a given order’s money transfers
     * @method
     * @name Shopify#getOrdersPaymentsCount
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     */
    Shopify.prototype.getOrdersPaymentsCount = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/payments-count';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve a payment associated with a given ID from Shopify. Specifying a payment ID that does not exist will result in an error response.
     * @method
     * @name Shopify#getOrdersPaymentByPaymentId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - The ID of the order to retrieve the payment from in Shopify.
     * @param {string} parameters.paymentId - The ID of the payment to retrieve the from Shopify.
     */
    Shopify.prototype.getOrdersPaymentByPaymentId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/payments/{paymentId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{paymentId}', parameters['paymentId']);

        if (parameters['paymentId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: paymentId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Find refunds in Shopify, using the provided CEQL search expression.
     * @method
     * @name Shopify#getOrdersRefunds
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - The ID of the order to retrieve refunds from in Shopify.
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for refunds since a particular ID, the where parameter would be <i>since_id=1234</i>. The since_id field is the only supported search field.
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     */
    Shopify.prototype.getOrdersRefunds = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/refunds';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a refund for an existing order
     * @method
     * @name Shopify#createOrderRefund
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order for which order risk is to created
     * @param {} parameters.refund - The body of the refund to be created
     */
    Shopify.prototype.createOrderRefund = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/refunds';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['refund'] !== undefined) {
            body = parameters['refund'];
        }

        if (parameters['refund'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: refund'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Calculate refund transactions based on line-items and shipping. The returned response can be used to create a refund
     * @method
     * @name Shopify#createOrderRefundsCalculate
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order for which order risk is to created
     * @param {} parameters.refundCalculate - The body of the refund-calculate
     */
    Shopify.prototype.createOrderRefundsCalculate = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/refunds-calculate';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['refundCalculate'] !== undefined) {
            body = parameters['refundCalculate'];
        }

        if (parameters['refundCalculate'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: refundCalculate'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve a specific refund
     * @method
     * @name Shopify#getOrdersRefundByRefundId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order for which order risk is to created
     * @param {string} parameters.refundId - ID of the refund
     */
    Shopify.prototype.getOrdersRefundByRefundId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/refunds/{refundId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{refundId}', parameters['refundId']);

        if (parameters['refundId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: refundId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new Order Risk for an Order
     * @method
     * @name Shopify#createOrderRisk
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order for which order risk is to created
     * @param {} parameters.risk - The fraud risk to be created
     */
    Shopify.prototype.createOrderRisk = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/risks';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        if (parameters['risk'] !== undefined) {
            body = parameters['risk'];
        }

        if (parameters['risk'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: risk'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all Order Risks
     * @method
     * @name Shopify#getOrdersRisks
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - Id of the order
     */
    Shopify.prototype.getOrdersRisks = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/risks';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an Order Risk entry
     * @method
     * @name Shopify#updateOrdersRiskByRiskId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - The ID of the order
     * @param {string} parameters.riskId - ID of the risk
     * @param {} parameters.risk - The fraud risk body to be updated
     */
    Shopify.prototype.updateOrdersRiskByRiskId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/risks/{riskId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{riskId}', parameters['riskId']);

        if (parameters['riskId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: riskId'));
            return deferred.promise;
        }

        if (parameters['risk'] !== undefined) {
            body = parameters['risk'];
        }

        if (parameters['risk'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: risk'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a single Order Risk by its ID
     * @method
     * @name Shopify#getOrdersRiskByRiskId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.riskId - ID of the risk
     */
    Shopify.prototype.getOrdersRiskByRiskId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/risks/{riskId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{riskId}', parameters['riskId']);

        if (parameters['riskId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: riskId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete an order risk entry
     * @method
     * @name Shopify#deleteOrdersRiskByRiskId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.orderId - ID of the order
     * @param {string} parameters.riskId - ID of the risk
     */
    Shopify.prototype.deleteOrdersRiskByRiskId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/orders/{orderId}/risks/{riskId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{orderId}', parameters['orderId']);

        if (parameters['orderId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: orderId'));
            return deferred.promise;
        }

        path = path.replace('{riskId}', parameters['riskId']);

        if (parameters['riskId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: riskId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Ping the Element to confirm that the Hub Element has a heartbeat.  If the Element does not have a heartbeat, an error message will be returned.
     * @method
     * @name Shopify#getPing
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     */
    Shopify.prototype.getPing = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/ping';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Add a price rule
     * @method
     * @name Shopify#createPriceRule
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.priceRule - The body of the price rule
     */
    Shopify.prototype.createPriceRule = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['priceRule'] !== undefined) {
            body = parameters['priceRule'];
        }

        if (parameters['priceRule'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: priceRule'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * List all price rules
     * @method
     * @name Shopify#getPriceRules
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {string} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for objects where id equals foo, the search expression will be <i>id='foo'</i>. When this parameter is omitted, all objects are returned in a paginated fashion.
     */
    Shopify.prototype.getPriceRules = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a price rule with a certain id
     * @method
     * @name Shopify#getPriceRuleByPriceRuleId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.priceRuleId - ID of the price rule
     */
    Shopify.prototype.getPriceRuleByPriceRuleId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules/{priceRuleId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{priceRuleId}', parameters['priceRuleId']);

        if (parameters['priceRuleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: priceRuleId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Remove a price rule
     * @method
     * @name Shopify#deletePriceRuleByPriceRuleId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.priceRuleId - ID of the price rule
     */
    Shopify.prototype.deletePriceRuleByPriceRuleId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules/{priceRuleId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{priceRuleId}', parameters['priceRuleId']);

        if (parameters['priceRuleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: priceRuleId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a discount code for a given price rule
     * @method
     * @name Shopify#createPriceRuleDiscountCode
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.priceRuleId - The ID of price rule to receive discount codes for
     * @param {} parameters.discountCode - Discount code to be created
     */
    Shopify.prototype.createPriceRuleDiscountCode = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules/{priceRuleId}/discount-codes';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{priceRuleId}', parameters['priceRuleId']);

        if (parameters['priceRuleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: priceRuleId'));
            return deferred.promise;
        }

        if (parameters['discountCode'] !== undefined) {
            body = parameters['discountCode'];
        }

        if (parameters['discountCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: discountCode'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get all discount codes for a given price rule
     * @method
     * @name Shopify#getPriceRulesDiscountCodes
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.priceRuleId - ID of the price rule to receive discount codes for
     */
    Shopify.prototype.getPriceRulesDiscountCodes = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules/{priceRuleId}/discount-codes';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{priceRuleId}', parameters['priceRuleId']);

        if (parameters['priceRuleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: priceRuleId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get all discount code for a given price rule
     * @method
     * @name Shopify#getPriceRulesDiscountCodeByDiscountCodeId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} parameters.discountCodeId - discountCodeId
     */
    Shopify.prototype.getPriceRulesDiscountCodeByDiscountCodeId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{priceRuleId}', parameters['priceRuleId']);

        if (parameters['priceRuleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: priceRuleId'));
            return deferred.promise;
        }

        path = path.replace('{discountCodeId}', parameters['discountCodeId']);

        if (parameters['discountCodeId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: discountCodeId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a discount code for a given price rule
     * @method
     * @name Shopify#deletePriceRulesDiscountCodeByDiscountCodeId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.priceRuleId - The ID of price rule to receive discount codes for
     * @param {string} parameters.discountCodeId - discount-code ID
     */
    Shopify.prototype.deletePriceRulesDiscountCodeByDiscountCodeId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/price-rules/{priceRuleId}/discount-codes/{discountCodeId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{priceRuleId}', parameters['priceRuleId']);

        if (parameters['priceRuleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: priceRuleId'));
            return deferred.promise;
        }

        path = path.replace('{discountCodeId}', parameters['discountCodeId']);

        if (parameters['discountCodeId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: discountCodeId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Find products in Shopify, using the provided CEQL search expression.
     * @method
     * @name Shopify#getProducts
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.where - The CEQL search expression, or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for a product from a certain vendor, the where condition would be <i>vendor='My Vendor'</i>. When this parameter is omitted, all products are returned in a paginated fashion. Valid criteria are: since_id, vendor, handle, product_type, collection_id, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status.
     * @param {integer} parameters.page - The page number. When this parameter is omitted, 1 is implied.
     * @param {integer} parameters.pageSize - The number of results to fetch in a given page. When this parameter is omitted, a maximum of 200 results are returned.
     * @param {string} parameters.orderBy - Optionally return orders in a particular order. Current supported values are 'created_at' and 'updated_at'. By default this returns in ascending order, for descending order use 'updated_at desc'.
     * @param {boolean} parameters.returnTotalCount - Optionally return the total count of products. Returned in response headers.
     */
    Shopify.prototype.getProducts = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['orderBy'] !== undefined) {
            queryParameters['orderBy'] = parameters['orderBy'];
        }

        if (parameters['returnTotalCount'] !== undefined) {
            queryParameters['returnTotalCount'] = parameters['returnTotalCount'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new product in Shopify.
     * @method
     * @name Shopify#createProduct
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.product - The Product object to be created.
     */
    Shopify.prototype.createProduct = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['product'] !== undefined) {
            body = parameters['product'];
        }

        if (parameters['product'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: product'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error message.
     * @method
     * @name Shopify#deleteProductById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the product to delete from Shopify.
     */
    Shopify.prototype.deleteProductById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve a product associated with a given ID from Shopify. Specifying a product ID that does not exist will result in an error response.
     * @method
     * @name Shopify#getProductById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the product to retrieve from Shopify.
     */
    Shopify.prototype.getProductById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update a product associated with a given ID in Shopify. The update API uses the PATCH HTTP verb, so only those fields provided in the product object will be updated, and those fields not provided will be left alone. Providing a product ID that does not exist will result in an error response.
     * @method
     * @name Shopify#updateProductById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the product to update in Shopify.
     * @param {} parameters.product - The product object, with those fields that are to be updated.
     */
    Shopify.prototype.updateProductById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['product'] !== undefined) {
            body = parameters['product'];
        }

        if (parameters['product'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: product'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a varient 
     * @method
     * @name Shopify#createProductVariant
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The product ID to create a variant for
     * @param {} parameters.variant - The variant to be created. See model for an example
     */
    Shopify.prototype.createProductVariant = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{id}/variants';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['variant'] !== undefined) {
            body = parameters['variant'];
        }

        if (parameters['variant'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: variant'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get all variants for a given product
     * @method
     * @name Shopify#getProductsVariants
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the product to retrieve variants for
     * @param {integer} parameters.pageSize - The size of the page to return (Maximum: 250)
     * @param {integer} parameters.page - The page of results to return
     */
    Shopify.prototype.getProductsVariants = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{id}/variants';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new product image and attach it to product variants
     * @method
     * @name Shopify#createProductImage
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.productId - The ID of the product to create an image for
     * @param {} parameters.image - The image to be uploaded
     */
    Shopify.prototype.createProductImage = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{productId}/images';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{productId}', parameters['productId']);

        if (parameters['productId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productId'));
            return deferred.promise;
        }

        if (parameters['image'] !== undefined) {
            body = parameters['image'];
        }

        if (parameters['image'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: image'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all images for a product
     * @method
     * @name Shopify#getProductsImages
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.productId - The ID of the product to return images for
     */
    Shopify.prototype.getProductsImages = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{productId}/images';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{productId}', parameters['productId']);

        if (parameters['productId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Modify an existing product image
     * @method
     * @name Shopify#updateProductsImageById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.productId - The ID of the product
     * @param {string} parameters.id - The ID of the variant to update
     * @param {} parameters.image - The variant body to update
     */
    Shopify.prototype.updateProductsImageById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{productId}/images/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{productId}', parameters['productId']);

        if (parameters['productId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productId'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['image'] !== undefined) {
            body = parameters['image'];
        }

        if (parameters['image'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: image'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a single product image by id
     * @method
     * @name Shopify#getProductsImageById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.productId - The ID of the product
     * @param {string} parameters.id - The ID of the image to retrieve
     */
    Shopify.prototype.getProductsImageById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{productId}/images/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{productId}', parameters['productId']);

        if (parameters['productId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productId'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete a product image
     * @method
     * @name Shopify#deleteProductsImageById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.productId - The ID of the product
     * @param {string} parameters.id - The ID of the image to delete
     */
    Shopify.prototype.deleteProductsImageById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{productId}/images/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{productId}', parameters['productId']);

        if (parameters['productId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productId'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete a variant
     * @method
     * @name Shopify#deleteProductsVariantById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.productId - The ID of the product for delete a variant for
     * @param {string} parameters.id - The ID of the variant to delete
     */
    Shopify.prototype.deleteProductsVariantById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/products/{productId}/variants/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{productId}', parameters['productId']);

        if (parameters['productId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productId'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
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
     * @name Shopify#getQuery
     * @param {object} parameters - method options and parameters
         * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
         * @param {string} parameters.q - The search query (i.e. select id, name from contact where name = 'foo')
         * @param {integer} parameters.page - The page number. Defaults to 1 if not provided
         * @param {integer} parameters.pageSize - The page size. Defaults to 200 if not provided. Maximum of 5000
         * @param {boolean} parameters.returnTotalCount - Optionally return the total row count of queried data. Returned in response headers.
     */
    Shopify.prototype.getQuery = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/query';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['q'] !== undefined) {
            queryParameters['q'] = parameters['q'];
        }

        if (parameters['q'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: q'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['returnTotalCount'] !== undefined) {
            queryParameters['returnTotalCount'] = parameters['returnTotalCount'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * List all shipping zones
     * @method
     * @name Shopify#getShippingZones
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getShippingZones = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/shipping-zones';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve metadata for the current shop
     * @method
     * @name Shopify#getShops
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     */
    Shopify.prototype.getShops = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/shops';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new  smart-collections
     * @method
     * @name Shopify#createSmartCollection
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {} parameters.smartCollections - The smart-collections object
     */
    Shopify.prototype.createSmartCollection = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/smart-collections';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['smartCollections'] !== undefined) {
            body = parameters['smartCollections'];
        }

        if (parameters['smartCollections'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: smartCollections'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all smart collections
     * @method
     * @name Shopify#getSmartCollections
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.where - The CEQL search expression.
     * @param {string} parameters.pageSize - The number of resources to return in a given page
     * @param {string} parameters.page - The page number of resources to retrieve
     */
    Shopify.prototype.getSmartCollections = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/smart-collections';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an existing smart-collection
     * @method
     * @name Shopify#updateSmartCollectionById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The smart-collections ID
     * @param {} parameters.smartCollections - The smart-collections object
     */
    Shopify.prototype.updateSmartCollectionById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/smart-collections/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['smartCollections'] !== undefined) {
            body = parameters['smartCollections'];
        }

        if (parameters['smartCollections'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: smartCollections'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve a single smart collection
     * @method
     * @name Shopify#getSmartCollectionById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The smart-collections ID
     */
    Shopify.prototype.getSmartCollectionById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/smart-collections/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Remove a smart collection from the database
     * @method
     * @name Shopify#deleteSmartCollectionById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The smart-collection ID
     */
    Shopify.prototype.deleteSmartCollectionById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/smart-collections/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an existing product variant
     * @method
     * @name Shopify#updateVariantById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the variant to update
     * @param {} parameters.variant - The variant body to update
     */
    Shopify.prototype.updateVariantById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/variants/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['variant'] !== undefined) {
            body = parameters['variant'];
        }

        if (parameters['variant'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: variant'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve a specific variant by ID
     * @method
     * @name Shopify#getVariantById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.id - The ID of the variant to retrieve
     */
    Shopify.prototype.getVariantById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/variants/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Search for objects
     * @method
     * @name Shopify#getByObjectName
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.where - The CEQL search expression
     * @param {string} parameters.objectName - The object name
     * @param {integer} parameters.page - The page number. Defaults to 1 if not provided
     * @param {integer} parameters.pageSize - The page size. Defaults to 200 if not provided. Maximum of 5000
     */
    Shopify.prototype.getByObjectName = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create an object
     * @method
     * @name Shopify#createByObjectName
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The object name
     * @param {} parameters.body - The object
     */
    Shopify.prototype.createByObjectName = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete an object
     * @method
     * @name Shopify#deleteObjectNameById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The object name
     * @param {string} parameters.id - The object ID
     */
    Shopify.prototype.deleteObjectNameById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve an object
     * @method
     * @name Shopify#getObjectNameById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The object name
     * @param {string} parameters.id - The object ID
     */
    Shopify.prototype.getObjectNameById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an object
     * @method
     * @name Shopify#updateObjectNameById
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The object name
     * @param {string} parameters.id - The object ID
     * @param {} parameters.body - The object
     */
    Shopify.prototype.updateObjectNameById = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create a new metafield for a resource
     * @method
     * @name Shopify#createObjectNameMetafield
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} parameters.id - ID of the resource
     * @param {} parameters.body - The body of the metafield for a resource
     */
    Shopify.prototype.createObjectNameMetafield = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}/metafields';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a list of all the field for an object
     * @method
     * @name Shopify#getObjectNameMetafields
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} parameters.id - ID of the resource
     */
    Shopify.prototype.getObjectNameMetafields = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}/metafields';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a count of metafields that belong to a resource
     * @method
     * @name Shopify#getObjectNameMetafieldsCount
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} parameters.id - ID of the resource
     */
    Shopify.prototype.getObjectNameMetafieldsCount = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}/metafields-count';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update a resource metafield
     * @method
     * @name Shopify#updateObjectNameMetafieldByMetafieldId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} parameters.id - ID of a resource
     * @param {string} parameters.metafieldId - ID of the metafield belonging to a resource
     * @param {} parameters.body - The body of the metafield for a resource
     */
    Shopify.prototype.updateObjectNameMetafieldByMetafieldId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}/metafields/{metafieldId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        path = path.replace('{metafieldId}', parameters['metafieldId']);

        if (parameters['metafieldId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: metafieldId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Get a single resource metafield by its ID
     * @method
     * @name Shopify#getObjectNameMetafieldByMetafieldId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} parameters.id - ID of a resource
     * @param {string} parameters.metafieldId - ID of the metafield belonging to a resource
     */
    Shopify.prototype.getObjectNameMetafieldByMetafieldId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}/metafields/{metafieldId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        path = path.replace('{metafieldId}', parameters['metafieldId']);

        if (parameters['metafieldId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: metafieldId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete a resource metafield
     * @method
     * @name Shopify#deleteObjectNameMetafieldByMetafieldId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - Name of the resource. Metafields are only supported for custom-collections, customers, orders, products, shops and smart-collections resources.
     * @param {string} parameters.id - ID of a resource
     * @param {string} parameters.metafieldId - ID of the metafield belonging to a resource
     */
    Shopify.prototype.deleteObjectNameMetafieldByMetafieldId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{id}/metafields/{metafieldId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        path = path.replace('{metafieldId}', parameters['metafieldId']);

        if (parameters['metafieldId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: metafieldId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete an {objectName}
     * @method
     * @name Shopify#deleteObjectNameByObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.objectId - The {objectName} ID
     */
    Shopify.prototype.deleteObjectNameByObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve an {objectName}
     * @method
     * @name Shopify#getObjectNameByObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.objectId - The {objectName} ID
     */
    Shopify.prototype.getObjectNameByObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers['Accept'] = ['application/json, application/pdf'];

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an {objectName}
     * @method
     * @name Shopify#updateObjectNameByObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {} parameters.body - The {objectName}
     */
    Shopify.prototype.updateObjectNameByObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an {objectName}
     * @method
     * @name Shopify#replaceObjectNameByObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {} parameters.body - The {objectName}
     */
    Shopify.prototype.replaceObjectNameByObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Search for {childObjectName}
     * @method
     * @name Shopify#getObjectNameByChildObjectName
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {string} parameters.childObjectName - The name of the childObjectName
     * @param {string} parameters.where - The CEQL search expression.
     * @param {integer} parameters.page - The page number. Defaults to 1 if not provided.
     * @param {integer} parameters.pageSize - The page size. Defaults to 200 if not provided. Maximum of 5000.
     */
    Shopify.prototype.getObjectNameByChildObjectName = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}/{childObjectName}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        path = path.replace('{childObjectName}', parameters['childObjectName']);

        if (parameters['childObjectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectName'));
            return deferred.promise;
        }

        if (parameters['where'] !== undefined) {
            queryParameters['where'] = parameters['where'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Create an {childObjectName}
     * @method
     * @name Shopify#createObjectNameByChildObjectName
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {string} parameters.childObjectName - The name of the object
     * @param {} parameters.body - The {childObjectName}
     */
    Shopify.prototype.createObjectNameByChildObjectName = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}/{childObjectName}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        path = path.replace('{childObjectName}', parameters['childObjectName']);

        if (parameters['childObjectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectName'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Delete an {childObjectName}
     * @method
     * @name Shopify#deleteObjectNameByChildObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.childObjectName - The name of the childObjectName
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {string} parameters.childObjectId - The {childObjectName} ID
     */
    Shopify.prototype.deleteObjectNameByChildObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}/{childObjectName}/{childObjectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{childObjectName}', parameters['childObjectName']);

        if (parameters['childObjectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        path = path.replace('{childObjectId}', parameters['childObjectId']);

        if (parameters['childObjectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieve an {childObjectName}
     * @method
     * @name Shopify#getObjectNameByChildObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.childObjectName - The name of the childObjectName
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {string} parameters.childObjectId - The {childObjectName} ID
     */
    Shopify.prototype.getObjectNameByChildObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}/{childObjectName}/{childObjectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{childObjectName}', parameters['childObjectName']);

        if (parameters['childObjectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        path = path.replace('{childObjectId}', parameters['childObjectId']);

        if (parameters['childObjectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectId'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an {childObjectName}
     * @method
     * @name Shopify#updateObjectNameByChildObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.childObjectName - The name of the childObjectName
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {string} parameters.childObjectId - The {childObjectName} ID
     * @param {} parameters.body - The {objectName}
     */
    Shopify.prototype.updateObjectNameByChildObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}/{childObjectName}/{childObjectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{childObjectName}', parameters['childObjectName']);

        if (parameters['childObjectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        path = path.replace('{childObjectId}', parameters['childObjectId']);

        if (parameters['childObjectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Update an {childObjectName}
     * @method
     * @name Shopify#replaceObjectNameByChildObjectId
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.authorization - The authorization tokens. The format for the header value is 'Element &lt;token&gt;, User &lt;user secret&gt;'
     * @param {string} parameters.objectName - The name of the object
     * @param {string} parameters.childObjectName - The name of the childObjectName
     * @param {string} parameters.objectId - The {objectName} ID
     * @param {string} parameters.childObjectId - The {childObjectName} ID
     * @param {} parameters.body - The {objectName}
     */
    Shopify.prototype.replaceObjectNameByChildObjectId = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();
        var domain = this.domain,
            path = '/{objectName}/{objectId}/{childObjectName}/{childObjectId}';
        var body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['authorization'] !== undefined) {
            headers['Authorization'] = parameters['authorization'];
        }

        if (parameters['authorization'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: authorization'));
            return deferred.promise;
        }

        path = path.replace('{objectName}', parameters['objectName']);

        if (parameters['objectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectName'));
            return deferred.promise;
        }

        path = path.replace('{childObjectName}', parameters['childObjectName']);

        if (parameters['childObjectName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectName'));
            return deferred.promise;
        }

        path = path.replace('{objectId}', parameters['objectId']);

        if (parameters['objectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }

        path = path.replace('{childObjectId}', parameters['childObjectId']);

        if (parameters['childObjectId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childObjectId'));
            return deferred.promise;
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };

    return Shopify;
})();

exports.Shopify = Shopify;
