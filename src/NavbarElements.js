import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {useState} from 'react';
import { Nav, Navbar,FormControl,Form} from 'react-bootstrap';
import {Carousel,CarouselItem} from 'react-bootstrap';

import {Button} from 'react-bootstrap';
function NavbarElements() {
    return (
        <div className='App'>
            <div>
                <Navbar>
                        <img src="fc_logo.png"></img>
                        <Nav className="mr-auto">
                        <img src="search-icon.svg"/>&nbsp;
                        <Nav.Link href="#App">Stores & pre-schools</Nav.Link>&nbsp;
                        <Nav.Link href="#App">Support</Nav.Link>&nbsp;
                        <Nav.Link href="#App">Track Order</Nav.Link>&nbsp;
                            <Nav.Link href="App">
                                
                            </Nav.Link>
                            
                        </Nav> 
                </Navbar>

                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="\de9b84a4-b8c1-4a85-b57f-5081ca2cdb78.png"
      alt="Mammy Poko Pants"/>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="\R75e6d835fa411f156e1d3f3b86ba9e8d.jpg"
      alt="Mammy Poko Pants"/>
    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default NavbarElements
