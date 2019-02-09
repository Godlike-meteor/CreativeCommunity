import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterTitle,
  WriterDesc,
  WriterItem,
  WriterInfo
} from '../style';

class Writer extends Component {
  render () {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>推荐作者</WriterTitle>
        <i className='iconfont'>&#xe851;</i>
        <WriterDesc>换一批</WriterDesc>
        <div className='writer_connect'>
        {
          list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img
                  className='list_img'
                  src={item.get('imgUrl')}
                  alt=""
                />
                <WriterInfo>
                  <p className='listinfo_title'>{item.get('title')}</p>
                  <p className='listinfo_desc'>{item.get('desc')}</p>
                </WriterInfo>
              </WriterItem>
            )
          })
        }
        </div>
      </WriterWrapper>
    )
  }
};

const mapStateToProps = (state) => ({
  list: state.getIn(['home','writerList'])
});

export default connect(mapStateToProps, null)(Writer);