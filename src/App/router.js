import React from 'react';
// import Gallery  from '../page/Gallery';
import routerPage from "../component/routerPage/routerPage";
import asyncComponent from '../component/asyncComponent';

const load = (loadFun)=> asyncComponent(() =>
  loadFun().then(module => module.default)
);

const [
  Home,
  CarouselPage,
  CommissionPolicy,
  DrawFAQ,
] = [
  ()=>import('../page/Home'),
  ()=>import('../page/CarouselPage'),
  ()=>import('../page/CommissionPolicy'),
  ()=>import('../page/DrawFAQ'),
].map(load);

export default {
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/CommissionPolicy",
      component: CommissionPolicy,
    },
    {
      path: "/DrawFAQ",
      component: DrawFAQ,
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
      path: "/twitchGraphics",
      component: CarouselPage,
    }
  ]
};
