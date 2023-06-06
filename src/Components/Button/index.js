import React from "react";
import './button.css';

function Button({name: nome}) {
    return (
      <div className='container-button'>
        <a>{nome}</a>
      </div>
    );
  }
  
  export default Button;