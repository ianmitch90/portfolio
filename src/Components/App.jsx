import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/css/App.css'
import { Layout } from './Layout/Layout';
import Landing from './Pages/Landing/Landing';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Social from './Pages/Social/Social';
import Developer from './Pages/Developer/Developer';
import NoMatch from './Pages/NoMatch/NoMatch'


class App extends Component {

  render() {
    return (
      <div className="AppContainer">
       <Layout>
         <BrowserRouter>
         <Switch>
           <Route exact path='/' component={Landing}/>
           <Route path='/contact' component={Contact}/>
           <Route path='/social' component={Social}/>
           <Route path='/developer' component={Developer}/>
           <Route path='/profile' component={Profile}/>
           <Route component= {NoMatch}/>
         </Switch>
         </BrowserRouter>
       </Layout>
      </div>
    );
  }
}

export default App;
