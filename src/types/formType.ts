import actions from '../store/const/const';

export interface IFormReducer {
  name: string,
  lastName: string
}

export interface IFromActionAdd {
  type: actions.ADD_FORM,
  name: string,
  lastName: string
}