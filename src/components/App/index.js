import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropertyDescription from '../PropertyDescription';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/buildings/1worldtrade">One World Trade Center</Link></li>
            <li><Link to="/buildings/willis">Willis Tower</Link></li>
            <li><Link to="/buildings/432park">432 Park Avenue</Link></li>
          </ul>
          <hr/>
          <Route path="/buildings/:building_id" component={PropertyDescription}/>
        </div>
      </Router>
    );
  }
}

export default App;
