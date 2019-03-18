'use strict';

const {platformSDK} = require('../core/platformSDK');
const {reportError} = require('./utils');

const promptly = require('promptly');

module.exports = async parms => {
  let baseUrl = parms.baseUrl || 'https://api.cloud-elements.com';
  if (!parms.user) {
    return {baseUrl};
  }
  const password = await promptly.password('password: ');
  const platform = new platformSDK(baseUrl);
  try {
    const bearerToken = await platform.post('/authentication').send({username: parms.user, password: password});
    const secrets = await platform.get('/authentication/secrets').set('authorization', `Bearer ${bearerToken.token}`)
    return {baseUrl, authHeader: `User ${secrets.userSecret}, Organization ${secrets.organizationSecret}`};
  } catch (e) {
    if (e.status === 401) {
      reportError('invalid username or password');
    } else if (e.code === 'ENOTFOUND') {
      reportError('invalid base URL')
    } else {
      throw e;
    }
  }
}
