import React from 'react'
import { Col, Nav, Navbar, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const AdminNavbar = () => {
    return (
        <Row>
            <Col>
                <Navbar bg="light" expand="lg">
                    <Nav className="me-auto">
                        <NavLink as={Link} to="/dez">
                          Выдача ключей
                        </NavLink>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    )
}

export default AdminNavbar