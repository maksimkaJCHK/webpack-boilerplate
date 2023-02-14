import { combineReducers } from 'redux';
import { ADD_FULL_NAME, LOAD_DOG, ADD_DOG } from 'const/const';

const reducerForm = (state = { name: '', lastName: '' }, action) => {
  switch(action.type) {
    case ADD_FULL_NAME:
      return {
        ...state,
        name: action.name,
        lastName: action.lastName
      }
    default:
      return state
  }
}

const dogReducer = (state = { error: false, load: false, img: '' }, action) => {
  switch(action.type) {
    case LOAD_DOG:
      return {
        ...state,
        load: true
      }
    case ADD_DOG:
      return {
        ...state,
        load: false,
        img: action.img,
        error: action.error
      }
    default:
      return state
  }
}
const rootReducer = combineReducers({ reducerForm, dogReducer });

export default rootReducer;