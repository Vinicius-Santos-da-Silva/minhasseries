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

        this.addComentario = this.addComentario.bind(this)
    }

    load(){
        const request = {
            cd_serie: this.props.match.params.id
        }

        console.log(request)

        api.loadSerieById(request)
        .then((res) => {
            console.log(res.data)
            this.setState({
                series: res.data,
                isLoading: false
            });
        })

    }

    componentDidMount() {
        this.setState({ isLoading: true })
        this.load();
    }

    addComentario() {
        const post = {
            id: Object(this.state.series.serie).id,
            comentario: this.refs.comentario.value
        }



        api.addComentario(post)
            .then((res) => {
                console.log(res.data)
                if(res.data.status === 200){
                    this.refs.comentario.value = ''
                    this.load();
                }
                this.setState({
                    isLoading: false,
                })
            })

    }

    renderSeries(series) {
        //console.log(JSON.stringify(series.serie));

        let serie = Object(series.serie);

        
        return (
            <div className="shadow p-3 mb-5 bg-white rounded mx-auto my-5">
                <div className="px-auto py-5">
                    <img src={serie.imagem} className="mx-auto my-1 img-thumbnail" width="150" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{serie.nome}</h5>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Comentario</label>
                            <textarea ref='comentario' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" onClick={this.addComentario} className="btn btn-outline-primary">Adicionar Comentario</button>
                    </div>
                </div>
            </div>
        )
    }

    renderComentarios(series){
        let comentarios = Object.values(Object(series.comentarios));

        return comentarios.map((comentario)=>{
           return (
               <div class="shadow-lg p-3 mb-2 bg-white rounded">

                    <p>{comentario.comentario}</p>

               </div>
            )
        });
    }



    render() {
        return (
            <div>
                <Menu />
                <section className="intro-section">

                    {
                        this.state.isLoading && 
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                    {
                        !this.state.isLoading &&
                        <div className="container">
                            <div id="series" className=" my-auto row list-group">
                                <div className="d-block">
                                    {this.renderSeries(this.state.series)}
                                    {this.renderComentarios(this.state.series)}
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