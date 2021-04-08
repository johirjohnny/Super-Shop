import React from 'react';

const ManageView = ({ event }) => {
    const handleDelete = (id) => {
        //console.log("delete Id", id);
        fetch(`https://peaceful-woodland-11045.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("deleted")
            });
    }
    return (
        <tr>
            <td>{event.name}</td>
            <td>{event.price}</td>
            <td><button onClick={() => handleDelete(event._id)}>Delete</button></td>
        </tr>
    );
};

export default ManageView;