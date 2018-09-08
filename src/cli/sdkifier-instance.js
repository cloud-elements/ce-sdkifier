'use strict';

const commander = require('commander');
const swaggerer = require('../core/swaggerer');
const {platformSDK} = require('../core/platformSDK');
const configurator = require('../core/configurator');
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
  let platform;
  try {
    platform = new platformSDK(...await configurator(commander));
    const swagger = await platform.get(`/instances/${id}/docs`);
    swaggerer(commander.label || `${id}SDK`, swagger.body);
  } catch (e) {
    if (e.status === 404) {
      const instances = await platform.getInstances().run();
      const validIds = instances.map(instance => instance.id).join(', ');
      reportError(`instance ${id} not found, valid instances include ${validIds}`);
    } else {
      throw e;
    }
  }
}

handleInstanceCommand()
  .then(r => reportSuccess(`instance ${id}`))
  .catch(r => console.error(r));
