import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  line-height:32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #bcbcbc;
  overflow: hidden;
  .list_pic {
    width: 125px;
    heigit: 100px;
    display: block;
    float: right;
    border_radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .list_title {
    font-size: 18px;
    line-height 27px;
    font-weight: bold;
    color: #333;
  }
  .list_desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;