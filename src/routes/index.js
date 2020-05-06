import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from '../application/Home';
import Rank from '../application/Rank';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Album from '../application/Album';
import Singer from '../application/Singer';

// 路由
const routers = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'}/>
      },
      {
        path: '/recommend',
        component: Recommend,
        key: 'recommend',
        routes: [
          {
            path: '/recommend/:id',
            component: Album
          }
        ]
      },
      {
        path: '/rank',
        component: Rank,
        key: 'rank',
        routes: [
          {
            path: '/rank/:id',
            component: Album
          }
        ]
      },
      {
        path: '/singers',
        component: Singers,
        key: 'singers',
        routes: [
          {
            path: '/singers/:id',
            component: Singer
          }
        ]
      }
    ]
  }
];

export default routers;