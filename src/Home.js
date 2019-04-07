import React, { Component } from 'react'

import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'

import api from './APIs'
import Menu from './Menu'



class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			genres: [],
			isLoading: false
		}
	}

	componentDidMount() {
		this.setState({ isLoading: true })

		api.loadGenres()
			.then((res) => {
				this.setState({
					isLoading: false,
					genres: res.data
				})
			})

	}



	renderGenreLink(genre) {
		const styleCardImage = {
			width: '18rem',
			height: '18rem'

		}

		const img = {
			width:'100%',
			height: '10rem'
		}

		const styleCard = {
			color: '#FFF',
			textDecorataion:'none'
		}

		return (

			<div key={genre.id} class="card mx-5" style={styleCardImage}>
				<img src={genre.imagem} style={img} class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{genre.genero}</h5>
					<button key={genre.id} type="button" className="btn btn-dark "><Link style={styleCard} to={`/series/${genre.id}`}>Ver Séries</Link></button>
				</div>
			</div>

		)
	}
	render() {
		const styleDivs = {
			display: 'flex'
		}

		return (
			<div>

				<Menu />

				<div className="container">

					<section id="intro" className="intro-section">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">

									<img src="images/logo.png" />
									<p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
								</div>
							</div>
						</div>
					</section>


					<section>
						{
							this.state.isLoading && <span>Carregando, aguarde....</span>
						}
						{
							!this.state.isLoading &&
							<div className="d-flex" style={styleDivs}>

								{
									this.state.genres.map(this.renderGenreLink)
								}
							</div>
						}
					</section>
				</div>
			</div>
		)
	}
}

export default Home