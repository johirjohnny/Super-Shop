import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div>
            {
                bookings.map(book => <li>{book.name} from : {book.checkIn} </li>)
            }
        </div>
    );
};

export default Bookings;