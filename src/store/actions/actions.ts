import actions from '../const/const';
import { ILoadDogAction, IAddDogAction, IAddDogProps } from '../../types/randomDog';

export const addForm = (name: string, lastName: string) => {
  return {
    type: actions.ADD_FORM,
    name,
    lastName
  }
}

export const loadDog = (): ILoadDogAction => {
  return {
    type: actions.LOAD_DOG
  }
}

export const addDog = ({ error, img }: IAddDogProps): IAddDogAction => {
  return {
    type: actions.ADD_DOG,
    error,
    img
  }
}