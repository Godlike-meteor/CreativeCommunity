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
  width: 280px;
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
  cursor: pointer;
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
  cursor: pointer;
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

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-top: 5px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`;

export const AttentionWrapper = styled.div`
  position: relative;
  width: 258px;
  height: 70px;
  padding: 10px;
  line-height: 70px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  cursor: pointer;
  .attention_img {
    width: 70px;
    height: 70px;
    display: block;
  }
`;

export const AttentionTitle = styled.div`
  position: absolute;
  top: 0px;
  left: 100px;
  font-size: 14px;
  color: #333;
`;

export const AttentionDesc = styled.div`
  position: absolute;
  top: 20px;
  left: 100px;
  margin-top: 4px;
  font-size: 12px;
  color: #999;
`;

export const WriterWrapper = styled.div`
  position: relative;
  width: 278px;
  height: 300px;
  margin-top: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  .writer_connect {
    width: 100%;
    height: 260px;
    margin-top: 40px;
  }
`;

export const WriterTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #969696;
`;

export const WriterDesc = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;
  color: #969696;
`;

export const WriterItem = styled.div`
  position: relative;
  top: 10px;
  width: 100%;
  height: 60px;
  .list_img {
    position: absolute;
    top: 6px;
    left: 16px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const WriterInfo = styled.div`
  position: absolute;
  top: 12px;
  left: 75px;
  width: 150px;
  height: 45px;
  .listinfo_title {
    font-size: 14px;
    color: #333;
  }
  .listinfo_desc {
    margin-top: 12px;
    font-size: 12px;
    color: #969696;
  }
`;