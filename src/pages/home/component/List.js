import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMove
} from '../style';

class List extends PureComponent {
  render () {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <img className='list_pic' src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className='list_title' >{item.get('title')}</h3>
                    <p className='list_desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
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