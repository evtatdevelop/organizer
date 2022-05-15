import React from 'react';
import './rest.css';
import './App.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {

  const element = <FontAwesomeIcon icon={faCoffee} />

  return (
    <div className="App">
      <main>
        <h1>Organizer {element}</h1>
      </main>
    </div>
  );
}

export default App;
