import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ThePunderdome from './components/thePunderdome';
// import ThePunitentiary from './components/thePunitentiary';
import ThePunitentiary from './components/finished/thePunitentiary';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Route path='/the-punderdome' component={ThePunderdome} />
        <Route path='/the-punitentiary' component={ThePunitentiary} />

        <Route path='/' exact render={() => (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Enter one of the fantastic components below...
              <br />
              <br />
              ...if you dare!
            </p>

            <Link to="/the-punderdome" className="App-link" >
              The Punderdome
            </Link>
            <hr/>
            <Link to="/the-punitentiary" className="App-link" >
              The Punitentiary
            </Link>
          </>
        )} />
      </header>
    </div>
  </BrowserRouter>
);

export default App;
