import React from 'react';
// import Gallery  from '../page/Gallery';
import routerPage from "../component/routerPage/routerPage";
import asyncComponent from '../component/asyncComponent';

const Home = asyncComponent(() =>
  import('../page/Home').then(module => module.default)
);

const CarouselPage = asyncComponent(() =>
  import('../page/CarouselPage').then(module => module.default)
);

// const {
//   Home,
//   CarouselPage,
// } = asyncRouterBT(
//   '../page/Home',
//   '../page/CarouselPage'
// )

export default {
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      component: ()=><p>home</p>,
    },
    {
      path: "/p",
      component: routerPage(({childRoute})=>{
        return <div>home{childRoute}</div>
      }),
      routes: [
        {
          path: "/yeah",
          component: ()=><p>yeah</p>
        }
      ]
    },
    // {
    //   path: "/gallery",
    //   component: Gallery,
    // },
    {
      path: "/carousel",
      component: CarouselPage,
    }
  ]
};
