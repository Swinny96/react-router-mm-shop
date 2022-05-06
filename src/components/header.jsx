import * as React from "react"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header-Wrapper">
      <a href="/">
        <img
          className="Header-Logo"
          src="https://mobilemanager.ee.co.uk/CustomerWebCommon/images/logo.png"
          alt="logo"
        />
      </a>
      <a href="/">
        <span className="Header-Text">Mobile Manager</span>
      </a>
    </div>
  </header>
)

export default Header