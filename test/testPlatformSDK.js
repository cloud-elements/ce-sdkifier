const {platformSDK} = require('../src/core/platformSDK');

const platform = new platformSDK('https://staging.cloud-elements.com', process.env.AUTH_HEADER);

async function doit() {
  let accounts = await platform.getAccounts()
  console.log('initial number of accounts:', accounts.length)
  let account = await platform.getAccountById(accounts[0].id)
  console.log('first account:', account.name)
  account = await platform.createAccount({externalId: 'test account ' + new Date()})
  console.log('new account:', account.name)
  accounts = await platform.getAccounts()
  console.log('number of accounts after creation:', accounts.length)
  await platform.deleteAccountById(account.id)
  accounts = await platform.getAccounts()
  console.log('number of accounts after deletion:', accounts.length)
  try {
    account = await platform.getAccountById(123456789)
  } catch(e) {
    console.log('status when trying to get a non existent account:', e.status)
  }
}

doit()
  .then(r => console.log('done'))
  .catch(r => console.log(r));
