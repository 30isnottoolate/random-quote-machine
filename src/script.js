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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response => {
      return response.json();
    })
      .then(data => {
      let randomIndex = this.randomIndexGen(data.quotes.length);
      this.setState({
        quotes: data.quotes,
        numOfQuotes: data.quotes.length,
        quote: data.quotes[randomIndex].quote,
        author: data.quotes[randomIndex].author
      });
    });
  }

  handleClick() {
    let randomIndex = this.randomIndexGen(this.state.numOfQuotes);
    this.setState((state) => ({
      quote: state.quotes[randomIndex].quote,
      author: state.quotes[randomIndex].author
    }));
  }

  randomIndexGen(numOfQuotes) {
    return Math.floor(Math.random()*numOfQuotes);
  }

  render() {
    return (
      <div id="quote-machine">
        <p id="text">{this.state.quote}</p>
        <p id="author">{this.state.author}</p>
        <button id="new-quote" className="buttons" onClick={this.handleClick}>New Quote</button>
        <a id="tweet-quote" className="buttons" href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)} target="_top">Tweet</a>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<RandomQuoteMachine/>);
