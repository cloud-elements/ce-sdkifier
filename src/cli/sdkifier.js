#!/usr/bin/env node
'use strict';
let commander = require('commander');

commander
    .version('0.1.0')
    .command('platform', 'creates a platform sdk')
    .command('hub', 'creates an sdk for a given hub')
    .command('element', 'creates an sdk for a given element')
    .command('instance', 'creates an sdk for a given instance')
    .parse(process.argv);
