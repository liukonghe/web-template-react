import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Src/app';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));
