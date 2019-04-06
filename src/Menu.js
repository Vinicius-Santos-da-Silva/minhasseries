import React , { Component } from   'react'
import api from './APIs'
import { 
  BrowserRouter as Router ,
  Route,Link
} from 'react-router-dom'


class Menu extends Component{

	constructor(props){
		super(props)
		this.state = {
		}
	}

	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
	            <div className="container">
	              <div className="navbar-header page-scroll">
	                <a className="navbar-brand page-scroll" href="#page-top">
	                    <img src="images/logo.png" height="30" />
	                </a>
	              </div>

	              <div className="collapse navbar-collapse navbar-ex1-collapse">
	                <ul className="nav navbar-nav">
	                  <li>
	                    <Link to='/'>Menu item</Link>
	                  </li>
	                   <li>
	                    <Link to='/about'>Sobre</Link>
	                  </li>
	                  <li>
	                    <Link to='/new'>Nova Serie</Link>
	                  </li>
	                  <li>
	                    <Link to='/login'>Nova Serie</Link>
	                  </li>
	                </ul>
	              </div>
	            </div>
	        </nav>
		)
	}
}

export default Menu;