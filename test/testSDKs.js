const sdkifier = require('ce-sdkifier');
const colors = require('colors');

const {platformSDK} = require('./sdks/platformSDK');

const platform = new platformSDK('https://staging.cloud-elements.com', process.env.AUTH_HEADER);

async function doit() {
  let failedKeys = [];
  const elements = await platform.get('/elements/47/metadata', null, null, {expand: false})
  console.log(elements.body)
  console.log(elements.body.filter(element => element.display_order > 0).length)
  const keys = elements.body.map(element => element.key)
  console.log(keys)
  for (let key of keys.sort()) {
    console.log(`Testing ${key}...`)
    try {
      const result = await sdkifier.generateElementSdk(key, null, 'https://staging.cloud-elements.com', process.env.AUTH_HEADER, null, 'sdks');
      if (result.success) {
        try {
          require(`./sdks/${key}SDK`)
          console.log(`${key} passed`.green)
        } catch (e) {
          console.log(`${key} failed`.red)
          console.log(e)
          failedKeys.push(key)
        }
      }
      else {
        console.log(`Couldn't generate ${key}: ${result.message}`.red)
        failedKeys.push(key)
      }
    } catch (e) {
      console.log(`${key} failed`.red)
      console.log(e)
      failedKeys.push(key)
    }
  }
  if (failedKeys) {
    console.log(`${keys.length-failedKeys.length} keys passed`.green)
    console.log(`${failedKeys.length} keys failed`.red)
    console.log(`The following keys failed: ${failedKeys.join(', ')}`.red)
  }
  else {
    console.log('all elements passed')
  }
}

doit()
  .then(r => console.log('done'))
  .catch(r => console.log(r));
