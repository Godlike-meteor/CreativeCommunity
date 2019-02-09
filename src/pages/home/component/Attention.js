import React, { PureComponent } from 'react';
import {
  AttentionWrapper,
  AttentionTitle,
  AttentionDesc
} from '../style';

class Attention extends PureComponent {
  render () {
    return (
      <AttentionWrapper>
        <img className='attention_img' src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
        <AttentionTitle>下载简书手机App</AttentionTitle>
        <AttentionDesc>随时随地发现和创作内容</AttentionDesc>
      </AttentionWrapper>
    )
  }
};

export default Attention;