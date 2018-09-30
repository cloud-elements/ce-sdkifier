'use strict';

const commander = require('commander');
const configurator = require('../core/configurator');
const {generatePlatformSdk} = require('../core/sdkifier')
const {reportSuccess} = require('../core/utils');

commander
  .option('-b, --baseUrl [base url]', 'specify the base url (defaults to https://api.cloud-elements.com')
  .option('-l, --label [label]', 'provide alternate label for the generated SDK files');

commander.parse(process.argv);

async function handlePlatformCommand() {
  const {baseUrl, authHeader} = await configurator(commander);
  generatePlatformSdk(baseUrl, authHeader, commander.label);
}

handlePlatformCommand()
  .then(r => reportSuccess(`platform`))
  .catch(r => console.error(r));
