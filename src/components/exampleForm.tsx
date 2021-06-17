import * as React from 'react';
import { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { addForm } from '../store/actions/actions';

const ExampleForm: React.FC = () => {
  let dispatch = useDispatch();
  
  let [ formParam, setFormParam ] = useState({
    name: '',
    lastName: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let el = e.currentTarget;
    let { name, value } = el;
    setFormParam({
      ...formParam,
      [name]: value
    });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { name, lastName } = formParam;
    if(name && lastName) {
      dispatch(addForm(name, lastName));
    }
  }

  return (
    <form className = 'exampleForm' onSubmit = { onSubmit }>
      <div className="exampleForm-row">
        <input type="text" value = { formParam.name} name = "name" onChange = { onChange } placeholder = "Имя" />
      </div>
      <div className="exampleForm-row">
        <input type="text" value = { formParam.lastName} name = "lastName" onChange = { onChange } placeholder = "Фамилия" />
      </div>
      <button>Сохранить значения</button>
    </form>
  )
}

export default ExampleForm;