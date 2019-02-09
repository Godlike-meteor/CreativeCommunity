import React, { Component } from 'react';
import {
  RecommendWrapper,
  RecommendItem
} from '../style';

class Recommend extends Component {
  render () {
    return (
      <RecommendWrapper>
        <RecommendItem />
        <RecommendItem />
      </RecommendWrapper>
    )
  }
};

export default Recommend;