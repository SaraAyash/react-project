import { React, useState } from "react";
import { Container, Form, Button, Carousel, CarouselItem, Image } from 'react-bootstrap';
import { useEffect } from "react/cjs/react.development";
import axios from "axios"
import { withRouter } from "react-router-dom";

export default (withRouter(function ShowDetails(props) {

    const [user, setUser] = useState({ 'name': 'NoName', 'age': '0', 'city': 'NoCity', 'email': 'NoEmail', 'phone': 'NoPhone' });


    function getUser() {
        const id = props.match.params.id;

        if (id != undefined) {
            axios.get('http://localhost:4000/user/' + id).then((response) => {

                setUser(response.data.user);

            }).catch(err => {

            })
        }



    }

    useEffect(() => {
        getUser();
        return function abort() {
            alert("asas");
        }
    }, []);

    useEffect(() => {
    }, [user]);


    return (
        <>
            <Container >
                <h3>My name is: {user.name}</h3>
                <h3>I live in: {user.city}</h3>
                <h3>My am: {user.age} years old</h3>
                <h3>My Email address is: {user.email}</h3>
                <h3>My Phone number is: {user.phone}</h3>


            </Container>
        </>

    );




}));