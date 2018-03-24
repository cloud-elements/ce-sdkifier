var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;
 
var file = 'shopify.swagger.json';
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
var nodejsSourceCode = CodeGen.getNodeCode({ className: 'Shopify', swagger: swagger });
var tsSourceCode = CodeGen.getTypescriptCode({ className: 'Shopify', swagger: swagger, imports: ['../../typings/tsd.d.ts'] });
console.log(nodejsSourceCode);

