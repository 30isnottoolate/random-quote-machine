import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      numOfQuotes: 0,
      quote: "Loading...",
      author: ""
    };
  }
  render() {
    return (
      <div id="quote-machine">
        <p id="text">{this.state.quote}</p>
        <p id="author">{this.state.author}</p>
        <button id="new-quote">New Quote</button>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<RandomQuoteMachine/>);
