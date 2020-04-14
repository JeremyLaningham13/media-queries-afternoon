import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownView: false,
    };
  }

  handleToggle = () => {
    this.setState({ dropdownView: !this.state.dropdownView });
  };

  render() {
    return (
      <body>
        <div>
          <h1 className="title">Start Bootstrap</h1>
          <div classname="dropdown-button" onClick={this.handleToggle}>
            Menu
          </div>
        </div>
        {this.state.dropdownView  ? (
            <nav className="dropdown-menu">
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
          ) : null}
        <nav className="desktop-links">
          <span>SERVICES</span>
          <span>PORTFOLIO</span>
          <span>ABOUT</span>
          <span>TEAM</span>
          <span>CONTACT</span>
        </nav>
        <div className="content">
          <h3 className="welcome">Welcome To Our Studio</h3>
          <h3 className="meet">IT'S NICE TO MEET YOU</h3>
          <button className="more">TELL ME MORE</button>
        </div>
      </body>
    );
  }
}

export default Header;
