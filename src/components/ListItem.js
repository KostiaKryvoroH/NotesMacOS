import React, { useContext } from 'react';
import { AppContext } from './context/note-context';

const ListItem = ({note}) => {
  
  const { selectedNote, setSelectedNote, init } = useContext(AppContext);
  const formattedTime = note.lastModified.toLocaleString([], {hour: '2-digit', minute: '2-digit'})
  const handleItemClick = () => {
    setSelectedNote(note);
  };
  const getFirstLine = (text) => {
    const lines = text.split('\n');
    const firstLine = lines[0].trim();
  
    if (firstLine.length <= 22) {
      return firstLine;
    }
  
    return `${firstLine.slice(0, 17)}...`;
  };
  
  const getSecondLine = (text) => {
    const sentences = text.split('. ');
    
    if (sentences.length > 1) {
      const secondSentence = sentences[1];
      return secondSentence.length <= 50 ? secondSentence : `${secondSentence.substring(0, 50)}...`;
    }
    
    return text.length <= 40 ? text : `${text.substring(0, 25)}...`;
  };
  
  
  
  return (
    <li
      className={`list-item ${note === selectedNote ? 'selected' : ''}`}
      onClick={handleItemClick}
    >
      <div className='list-item_block'>
        <h1>{getFirstLine(note.text)}</h1>
        <div className='time-section'>
            <p>{formattedTime}</p>
            <p className='time-section--text'>{getSecondLine(note.text)}</p>
        </div>

      </div>
    </li>
  );
};

export default ListItem;
