import React from 'react';
import Header from '../Header';
import routerPage from '../routerPage';

class BlogApp extends React.Component {
  render(){
    const { childRoute  }= this.props;
    
    return (
      <div className='blog-app'>
        <div className='page'>
          <Header />
          <main className='mian'>
            { childRoute }
          </main>
          <footer>
            © 2018 Shigeru-chan.
          </footer>
        </div>
        {/*<ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
        </ul>*/}
      </div>
    )
  }
}

export default routerPage(BlogApp);
// export default BlogApp;
