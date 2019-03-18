#!/usr/bin/env node
'use strict';
const commander = require('commander');
const pkg = require('../../package.json')

commander
    .version(pkg.version)
    .command('platform', 'creates a platform sdk')
    .command('hub', 'creates an sdk for a given hub')
    .command('element', 'creates an sdk for a given element')
    .command('instance', 'creates an sdk for a given instance')
    .parse(process.argv);
