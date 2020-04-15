import React from 'react';
import Slider from '../../components/slider';

const Recommend = () => {
  const bannerList = [1, 2, 3, 4].map(() => {
    return { imgUrl: "https://w.wallhaven.cc/full/ox/wallhaven-oxv6gl.png" }
  });

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
    </div>
  )
}

export default React.memo(Recommend);