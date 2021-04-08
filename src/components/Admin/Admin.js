import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.example1,
            price: data.example2,
            weight: data.example3,
            imageURL: imageURL
        };

        const url = `http://localhost:5000/addBooking`;
        //console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response'))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '345a2a8256d10b7f89a27934fa3f401d');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <Link to="/admin">Add Product</Link>
                <Link to="/manege">Manage Product</Link>
            </div>
            <div>
                <h1>This is admin panal</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue="name" {...register("example1")} />
                    <br />
                    <input name="price" defaultValue="price" {...register("example2")} />
                    <br />
                    <input name="weight" defaultValue="weight" {...register("example3")} />
                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Admin;