'use strict';
const commander = require('commander');

commander
  .command('operation')
  .option("-e, --element <elementid>", "id of the element")
  .action()
  .on('--help', () => {
    console.log('');
    console.log(' Example:');
    console.log('');
    console.log('  $sdkifier element -e 47');
    console.log('');
  })
  .parse(process.argv);

console.log('wtf');
