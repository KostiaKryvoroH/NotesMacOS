// import idb from 'idb';
import { openDB, deleteDB, wrap, unwrap } from 'idb';

import { AppContext } from '../context/note-context';



let db;
let updateState;
// let request;
// var db = request.result
export function setUpdateState(callback) {
  updateState = callback;
}

export async function init() {
    db = await openDB('notesdb', 2, {
      upgrade(db) {
          if (!db.objectStoreNames.contains('notes')) {
              db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
          }
      },
  });
  list() 
}

export async function list() {

      if (!db) {
        await init();
      } else {
        // console.log('ok')
      }
    let tx = db.transaction('notes');
    let noteStore = tx.objectStore('notes');

    let notes = await noteStore.getAll();

    if (notes.length) {
      
       return notes;
    } else {
        console.log('no')
    }
}

export async function addNote() {
    let text = "New Note";

    let tx = db.transaction('notes', 'readwrite');
    try {
        await tx.objectStore('notes').add({text, lastModified: new Date()});
        // await list();
        await updateState();
    } catch(err) {
        if (err.text == 'ConstraintError') {
          alert("Такая книга уже существует");
          await addNote();
        } else {
          throw err;
        }
      }
}
export async function editNote(id, newText) {
  let tx = db.transaction('notes', 'readwrite');
  let noteStore = tx.objectStore('notes');

  let existingNote = await noteStore.get(id);

  if (existingNote) {
    existingNote.text = newText;
    existingNote.lastModified = new Date();
    try {
      await noteStore.put(existingNote);
      await updateState();
    } catch (err) {
      throw err;
    }
  } else {
    console.log('Note not found');
  }
}

export async function deleteNoteById(id) {
  let tx = db.transaction('notes', 'readwrite');
  let noteStore = tx.objectStore('notes');

  await noteStore.delete(id);
  await updateState();
}