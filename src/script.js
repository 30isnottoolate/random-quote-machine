import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class RandomQuoteMachine extends React.Component {
  render() {
    return (
      <div id="quote-machine">
        RQM
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<RandomQuoteMachine/>);
