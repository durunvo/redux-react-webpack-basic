const LOAD = 'LOAD';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

const initialState = {
  loading: false,
  error: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        loading: true,
        error: false
      };
    case LOAD_SUCCESS:
      return {
        loading: false,
        error: false
      };
    case LOAD_FAIL:
      return {
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

export function loadAndSuccess() {
  return dispatch => {
    dispatch({
      type: LOAD
    });
    //SIMULATE FETCH
    setTimeout(()=>{
      dispatch({
        type: LOAD_SUCCESS
      });
    }, 3000);
  }
}

export function loadAndFail() {
  return dispatch => {
    dispatch({
      type: LOAD
    });
    //SIMULATE FETCH
    setTimeout(()=>{
      dispatch({
        type: LOAD_FAIL
      });
    }, 3000);
  }
}
