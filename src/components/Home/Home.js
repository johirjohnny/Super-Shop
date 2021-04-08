import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const Home = () => {


    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className='container'>

            <div className="row">
                {
                    events.length === 0 && <p><CircularProgress />
                        <CircularProgress color="secondary" /></p>
                }
                {
                    events.map(event => <Product event={event}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;