'use strict';

const colors = require('colors');

module.exports = {
  reportError: error => {console.error(`\nError: ${error}\n`.red);process.exit(1)},
  reportSuccess: description => console.log(`\nSDK for ${description} successfully generated\n`.green)
}