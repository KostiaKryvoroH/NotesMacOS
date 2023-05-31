// Sidebar.js

import React, { useContext } from 'react';
import { AppContext } from './context/note-context';
import ListItem from './ListItem';

import '../style/main.css'

const Sidebar = () => {
  const { notes} = useContext(AppContext);


  return (
    <div className="sidebar">
      <ul>
        { notes ? notes.map((note) => (
          <ListItem key={note.id}  note={note}/>
        )) : <p style={{textAlign: 'center'}}>No notes yet</p>}
      </ul>
    </div>
  );
};

export default Sidebar;
//id={note.id} note={note.text}