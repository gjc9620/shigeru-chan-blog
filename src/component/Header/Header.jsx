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
          <div className='item nav-item'>Commission Form</div>
          <div className='item nav-item'>Question Form</div>
          <div className='item nav-item'>Waiting list</div>
          <div className='item nav-item'>Progress</div>
        </nav>
      </header>
    )
  }
}

Header.defaultProps = {

};

export default Header;

