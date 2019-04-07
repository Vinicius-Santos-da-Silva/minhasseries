import React, { Component } from 'react'
import api from './APIs'
import Menu from './Menu'
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'



class Serie extends Component {

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
            cd_serie: this.props.match.params.id
        }



        console.log(request)

        api.loadSerieById(request)
            .then((res) => {
                console.log(res)
                this.setState({
                    series: res.data,
                    isLoading: false
                });
            })

    }

    renderSeries(series) {
        return (
            <div className="card">
                <img src={series.imagem} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{series.nome}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
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
                            <div id="series" className="row list-group">
                                <div className="d-flex">
                                    {this.renderSeries(this.state.series)}
                                </div>

                            </div>
                        </div>
                    }




                </section>
            </div>

        )
    }
}

export default Serie;