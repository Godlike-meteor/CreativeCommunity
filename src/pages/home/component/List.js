import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ListItem,
  ListInfo,
  LoadMove
} from '../style';

class List extends Component {
  render () {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className='list_pic' src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className='list_title' >{item.get('title')}</h3>
                  <p className='list_desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMove onClick={() => getMoreList(page)}>更多文字</LoadMove>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapStateToProps, mapDispatch)(List);