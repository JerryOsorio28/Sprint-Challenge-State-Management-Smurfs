import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const POST_SMURF_DATA = 'POST_SMURF_DATA';


//Build Actions Creators
export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START});
        axios.get('http://localhost:3333/smurfs')
        .then( data => {
            // console.log(data)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: data.data})
        })
        .catch( err => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response})
        })
    };
};

export const postData = smurf => {
    return dispatch => {
        dispatch({ type: POST_SMURF_DATA});
        axios.post('http://localhost:3333/smurfs', smurf)
        .then( data => {
            console.log(data)
            console.log(data.data)
            dispatch({ type: POST_SMURF_DATA, payload: data.data })
        })
        .catch( err => {
            console.log(err)
        })
    };
};