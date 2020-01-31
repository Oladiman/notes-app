const chalk=require('chalk')
const fs=require('fs')


//add note function
const addNote=(title,body)=>{
    const notes=loadNotes()
    debugger
    const duplicateNote=notes.find((note)=>note.title===title);
    if (!duplicateNote){
        notes.push({
            title:title,
            body:body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note!"));
    }else{
        console.log(chalk.red.inverse("Note title taken!"));
    }


}


//remove a note function
const removeNote=(title)=>{
    
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>note.title===title);

    if (notesToKeep==0){
        console.log(chalk.red.inverse("note doesn't exist!"));
    }else{
        notes.pop({
            title:title,
        })

    }  
    saveNotes(notes);
}

//read a note function
const readNote=(title) =>{
    const notes=loadNotes()
    const note=notes.find((note)=>note.title===title);
    if (!note){
        console.log(chalk.red.inverse("Note doesn't exist"));
    }else{
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }

}

//list note function
const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse("Your notes"));
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes=()=>{

    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (e) {
        return []       
    }

}





module.exports={
    readNote:readNote,
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote,
    listNotes:listNotes,
};