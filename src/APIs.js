import axios from 'axios'

const api = axios.create({
	baseURL:'http://ec2-18-191-78-63.us-east-2.compute.amazonaws.com/api-twitter-codeigniter/index.php/',
	//baseURL:'http://localhost/codeigniter/index.php/',
	headers: {
		'Content-Type': 'application/json',
	}
})

export const loadGenres 		= () 		 => api.get('genres')
export const saveSerie 			= (newSerie) => api.post('series',newSerie);
export const loadGenresByGenre 	= (genre) 	 => api.post('seriesByGenero', genre);
export const login 				= (login) 	 => api.post('login', login);
export const loadSerieById		= (serie) 	 => api.post('SerieById', serie);
export const addComentario		= (data) 	 => api.post('Comentario', data);

const apis = {
	loadGenres : loadGenres,
	saveSerie : saveSerie,
	loadGenresByGenre : loadGenresByGenre,
	login: login,
	loadSerieById: loadSerieById,
	addComentario: addComentario
}

export default apis;