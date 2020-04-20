import React from 'react';
import { LoadingWrapper } from './style';

const LoadingV2 = () => {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>拼命加载中...</span>
    </LoadingWrapper>
  )
}

export default React.memo(LoadingV2);