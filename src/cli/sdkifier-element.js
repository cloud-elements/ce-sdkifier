'use strict';

const commander = require('commander');
const swaggerer = require('../core/swaggerer');
const {platformSDK} = require('../core/platformSDK');
const configurator = require('../core/configurator');
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

const idOrKey = commander.id || commander.key;

async function handleElementCommand() {
  const platform = new platformSDK(...await configurator(commander));
  let id = commander.id;
  if (!id) {
    const keys = await platform.getElementsKeys().run();
    if (!keys.includes(commander.key)) {
      reportError(`Invalid element key - ${commander.key}. Valid values include ${keys.join(', ')}`);
      process.exit(1);
    }
    const element = await platform.get(`/elements/${commander.key}`);
    id = element.body.id;
  }
  try {
    const swagger = await platform.get(`/elements/${id}/docs`);
    swaggerer(commander.label || `${idOrKey}SDK`, swagger.body);
  } catch (e) {
    if (e.status === 404) {
      const elements = await platform.get('/elements');
      const validIds = elements.body.map(element => element.id).join(', ');
      reportError(`element ${id} not found, valid elements include ${validIds}`);
    } else {
      throw e;
    }
  }
}

handleElementCommand()
  .then(r => reportSuccess(`element ${idOrKey}`))
  .catch(r => console.error(r));
