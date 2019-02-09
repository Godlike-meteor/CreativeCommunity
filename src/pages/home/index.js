import React, { Component } from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import Attention from './component/Attention';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends Component {
  render () {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Attention />
            <Writer />
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }
};

export default Home;