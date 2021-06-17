import api from './api';

const getDog = async () => {
  let message = null;
  let error = false;

  await api(`${process.env.RANDOM_DOG}`)
    .then(request => {
      message = request.data.message;
    })
    .catch(() => {
      error = true;
    });

  return { message, error };
}

export default getDog;