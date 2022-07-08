import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class RandomQuoteMachine extends React.Component {
  render() {
    return (
      <div id="quote-machine">
        <p id="text">Quote</p>
        <p id="author">Author</p>
        <button id="new-quote">New Quote</button>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<RandomQuoteMachine/>);
