// import React from 'react';
import Gallery  from '../page/Gallery';
import Home  from '../page/Home';
import BlogApp  from '../component/BlogApp';

export default [{
  path: "/",
  component: BlogApp,
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/gallery",
      component: Gallery,
    }
  ]
}];
