import React from 'react';
import { Link } from 'react-router-dom';

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
        <nav>
          <div className='item nav-item'>Home</div>
          <div className='item nav-item'>Commission Terms</div>
          <div className='item nav-item'>
            Prices
            <div className='menu-list' >
              <div className='menu-list-item nav-item'>Twitch Graphics</div>
              <div className='menu-list-item nav-item'>Chibi</div>
              <div className='menu-list-item nav-item'>Sketch</div>
              <div className='menu-list-item nav-item'>Coloring Sketch</div>
              <div className='menu-list-item nav-item'>Headshot</div>
              <div className='menu-list-item nav-item'>Bust Up</div>
              <div className='menu-list-item nav-item'>Waist Up</div>
              <div className='menu-list-item nav-item'>Thigh up/Knee up</div>
              <div className='menu-list-item nav-item'>FullBody</div>
            </div>
          </div>
          <div className='item nav-item'>
            <a
              href="https://www.cognitoforms.com/Shigeruchan/commissionformtoshigeruchan"
              target='_blank'
              rel="noopener noreferrer">Commission Form</a>
          </div>
          <div className='item nav-item'>
            <a
              href="http://www.123formbuilder.com/form-3709189/Question-Form"
              target='_blank'
              rel="noopener noreferrer">Question Form</a>
          </div>
          <div className='item nav-item'>
            <a
              href="https://docs.google.com/spreadsheets/d/1ACQ78otZPYTQAfnT0v2R0gvIbdWNH-4HkgTXer7JmWw"
              target='_blank'
              rel="noopener noreferrer">Waiting list</a>
          </div>
          <div className='item nav-item'>
            <a
              href="https://docs.google.com/spreadsheets/d/1JKIW7c2ZmkLx32aWMNIO8bDVLvrKLhM8lcrN18qrj9c/"
              target='_blank'
              rel="noopener noreferrer">Progress</a>
          </div>
        </nav>
      </header>
    )
  }
}

Header.defaultProps = {

};

export default Header;

