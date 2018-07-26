import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarLink from '../partials/NavbarLink';
import '../partials/styles/Navbar.css';
import gift from '../assets/media/gift-box-with-a-ribbon-svgrepo-com.svg';

class NavBar extends Component {

  render() {
    const { navbarLinks, activeLink } = this.props.ui;

    return (
      <div className="navbar">
        <div className="navbar__gift">
          <img src={gift} alt="decorator" className="navbar__gift-img" />
        </div>
        <h1 className="navbar-title">
          ДЕНЬ РОЖДЕНИЯ
        </h1>
        <nav className="nav">
          <ul className="nav__list">
            {navbarLinks.map( link => {
              return (
                <NavbarLink {...link} activeLink={activeLink} key={link.name} />
              )
            })}
          </ul>
        </nav>
      </div>
    );
  }

}

export default connect(
  state => ({
    ui: state.ui
  })
)(NavBar);
