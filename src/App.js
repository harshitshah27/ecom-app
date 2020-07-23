import React, {Suspense} from 'react';
// import Dashboard from '../src/Components/Shared/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import CircularProgress from '@material-ui/core/CircularProgress';

const Dashboard = React.lazy(() =>
  import('../src/Components/Shared/Dashboard'),
);

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'absolute',
            left: '48%',
            top: '50%',
            // display: 'none',
            // background: transparent URL("../images/loading-big.gif"),
            zIndex: '1000',
          }}>
          <CircularProgress color="primary" size={40} />
        </div>
      }>
      <Provider store={store}>
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={Dashboard} />
            </Switch>
          </>
        </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
