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
        <nav>
          <div className='item'>Home</div>
          <div className='item'>Commission Terms</div>
          <div className='item'>
            <div className='nav-item'>Prices</div>
            <div className='menu-list' >
              <div className='menu-list-item'>Twitch Graphics</div>
              <div className='menu-list-item'>Chibi</div>
              <div className='menu-list-item'>Sketch</div>
              <div className='menu-list-item'>Coloring Sketch</div>
              <div className='menu-list-item'>Headshot</div>
              <div className='menu-list-item'>Bust Up</div>
              <div className='menu-list-item'>Waist Up</div>
              <div className='menu-list-item'>Thigh up/Knee up</div>
              <div className='menu-list-item'>FullBody</div>
            </div>
          </div>
          <div className='item'>Commission Form</div>
          <div className='item'>Question Form</div>
          <div className='item'>Waiting list</div>
          <div className='item'>Progress</div>
        </nav>
      </header>
    )
  }
}

Header.defaultProps = {

};

export default Header;

