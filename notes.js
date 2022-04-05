import fs from 'fs';

import chalk from 'chalk';
import { waitForDebugger } from 'inspector';

export let loadNotes = (filePath) => {
    if (!fs.existsSync(filePath)) {
        return [];
    }

    let bufferStr = fs.readFileSync(filePath).toString();
    let data = JSON.parse(bufferStr);

    debugger;

    if (!Array.isArray(data)) {
        return [data];
    }
    return data;
}


export let saveNotes = (notes, filePath) => {
    let data = JSON.stringify(notes);

    fs.writeFileSync(filePath, data);
}


export let makeNote = function(title, body) {
    return { title: title, body: body };
}


export let addNote = function(notes, title, body) {

    let duplicates = notes.filter((note) => note.title === title);

    if (duplicates.length !== 0) {
        console.log('Notes names must be unique');
    } else {
        notes.push(makeNote(title, body));
        console.log("New note added!");
    }
}

export let removeNote = function(notes, title) {
    let foundIdx = notes.findIndex(note => note.title === title);
    if (foundIdx !== -1) {
        notes.splice(foundIdx, 1);
    }
}

export let listNotes = () => {
    console.log("entered list");
    let notes = loadNotes('./notes.json');
    // console.log(notes);
    if (notes.length === 0) {
        console.log(chalk.yellow('Notes are empty'));
        return;
    }

    notes.forEach(element => {
        if (!element.title || !element.body) {
            return;
        }
        console.log(chalk.green(`Note title ${element.title} body: ${element.body} \n`));
    });
}

export let readNote = (title) => {
    console.log('entered read');

    let notes = loadNotes('./notes.json');

    if (notes.length === 0) {
        console.log(chalk.yellow('Notes are empty'));
        return;
    }

    let note = notes.find((note) => note.title === title);
    if (!note) {
        console.log(chalk.red('No note found'));
        return;
    }

    console.log(chalk.green(`Found note: ${note.title} saying: ${note.body}`));
}