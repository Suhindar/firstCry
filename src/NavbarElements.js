import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content.js';
import { Nav, Navbar,FormControl,Form, Container} from 'react-bootstrap';
import {Carousel,Button} from 'react-bootstrap';
function NavbarElements() {
    return (
        <div className="App">
            <div >
              
                <Navbar >
                   <img className="nav-style"src="fc_logo.png" alt="firstcry logo"></img>&nbsp;
                      <Nav className="mr-sm-2" >
                          <Form inline>
                          <FormControl type="text" placeholder="Search for a product" className="mr-sm-4"/>
                          <Button variant="outline-success">Search</Button>
                          
                        </Form >
                        
                        
                        <Nav.Link href="#Stores">Stores & pre-schools</Nav.Link>&nbsp;
                        <Nav.Link href="#Support">Support</Nav.Link>&nbsp;
                        <Nav.Link href="#TrackOrder">Track Order</Nav.Link>&nbsp;
                        <Nav.Link href="#FirstCryParenting">FirstcryParenting</Nav.Link>&nbsp;
                        <Nav.Link href="Login">Login/Register</Nav.Link>&nbsp;
                        <a href="#Shortlist">
                        <img src="/heart.png" alt="fav" class="logo-size"/></a>
                        <Nav.Link href="#Shortlist">Shortlist</Nav.Link>&nbsp;
                        <a href="#cart">
                        <img src="/bag.png" alt="cart" class="logo-size"/></a>  
                        <Nav.Link href="#cart">Cart</Nav.Link>&nbsp; 
                        </Nav> 
</Navbar>
<Navbar bg="warning" variant="dark" >
                        <Nav >
                            <Nav.Link href="#home">ALL CATEGORIES</Nav.Link>
                            <Nav.Link href="#home">BOY FASHION</Nav.Link>
                            <Nav.Link href="#home">GIRL FASHION</Nav.Link>
                            <Nav.Link href="#home">FOOTWEAR</Nav.Link>
                            <Nav.Link href="#home">TOYS</Nav.Link>
                            <Nav.Link href="#home">DIAPERING</Nav.Link>
                            <Nav.Link href="#home">GEAR</Nav.Link>
                            <Nav.Link href="#home">FEEDING</Nav.Link>
                            <Nav.Link href="#home">BATH&SKIN</Nav.Link>
                            <Nav.Link href="#home">NURSERY</Nav.Link>
                            <Nav.Link href="#home">MOMS</Nav.Link>
                            <Nav.Link href="#home">HEALTH&SAFETY</Nav.Link>
                            <Nav.Link href="#home">BOUTIQUES</Nav.Link>
                        </Nav>
                </Navbar>
                
<Container>
  <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="\baby.webp"
      alt="Mammy Poko Pants"/>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="\baby.webp"
      alt="Mammy Poko Pants"/>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="\happy.webp"
      alt="Mammy Poko Pants"/>
    </Carousel.Item>
  </Carousel>
</Container>   
<br/>
<h2 align="center">
      PREMIUM BOUTIQUES
</h2>
<br/>          
<Content/>
      </div>
    </div>
    );
}

export default NavbarElements;