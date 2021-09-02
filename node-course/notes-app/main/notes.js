/**
 * Custom functions for notes app file management
 * @param getNotes 'Get all stored notes'
 * @param addNote 'Adds a new note'
 * @param loadNotes 'Load all stored notes'
 * 
 * @requires fs FileSystem management Node module.
 */
const fs = require('fs');

const getNotes = () => 'Your notes...';

const addNote = ( title, body ) => {

  // API
  const notes = loadNotes();

  // Duplicate notes functionality
  const duplicateNotes = notes.filter( ( note ) => {
    return note.title === title;
  });

  if( duplicateNotes.length === 0 ) {

    // Append New Notes
    notes.push({ title, body });
    
    // Store notes in notes.json file
    saveNotes( notes );
    console.log('New note added!');
  } else {
    console.log('New title taken!');
  }

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON );
}

const loadNotes = () => {

  /**
   * Errors handling
   */
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON   = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes, // getNotes : getNotes
  addNote // addNote : addNote
}