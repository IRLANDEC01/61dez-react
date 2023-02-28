import React from 'react'
import { Col, Nav, Navbar, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DezNavBar = () => {
    return (
        <Row>
            <Col>
                <Navbar bg="light" expand="lg">
                    <Nav className="me-auto">
                        <NavLink as={Link} to="/admin">
                            Дежурный по кафедре:
                        </NavLink>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    )
}

export default DezNavBar