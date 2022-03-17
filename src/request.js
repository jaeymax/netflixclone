const API_KEY = 'c3f1679ae5240ecaaf9b902e1455e3a1';

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with-networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// export default {
//     fetchTrending:`/treding/all/week?api_key${API_KEY}$language=en-US`,
//     fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with-networks=213`,
//     fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
// }