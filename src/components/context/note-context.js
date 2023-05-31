import React, { useEffect, useState } from "react";
import { list, init, setUpdateState, editNote } from "../indexedDB/indexeddb";
export const AppContext = React.createContext();

export const useNote = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [focusNote, setFocusNote] = useState(null);
    
    useEffect(() => {
        fetchData();
        setUpdateState(fetchData);
    }, []);
    const fetchData = async () => {
        try {
            const result = await list();
            setNotes(result)
        } catch (error) {
            console.log(error)
        }
    }
    const updateNote = (noteId, content) => {
        
        const updatedNotes = notes.map((note) => {
            if (note.id === noteId) {
            return { ...note, text: content };
            }
            return note;
        });
        setNotes(updatedNotes);
        editNote(noteId, content);
    };    
    return {notes, selectedNote, updateNote, setSelectedNote, focusNote, setFocusNote};
}
