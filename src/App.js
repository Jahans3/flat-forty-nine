import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flat 49 Imperial Wharf
        </a>
        <br/>
        <ul style={{ textAlign: 'left' }}>
          <li>
            <a href="#" className="App-link">
              Leave passive aggressive note
            </a>
          </li>
          <li>
            <a href="#" className="App-link">
              Shopping list
            </a>
          </li>
          <li>
            <a href="#" className="App-link">
              Guest Book
            </a>
          </li>
          <li>
            <a href="#" className="App-link">
              Events
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
