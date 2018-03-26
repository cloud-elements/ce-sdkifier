'use strict';

const {platformSDK} = require('../core/platformSDK');
const {reportError} = require('./utils');

const promptly = require('promptly');

module.exports = async parms => {
  let baseUrl = parms.baseUrl || 'https://api.cloud-elements.com';
  if (!parms.user) {
    return [baseUrl];
  }
  const password = await promptly.password('password: ');
  const platform = new platformSDK(baseUrl);
  try {
    const bearerToken = await platform.post('/authentication',{username: parms.user, password: password});
    const secrets = await platform.get('/authentication/secrets', null, {authorization: `Bearer ${bearerToken.body.token}`})
    return [baseUrl, `User ${secrets.body.userSecret}, Organization ${secrets.body.organizationSecret}`];
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