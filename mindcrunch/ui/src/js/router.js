import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route name="index" path="/" component={App} />
        </div>
      </BrowserRouter>
    )
  }
}
