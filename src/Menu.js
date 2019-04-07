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

	componentDidMount(){
		if(!sessionStorage.apikey){
			window.location.replace('/login')
		}
	}

	logout(){
		sessionStorage.clear();
		window.location.replace('/login');
	}

	render(){
		return(
			<nav className="navbar navbar-light bg-dark" role="navigation">
			<a className="navbar-brand" href="#">
				<img src="/images/logo.png" width="150" height="40" alt=""/>
			</a>

				<ul className="nav">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							<Link to='/'>Home</Link>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
						<Link to='/about'>Sobre</Link>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<Link to='/new'>Nova Serie</Link>						
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<a onClick={this.logout}>Sair</a>						
						</a>
					</li>
				</ul>	       
	    </nav>
		)
	}
}

export default Menu;