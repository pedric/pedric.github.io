import React from 'react';
import PropTypes from 'prop-types';
import './Header.less';

function Header({ title }) {
  return <div className="header centered">{title}</div>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
