'use strict';

const commander = require('commander');
const swaggerer = require('../core/swaggerer');
const {platformSDK} = require('../core/platformSDK');
const configurator = require('../core/configurator');
const {reportSuccess} = require('../core/utils');

commander
  .option('-b, --baseUrl [base url]', 'specify the base url (defaults to https://api.cloud-elements.com')
  .option('-l, --label [label]', 'provide alternate label for the generated SDK files');

commander.parse(process.argv);

async function handlePlatformCommand() {
  const platform = new platformSDK(...await configurator(commander));
  const swagger = await platform.get('/docs/all_platform');
  swaggerer(commander.label || 'platformSDK', swagger.body);
}

handlePlatformCommand()
  .then(r => reportSuccess(`platform`))
  .catch(r => console.error(r));
