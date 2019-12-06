import axios from 'axios';

const api = axios.create({

   baseURL: 'https://cors-anywhere.herokuapp.com/http://redmine.ufes.br'

})

export default api;