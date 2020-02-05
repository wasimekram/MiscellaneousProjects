const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}
const addNotes = (title, body) => {
    const notes = loadnotes()
    console.log("before write" + notes)

    let duplicateNotes = notes.filter((note) => note.title === title)
    console.log("duplicate notes " + duplicateNotes)
    if (duplicateNotes.length ===0)
    {
        notes.push({
            title: title,
            body : body
        })
        saveNotes(notes)
        console.log("New note added")
    }
    else
    {
        console.log("Note title already taken!")
    }
}

const removeNotes = function (title) {
    const notes = loadnotes()
    let updated = notes.filter((note) => note.title !== title)
    if (updated.length === notes.length)
    {
        console.log(chalk.bgRed("No match found"))
    }
    else{
        console.log(chalk.black.bgGreen(notes.length - updated.length + " Notes removed"))
        saveNotes(updated)
    }

}

const saveNotes = (notes) => {
    notes = JSON.stringify(notes)
    let file = fs.writeFileSync('notes.json', notes)
}
const loadnotes = function () {

    try {
        let file = fs.readFileSync('notes.json')
        let str = file.toString()
        let notes = JSON.parse(str)

        return notes

    } catch (e) {
        return []
    }

}

const listNotes = ()=> {
    let notes = loadnotes()
    notes.forEach((note) => {
        console.log(chalk.green.inverse("title is " + note.title + " body is " + note.body))
    })

}



const readNote = (title)=> {
    notes = loadnotes()
    find  = notes.find((note) => note.title === title)

    debugger

    if (find)
    {
        console.log(chalk.inverse(find.title))
        console.log(find.body)
    }
    else
    {
        console.log(chalk.red.inverse("No note found"))
    }
}

module.exports={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote

}