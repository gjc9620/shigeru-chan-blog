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
        <div className='logo'>
          Shigeru-chan Commissions
          <div className="status-text">
            <span>Status: </span>
            <span className='status'>CLOSED</span>
          </div>
        </div>
      </header>
    )
  }
}

Header.defaultProps = {

};

export default Header;

