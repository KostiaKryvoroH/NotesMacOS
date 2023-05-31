import React from 'react';
import Main from './components/Main';
import Header from './components/header';

import { init, list, addNote, deleteNoteById } from './components/indexedDB/indexeddb';
import '../src/style/app.css'
import { AppContext } from './components/context/note-context';
import { useNote } from './components/context/note-context';

const App = () => {
  init();

  const {notes, selectedNote, updateNote, setSelectedNote, focusNote, setFocusNote} = useNote();
  return (
    <AppContext.Provider
      value={{
        notes,
        selectedNote,
        updateNote,
        setSelectedNote,
        init,
        list, 
        addNote,
        deleteNoteById,
        focusNote,
        setFocusNote
      }}
    >
      <div className="app">
        <Header />
        <Main />
      </div>
    </AppContext.Provider>
  );
};

export default App;