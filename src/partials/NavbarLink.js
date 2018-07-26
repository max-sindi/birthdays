import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarLink extends Component {

  render() {
    const { link, text, activeLink, name } = this.props;
    const isActive = activeLink === name;

    return (
        <li className="nav__item">
          <Link to={`/${link || ''}`} className={`nav__link ${isActive ? 'active' : ''}`}>
            {text}
          </Link>
        </li>
    );
  }
}

export default NavbarLink;
