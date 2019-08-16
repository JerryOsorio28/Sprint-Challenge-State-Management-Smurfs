import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

//Post exports
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';


//Build Actions Creators
export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START});
        axios.get('http://localhost:3333/smurfs')
        .then( data => {
            console.log(data)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: data.data})
        })
        .catch( err => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response})
        })
    };
};

export const postData = smurf => {
    return dispatch => {
        dispatch({ type: POST_SMURF_START});
        axios.post('http://localhost:3333/smurfs', smurf)
        .then( data => {
            console.log(data)
            dispatch({ type: POST_SMURF_SUCCESS, payload: data.data })
        })
        .catch( err => {
            dispatch({ type: POST_SMURF_FAILURE, payload: err.response })
        })
    };
};