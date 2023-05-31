// Workspace.js

import React, { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from './context/note-context';

import '../style/main.css'

const Workspace = () => {
  const { selectedNote, updateNote, deleteNoteById, focusNote, setFocusNote } = useContext(AppContext);
  const [noteContent, setNoteContent] = useState("");

  
  
  const textareaRef = useRef();

  useEffect(() => {
    if (selectedNote) {
      setNoteContent(selectedNote.text);
      
      const formattedTime = selectedNote.lastModified.toLocaleString()
    }
  }, [selectedNote]);

  if (selectedNote) {    
    var formattedTime = selectedNote.lastModified.toLocaleString()
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNoteById(selectedNote.id)
    }
  };

  const focusTextarea = () => {
    textareaRef.current.focus();
    setFocusNote(false)

  }
  if (focusNote) {
    focusTextarea();
  }
  const handleNoteChange = (event) => {
    const updatedContent = event.target.value;
    setNoteContent(updatedContent);
    if (selectedNote) {
      updateNote(selectedNote.id, updatedContent);
    }
    // init();
  };

  return (
    <div className="workspace">
      {selectedNote && (
        <div className="note-editor">
          <p className='note-editor-timesection'>{formattedTime}</p>
          <textarea className='workspace-textarea'
            value={noteContent}
            onChange={handleNoteChange}
            ref={textareaRef}
          />
          <div className='note_action--buttonsection'> 
            <button className='note_action--button' onClick={focusTextarea}>Edit</button>
            <button className='note_action--button' onClick={handleDelete}>Delete</button>
          </div>
        </div>  
      )}
    </div>
  );
};

export default Workspace;
