import actions from '../const/const';
import { combineReducers } from 'redux';

import { IFormReducer, IFromActionAdd } from '../../types/formType';
import { TDogReducer } from '../../types/randomDog';

const formReducer = ( state: IFormReducer = { name: '', lastName: '' }, action: IFromActionAdd) => {
  switch (action.type) {
    case actions.ADD_FORM:
      return {
        ...state,
        name: action.name,
        lastName: action.lastName
      }
    default:
      return state;
  }
}

const randomDogreducer = ( state = { load: false, error: false, img: '' }, action: TDogReducer) => {
  switch (action.type) {
    case actions.LOAD_DOG:
      return {
        ...state,
        load: true
      }
    case actions.ADD_DOG:
      return {
        ...state,
        error: action.error,
        img: action.img,
        load: false
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ formReducer, randomDogreducer });

export type TRoorReducer = ReturnType<typeof rootReducer>;

export default rootReducer;