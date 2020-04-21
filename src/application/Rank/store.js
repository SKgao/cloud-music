import { fromJS } from 'immutable';
import { getRankListRequest } from '../../api/request';

/**
 * states
 */
const defaultState = fromJS({
  rankList: [],
  isLoading: true
});

/**
 * actionTypes
 */
const actionTypes = {
  CHANGE_RANK_LIST: 'rank/RANK_LIST',
  CHANGE_LOADING: 'rank/CHANGE_LOADING'
};

/**
 * actions
 */
export const actions = {
  changeIsLoading: data => ({
    type: actionTypes.CHANGE_LOADING,
    data: fromJS(data)
  }),

  getRankList: () => {
    return (dispatch) => {
      getRankListRequest().then(res => {
        console.log('getRankListRequest_res', res);
        dispatch({
          type: actionTypes.CHANGE_RANK_LIST,
          data: fromJS(res.list)
        });
        dispatch (actions.changeIsLoading(false));
      }).catch (err => {
        console.log ('getRankList_error', err);
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
    case actionTypes.CHANGE_RANK_LIST:
      return state.set('rankList', data);
    case actionTypes.CHANGE_LOADING:
      return state.set('isLoading', data);
    default:
      return state;
  }
};
