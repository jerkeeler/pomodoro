import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Test from './Test';
import store from '../store';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/test" component={Test} />
    </BrowserRouter>
  </Provider>
);

export default Root;
