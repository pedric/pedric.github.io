import React from "react";
import ReactDOM from "react-dom";
import logo from '../../images/logo.svg';

export default function Logo(){
  let styles ={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
  };
  let visuallyHidden = {
    position: 'absolute',
    top: '-9999px',
    left: '-9999px',
    width: '0px',
    height: '0px',
    fontSize: '0px',
  };
  return <div style={styles} className={'logo-container'}><h1><span style={visuallyHidden}>Hello Fredrik</span><img src={logo} alt={'Hello Fredrik Logo'} /></h1></div>;
}
