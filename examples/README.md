# Shopify Example

This directory contains a nodejs script, `example.js` that uses a Shopify Element SDK generated by `sdkifier`.

The SDK has already been generated and is represented by the files `shopifySDK.js` and `shopifySDK.ts`.

To run this example, first log into Cloud Elements staging environment and create an Element Instance of the Shopify Element. Retain the Org, User, and Element tokens for the next step.

Next, set an environment variable named `SHOPIFY_AUTH_HEADER` - this should contain the Cloud Elements Authorization tokens. An example would be:

```
export SHOPIFY_AUTH_HEADER="Organization ORGXXX, User USERXXX, Element ELEMXXXX"
```

Then you should be able to run:

```
node example.js
````


## Generating the Shopify Element SDK with `sdkifier`

The Shopify Element SDK was generated using the command:

```
sdkifier element 48 shopify
````