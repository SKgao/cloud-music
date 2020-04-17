import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

const Recommend = () => {
  const dispatch = useDispatch();
  const { getBanner, getRecommendList } = actions;
  const recommendList = useSelector(state => {
    return state.getIn(['recommend', 'recommendList']);
  });
  console.log('recommendList__', recommendList);
  const banner = [1, 2, 3, 4].map(() => {
    return { imgUrl: "https://w.wallhaven.cc/full/ox/wallhaven-oxv6gl.png" }
  });

  useEffect(() => {
    dispatch(getBanner());
    dispatch(getRecommendList());
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <Slider bannerList={banner}></Slider>
      {
        recommendList.map(item => {
          return `<p key=${item}>${item}</p>`;
        })
      }
    </div>
  )
}

export default React.memo(Recommend);