import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/elletaro"
            target="_blank"
            rel="noreferrer"
          >
            Chantelle Dlamini{" "}
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://purple-hyacinth-cloud.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

