import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();

  const { direction, click, refresh, bounceTop, bounceBottom } = props;
  const { onScroll, pullUp, pullDown  } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    // 注销BScroll
    return () => {
      setBScroll(null);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    // 滚动事件
    bScroll.on('scroll', value => onScroll(value));
    // 移除滚动监听
    return () => {
      bScroll.off('scroll');
    }
  }, [bScroll, onScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    // 上拉加载
    bScroll.on('scrollEnd', () => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    // 移除上拉监听
    return () => {
      bScroll.off('scrollEnd');
    }
  }, [bScroll, pullUp]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    // 下拉加载
    bScroll.on('touchEnd', (pos) => {
      if (pos.y > 50) {
        pullDown()
      }
    });
    // 移除下拉监听
    return () => {
      bScroll.off('touchEnd');
    }
  }, [bScroll, pullDown]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    // 给外界暴露 refresh 方法
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    // 给外界暴露 getBScroll 方法，提供 bs 实例
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  return (
    <ScrollContainer ref={scrollContainerRef}>
      { props.children }
    </ScrollContainer>
  )
});

Scroll.propTypes = {
  direction: PropTypes.oneOf (['vertical', 'horizontal']), // 滚动的方向
  click: PropTypes.bool, // 是否支持点击
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