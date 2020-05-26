import React from 'react';
import MenuData from './MenuData';
import Works from 'data/Works.js'
import GradientBorder from './GradientBorder'
import Menu from './Menu'

function Footer(props){

  let tags = [];
  let temp = [];

  for(let i=0;i<Works.length;i++){
    if(Works[i].categories){
      for(let j=0;j<Works[i].categories.length;j++){
        if(!temp.find(element => element === Works[i].categories[j])) {
          let tag = Works[i].categories[j]
          let menuPost = {'name': tag, 'target': window.location.origin+'/tags/'+tag, 'color': '#D72C6D'}
          temp.push(tag)
          tags.push(menuPost)
        }
      }
    }
  }

  const siteMenu = MenuData.siteMenu;
  const categoryMenu = tags;
  const externalMenu = MenuData.externalMenu;

  const styles = {
    'position':'relative',
    'display': 'flex',
    'justifyContent': 'flex-start',
    'flexWrap':'wrap',
    'marginTop': '80px'
  }

  return(
    <footer style={styles}>
      <GradientBorder />
      <Menu items={siteMenu} />
      <Menu items={categoryMenu} />
      <Menu items={externalMenu} />
    </footer>
  )
}

export default Footer;
