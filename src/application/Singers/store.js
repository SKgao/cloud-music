import { fromJS } from 'immutable';
import { getHotSingerListRequest, getSingerListRequest } from '../../api/request';

/**
 * states
 */
const defaultState = fromJS({
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  pageCount: 0
});

/**
 * actionTypes
 */
const actionTypes = {
  CHANGE_SINGER_LIST: 'singers/CHANGE_SINGER_LIST',
  CHANGE_PAGE_COUNT: 'singers/PAGE_COUNT',
  CHANGE_ENTER_LOADING: 'singers/ENTER_LOADING',
  CHANGE_PULLUP_LOADING: 'singers/PULLUP_LOADING',
  CHANGE_PULLDOWN_LOADING: 'singers/PULLDOWN_LOADING'
};

/**
 * actions
 */
export const actions = {
  changeSingerList: data => ({
    type: actionTypes.CHANGE_SINGER_LIST,
    data: fromJS(data)
  }),

  changePageCount: data => ({
    type: actionTypes.CHANGE_PAGE_COUNT,
    data: fromJS(data)
  }),

  changeEnterLoading: data => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data: fromJS(data)
  }),

  changePullupLoading: data => ({
    type: actionTypes.CHANGE_PULLUP_LOADING,
    data: fromJS(data)
  }),

  changePulldownLoading: data => ({
    type: actionTypes.CHANGE_PULLDOWN_LOADING,
    data: fromJS(data)
  }),

  // 加载热门歌手
  getHotSingerList: () => {
    return (dispatch, state) => {
      const pageCount = state().getIn(['singers', 'pageCount']);
      const singerList = state().getIn(['singers', 'singerList']).toJS();
      getHotSingerListRequest(pageCount).then(res => {
        console.log('getHotSingerList_res', res);
        if (pageCount === 0) {
          dispatch(actions.changeSingerList(res.artists));
          dispatch(actions.changeEnterLoading(false));
          dispatch(actions.changePulldownLoading(false));
        } else {
          dispatch(actions.changeSingerList([...singerList, ...res.artists]));
          dispatch(actions.changePullupLoading(false));
        }
      }).catch (err => {
        console.log ('getHotSingerList_error', err);
      })
    }
  },

  // 获取对应类别歌手列表
  getSingerList: (category = '', alpha = '') => {
    return (dispatch, state) => {
      const pageCount = state().getIn(['singers', 'pageCount']);
      const singerList = state().getIn(['singers', 'singerList']).toJS();
      getSingerListRequest(category, alpha, pageCount).then(res => {
        console.log('getSingerList_res', res);
        if (pageCount === 0) {
          dispatch(actions.changeSingerList(res.artists));
          dispatch(actions.changeEnterLoading(false));
          dispatch(actions.changePulldownLoading(false));
        } else {
          dispatch(actions.changeSingerList([...singerList, ...res.artists]));
          dispatch(actions.changePullupLoading(false));
        }
      }).catch (err=> {
        console.log ('moreSingerList_error', err);
      })
    }
  }
};

/**
 * reducer
 */
export const reducer = (state = defaultState, action) => {
  const { type, data } = action;
  switch (type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', data);
    case actionTypes.CHANGE_PAGE_COUNT:
      return state.set('pageCount', data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', data);
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', data);
    default:
      return state;
  }
};