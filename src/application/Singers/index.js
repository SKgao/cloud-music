import React from 'react';
import Loading from '../../baseUI/loading';

const Singers = () => {
  return (
    <div>
      Singers
      <Loading></Loading>
    </div>
  )
}

export default React.memo(Singers);