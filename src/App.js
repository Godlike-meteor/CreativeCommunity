import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from "./style";
import { IconfontStyle } from './statics/iconfont/iconfont'
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconfontStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
