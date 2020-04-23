import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${globalStyle['background-color']};
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active {
    transition: 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

export const TopDesc = styled.div`
  background-size: 20px;
  padding: 5 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 275px;
  position: relative;
  .bg {
    z-index: -1;
    background: url(${props => props.background}) no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur (20px);
    .filter {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.2);
    }
  }
  .img-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 43%, .4), hsla( 0, 0%, 100%, 0));
    }
    .play-count {
      position: absolute;
      top: 2px;
      left: 2px;
      font-size: ${globalStyle['font-size-m']};
      color: ${globalStyle['font-color-light']};
      line-height: 12px;
      .play {
        vertical-align: top;
      }
    }
    > img {
      width: 120px;
      height: 120px;
      border-radius: 3px;
    }
  }
  .desc-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    padding: 0 10px;
    .title {
      max-height: 70px;
      line-height: 1.5;
      font-weight: 700;
      font-size: ${globalStyle['font-size-l']};
      color: ${globalStyle['font-color-light']};
    }
    .person {
      display: flex;
      .avatar {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name {
        line-height: 20px;
        font-size: ${globalStyle['font-size-m']};
        color: ${globalStyle['font-color-desc-v2']};
      }
    }
  }
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px 30px 20px;
  margin: -100px 0 0 0;
  > div {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: ${globalStyle['font-size-s']};
    color: ${globalStyle['font-color-light']};
    z-index: 200;
    font-weight: 500;
    &.iconfont {
      font-size: 20px;
    }
  }
`;

export const SongList = styled.div`

`;

export const SongItem = styled.ul`

`;