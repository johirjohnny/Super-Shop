import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function product({ event }) {

    return (

        <div className="col-md-4">
            <img style={{ height: '300px' }} src={event.imageURL} alt="" />
            <h3>{event.name}</h3>
            <h3>{event.price}</h3>
            <Link to={`/checkout/${event._id}`}><button>Buy Now </button></Link>
            
        </div>

    );
};

