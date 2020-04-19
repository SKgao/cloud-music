import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { forceCheck } from 'react-lazyload';

import Scroll from '../../baseUI/scroll';
import Loading from '../../baseUI/loading';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import { actions } from './store';
import { Content } from './style';

const Recommend = () => {
  const dispatch = useDispatch();
  const { getBanner, getRecommendList } = actions;
  const { bannerList, recommendList, isLoading } = useSelector(state => ({
    isLoading: state.getIn(['recommend', 'isLoading']),
    bannerList: state.getIn(['recommend', 'bannerList']).toJS(),
    recommendList: state.getIn(['recommend', 'recommendList']).toJS()
  }));

  console.log('bannerList__', bannerList, isLoading);

  // const banner = [1, 2, 3, 4].map(() => {
  //   return { imgUrl: "https://w.wallhaven.cc/full/ox/wallhaven-oxv6gl.png" }
  // });

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
      { isLoading ? <Loading></Loading> : null }
    </Content>
  )
}

export default React.memo(Recommend);