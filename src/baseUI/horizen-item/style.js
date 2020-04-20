import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const List = styled.div`
  display:  inline-flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin: 0;
    color: grey;
    font-size: ${globalStyle['font-size-m']};
  }
`

export const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${globalStyle['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${globalStyle['theme-color']};
    border: 1px solid ${globalStyle['theme-color']};
    opacity: 0.8;
  }
`