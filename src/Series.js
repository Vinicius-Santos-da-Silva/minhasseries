import React , { Component } from   'react'
import api from './APIs'


class Series extends Component{

	constructor(props){
	    super(props)
	    this.state = {
	      series: [],
	      isLoading: false
	    }
	}

	componentDidMount(){
	    this.setState({  isLoading: true   })

		api.loadGenresByGenre(this.props.match.params.genre)
		    .then((res)=>{
		      console.log(res)
		      this.setState({
		        isLoading: false,
		        series: res.data
		      })
		    })

	}

	renderSeries(series){
		return (
			<div key={series.id} className="item  col-xs-4 col-lg-4">
			  <div className="thumbnail">
				<img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
				<div className="caption">
				  <h4 className="group inner list-group-item-heading">
					{series.name}</h4>
				  <div className="row">
					<div className="col-xs-12 col-md-6">
					  <a className="btn btn-success" href="http://www.jquery2dotnet.com">Gerenciar</a>
					</div>
				  </div>
				</div>
			  </div>
			</div>

		)
	}

	render(){
		return(


			<section className="intro-section">
				<h1>Serie de {this.props.match.params.genre} </h1>

				<div id="series" className="row list-group">
					{this.state.series.map( (serie) => this.renderSeries(serie))}
				</div>
			</section>

		)
	}
}

export default Series;