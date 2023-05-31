import React, { useContext } from "react";
import { AppContext } from "./context/note-context";
import SearchBox from "./SearchBox";
import '../style/header-style.css'

const Header = () => {
    const { addNote, selectedNote, deleteNoteById, setFocusNote} = useContext(AppContext)
    const addNodeHandler = async (event) => {
        addNote()
    }
    const deleteNoteHandler = (event) => {
        if (selectedNote) {
            if (window.confirm('Are you sure you want to delete this note?')) {
                deleteNoteById(selectedNote.id)
              }
        }
    }
    const focusTextarea = () => {
        if (selectedNote) {
            setFocusNote(true)   
        }
      }
    return (
        <div className="header_section">
            <div className="header_section-left"> 
                <ul className="header_section-left--list">
                    <li className={`action-list add_notes`}><button onClick={addNodeHandler} className='action--button'><img className='action--photo' src="../img/1.png" alt="add notes"/></button></li>
                    <li className={`action-list delete_notes`}><button onClick={deleteNoteHandler} className="action--button"><img className={`action--photo ${!selectedNote ? 'action--photo--blocked' : ''}`} src="../img/2.png" alt="delete notes"/></button></li>
                    <li className={`action-list edit_notes`}><button onClick={focusTextarea} className="action--button"><img className={`action--photo ${!selectedNote ? 'action--photo--blocked' : ''}`} src="../img/3.png" alt="edit notes"/></button></li>
                </ul>
            </div>
            <div className="header_section-right">
                <SearchBox />
            </div>
        </div>
    )
}

export default Header;