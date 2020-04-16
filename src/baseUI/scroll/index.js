import React, { useState, useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Scroll = forwardRef((props) => {
  const { bScroll, setBScroll } = useState();
  const scrollContainerRef = useRef();

  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
  const { onScroll, pullUp, pullDown  } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
  });

  return (
    <ScrollContainer ref={scrollContainerRef}>
      { props.children }
    </ScrollContainer>
  )
})

Scroll.propTypes = {
  direction: PropTypes.oneOf (['vertical', 'horizental']), // 滚动的方向
  click: true, // 是否支持点击
  refresh: PropTypes.bool, // 是否刷新
  onScroll: PropTypes.func, // 滑动触发回调
  pullUp: PropTypes.func, // 上拉加载回调
  pullDown: PropTypes.func, // 下拉加载回调
  pullUpLoading: PropTypes.bool, // 是否显示上拉loading
  pullDownLoading: PropTypes.bool, // 是否显示下拉loading
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool // 是否支持向下吸底
}

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUp: null,
  pullDown: null,
  pullUpLoading: false,
  pullDownLoading: false,
  bounceTop: true,
  bounceBottom: true
}

export default Scroll;