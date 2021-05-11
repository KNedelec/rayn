import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const apiUrl = 'api.gitguardian.com'
  const key = '3d989e99-cafd-4919-8ef7-36bbefe7eae8'
  const publicGHKey = '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'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
