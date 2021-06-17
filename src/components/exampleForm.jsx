import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFullName } from '../store/actions/actions';

const ExampleForm = () => {
  let [formParam, setFormParam] = useState({ name: '', lastName: ''});
  let dispatch = useDispatch();

  const onChangeInput = (e) => {
    let { name, value } = e.currentTarget;
    setFormParam({
      ...formParam,
      [name]: value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let { name, lastName } = formParam;

    if(name.length && lastName.length) {
      setFormParam({
        name: '',
        lastName: ''
      });
      dispatch(addFullName(name, lastName));
    }
  }

  return (
    <form className = 'ExampleForm' onSubmit = { onSubmit }>
      <div className="ExampleForm-row">
        <input type = "text" value = { formParam.name } name = "name" onChange = { onChangeInput } placeholder = "Имя" />
      </div>
      <div className="ExampleForm-row">
        <input type = "text" value = { formParam.lastName } name = "lastName" onChange = { onChangeInput } placeholder = "Фамилия" />
      </div>
      <button>Добавить имя и фамилию</button>
    </form>
  )
}

export default ExampleForm;