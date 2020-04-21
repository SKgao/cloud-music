import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useSelector, useDispatch } from 'react-redux';
import { forceCheck } from 'react-lazyload';

import Scroll from '../../baseUI/scroll';
import Loading from '../../baseUI/loading';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';

import { actions } from './store';
import { Content } from './style';
// actions
const { getBanner, getRecommendList } = actions;

const Recommend = (props) => {
  const dispatch = useDispatch();
  const { bannerList, recommendList, isLoading } = useSelector(state => ({
    isLoading: state.getIn(['recommend', 'isLoading']),
    bannerList: state.getIn(['recommend', 'bannerList']).toJS(),
    recommendList: state.getIn(['recommend', 'recommendList']).toJS()
  }));

  useEffect(() => {
    if (!bannerList.size) {
      dispatch(getBanner());
    }
    if (!recommendList.size) {
      dispatch(getRecommendList());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
      <Loading show={isLoading}></Loading>
      { renderRoutes(props.route.routes) }
    </Content>
  )
}

export default React.memo(Recommend);