import React from 'react';
import {StyledInput} from './styles';


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function InputComponent(props: Props): React.ReactElement {

  return (
    <input type="text" {...props}/>
  )
}

export default StyledInput.withComponent(InputComponent);