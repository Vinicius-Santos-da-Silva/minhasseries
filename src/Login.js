import React , { Component } from   'react'
import api from './APIs'


class Login extends Component{

	constructor(props){
		super(props)
		this.state = {
			email: null,
			senha:null
		}

		 this.login = this.login.bind(this)
	}

	login(){

	 	const post = {
	 		email: this.refs.email.value, 
	 		senha: this.refs.senha.value, 
	 	}
	 	console.log(post); 

	 	api.login(post)
	 		.then((res)=>{console.log(res)})
	 }

	render(){
		return(
			<section className="intro-section text-center px-5">
				

				<form className="form-signin">
					<img src="images/logo.png" className="card-img-top" alt=""/>
					<label for="inputEmail" className="sr-only">Email address</label>
					<input type="text" ref="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
					
					<label for="inputPassword" className="sr-only">Password</label>
					<input type="password" ref="senha" id="senha" className="form-control" placeholder="Password" required=""/>					
					
					<button className="btn btn-lg btn-primary btn-block"  onClick={this.login} type="button">Sign in</button>
				</form>
			</section>

		)
	}
}

export default Login;