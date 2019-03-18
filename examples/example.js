const {shopifySDK} = require('./shopifySDK');

const shopify = new shopifySDK('https://staging.cloud-elements.com', process.env.SHOPIFY_AUTH_HEADER);

async function doit() {
  const products = await
    shopify
      .getProducts()
      .where(`created_at_max='2015-01-01T00:00:00-06:00'`)
      .pageSize(3)
  for (let product of products) {
    console.log({
      name: product.handle,
      title: product.title,
      created: product.created_at
    });
  }
}

doit()
  .then(r => console.log('done'))
  .catch(r => console.log(r));
