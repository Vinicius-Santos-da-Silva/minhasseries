import React, { Component } from 'react';
import api from './APIs'
import Menu from './Menu'
import { format } from 'url';


class NewSerie extends Component {
	constructor(props) {
		super(props)
		this.state = {
			genres: [],
			isLoading: false
		}

		this.saveSeries = this.saveSeries.bind(this)
	}

	componentDidMount() {
		this.setState({ isLoading: true })

		api.loadGenres()
			.then((res) => {
				console.log(res.data)
				this.setState({
					isLoading: false,
					genres: res.data
				})
			})

	}

	saveSeries() {

		const post = {
			name: 		this.refs.name.value,
			status: 	this.refs.status.value,
			genre:  	this.refs.genres.value,
			comments: 	this.refs.comments.value,
			imagem: 	this.refs.imagem.value
		}

		api.saveSerie(post)
			.then((res) => {
				window.location.replace('series/' + this.refs.genres.value);
			})
	}

	render() {
		const statues = {
			"3": "Assistido",
			"4": "Assistindo",
			"5": "Assistir"
		}

		const section = {
			paddingTop: '20px'
		}

		return (


			<div>
				<Menu />
				<section className="intro-section" style={section}>

					<h1>Nova Serie</h1>

					<div className="container">

						<form className="mb-5 border p-5">


							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="basic-addon1">Nome da Serie</span>
								</div>
								<input type="text" className="form-control" ref='name' placeholder="Ex: Arrow" aria-label="Username" aria-describedby="basic-addon1" />
							</div>

							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="basic-addon1">Imagem</span>
								</div>
								<input type="text" className="form-control" ref='imagem' aria-describedby="basic-addon1" />
							</div>




							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<label className="input-group-text" for="inputGroupSelect01">Status</label>
								</div>
								<select className="custom-select" ref='status' id="inputGroupSelect01">
									{
										Object.keys(statues).map(key => <option key={key} value={key}>{statues[key]}</option>)
									}
								</select>
							</div>

							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<label className="input-group-text" for="inputGroupSelect01">Genero</label>
								</div>
								<select className="custom-select" ref='genres' id="inputGroupSelect01">
									{
										this.state.genres.map(key => <option key={key.id} value={key.id}>{key.genero}</option>)
									}
								</select>
							</div>


							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">Comentario</span>
								</div>
								<textarea className="form-control" ref='comments' aria-label="With textarea"></textarea>
							</div>

							<button type='button' className="btn btn-primary mx-auto mt-5" onClick={this.saveSeries} >Salvar</button>


						</form>
					</div>




				</section>
			</div>
		)
	}
}

export default NewSerie;