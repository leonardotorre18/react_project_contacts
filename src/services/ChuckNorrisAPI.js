import Axios from 'axios';

export const getRandomJoke = () => {
  // const axios = Axios.create({
  //   baseURL: 'https://randomuser.me/api',
  //   responseType: 'json',
  //   timeout: 5000
  // })
  return Axios.get('https://api.chucknorris.io/jokes/random');
}