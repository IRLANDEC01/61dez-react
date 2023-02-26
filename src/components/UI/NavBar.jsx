import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Row>
            <Col>
                <Navbar bg="light" expand="lg">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    )
}

export default NavBar