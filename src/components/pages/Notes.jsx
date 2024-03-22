import React, { useEffect, useState } from 'react';
// import dummyNotes from '../dummy_notes';
import NoteItem from '../NoteItem';
import { CiSearch } from 'react-icons/ci';
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';

const Notes = ({notes}) => {
  const [search, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = () => {
    setFilterNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note;
      }
    }))
  }
  useEffect(handleSearch, [text])

  return (
    <section>
      <header className="notes__header">
        {/* <h2>My Notes</h2> */}
        {!search && <h2>My Notes</h2>}
        {search && <input type='text' value={text} onChange={(e)=> {setText(e.target.value); handleSearch();}} placeholder='keyword...' autoFocus/>}
        <button className='btn' onClick={()=> setShowSearch(prevState => ! prevState)}> {search ? <MdClose/> : <CiSearch/>}</button>
      </header>

      <div className="notes__container">
        {/* {notes.map(note => ( <NoteItem key={note.id} note={note} />))} */}
        {filterNotes.map(note => ( <NoteItem key={note.id} note={note} />))}
      </div>
      <Link to='/create-note' className='btn add__btn'><BsPlusLg/></Link>
    </section>
  );
}

export default Notes;
