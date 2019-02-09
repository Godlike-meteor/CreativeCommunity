import React, { Component } from 'react';
import {
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends Component {
  render () {
    return (
      <DetailWrapper>
        <Header>舞一世成殇</Header>
        <Content>
          <img src="//upload-images.jianshu.io/upload_images/7342621-223ccd2b38f5157c.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/864/format/webp" alt="" />
          <p>一出纸醉金迷闹剧,一袭染尽红尘的衣,唱罢西厢谁盼得此生相许,——河图《第三十八年夏至》</p>
          <p>一出纸醉金迷闹剧 ,一袭染尽红尘的衣,唱罢西厢谁盼得此生相许,——河图《第三十八年夏至》</p>
          <p>一出纸醉金迷闹剧 ,一袭染尽红尘的衣,唱罢西厢谁盼得此生相许,——河图《第三十八年夏至》</p>
          <p>一出纸醉金迷闹剧 ,一袭染尽红尘的衣,唱罢西厢谁盼得此生相许,——河图《第三十八年夏至》</p>
        </Content>
      </DetailWrapper>
    )
  }
};

export default Detail;