console.log('hmmm')
const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')
console.log(notes)

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    },
    builder:{
        title:{
            describe: "Add a title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Add body",
            demandOption: true,
            type: 'string'
        }
    }

})


//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(argv){
        notes.removeNotes(argv.title)
    },
    builder:{
        title: {
            describe: 'Remove a title',
            demandOption: true,
            type: 'string'
        }
    }
})

//List a note
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function(){
        notes.listNotes()
    }
})

//Read a note

yargs.command({
    describe: "Read a note",
    command: 'read',
    builder: {
        title: {
            describe: 'Add a title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)