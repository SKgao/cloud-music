import React, { forwardRef } from 'react';
import { SongList, SongItem } from './style';
import { getSingerName } from '../../utils/index';

const SongsList = forwardRef((props, refs) => {
  const { collectCount, showCollect, songs } = props;

  const selectItem = (e, index) => {
    console.log(e, index);
  }

  const renderSongList = list => {
    return (
      <>
        {
          list.map((item, index) => {
            return (
              <li key={item.id} onClick={e => selectItem(e, index)}>
                <span className="index">{index + 1}</span>
                <div className="info">
                  <span>{item.name}</span>
                  <span>
                    { item.ar ? getSingerName(item.ar): getSingerName(item.artists) } - { item.al ? item.al.name : item.album.name}
                  </span>
                </div>
              </li>
            )
          })
        }
      </>
    )
  };

  const renderCollect = count => {
    return (
      <div className="add_list">
        <i className="iconfont">&#xe62d;</i>
        <span > 收藏 ({ Math.floor(count /1000) /10 } 万)</span>
      </div>
    )
  }

  return (
    <SongList ref={refs} showBackground={props.showBackground}>
      <div className="first-line">
        <div className="play-all" onClick={e => selectItem(e, 0)}>
          <i className="iconfont">&#xe6e3;</i>
          <span > 播放全部 <span className="sum">(共 {songs.length} 首)</span></span>
        </div>

        { showCollect ? renderCollect(collectCount) : null}
      </div>

      <SongItem>
        { renderSongList(songs) }
      </SongItem>
    </SongList>
  )
});

export default React.memo(SongsList);