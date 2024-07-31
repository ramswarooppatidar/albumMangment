import axios from 'axios';
const API_URL = "https://jsonplaceholder.typicode.com/albums";

export const getAlbum =()=> axios.get(API_URL);

export const addAlbum =(album) => axios.post(API_URL, album);

export const updateAlbum = (id, album) => axios.put(`${API_URL}/${id}`, album)

export const deleteAlbum = (id, album) => axios.delete(`${API_URL}/${id}`, album)