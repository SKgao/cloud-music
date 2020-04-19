import React from 'react';

// routers
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routers from './routes';

// store
import { Provider } from 'react-redux';
import store from './store';

// css
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from  './style';
import './fix.css';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes(routers) }
      </HashRouter>
    </Provider>
  )
}

export default App;
