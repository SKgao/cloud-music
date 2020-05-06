import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useSelector, useDispatch } from 'react-redux';

import Scroll from '../../baseUI/scroll';
import Loading from '../../baseUI/loading';
import { RankContainer, List, ListItem, SongList } from './style';

import { actions } from './store';
import { filterIndex } from '../../utils/index';
import { EnterLoading } from '../Singers/style';
// actions
const { getRankList } = actions;

const Rank = (props) => {
  const dispatch = useDispatch();
  const { rankList, isLoading } = useSelector(state => ({
    rankList: state.getIn(['rank', 'rankList']).toJS(),
    isLoading: state.getIn(['rank', 'isLoading'])
  }));
  const globalStartIndex = filterIndex(rankList);
  const officialList = rankList.slice(0, globalStartIndex);
  const globalList = rankList.slice(globalStartIndex);

  useEffect(() => {
    if (!rankList.size) {
      dispatch(getRankList());
    }
    // eslint-disable-next-line
  }, []);

  // 进入详情页
  const enterDetail = (detail) => {
    if (detail.id) {
      props.history.push (`/rank/${detail.id}`)
    } else {
      console.log('暂无相关数据');
    }
  }

  // 渲染榜单数据
  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {
          list.map((item) => {
            return (
              <ListItem key={item.coverImgId} tracks={item.tracks} onClick={() => enterDetail(item)}>
                <div className="img-wrapper">
                  <img src={item.coverImgUrl} alt=""/>
                  <div className="decorate"></div>
                  <span className="update-frequecy">{item.updateFrequency}</span>
                </div>
                { renderSongList(item.tracks) }
              </ListItem>
            )
          })
        }
      </List>
    )
  };

  // 渲染歌曲列表
  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {
          list.map((item, index) => {
            return <li key={index}>{index + 1}. {item.first} - {item.second}</li>;
          })
        }
      </SongList>
    ) : null;
  };

  const displayStyle = { display: isLoading ? 'show' : 'block' };

  return (
    <RankContainer>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}> 官方榜 </h1>
            { renderRankList(officialList) }
          <h1 className="global" style={displayStyle}> 全球榜 </h1>
            { renderRankList(globalList, true) }
          { isLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null }
        </div>
      </Scroll>
      { renderRoutes(props.route.routes) }
    </RankContainer>
  )
}

export default React.memo(Rank);