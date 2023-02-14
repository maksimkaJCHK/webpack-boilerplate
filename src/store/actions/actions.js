import { ADD_FULL_NAME, LOAD_DOG, ADD_DOG, ERROR_IN_LOAD_DOG } from 'const/const';

export const addFullName = (name, lastName) => {
  return {
    type: ADD_FULL_NAME,
    name,
    lastName
  }
}

export const loadDog = () => {
  return {
    type: LOAD_DOG,
  }
}

export const addDog = (message) => ({
  type: ADD_DOG,
  img: message,
});

export const errorInLoadDog = () => ({
  type: ERROR_IN_LOAD_DOG,
});