import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../api/request';

/**
 * states
 */
const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  loading: false
})

/**
 * actionTypes
 */
const actionTypes = {
  CHANGE_BANNER: 'recommend/CHANGE_BANNER',
  CHANGE_RECOMMEND_LIST: 'recommend/RECOMMEND_LIST',
  CHANGE_LOADING: 'recommend/CHANGE_LOADING'
}

/**
 * actions
 */
export const actions = {
  changeLoading: {
    type: actionTypes.CHANGE_LOADING
  },

  getBanner: () => {
    return (dispatch) => {
      getBannerRequest().then(data => {
        dispatch({
          type: actionTypes.CHANGE_BANNER,
          data: fromJS(data.banners)
        })
      }).catch (err => {
        console.log ('getBanner_error', err);
      })
    }
  },

  getRecommendList: () => {
    return (dispatch) => {
      getRecommendListRequest().then(data => {
        dispatch({
          type: actionTypes.CHANGE_RECOMMEND_LIST,
          data: fromJS(data.result)
        })
      }).catch (err=> {
        console.log ('getRecommendList_error', err);
      })
    }
  }
}

/**
 * reducer
 */
export const reducer = (state = defaultState, action) => {
  const { type, data } = action;
  console.log ('state__', state.get('loading'));
  switch (type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', data);
    case actionTypes.CHANGE_LOADING:
      return state.set('loading', !state.get('loading'));
    default:
      return state;
  }
}