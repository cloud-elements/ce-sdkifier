'use strict';

const commander = require('commander');
const swaggerer = require('../core/swaggerer');
const {platformSDK} = require('../core/platformSDK');
const configurator = require('../core/configurator');
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
  const platform = new platformSDK(...await configurator(commander));
  const hubs = await platform.getHubsKeys().run();
  if (hubs.includes(hub)) {
    const swagger = await platform.get(`/docs/${hub}`);
    swaggerer(commander.label || `${hub}SDK`, swagger.body);
  }
  else {
    reportError(`invalid hub-key.  Legal values are ${hubs.join(', ')}`);
  }
}

handleHubCommand()
  .then(r => reportSuccess(`${hub} hub`))
  .catch(r => console.error(r));
