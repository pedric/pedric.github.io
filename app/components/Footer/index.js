import React from 'react';
import MenuData from './MenuData';
import GradientBorder from './GradientBorder'
import Menu from './Menu'

function Footer(props){

  const siteMenu = MenuData.siteMenu;
  const categoryMenu = MenuData.categoryMenu;
  const externalMenu = MenuData.externalMenu;

  const styles = {
    'position':'relative',
    'display': 'flex',
    'justifyContent': 'flex-start',
    'flexWrap':'wrap'
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
