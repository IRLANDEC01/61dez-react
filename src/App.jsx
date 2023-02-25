import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import Dez from "./Dez";

export const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
        <NavBar></NavBar>
        </Col>
      </Row>
      <Row>
        <Col>
        <Dez></Dez>
        </Col>
      </Row>
    </Container>
  );
}


export default App