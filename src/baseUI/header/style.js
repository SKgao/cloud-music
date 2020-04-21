import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${globalStyle['font-color-light']};
  .back {
    width: 20px;
    font-size: 20px;
    margin-right: 20px;
  }
  > h1 {
    font-size: ${globalStyle['font-size-l']};
    font-weight: 700;
  }
`;