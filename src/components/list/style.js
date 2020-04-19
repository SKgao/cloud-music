import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const ListWrapper = styled.div`
  max-width: 100%;
    .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
    color: ${globalStyle['font-color']};
  }
`

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ListItem = styled.div`
  position: relative;
  width: 32%;
  .img-wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
      z-index: 1;
    }
    .play-count {
      position: absolute;
      top: 2px;
      right: 2px;
      font-size: ${globalStyle['font-size-s']};
      color: ${globalStyle['font-color-light']} !important;
      line-height: 15px;
      z-index: 1;
     .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 50px;
    text-align: left;
    font-size: ${globalStyle['font-size-s']};
    color: ${globalStyle['font-color-desc']};
    line-height: 1.4;
  }
`