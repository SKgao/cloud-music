import React from 'react';
import PropTypes from 'prop-types';
import { LoadingWrapper } from './style';

const Loading = (props) => {
  const { show } = props;
  return (
    <LoadingWrapper style={{ display: show ? 'block' : 'none' }}>
      <div></div>
      <div></div>
    </LoadingWrapper>
  )
}

Loading.propTypes = {
  show: PropTypes.bool
};

Loading.defaultProps = {
  show: true
};

export default React.memo(Loading);