import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from './style';

const Header = forwardRef((props, ref) => {
  const { title, handleClick } = props;
  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back" onClick={handleClick}>&#xe655;</i>
      <h1>{title}</h1>
    </HeaderContainer>
  )
});

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string
};

Header.defaultProps = {
  handleClick: () => {},
  title: '标题'
};

export default React.memo(Header);