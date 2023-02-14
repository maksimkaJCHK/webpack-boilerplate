import api from 'api/api.js';

const getDog = () => api(`${process.env.RANDOM_DOG}`);

export default getDog;