import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../../components/slider';
import { actions } from './store';

const Recommend = () => {
  const dispatch = useDispatch();
  const { getBanner, getRecommendList, changeLoading } = actions;
  const { bannerList, recommendList, loading } = useSelector(state => ({
    loading: state.getIn(['recommend', 'loading']),
    bannerList: state.getIn(['recommend', 'bannerList']).toJS(),
    recommendList: state.getIn(['recommend', 'recommendList']).toJS()
  }));

  console.log('bannerList__', bannerList, loading);

  // const banner = [1, 2, 3, 4].map(() => {
  //   return { imgUrl: "https://w.wallhaven.cc/full/ox/wallhaven-oxv6gl.png" }
  // });

  useEffect(() => {
    dispatch(changeLoading);
    dispatch(getBanner());
    dispatch(getRecommendList());
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
      {
        recommendList.slice(0, 3).map(item => item.name).join('\n')
      }
    </div>
  )
}

export default React.memo(Recommend);