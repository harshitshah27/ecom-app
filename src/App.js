import React from 'react';
import Dashboard from '../src/Components/Shared/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;
