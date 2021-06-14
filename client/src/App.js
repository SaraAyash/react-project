
import React from 'react'
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
 
import Details from './components/Details.js'
import ShowDetails from './components/ShowDetails.js'
import AllUsers from './components/AllUsers.js'
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();


function App() {
  return (
    <>

      

      <Navbar bg="dark" variant="dark">
         
        <Nav className="mr-auto" activeKey="/home" >
          <Nav.Link href="/details" ><Button >details</Button></Nav.Link>
          <Nav.Link href="/showDetails"><Button>ShowDetails</Button></Nav.Link>
          <Nav.Link href="/allUsers"><Button>allUsers</Button></Nav.Link>
        </Nav>
         
      </Navbar>

      <Router history={hist}>
        <Switch>
          <Route path="/details" component={Details} />          
          <Route path="/showDetails/:id" component={ShowDetails} />
          <Route path="/showDetails" component={ShowDetails} />
          <Route path="/allUsers" component={AllUsers} />
          <Redirect from="/" to="/details" />
           
        </Switch>
      </Router>

      
    </>



  );
}

export default App;
