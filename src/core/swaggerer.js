const fs = require('fs');
const {CodeGen} = require('../swagger-js-codegen/codegen');
const path = require('path');
const tsc = require('typescript');

module.exports = (name, source) => {
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
              return render(text).replace(/-/g, '_');
            };
          },
        cleanMethodName:
          function() {
            return function(text, render) {
              return render(text).replace(/:.*$/, '');
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
  fs.writeFileSync(`${name}.ts`, tsSourceCode);
  fs.writeFileSync(`${name}.js`, tsCompilerOutput.outputText);
};
