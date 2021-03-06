import React, { Component } from 'react'

import { 
  BrowserRouter as Router ,
  Route,Link
} from 'react-router-dom'

import Home from './Home'
import NewSerie from './NewSerie'
import Series from './Series'
import Serie from './Serie.js'
import Login from './Login'


class App extends Component {
  render() {
    const About = () => <section className="intro-section" ><h1>Sobre</h1></section>
    const Menu = () => {
      return(
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="images/logo.png" height="30" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to='/'>Menu item</Link>
                  </li>
                   <li>
                    <Link to='/about'>Sobre</Link>
                  </li>
                  <li>
                    <Link to='/new'>Nova Serie</Link>
                  </li>
                  <li>
                    <Link to='/login'>Nova Serie</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      )
    }
    
    return (

      <Router>
        <div>
          

          <Route  exact path='/' component={Home} />
          <Route  exact path='/about' component={About} />
          <Route  exact path='/series/:genre' component={Series} />
          <Route  exact path='/serie/:id' component={Serie} />
          <Route  exact path='/new' component={NewSerie} />
          <Route  exact path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
