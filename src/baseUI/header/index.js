import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Marquee from '../marquee/index';
import { HeaderContainer } from './style';

const Header = forwardRef((props, ref) => {
  const { title, handleClick, isMarquee } = props;
  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back" onClick={handleClick}>&#xe655;</i>
      {
        isMarquee
        ? <Marquee><h1>{title}</h1></Marquee>
        : <h1>{title}</h1>
      }
    </HeaderContainer>
  )
});

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  isMarquee: PropTypes.bool
};

Header.defaultProps = {
  handleClick: () => {},
  title: '标题',
  isMarquee: false
};

export default React.memo(Header);