import api from '@api/api.js';

const getDog = () => api.get(`${process.env.RANDOM_DOG}`);

export default getDog;