import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

import './SmurfForm.css';

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({name: '', age: '', height: ''});

    const handleAddSmurf = event => {
        event.preventDefault();
        props.addSmurf(smurf);
        setSmurf({name: '', age: '', height: ''});
    }

    const handleInputChange = e => {
        e.preventDefault();
        console.log(smurf)
        const {name, value} = e.target;
        setSmurf({...smurf, [name]: value});
    }

    return (
        <div className="smurf-form">
            <form>
                <h2>Add a smurf to the village here:</h2>
                <input type='text' name='name' value={smurf.name} onChange={handleInputChange} placeholder='Name' required />
                <input type='number' name='age' value={smurf.age} onChange={handleInputChange} placeholder='Age' required />
                <input type='number' name='height' value={smurf.height} onChange={handleInputChange} placeholder='Height in cm' required />
                <button onClick={handleAddSmurf} >Add smurf!</button>
            </form>
        </div>
    );
}

export default connect(() => {}, {addSmurf})(SmurfForm);