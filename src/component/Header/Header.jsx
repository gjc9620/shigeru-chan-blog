import React from 'react';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <header className='header'>
        <div>
          <a
            href="#Yuli Commissions"
            className='logo'>
            Yuli Commissions
          </a>
        </div>
      </header>
    )
  }
}

Header.defaultProps = {

};

export default Header;

