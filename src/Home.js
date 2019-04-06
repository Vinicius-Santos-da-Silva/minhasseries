import React, { Component } from 'react'

import { 
  BrowserRouter as Router ,
  Route , Link
} from 'react-router-dom'

import api from './APIs'
import Menu from './Menu'



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

				<div className="card">
					<img src="images/logo.png" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<button  key={genre} type="button" className="btn btn-success"><Link to={`/series/${genre}`}>{genre}</Link></button>
					</div>
				</div>
	    )
    }
	render() {
	    return (
	    	<div>
			
			<Menu />
			

	          <section id="intro" className="intro-section">
	            <div className="container">
	              <div className="row">
	                <div className="col-lg-4">
	        
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