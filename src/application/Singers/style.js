import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const NavContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`;

export const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin: 10px 0 10px 10px;
    color: ${globalStyle['font-color-desc']};
    font-size: ${globalStyle['font-size-m']};
  }
`;

export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${globalStyle['border-color']};
  .img-wrapper {
    margin-right: 20px;
    > img {
      border-radius: 3px;
      width: 50px;
      height: 50px;
    }
    .name {
      color: ${globalStyle['font-color-desc']};
      font-size: ${globalStyle['font-size-m']};
      font-weight: 700;
    }
  }
`;