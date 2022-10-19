

import axios from "axios";

const API_KEY = ""

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

const requests = {
    fetchTrending: "",
    fetchNetflixOriginals: "",
    fetchTopRated: "",
    fetchActionMovies: "",
    fetchComedyMovie: "",
    fetchHorrowMovies: "",
    fetchRomanceMovies: "",
    fetchDocumentaries: ""
}

export const getRequest = async (url: string) => {
    return await axios.get(url)
}

export const postRequest = async (url: string, payload: any) => {
    return await axios.post(url, payload)
}

export const updateRequest = (url: string, payload: any) => {
    return axios.put(url, payload)
}

export const deleteRequest = (url: string) => {
    return axios.delete(url)
}