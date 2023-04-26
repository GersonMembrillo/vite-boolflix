import { reactive } from 'vue';

export const store = reactive({
	apiURL: 'https://api.themoviedb.org/3/',

	params: {
		api_key: '7586603b576c9a016771a0ca65601fff',
		query: '',
	},
	imagePath: 'https://image.tmdb.org/t/p/',
	fileSize: 'w342',
	movie: {
		items: [],
		endpoint: 'search/movie',
		error: '',
		loader: false,
	},
	tv: {
		items: [],
		endpoint: 'search/tv',
		error: '',
		loader: false,
	},
	popular: {
		items: [],
		endpoint: 'search/top_rated',
		error: '',
		loader: false,
	},
});

// movies: [],
// series: [],
// apiURL: 'https://api.themoviedb.org/3/',
// endpoint: {
// 	movie: 'search/movie',
// 	tv: 'search/tv',
// },
// params: {
// 	api_key: '7586603b576c9a016771a0ca65601fff',
// 	query: '',
// },
// imagePath: 'https://image.tmdb.org/t/p/',
// fileSize: 'w342',
// errors: {
// 	movie: '',
// 	tv: '',
// },
// loaders: {
// 	movie: false,
// 	tv: false,
// },
