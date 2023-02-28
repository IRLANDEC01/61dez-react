import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Row>
            <Col>
                <Navbar bg="light" expand="lg">
                    <Nav className="me-auto">
                        <Link to="/dez">О сайте</Link>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    )
}

export default NavBar