import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const RankContainer = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  .offical, .global {
    margin: 10px 5px;
    padding: 15px;
    font-weight: 700;
    font-size: ${globalStyle['font-size-m']};
    color: ${globalStyle['font-color-desc']};
  }
`;

export const List = styled.ul`
  margin-top: 10px;
  padding: 0 5px;
  display: ${props => props.globalRank ? 'flex' : ''};
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${globalStyle['background-color']};
  &:after {
    content: '';
    display: block;
    width: 32vw;
  }
`;

export const ListItem = styled.li`
  display: ${props => props.tracks.length ? 'flex' : ''};
  padding: 3px 0;
  border-bottom: 1px solid ${globalStyle['border-color']};
  .img-wrapper {
    width: ${props => props.tracks.length ? '27vw' : '32vw'};
    height: ${props => props.tracks.length ? '27vw' : '32vw'};
    border-radius: 3px;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient (hsla(0, 0%, 100%, 0), hsla(0, 0%, 43%, 0.4));
    }
    .update-frequecy {
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${globalStyle['font-size-ss']};
      color: ${globalStyle['font-color-light']};
    }
  }
`;

export const SongList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  > li {
    font-size: ${globalStyle['font-size-s']};
    color: grey;
  }
`;