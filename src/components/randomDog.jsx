import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadDog } from 'actions/actions';

const RandomDog = () => {
  let { error, load, img } = useSelector(state => state.dogReducer);
  let dispatch = useDispatch();

  const onSubmit = (e) => {
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