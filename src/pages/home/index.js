import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import Attention from './component/Attention';
import { actionCreators } from './store';
import { BackTop } from './style';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends PureComponent {

  handleScrollTop (){
    window.scrollTo(0, 0);
  }

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
          { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
        </HomeWrapper>
      </div>
    )
  }

  componentDidMount () {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
};

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow (e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);