// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

const msg = getNotes();
const command = process.argv;

// Add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('adding a new note ' + yargs.argv.title);
    }
})

// Remove
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function () {
        console.log('removing a note ' + yargs.argv.title);
    }
})

// Read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('read a note ' + yargs.argv.title);
    }
})

// List
yargs.command({
    command: 'list',
    describe: 'List a notes',
    handler: function () {
        console.log('List notes: ' + yargs.argv.title);
    }
})

// console.log(command);
console.log(yargs.argv.title);

