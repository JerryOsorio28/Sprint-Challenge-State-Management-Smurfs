import React, { useState } from 'react';
import { connect } from 'react-redux';

//import PostData action creator
import { postData } from '../actions'

const SmurfForm = (props) => {

    const [smurf, setSmurf] = useState({name: '', age: '', height: ''});

    //Keeps track of your input and set's value to state
    const changeHandler = (e) => {
        // console.log(e.target.value)
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.postData(smurf)
        console.log(smurf)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label>
                    Smurf Name:
                    <input 
                        onChange={changeHandler} 
                        type='text'
                        name='name'
                        value={smurf.name}
                        placeholder='Name' 
                    />
                </label>
                <label>
                    Smurf Age:
                    <input 
                        onChange={changeHandler} 
                        type='text' 
                        name='age' 
                       value={smurf.age} 
                        placeholder='Age' 
                    />
                </label>
                <label>
                    Smurf Height:
                    <input 
                        onChange={changeHandler} 
                        type='text' 
                        name='height' 
                        value={smurf.height} 
                        placeholder='Height' 
                    />
                </label>
                <button type='submit'>Add Smurf</button>
            </form>
        </>
    )   
};

const mapStateToProps = state => {
    // console.log('from mapStatetoProps', state.smurfsList)
    return {
        smurfsList: state.smurfsList
    }
}

export default connect(mapStateToProps,{ postData })(SmurfForm);