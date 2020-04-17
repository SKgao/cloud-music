import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../api/request';

/**
 * states
 */
const defaultState = fromJS({
  bannerList: [11],
  recommendList: [1, 2, 3],
})

/**
 * actionTypes
 */
const actionTypes = {
  CHANGE_BANNER: 'recommend/CHANGE_BANNER',
  CHANGE_RECOMMEND_LIST: 'recommend/RECOMMEND_LIST'
}

/**
 * actions
 */
export const actions = {
  getBanner: () => {
    return (dispatch) => {
      getBannerRequest().then(data => {
        console.log('getBanner_res', data);
        dispatch({
          type: actionTypes.CHANGE_BANNER,
          data: fromJS(data)
        })
      }).catch (err => {
        console.log ('getBanner_error', err);
      })
    }
  },

  getRecommendList: () => {
    return (dispatch) => {
      getRecommendListRequest().then(data => {
        console.log('getRecommendList_res', data);
        dispatch({
          type: actionTypes.CHANGE_RECOMMEND_LIST,
          data: fromJS(data)
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
  switch (type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', data);
    default:
      return state;
  }
}