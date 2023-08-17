import * as S from './styles';
// import React, { useState } from 'react';
import { useForm } from '../../context/ContextTheme'
import { themeActions } from '../../context/ContextTheme'
import { Link } from 'react-router-dom'
  
function Header() {
  const { state, dispatch } = useForm();

  const handleChangeTheme = () => {
    dispatch({
      type: themeActions.setTheme,
      payLoad: state.theme === 'light' ? 'dark' : 'light'
    });
  };

// your component model here 

return (
  <S.Header theme={state.theme}>
  <div className='container'>
    <h1>Where in the world?</h1>
    <p onClick={handleChangeTheme}>
      <i className={state.theme === 'light' ? 'far fa-moon' : 'fa fa-moon'}></i>
      {state.theme === 'light' ? 'Dark mode' : 'Light mode'}
    </p>
  </div>
  </S.Header>
);
}

export default Header;



