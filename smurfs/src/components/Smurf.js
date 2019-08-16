import React from 'react';

const Smurf = (smurf) => {
    // console.log(smurf)
    return (
        <>
        <h2>{smurf.smurf.name}</h2>
        <h2>{smurf.smurf.age}</h2>
        <h2>{smurf.smurf.height}</h2>
        </>
    )
};

export default Smurf;