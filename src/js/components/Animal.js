import React from "react";
import ReactDOM from "react-dom";

export default function Animal(props){

  let top = Math.floor(Math.random(0,100)*100);
  let left = Math.floor(Math.random(0,100)*100);
  let modifier = props.modifier || '';
  let positionStyles = {top: top+'vh',left:left+'vw',zIndex:'2'};
  return <img className={'animal '+ modifier} src={props.src} alt={props.alt} title={props.title} style={positionStyles} />;
}
