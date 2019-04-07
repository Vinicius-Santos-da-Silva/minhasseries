import React, { Component } from 'react'
import api from './APIs'
import Menu from './Menu'
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'



class Series extends Component {

	constructor(props) {
		super(props)
		this.state = {
			series: [],
			isLoading: false,
			genero: undefined
		}
	}

	componentDidMount() {
		this.setState({ isLoading: true })

		const request = {
			cd_genero: this.props.match.params.genre
		}

		console.log(request)

		api.loadGenresByGenre(request)
			.then((res) => {
				console.log(res)
				this.setState({
					isLoading: false,
					series: res.data,
					genero: res.data[0].cd_genero
				})
			})
	}

	renderSeries(series) {
		const styleCard = {
			width: '18rem',
			height: '18rem',
			color: '#FFF'

		}

		const img = {
			width: '18rem',
			height: '10rem'
		}

		const body = {
			width: '10rem'
		}

		return (
			<div key={series.id} className="mx-5">
				<div className="card" style={styleCard}>
					<img src={series.imagem} style={img} className="card-img-top" alt="..." />
					<div className="card-body mx-auto" style={body}>
						<h5 style={{color:'black'}} className="card-title text-center">{series.nome}</h5>
						<a href="#" className="btn btn-primary btn-block"><Link style={styleCard} to={`/serie/${series.id}`}>Ver Série</Link></a>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Menu />
				<section className="intro-section">

					{
						this.state.isLoading && <span>Carregando, aguarde....</span>
					}
					{
						!this.state.isLoading &&
						<div>
							<h1>Serie de {this.state.genero} </h1>
							<div id="series" className="row list-group">
								<div className="d-flex">
									{this.state.series.map((serie) => this.renderSeries(serie))}
								</div>

							</div>
						</div>
					}




				</section>
			</div>

		)
	}
}

export default Series;