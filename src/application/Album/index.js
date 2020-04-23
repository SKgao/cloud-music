import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Header from '../../baseUI/header';
import { Container, TopDesc, Menu, SongList, SongItem } from './style';

const Album = (props) => {
  const [showStatus, setShowStatus] = useState(true);

  const handleBack = () => {
    setShowStatus(false);
  };

  const currentAlbum = {
    creator: {
      avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
      nickname: "浪里推舟"
    },
    coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
    subscribedCount: 2010711,
    name: "听完就睡，耳机是天黑以后柔软的梦境",
    tracks:[
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
    ]
  }

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack}>
      <Container>
        <Header title={'返回'} handleClick={handleBack}></Header>
        <div>
          <TopDesc>
            <div className="bg">
              <div className="filter"></div>
            </div>
            <div className="img-wrapper">
              <div className="decorate"></div>
              <img src={currentAlbum.coverImgUrl} alt=""/>
              <div className="play-count">
                <i className="iconfont play">&#xe885;</i>
                <span className="count">{Math.floor(currentAlbum.subscribedCount / 1000) /10} 万 </span>
              </div>
            </div>
            <div className="desc-wrapper">
              <div className="title">{currentAlbum.name}</div>
              <div className="person">
                <div className="avatar">
                  <img src={currentAlbum.creator.avatarUrl} alt=""/>
                </div>
                <div className="name">{currentAlbum.creator.nickname}</div>
              </div>
            </div>
          </TopDesc>

          <Menu>
            <div>
              <i className="iconfont">&#xe6ad;</i>评论
            </div>
            <div>
              <i className="iconfont">&#xe86f;</i>点赞
            </div>
            <div>
              <i className="iconfont">&#xe62d;</i>收藏
            </div>
            <div>
              <i className="iconfont">&#xe606;</i>更多
            </div>
          </Menu>

          <SongList>
          </SongList>
        </div>
      </Container>
    </CSSTransition>
  )
}

export default React.memo(Album);