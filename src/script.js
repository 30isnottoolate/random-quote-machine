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

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response => {
      return response.json();
    })
      .then(data => {
      this.setState({
        quotes: data.quotes,
        numOfQuotes: data.quotes.length,
        quote: data.quotes[100].quote,
        author: data.quotes[100].author
      });
    });
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
