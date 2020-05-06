import { fromJS } from 'immutable';
import { getAlbumDetailRequest } from '../../api/request';

/**
 * states
 */
const defaultState = fromJS({
  currentAlbum: {},
  enterLoading: true
});

/**
 * actionTypes
 */
const actionTypes = {
  CHANGE_CURRENT_ALBUM: 'album/CURRENT_ALBUM',
  CHANGE_LOADING: 'album/CHANGE_LOADING'
};

/**
 * actions
 */
export const actions = {
  changeLoading: data => ({
    type: actionTypes.CHANGE_LOADING,
    data: fromJS(data)
  }),

  getAlbumList: (id) => {
    return (dispatch) => {
      getAlbumDetailRequest(id).then(res => {
        console.log('getAlbumList_res', res);
        dispatch({
          type: actionTypes.CHANGE_CURRENT_ALBUM,
          data: fromJS(res.playlist)
        });
        dispatch(actions.changeLoading(false));
      }).catch (err => {
        console.log ('getAlbumList_error', err);
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
    case actionTypes.CHANGE_CURRENT_ALBUM:
      return state.set('currentAlbum', data);
    case actionTypes.CHANGE_LOADING:
      return state.set('enterLoading', data);
    default:
      return state;
  }
};
