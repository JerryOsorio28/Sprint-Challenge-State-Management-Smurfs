//Import Action creators variables
import { 
    FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    POST_SMURF_START, 
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE,
} from '../actions';


//Setup InitialState
const InitialState = {
    smurfsList: []
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
        case POST_SMURF_START:
        return {
            ...state,
            isLoading: false
        }
        case POST_SMURF_SUCCESS:
        return {
            ...state,
            smurfsList: action.payload
        }
        default:
            return state
    }
}