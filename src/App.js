import React from 'react';

import Contact from './components/Contact.js';
import ContactList from './components/ContactList';



function App() {
  return (
    <div className="App">
     <Contact name='Christina Payne' image='https://randomuser.me/api/portraits/women/0.jpg' online/>
     <Contact name='Sophia Jackson' image='https://randomuser.me/api/portraits/women/34.jpg' online/>
     <Contact name='Diane Garcia' image='https://randomuser.me/api/portraits/women/57.jpg' />
    </div>
  );
}

export default App;
