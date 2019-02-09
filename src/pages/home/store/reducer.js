// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  }],
  articleList: [{
    id: 1,
    title: '舞一世成殇',
    desc: '一出纸醉金迷闹剧 一袭染尽红尘的衣 唱罢西厢谁盼得此生相许 ——河图《第三十八年夏至》 【壹】 云历六年，最强盛的云国其国主喜得一女...',
    imgUrl: '//upload-images.jianshu.io/upload_images/7342621-223ccd2b38f5157c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '舞一世成殇',
    desc: '一出纸醉金迷闹剧 一袭染尽红尘的衣 唱罢西厢谁盼得此生相许 ——河图《第三十八年夏至》 【壹】 云历六年，最强盛的云国其国主喜得一女...',
    imgUrl: '//upload-images.jianshu.io/upload_images/7342621-223ccd2b38f5157c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '舞一世成殇',
    desc: '一出纸醉金迷闹剧 一袭染尽红尘的衣 唱罢西厢谁盼得此生相许 ——河图《第三十八年夏至》 【壹】 云历六年，最强盛的云国其国主喜得一女...',
    imgUrl: '//upload-images.jianshu.io/upload_images/7342621-223ccd2b38f5157c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  recommendList: [{
    id: 1,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
  }, {
    id: 2,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
  }, {
    id: 3,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  }, {
    id: 4,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  }, {
    id: 5,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default :
      return state;
  }
}