import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../api/request';

/**
 * states
 */
const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  isLoading: true
});

/**
 * actionTypes
 */
const actionTypes = {
  CHANGE_BANNER: 'recommend/CHANGE_BANNER',
  CHANGE_RECOMMEND_LIST: 'recommend/RECOMMEND_LIST',
  CHANGE_LOADING: 'recommend/CHANGE_LOADING'
};

/**
 * actions
 */
export const actions = {
  changeLoading: {
    type: actionTypes.CHANGE_LOADING
  },

  getBanner: () => {
    return (dispatch) => {
      getBannerRequest().then(res => {
        dispatch({
          type: actionTypes.CHANGE_BANNER,
          data: fromJS(res.banners)
        })
      }).catch (err => {
        console.log ('getBanner_error', err);
      })
    }
  },

  getRecommendList: () => {
    return (dispatch) => {
      getRecommendListRequest().then(res => {
        dispatch({
          type: actionTypes.CHANGE_RECOMMEND_LIST,
          data: fromJS(res.result)
        });

        dispatch({
          type: actionTypes.CHANGE_LOADING,
          data: fromJS(false)
        })
      }).catch (err=> {
        console.log ('getRecommendList_error', err);
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
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', data);
    case actionTypes.CHANGE_LOADING:
      return state.set('isLoading', data);
    default:
      return state;
  }
};