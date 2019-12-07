import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';


export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: `${err.response.status} ${err.response.statusText}`});
        });
}

export const addSmurf = smurf => dispatch => {
    smurf.height += 'cm';
    dispatch({ type: ADD_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
        })
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: smurf})
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: err})
        });
}