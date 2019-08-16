import React from 'react';

//Only the best hook to grab state
import { useSelector, useDispatch } from 'react-redux'

//import action creators
import { getData } from '../actions/getData';

//import Loader
import Loader from 'react-loader-spinner'

//import Smurf Component
import Smurf from './Smurf';

//import PostData action creator
import { postData } from '../actions'


const SmurfsList = () => {

    const smurfsList = useSelector(state => state)
    // console.log(smurfsList)

    const dispatch = useDispatch();


    return (
        <>
        <h3>Here is the smurfs list:</h3>
        <button onClick={() => dispatch(getData())}>
                {smurfsList.smurfsList.isLoading ? (
                <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={15}
                width={100}
                /> 
                ) : ('See Smurfs villagers')}
        </button>
        {smurfsList.smurfsList.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
        </>
    )
};

export default SmurfsList;