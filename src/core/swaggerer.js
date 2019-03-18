const fs = require('fs');
const pluralize = require('pluralize')
const {CodeGen} = require('../swagger-js-codegen/codegen');
const path = require('path');
const tsc = require('typescript');

module.exports = (name, source, dir) => {
  const classTemplate = fs.readFileSync(path.resolve(__dirname, '../templates/typescript/class.mustache'), 'UTF-8');
  const methodTemplate = fs.readFileSync(path.resolve(__dirname, '../templates/typescript/method.mustache'), 'UTF-8');
  const typeTemplate = fs.readFileSync(path.resolve(__dirname, '../templates/typescript/type.mustache'), 'UTF-8');
  const tsSourceCode = CodeGen.getCustomCode(
    {
      className: name,
      swagger: source,
      template: {class: classTemplate, method: methodTemplate, type: typeTemplate},
      lint: false,
      mustache: {
        excludeAuthorizationParameter:
          function() {
            if (this.camelCaseName !== 'authorization') {
              return this;
            }
          },
        dedashify:
          function() {
            return function(text, render) {
              return render(text).replace(/[-! <>/.,=':()&;]/g, '_');
            };
          },
        cleanMethodName:
          function() {
            return function(text, render) {
              const identifier = render(text);
              let match = identifier.match(/^(delete|get|update)([a-zA-Z]+)(ById|s)_([a-zA-Z]+)$/);
              if (match) {
                return `${match[1]}${match[4].charAt(0).toUpperCase()}${pluralize.singular(match[4].slice(1))}${match[3]}`
              }
              match = identifier.match(/^createObjectNameField_([a-zA-Z]+)$/);
              if (match) {
                return `create${match[1].charAt(0).toUpperCase()}${pluralize.plural(match[1].slice(1))}Field`
              }
              match = identifier.match(/^create([a-zA-Z]+)_([a-zA-Z]+)$/);
              if (match) {
                return `create${match[2].charAt(0).toUpperCase()}${pluralize.singular(match[2].slice(1))}`
              }
              match = identifier.match(/^getByObjectName_([a-zA-Z]+)$/);
              if (match) {
                return `get${match[1].charAt(0).toUpperCase()}${pluralize.plural(match[1].slice(1))}`
              }
              match = identifier.match(/^(delete|get|update)ObjectNameByObjectId_([a-zA-Z]+)$/);
              if (match) {
                return `${match[1]}${match[2].charAt(0).toUpperCase()}${pluralize.singular(match[2].slice(1))}ById`
              }
              return identifier.replace(/:.*$/, '');
            };
          }
      }
    });
  const tsCompilerOutput =
    tsc.transpileModule(tsSourceCode, {
      compilerOptions: {
        module: tsc.ModuleKind.CommonJS
      }
    });
  for (let diagnostic of tsCompilerOutput.diagnostics) {
    console.log(diagnostic);
  }
  dir = dir ? dir + '/' : '';
  fs.writeFileSync(`${dir}${name}.ts`, tsSourceCode);
  fs.writeFileSync(`${dir}${name}.js`, tsCompilerOutput.outputText);
  try {
    require(`${process.cwd()}/${dir}${name}`);
  } catch (e) {
    console.log(e)
    return {success:false, message: `Problem detected in generated code: ${e.message}`};
  }
  return {success: true};
};
