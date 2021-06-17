import api from './api';

const getDog = async (): Promise<{ img: string | null, error: boolean }> => {
  let img: string | null = null;
  let error = false;

  await api(`${process.env.RANDOM_DOG}`)
    .then(request => {
      img = request.data.message;
    })
    .catch(() => {
      error = true;
    });

  return { img, error }
}

export default getDog;