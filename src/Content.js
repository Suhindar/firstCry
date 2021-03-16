import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container,Image} from 'react-bootstrap';
function Content() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="/image-1.webp" thumbnail/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/image-2.webp" thumbnail/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/image-3.webp" thumbnail/>
                    </Col>
                </Row><br/>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="/image-1.webp" thumbnail/>
                        
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/image-2.webp" thumbnail/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/image-3.webp" thumbnail/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content
