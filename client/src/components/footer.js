import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends React.Component {

    render() {
        return <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand>
          <a href="https://jonathanfries.net"><span>© 2019 by Jonathan Fries</span></a>
        </Navbar.Brand>
        </Navbar>
    }

}
