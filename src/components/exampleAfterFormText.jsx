import React from 'react';
import { useSelector } from 'react-redux';

import bName from '@helpers/helpers'

const ExampleAfterFormText = () => {
  let { name, lastName} = useSelector(state => state.reducerForm );

  return (
    <div className = 'exampleAfterFormText'>
      { (name && lastName)
        ? <>Привет { bName(name) } { bName(lastName) }!!!</>
        : 'Имя и фамилия не заполнены'
      }
    </div>
  )
}

export default ExampleAfterFormText;