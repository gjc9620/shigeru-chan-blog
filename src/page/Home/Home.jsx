import React from 'react';
import HR from '../../component/HR';

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
          <h5 className='welcome'>
            Welcome
          </h5>
          <HR />
          <div className='introduce'>
            <div>Welcome to my commission info site!</div>
            <div>Please read through everything before</div>
            <div>ordering or signing up for my waiting list.</div>
          </div>
          <div className='backboard'>
            <div>
              <span className='key'>Status:</span>
              <span className='name'>Closed</span>
            </div>
            <div>
              <span className='key'>Waitlist:</span>
              <span className='name'>Closed</span>
            </div>
          </div>
          <div className='about-me'>
            <h5>Find me at:</h5>
            <div className='hr' />
            <p>Twitter: @<a href="">yulitanbo</a></p>
            <p>Tumblr: <a href="">http://yulipo.tumblr.com</a></p>
            <p>Pixiv: <a href="">http://pixiv.me/snd11</a></p>
            <p>Contact: <a href="">yulitanbo@gmail.com</a></p>
          </div>
        </div>
        
      </section>
    )
  }
}

Header.defaultProps = {

};

export default Header;

