import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Header from '../../baseUI/header';
import { Container } from './style';

const Album = (props) => {
  const [showStatus, setShowStatus] = useState(true);

  const handleBack = () => {
    setShowStatus(false);
  };

  return (
    <CSSTransition
      in={showStatus}
      delay={300}
      className="fly"
      applet={true}
      unmountOnExit
      onExited={props.history.goBack}>
      <Container>
        <Header title={'返回'} handleClick={handleBack}></Header>
      </Container>
    </CSSTransition>
  )
}

export default React.memo(Album);