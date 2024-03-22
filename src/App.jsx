import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './components/pages/Notes';
import CreateNote from './components/pages/CreateNote';
import EditNote from './components/pages/EditNote';
import { useEffect, useState } from 'react';

// import dummyNotes from './components/dummy_notes'

function App() {

  // const [notes, setNotes] = useState(dummyNotes);

  // const [notes, setNotes] = useState([]);
  // console.log(notes);

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  useEffect (()=> {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes}/>} />
          <Route path='/create-note' element={<CreateNote setNotes = {setNotes}/>} />
          <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
