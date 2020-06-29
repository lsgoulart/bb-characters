import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

axios.defaults.baseURL = REACT_APP_API_URL;
axios.defaults.headers.common['Access-Control-Allow-Headers'] =
  'Origin, X-Requested-With, Content-Type, Accept';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const getAllCharacters = async () => axios.get('characters');

export const getCharacterById = async (id) => axios.get(`characters/${id}`);
