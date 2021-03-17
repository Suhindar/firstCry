import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Final from './Final';
import {Row,Col,Container,Card,Image} from 'react-bootstrap';

function Content() {
    return (
        <div>
            <Container>
                <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/image-1.webp" thumbnail/>
                        <Card.Body>
                        <Card.Title>Holi Special</Card.Title>
                        <Card.Text>
                            Holi Special 6-12+yr
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/image-2.webp" thumbnail/>
                        <Card.Body>
                        <Card.Title>Fabulous as Always</Card.Title>
                        <Card.Text>
                            Fabulous as Always from 6-12+yr
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/image-3.webp" thumbnail/>
                        <Card.Body>
                        <Card.Title>Dress up</Card.Title>
                        <Card.Text>
                            Dress up your Body from 6-12+yr
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br/>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/image-4.webp" thumbnail/>
                        <Card.Body>
                            <Card.Title>All Set</Card.Title>
                            <Card.Text>
                                All Set for the Day from 6-12+yr
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/image-5.webp" thumbnail/>
                        <Card.Body>
                            <Card.Title>His playtime</Card.Title>
                            <Card.Text>
                                His playtime from 6-12+yr
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/image-6.webp" thumbnail/>
                        <Card.Body>
                            <Card.Title>Her playtime</Card.Title>
                            <Card.Text>
                                Her playtime from 6-12+yr
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br/>
            <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/image-7.webp" thumbnail/>
                            <Card.Body>
                                <Card.Title>Li'l Baby</Card.Title>
                                <Card.Text>
                                    For your Li'l Baby
                                </Card.Text>
                                </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/image-8.webp" thumbnail/>
                            <Card.Body>
                                <Card.Title>Charm</Card.Title>
                                <Card.Text>
                                    Her weekend charm
                                </Card.Text>
                           </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/image-9.webp" thumbnail/>
                            <Card.Body>
                                <Card.Title>Vibe</Card.Title>
                                <Card.Text>
                                    His weekend vibe
                                </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row><br/>
                <Image src="/bottom-banner.jpg" fluid>
                </Image>
                
    </Container>
    <Final/>
        </div>
    )
}

export default Content
