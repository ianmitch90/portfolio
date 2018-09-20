import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../Assets/styles/App.css'
import { Layout } from './Layout/Layout';
import Spinner from './Spinner'
import Loadable from 'react-loadable'

const Landing = Loadable({
  loader: () => import('./Pages/Landing/Landing'),
  loading: Spinner,
});

const Contact = Loadable({
  loader: () => import('./Pages/Contact/Contact'),
  loading: Spinner,
});

const Profile = Loadable({
  loader: () => import('./Pages/Profile/Profile'),
  loading: Spinner,
});

const Developer = Loadable({
  loader: () => import('./Pages/Developer/Developer'),
  loading: Spinner,
});


const NoMatch = Loadable({
  loader: () => import('./Pages/NoMatch/NoMatch'),
  loading: Spinner,
});

class App extends Component {

  render() {
    return (
      <div className="AppContainer">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route role="button" aria-label='Home' exact path='/' component={Landing} />
              <Route role="button" aria-label='Contact' path='/contact' component={Contact} />
              <Route role="button" aria-label='Developer' path='/developer' component={Developer} />
              <Route role="button" aria-label='Profile' path='/profile' component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
