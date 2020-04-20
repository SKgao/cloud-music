import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad, { forceCheck } from 'react-lazyload';

import Scroll from '../../baseUI/scroll';
import Loading from '../../baseUI/loading';
import Horizen from '../../baseUI/horizen-item';

import { actions } from './store';
import { categoryTypes, alphaTypes } from '../../api/data';
import { NavContainer, ListContainer, List, ListItem } from './style';
// actions
const {
  changePageCount,
  changePullupLoading,
  changePulldownLoading,
  changeEnterLoading,
  getHotSingerList,
  getSingerList
} = actions;

const Singers = () => {
  const [category, setCategory] = useState('');
  const [alpha, setAlpha] = useState('');

  const dispatch = useDispatch();
  const { singerList, enterLoading, pullUpLoading, pullDownLoading, pageCount } = useSelector(state => ({
    singerList: state.getIn(['singers', 'singerList']).toJS(),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount']),
  }));

  useEffect(() => {
    dispatch(getHotSingerList());
  }, [dispatch]);

  // 点击歌手种类
  const handleUpdateCategory = val => {
    setCategory(val);
    searchSingers(val, alpha);
  };

  // 点击歌手首字母
  const handleUpdateAlpha = val => {
    setAlpha(val);
    searchSingers(category, val);
  };

  // 按条件查询歌手列表
  const searchSingers = (myCategory, myAlpha) => {
    dispatch(changePageCount(0));
    dispatch(changeEnterLoading(true));
    dispatch(getSingerList(myCategory, myAlpha));
  };

  // 上拉加载更多
  const handlePullUp = () => {
    dispatch(changePullupLoading(true));
    dispatch(pageCount(pageCount + 1));
    if (category && alpha) {
      dispatch(getSingerList(category, alpha));
    } else {
      dispatch(getHotSingerList());
    }
  };

  // 下拉刷新首页
  const handlePullDown = () => {
    dispatch(changePulldownLoading(true));
    dispatch(pageCount(0));
    if (category && alpha) {
      dispatch(getSingerList(category, alpha));
    } else {
      dispatch(getHotSingerList());
    }
  };

  // 渲染歌手列表
  const renderSingerList = () => {
    return (
      <List>
        {
          singerList.map((item, index) => {
            return (
              <ListItem key={index}>
                <div className="img-wrapper">
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="Singer"/>}>
                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="Singer"/>
                  </LazyLoad>
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  };

  return (
    <>
      <NavContainer>
        <Horizen
          list={categoryTypes}
          title={'分类 (默认热门):'}
          oldValue={category}
          handleClick={val => handleUpdateCategory(val)}>
        </Horizen>
        <Horizen
          list={alphaTypes}
          title={'首字母:'}
          oldValue={alpha}
          handleClick={val => handleUpdateAlpha(val)}>
        </Horizen>
      </NavContainer>

      <ListContainer>
        <Scroll
          pullUp={handlePullUp}
          pullDown = {handlePullDown}
          pullUpLoading = {pullUpLoading}
          pullDownLoading = {pullDownLoading}
          onScroll={forceCheck}>
          { renderSingerList() }
        </Scroll>
        <Loading show={enterLoading}></Loading>
      </ListContainer>
    </>
  )
}

export default React.memo(Singers);