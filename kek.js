// require('./lol.js');
// require('./notes.js');
// const validator = require('validator');
// const chalk = import('chalk');
import chalk from 'chalk';
// const chalk = require('chalk');
// const yargs = require('yargs');
// const  yargs = require('yargs');

import yargs from 'yargs';

import fs from 'fs';

// const fs = require('fs');

import * as notes from './notes.js'

// const notes = require('./notes.js');


// const fs = require('fs');
// const lol = require('./lol.js');
// const getNotes = require('./notes.js');

// fs.writeFileSync('kek.txt','kek');

// fs.appendFileSync('kek.txt', ' lol');

// console.log(getNotes());

// console.log(validator.isEmail('lol@kek.com'));

// console.log(chalk.blue("KEK"));

yargs.version('1.1.1');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'kek',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('KEK! ' + argv.body)
        let notesFile = notes.loadNotes('./notes.json');
        console.log(notesFile);
        notes.addNote(notesFile, argv.title, argv.body);
        console.log(notesFile);
        notes.saveNotes(notesFile, './notes.json');
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a  note',
    builder: {
        title: {
            describe: 'Remove a note by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        let notesFile = notes.loadNotes('./notes.json');
        console.log(notesFile);
        notes.removeNote(notesFile, argv.title);
        console.log(notesFile);
        notes.saveNotes(notesFile, './notes.json');
    }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'Title of a note you want to find',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// console.log(yargs.argv);
yargs.parse();



// console.log(process.argv);
// console.log(yargs.argv);