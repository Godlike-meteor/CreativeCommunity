import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from "./style";
import { IconfontStyle } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconfontStyle />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
