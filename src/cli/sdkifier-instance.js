'use strict';

const commander = require('commander');
const configurator = require('../core/configurator');
const {generateInstanceSdk} = require('../core/sdkifier')
const {reportError, reportSuccess} = require('../core/utils');

commander
  .arguments('<id>')
  .option('-u, --user [username]', 'specify the username for authentication')
  .option('-b, --baseUrl [base url]', 'specify the base url (defaults to https://api.cloud-elements.com')
  .option('-l, --label [label]', 'provide alternate label for the generated SDK files');

commander.parse(process.argv);

if (commander.args.length === 0) {
  reportError('id is required', commander);
}

if (!commander.user) {
  reportError('user is required for sdkifier-instance');
}

const id = commander.args[0];

async function handleInstanceCommand() {
  const {baseUrl, authHeader} = await configurator(commander);
  const result = await generateInstanceSdk(id, baseUrl, authHeader, commander.label);
  if (!result.success) {
    reportError(result.message);
  }
}

handleInstanceCommand()
  .then(r => reportSuccess(`instance ${id}`))
  .catch(r => console.error(r));
