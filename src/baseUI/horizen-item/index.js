import React, { useRef, useEffect } from 'react';
import Scroll from '../scroll/index';
import PropTypes from 'prop-types';
import { List, ListItem } from './style';

const Horizen = (props) => {
  const Category = useRef(null);
  const { list, oldValue, title, handleClick } = props;

  useEffect(() => {
    const categoryDom = Category.current;
    const spans = categoryDom.querySelectorAll('span');
    let totalWidth = 0;
    Array.from(spans).forEach(el => {
      totalWidth += el.offsetWidth;
    });
    console.log(totalWidth);
    categoryDom.style.width = `${totalWidth}px`;
  }, []);

  return (
    <Scroll direction={'horizontal'}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map(item => {
              return (
                <ListItem
                  key={item.key}
                  className={`${item.key === oldValue ? 'selected' : ''}`}
                  onClick={() => handleClick && handleClick(item.key)}>
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  )
}

Horizen.propTypes = {
  list: PropTypes.array,
  oldValue: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
};

Horizen.defaultProps = {
  list: [],
  oldValue: '',
  title: '',
  handleClick: null
};

export default React.memo(Horizen);