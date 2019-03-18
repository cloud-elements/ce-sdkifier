const swaggerer = require('./swaggerer');
const {platformSDK} = require('../core/platformSDK');

module.exports = {
  generatePlatformSdk: async (baseUrl, authHeader, label, dir) => {
    const platform = new platformSDK(baseUrl, authHeader);
    const swagger = await platform.get('/docs/all_platform');
    return swaggerer(label || 'platformSDK', swagger, dir);
  },
  generateHubSdk: async (hub, baseUrl, authHeader, label, dir) => {
    const platform = new platformSDK(baseUrl, authHeader);
    const hubs = await platform.getHubsKeys();
    if (hubs.includes(hub)) {
      const swagger = await platform.get(`/docs/${hub}`);
      return swaggerer(label || `${hub}SDK`, swagger, dir);
    }
    else {
      return {success: false, message: `invalid hub-key.  Legal values are ${hubs.join(', ')}`}
    }
  },
  generateElementSdk: async (key, id, baseUrl, authHeader, label, dir) => {
    const keyOrId = key || `_${id}`;
    const platform = new platformSDK(baseUrl, authHeader);
    if (key) {
      const keys = await platform.getElementsKeys();
      if (!keys.includes(key)) {
        return {success:false, message: `Invalid element key - ${key}. Valid values include ${keys.join(', ')}`};
      }
      const element = await platform.get(`/elements/${key}`);
      id = element.id;
    }
    try {
      const swagger = await platform.get(`/elements/${id}/docs`);
      return swaggerer(label || `${keyOrId}SDK`, swagger, dir);
    } catch (e) {
      if (e.status === 404) {
        if (authHeader) {
          const elements = await platform.get('/elements');
          const validIds = elements.map(element => element.id).join(', ');
          return {success: false, message: `element ${id} not found, valid elements include ${validIds}`};
        } else {
          return {success: false, message: `element ${id} not found`};
        }
      } else {
        throw e;
      }
    }
  },
  generateInstanceSdk: async (id, baseUrl, authHeader, label, dir) => {
    const platform = new platformSDK(baseUrl, authHeader);
    try {
      const swagger = await platform.get(`/instances/${id}/docs`);
      return swaggerer(label || `_${id}SDK`, swagger, dir);
    } catch (e) {
      if (e.status === 404) {
        const instances = await platform.getInstances();
        const validIds = instances.map(instance => instance.id).join(', ');
        return {success: false, message: `instance ${id} not found, valid instances include ${validIds}`};
      } else {
        throw e;
      }
    }
  }
};
