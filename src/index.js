import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBKRpq7ms0lLwUN4is9VCKHAUusKha7X9U';

// Create a new component.  This component should produce HTML.
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
