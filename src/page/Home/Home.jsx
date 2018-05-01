import React from 'react';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <section className='home-page'>
        <div className='show-info'>
          <img src={require('./show.webp')} alt=""/>
        </div>
        <div className='info'>
          <div className='welcome'>
            Welcome
          </div>
          <div className='hr' />
          <div>
            Welcome to my commission info site!
            Please read through everything before
            ordering or signing up for my waiting list.
          </div>
          <div>
            <div>Status: Closed</div>
            <div>Waitlist: Closed</div>
          </div>
          <div>
            <div>Find me at:</div>
            <div className='hr' />
            <div>Please read through everything before</div>
            <div>ordering or signing up for my waiting list.</div>
            <div>Twitter: @yulitanbo</div>
            <div>Tumblr: http://yulipo.tumblr.com</div>
            <div>Pixiv: http://pixiv.me/snd11</div>
            <div>Contact: yulitanbo@gmail.com</div>
            <div>header character belongs to @xiaociiao</div>
          </div>
        </div>
        
      </section>
    )
  }
}

Header.defaultProps = {

};

export default Header;

