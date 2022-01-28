import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers:{
      "Access-Control-Allow-Origin": "*"
    }
  });


export function getPosts(){
    return instance.get(`/books`)
}