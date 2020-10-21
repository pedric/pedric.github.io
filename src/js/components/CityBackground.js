import React from "react";
import ReactDOM from "react-dom";
import water from '../../images/water.jpg';
import sky from '../../images/sky.jpg';
import city from '../../images/city.png';

export default function CityBackground(){

  const containerStyles = {
    height: '100vh',
    width: '100vw',
    position: 'relative'
  }
  const cityStyles = {
    position: 'absolute',
    top: '50%',
    right: '0',
    left: '0',
    transform: 'translateY(-50%)',
    maxWidth: '100%',
    zIndex: '1'
  }
  const skyStyles = {
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    width: '115%',
    maxWidth: '120%',
    minHeight: '50vh'
  }
  const waterStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '110%',
    maxWidth: '120%',
    minHeight: '50vh'
  }

  return(
    <div style={containerStyles}>
      <img className={'sky'} style={skyStyles} src={sky} />
      <img className={'city'} style={cityStyles} src={city} />
      <img className={'water'} style={waterStyles} src={water} />
    </div>
  )
}
