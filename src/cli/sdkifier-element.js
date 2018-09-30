'use strict';

const commander = require('commander');
const configurator = require('../core/configurator');
const {generateElementSdk} = require('../core/sdkifier')
const {reportError, reportSuccess} = require('../core/utils');

commander
  .option('-u, --user [username]', 'specify the username for authentication')
  .option('-b, --baseUrl [base url]', 'specify the base url (defaults to https://api.cloud-elements.com')
  .option('-l, --label [label]', 'provide alternate label for the generated SDK files')
  .option('-i --id [element id]', 'choose an element by id')
  .option('-k --key [element key]', 'choose an element by key');

commander.parse(process.argv);

if (!commander.id && !commander.key) {
  reportError('You must specify either the element key or id', commander);
}

if (commander.id && commander.key) {
  reportError('You cannot specify both the element key and id');
}

if (!commander.user && commander.key) {
  reportError('You cannot specify an element key without also specifying a user');
}

async function handleElementCommand() {
  const {baseUrl, authHeader} = await configurator(commander);
  const result = await generateElementSdk(commander.key, commander.id, baseUrl, authHeader, commander.label);
  if (!result.success) {
    reportError(result.message);
  }
}

handleElementCommand()
  .then(r => reportSuccess(`element ${commander.id || commander.key}`))
  .catch(r => console.error(r));
