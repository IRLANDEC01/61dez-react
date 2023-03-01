import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'

const TableAud = () => {
  return (
    <Row>
    <Col>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>№ п/п</th>
                    <th>Аудитория</th>
                    <th>примечание</th>
                </tr>
            </thead>
        </Table>
    </Col>
</Row>
  )
}

export default TableAud