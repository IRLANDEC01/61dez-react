import React from 'react'
import { Col, Nav, Navbar, Row } from 'react-bootstrap'
import NavigationLink from './NavLink'

const NavigationBar = () => {
    return (
        <Row>
            <Col>
                <Navbar bg="light" expand="lg">
                        <NavigationLink></NavigationLink>
                   
                </Navbar>
            </Col>
        </Row>
    )
}

export default NavigationBar