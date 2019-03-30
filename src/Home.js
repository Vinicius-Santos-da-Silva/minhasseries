import React, { Component } from 'react'

import { 
  BrowserRouter as Router ,
  Route , Link
} from 'react-router-dom'

import api from './APIs'


class Home extends Component {
	
	 constructor(props){
	    super(props)
	    this.state = {
	      genres: [],
	      isLoading: false
	    }
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

    renderGenreLink(genre){
	    return (
	      <span key={genre}><Link to={`/series/${genre}`}>{genre}</Link></span>
	    )
    }
	render() {
	    return (
	    	<div>
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
	              <div>
	              Ver series do Genero:
	                {
	                	this.state.genres.map(this.renderGenreLink)
	                }
	              </div>
	            }
	          </section>
	         </div>
    	)
    }
}

export default Home