'use strict';

const commander = require('commander');
const swaggerer = require('../core/swaggerer');
const {platformSDK} = require('../core/platformSDK');
const configurator = require('../core/configurator');
const {reportError, reportSuccess} = require('../core/utils');

commander
  .option('-a, --account [account]', 'specify the account to use for credentials and environment')
  .option('-l, --label [label]', 'provide alternate label for the generated SDK files');

commander.parse(process.argv);

const platform = new platformSDK(...configurator(commander.account));

async function handlePlatformCommand() {
  const swagger = await platform.get('/docs/all_platform');
  swaggerer(commander.label || 'platformSDK', swagger.body);
}

handlePlatformCommand()
  .then(r => reportSuccess(`platform`))
  .catch(r => console.error(r));
