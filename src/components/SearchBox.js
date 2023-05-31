import React, { useContext, useState } from 'react';
import { AppContext } from './context/note-context';

const SearchBox = () => {
  const { notes, setSelectedNote } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');


  const performSearch = (event) => {
    setSearchQuery(event.target.value);

    const filteredNotes = notes.filter((note) =>
      note.text.toLowerCase().includes(searchQuery.toLowerCase())
    );


    if (filteredNotes.length > 0) {
      setSelectedNote(filteredNotes[0]);
    }
  };

  return (
    <div className="search-box">
      <input
        className='search-box--section'
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={performSearch} 
      />
      {/* <button onClick={performSearch}>Search</button> */}
    </div>
  );
};

export default SearchBox;