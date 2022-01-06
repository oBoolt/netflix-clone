const API_KEY = 'api_key=836fc54610289f3b829e808f409b8d03';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    // const req = await fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`);
    let req = await fetch(`${API_BASE}${endpoint}${API_KEY}&language=pt-BR`)
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch('/discover/tv?with_network=213&')
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch('/trending/all/week?')
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch('/movie/top_rated?')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discover/movie?with_genres=28&')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch('/discover/movie?with_genres=35&')
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/discover/movie?with_genres=27&')
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch('/discover/movie?with_genres=99&')
            },
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?`);
                    break;
                default:
                    break;
            }
        }

        return info;
    }
}