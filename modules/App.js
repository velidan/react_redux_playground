import React from 'react';
import NavLink from './NavLink'; 
import Home from './Home';
import { IndexLink } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
	    <div>
	    <h1>Main</h1>
		<ul role="nav">
		  <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/repos" >Repos</NavLink></li>
          <li><NavLink to="/redux" >Redux</NavLink></li>
          <li><NavLink to="/filter-table" >Filter Table</NavLink></li>
        </ul>

        {/* add this */}
        {this.props.children || <Home />}


	    </div>
    	)

  }
}
