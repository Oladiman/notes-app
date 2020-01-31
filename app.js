const fs=require('fs');
const notes=require('./notes.js')

const yargs= require('yargs');

//add command
yargs.command({
    command:'add',
    describe:'This is to add a note!',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'String',
        },
        body:{
            describe:"Body of the note",
            demandOption:true,
            type:'String',
        },
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
});



//remove command
yargs.command({
    command:'remove',
    describe:'This is to remove a note!',
    builder:{
        title:{
            describe:"Note title!",
            demandOption:true,
            type:'String',
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});





//list command
yargs.command({
    command:'list',
    describe:'This is to list the notes!',
    // builder:{
    //     title:{
    //         describe:"Note titles",
    //         type:'String',
    //     }
    // },
    handler(){
        notes.listNotes();
    }
});


//read command
yargs.command({
    command:'read',
    describe:'This is to read a note!',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'String',
        }

    },
    handler(argv){
        notes.readNote(argv.title);
    }
});






yargs.parse();