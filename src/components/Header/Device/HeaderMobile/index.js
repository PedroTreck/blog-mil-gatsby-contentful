import React from 'react'
import logo from '../../../../images/logo.png'
import { Link } from 'gatsby'

const HeaderMobile = () => {
  return (
    <div className="header-mobile clearfix" id="header-mobile">
      <div className="header-mobile__logo">
        <Link to={'/'}>
          <img
            src={logo}
            srcSet={logo + ' 2x'}
            alt="Blog MIL"
            className="header-mobile__logo-img"
          />
        </Link>
      </div>
      <div className="header-mobile__inner">
        <a id="header-mobile__toggle" className="burger-menu-icon">
          <span className="burger-menu-icon__line" />
        </a>
        <span
          className="header-mobile__search-icon"
          id="header-mobile__search-icon"
        />
      </div>
      <div className="header-search-form">
        <form action="#" id="mobile-search-form" className="search-form">
          <input
            type="text"
            className="form-control header-mobile__search-control"
            value=""
            placeholder="Enter your search here..."
          />
          <button type="submit" className="header-mobile__search-submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default HeaderMobile
