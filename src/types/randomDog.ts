import actions from '../store/const/const';

// Редюсеры

export interface ILoadDogReducer {
  type: actions.LOAD_DOG,
  load: boolean
}

export interface IAddDogReducer {
  type: actions.ADD_DOG,
  img: string | null,
  error: boolean
}

export type TDogReducer = ILoadDogReducer | IAddDogReducer;

//Акции

export interface ILoadDogAction {
  type: actions.LOAD_DOG
}

export interface IAddDogAction {
  type: actions.ADD_DOG,
  img: string | null,
  error: boolean
}

export interface IAddDogProps {
  img: string | null,
  error: boolean
}