import React, { Component } from 'react'
import api from './APIs'


class Login extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: null,
			senha: null
		}

		this.login = this.login.bind(this)
	}

	login() {

		const post = {
			email: this.refs.email.value,
			senha: this.refs.senha.value,
		}
		console.log(post);

		api.login(post)
			.then((res) => {
				console.log(res.data)
				sessionStorage.setItem('apikey' , res.data.email);
				window.location.href = '/'

			})
	}

	render() {

		const form = {
			width: '400px'
		}
		return (
			<section className="intro-section text-center px-5 mx-auto">


				<form className="form-signin mx-auto" style={form}>
					<img src="images/logo.png" className="card-img-top" alt="" />
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">Email</span>
						</div>
						<input type="text" ref="email" className="form-control" aria-describedby="basic-addon1" />
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">Senha</span>
						</div>
						<input type="password" ref="senha" className="form-control"  aria-describedby="basic-addon1" />
					</div>

					<button className="btn btn-lg btn-primary btn-block" onClick={this.login} type="button">Login</button>
				</form>
			</section>

		)
	}
}

export default Login;