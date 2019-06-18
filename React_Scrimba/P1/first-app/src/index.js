import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyInfo() {
    return (
    <div>
      <h1>Mayank Solan</h1>
      <p>A budding Web Developer</p>
      <ol>
        <li>Mauritius</li>
        <li>Sweden</li>
        <li>New Zealand</li>
      </ol>
    </div>
    )
  }

ReactDOM.render(<MyInfo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
