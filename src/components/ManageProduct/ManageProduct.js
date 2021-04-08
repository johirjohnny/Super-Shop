import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageView from '../ManageView/ManageView';

const ManageProduct = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-woodland-11045.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Link to="/admin">Add Product</Link>
                    <Link to="/manege">Manage Product</Link>
                </div>

                <div>
                    <h1>This is  ManageProduct </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map(event => <ManageView event={event}></ManageView>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;