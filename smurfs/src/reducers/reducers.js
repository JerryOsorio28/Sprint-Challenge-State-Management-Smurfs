//Import Action creators variables
import { 
    FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAILURE,
    POST_SMURF_DATA
} from '../actions';


//Setup InitialState
const InitialState = {
    smurfsList: [{
        name: '',
        age: '',
        height: ''
    }]
}

export const reducer = (state = InitialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START:
        return {
            ...state,
            isLoading: true
        }
        case FETCH_SMURF_SUCCESS:
        return {
            ...state,
            isLoading: false,
            smurfsList: action.payload,
        }
        case POST_SMURF_DATA:
        return {
            ...state,
            smurfsList: action.payload
        }
        default:
            return state
    }
}