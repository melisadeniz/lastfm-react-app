import axios from "axios";

const API_KEY = "e908f48f816b4a2314e9ddeeb138077f";
const BASE_AXIOS = axios.create({baseURL:"http://ws.audioscrobbler.com/2.0"});


//chart.getTopArtists
export const fetchTopArtists = () => BASE_AXIOS.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`)

//artist.getTopAlbums
export const fetchTopAlbums = (artist_url) => BASE_AXIOS.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist_url}&api_key=${API_KEY}&format=json`)

//artist.getTopTracks
export const fetchTopTracks = (artist_url) => BASE_AXIOS.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist_url}&api_key=${API_KEY}&format=json`)


