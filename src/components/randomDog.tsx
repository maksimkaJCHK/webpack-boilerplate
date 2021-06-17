import * as React from 'react';
import { useTypeSelector } from '../types/useTypeSelector';
import { useDispatch } from 'react-redux';
import { loadDog } from '../store/actions/actions';

const RandomDog: React.FC = () => {
  let dispatch = useDispatch();
  let { img, load, error } = useTypeSelector(state => state.randomDogreducer);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loadDog());
  }

  return (
    <form className = 'randomDog' onSubmit = { onSubmit }>
      <div className = 'randomDog-img'>
        {
          load
            ? 'Идет загрузка собачки...'
            : error
                ? 'Сервер не доступен или у вас отсутствует подключение к интернету'
                : img
                  ? <img src = { img } />
                  : <>Картинка не загружена</>
        }
      </div>
      {
        load
          ? <div className = 'button'>Идет загрузка собачки...</div>
          : <button>Загрузить собачку</button>
      }
    </form>
  )
}

export default RandomDog;