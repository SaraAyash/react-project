import { React, useState } from "react";
import { Container, Form, Button, Carousel, CarouselItem, Image } from 'react-bootstrap';
import { useEffect } from "react/cjs/react.development";
import axios from "axios"
import { withRouter } from "react-router-dom";

export default (withRouter(function Details(props) {

    const [user, setUser] = useState({ 'name': '', 'age': 0, 'city': '', 'email': '', 'phone': '' });
    const style = {
        border: '1px solid black'
    }

    function submit() {
        // if (user.name !== '' && user.age !== 0 && user.city !== '' && user.email !== '' && user.phone !== null) { 
        axios.post('http://localhost:4000/addUser', user).then((response) => {
            setUser({ 'name': '', 'age': 0, 'city': '', 'email': '', 'phone': '' });
            props.history.replace("/showDetails/" + response.data.user._id);

        }).catch(err => {

        })

        // }
    }
    useEffect(() => {
        // setUser({ 'name': '', 'age': 0, 'city': '', 'email': '', 'phone': '' });
    }, []);
    return (
        <>
            <Container style={style}>

                <Form>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full Name" onChange={(event) => setUser({ ...user, name: event.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age" onChange={(event) => setUser({ ...user, age: event.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" onChange={(event) => setUser({ ...user, city: event.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={(event) => setUser({ ...user, email: event.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" onChange={(event) => setUser({ ...user, phone: event.target.value })} />
                    </Form.Group>
                    <Button variant="primary" onClick={() => submit()}>
                        Submit
                    </Button>
                </Form>

            </Container>
        </>

    );




}));