
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/"


export const getRequest = async (url: string) => {
    return await axios.get(BASE_URL + url)
}

export const postRequest = async (url: string, payload: any) => {
    return await axios.post(BASE_URL + url, payload)
}

export const updateRequest = (url: string, payload: any) => {
    return axios.put(BASE_URL + url, payload)
}

export const deleteRequest = (url: string) => {
    return axios.delete(BASE_URL + url)
}