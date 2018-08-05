import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../Assets/styles/App.css'
import { Layout } from './Layout/Layout';
import Spinner from './Spinner'
import Loadable from 'react-loadable'

const Landing = Loadable({
  loader: () => import ('./Pages/Landing/Landing'),
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

const Social = Loadable({
  loader: () => import('./Pages/Social/Social'),
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
           <Route exact path='/' component={Landing}/>
           <Route path='/contact' component={Contact}/>
           <Route path='/social' component={Social}/>
           <Route path='/developer' component={Developer}/>
           <Route path='/profile' component={Profile}/>
           <Route component= {NoMatch}/>
         </Switch>
        </Layout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
