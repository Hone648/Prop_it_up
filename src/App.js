import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/card';

function App() {
  return (
    <div className="App">
      <div>
          <PersonCard 
          firstname="Hunter"
          lastname="Kam"
          age={24}
          hair="Black"
          />
          <PersonCard 
          firstname="Bob"
          lastname="Dole"
          age={89}
          hair="Brown"
          />
          <PersonCard 
          firstname="Bart"
          lastname="Simpson"
          age={31}
          hair="Yellow"
          />
          <PersonCard 
          firstname="Peter"
          lastname="Piper"
          age={24}
          hair="Blonde"
          />
        </div>
    </div>
  );
}

export default App;
