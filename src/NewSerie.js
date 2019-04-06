import React, { Component } from 'react';
import api from './APIs'


class NewSerie extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      genres: [],
	      isLoading: false
	    }

	    this.saveSeries = this.saveSeries.bind(this)
	}

	componentDidMount(){
     this.setState({  isLoading: true   })

	 api.loadGenres()
	    .then((res)=>{
	      this.setState({
	        isLoading: false,
	        genres: res.data
	      })
	    })

	 }

	 saveSeries(){

	 	const post = {
	 		name: this.refs.name.value, 
	 		status: this.refs.status.value, 
	 		genre: this.refs.genres.value, 
	 		comments: this.refs.comments.value, 
	 	}
	 	console.log(post); 

	 	api.saveSerie(post)
	 		.then((res)=>{console.log(res)})
	 }
	 
	render(){
		const statues = {

			"watched" : "Assistido",
			"watching" : "Assistindo",
			"toWatch" : "Assistir"

		}
		
		return (
			<section className="intro-section">

				<h1>Nova Serie</h1>
				<div className="container">
				<label>Nome:</label>
				Nome: <input type='text' ref='name' className='form-control my-5'/>
				Status: 
					<select ref='status'>
						{
							Object.keys(statues).map( key => <option key={key} value={key}>{statues[key]}</option>)
						}
					</select><br></br>
					Genero: 
					<select ref='genres'>
						{
							this.state.genres.map( key => <option key={key} value={key}>{key}</option>)
						}
					</select><br></br>
				Comentário: <textarea  ref='comments' type='text' className='form-control'></textarea>
				</div>

				<button type='button' onClick={this.saveSeries} >Salvar</button>


			</section>
		)
	}
}

export default NewSerie;