import { React, useState, useEffect } from "react";
import { Container, Row, Col, Carousel, CarouselItem, Table } from 'react-bootstrap';
 import { withRouter } from "react-router-dom";
import axios from "axios"


export default (withRouter(function AllUsers(props) {
    const [users, setUsers] = useState([]);

    const style = {
        border: '1px solid black'
    }

    function getAllUsersFromServer() {
       
        axios.get('http://localhost:4000/users').then((response) => {
            const usersJson = response.data;
            setUsers(usersJson);
           
        }).catch(err => {
           
        })

    }

    useEffect(() => {
        getAllUsersFromServer();

    }, []);

    return (
        <>
            <Container> 
                <br/>
                <Row><h1>   users Table: </h1></Row> 
                <br/>
                <Row md={12} xl={12}>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, key) => {
                                return (
                                    <tr>
                                        <td >{key}</td>
                                        <td >{user.name}</td>
                                        <td >{user.email}</td>
                                        
                                    </tr>);

                            })}
                        </tbody>



                    </Table>

                </Row>
            </Container>


        </>
    );

}));
