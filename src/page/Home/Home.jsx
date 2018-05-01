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
            <div>Please read my Term of Service before</div>
            <div>ordering or signing up for my waiting list.</div>
            <div>Thank you! ^_^</div>

          </div>
          <div className='backboard'>
            <div>
              <span className='key'>Status:</span>
              <span className='name'>Open</span>
            </div>
            <div>
              <span className='key'>Waitlist:</span>
              <span className='name'>Open</span>
            </div>
          </div>
          <div className='about-me'>
            <h5>Find me at:</h5>
            <div className='hr' />
            <p>Email: <a href="mailto:2546113944@qq.com">2546113944@qq.com</a></p>
            <p>Deviantart: <a href="http://shigeru-chan.deviantart.com">shigeru-chan</a></p>
            <p>Patreon: <a href="https://www.patreon.com/shigeruchan">shigeruchan</a></p>
            <p>Instagram: <a href="https://instagram.com/shigerunagato/">shigerunagato</a></p>
            <p>Tumblr: <a href="https://www.shigeru-chan.tumblr.com">shigerunagato</a></p>
            <p>Twitter: <a href="https://twitter.com/animeotakudesu">animeotakudesu</a></p>
          </div>
        </div>
        
      </section>
    )
  }
}

Header.defaultProps = {

};

export default Header;

