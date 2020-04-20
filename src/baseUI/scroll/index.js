import React, { useState, useEffect, useMemo, useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import Loading from '../loading/index';
import LoadingV2 from '../loading-v2/index';

import { debounce } from '../../utils/index';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PullUpLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`;

export const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`;

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();

  const { direction, click, refresh, bounceTop, bounceBottom } = props;
  const { onScroll, pullUp, pullDown, pullUpLoading, pullDownLoading } = props;

  // 上拉防抖
  const pullUpBebounce = useMemo(() => {
    return debounce(pullUp, 300);
  }, [pullUp]);

  // 下拉防抖
  const pullDownBebounce = useMemo(() => {
    return debounce(pullDown, 300);
  }, [pullDown]);

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
    const handlePullUp = () => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpBebounce();
      }
    };
    bScroll.on('scrollEnd', handlePullUp);
    // 移除上拉监听
    return () => {
      bScroll.off('scrollEnd', handlePullUp);
    }
  }, [bScroll, pullUp, pullUpBebounce]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    // 下拉加载
    const handlePullDown = (pos) => {
      if (pos.y > 50) {
        pullDownBebounce();
      }
    };
    bScroll.on('touchEnd', handlePullDown);
    // 移除下拉监听
    return () => {
      bScroll.off('touchEnd', handlePullDown);
    }
  }, [bScroll, pullDown, pullDownBebounce]);

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
      {/* 滑到底部加载动画 */}
      <PullUpLoading style={{ display: pullUpLoading ? 'block' : 'none' }}>
        <Loading></Loading>
      </PullUpLoading>
      {/* 顶部下拉加载动画 */}
      <PullDownLoading style={{ display: pullDownLoading ? 'block' : 'none' }}>
        <LoadingV2></LoadingV2>
      </PullDownLoading>
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