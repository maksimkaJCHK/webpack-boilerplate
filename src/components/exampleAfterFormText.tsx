import * as React from 'react';
import { useTypeSelector } from '../types/useTypeSelector';

const ExampleAfterFormText: React.FC = () => {
  let { name, lastName } = useTypeSelector(state => state.formReducer);

  return (
    <div className = 'exampleAfterFormText'>
      { name && lastName
        ? <>Привет { name } { lastName }</>
        : 'Поля имя и фамилия не заполнены'
      }
    </div>
  )
}

export default ExampleAfterFormText;