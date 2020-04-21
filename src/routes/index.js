import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from '../application/Home';
import Rank from '../application/Rank';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Album from '../application/Album';

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
        routes: [
          {
            path: '/recommend/:id',
            component: Album
          }
        ]
      },
      {
        path: '/rank',
        component: Rank
      },
      {
        path: '/singers',
        component: Singers
      }
    ]
  }
];

export default routers;