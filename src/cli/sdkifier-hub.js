'use strict';

const commander = require('commander');
const configurator = require('../core/configurator');
const {generateHubSdk} = require('../core/sdkifier')
const {reportError, reportSuccess} = require('../core/utils');

commander
  .arguments('<hub-key>')
  .option('-b, --baseUrl [base url]', 'specify the base url (defaults to https://api.cloud-elements.com')
  .option('-l, --label [label]', 'provide alternate label for the generated SDK files');

commander.parse(process.argv);

if (commander.args.length === 0) {
  reportError('hub-key is required', commander);
}

const hub = commander.args[0];

async function handleHubCommand() {
  const {baseUrl, authHeader} = await configurator(commander);
  const result = await generateHubSdk(hub, baseUrl, authHeader, commander.label);
  if (!result.success) {
    reportError(result.message);
  }
}

handleHubCommand()
  .then(r => reportSuccess(`${hub} hub`))
  .catch(r => console.error(r));
