import React from 'react';
import { useSelector } from 'react-redux';

const ExampleAfterFormText = () => {
  let { name, lastName} = useSelector(state => state.reducerForm );

  return (
    <div className = 'exampleAfterFormText'>
      { (name && lastName)
        ? <>Привет { name } { lastName }!!!</>
        : 'Имя и фамилия не заполнены'
      }
    </div>
  )
}

export default ExampleAfterFormText;