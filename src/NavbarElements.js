import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
function NavbarElements() {
    return (
        <div className='App'>
            <div>
                <Navbar>
                        <img src="/search-icon.svg"></img>
                        <Nav className="mr-sm-2">
                            <img src="/"    
                        </Nav> 
                </Navbar>
            </div>
        </div>
    );
}

export default NavbarElements
