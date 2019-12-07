import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

import Smurf from './Smurf';

import './Smurfs.css';

const Smurfs = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);
    return (
        <div className='smurfs-wrapper'>
            {
                props.smurfs === 0 ? <h2>Loading Smurf Village</h2> : props.smurfs.map(smurf => (<Smurf smurf={smurf} key={smurf.name} />))
            }
        </div>
    );
}

const mapStatesToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStatesToProps,{fetchSmurfs})(Smurfs);