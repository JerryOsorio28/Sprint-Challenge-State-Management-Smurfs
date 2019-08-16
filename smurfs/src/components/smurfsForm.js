import React from 'react';

//Only the best hook to grab state
import { useSelector, useDispatch } from 'react-redux'

//import PostData action creator
import { postData } from '../actions'

const SmurfForm = () => {

    let smurfsList = useSelector(state => state.smurfsList)
    console.log(smurfsList)

    const dispatch = useDispatch()

    const changeHandler = (e) => {
        console.log(e.target.value)
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(smurfsList)
    // }


    return (
        <>
            <form>
                <label>
                    Smurf Name:
                    <input 
                        onChange={changeHandler} 
                        type='text'
                        name='name' 
                        placeholder='Name' 
                    />
                </label>
                <label>
                    Smurf Age:
                    <input 
                        onChange={changeHandler} 
                        type='text' 
                        name='age' 
                        placeholder='Age' 
                    />
                </label>
                <label>
                    Smurf Height:
                    <input 
                        onChange={changeHandler} 
                        type='text' 
                        name='height' 
                        placeholder='Height' 
                    />
                </label>
                <button type='submit'>Add Smurf</button>
            </form>
        </>
    )   
};

export default SmurfForm;