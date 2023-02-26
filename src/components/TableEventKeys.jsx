import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import EventKeysList from './EventKeysList'

const TableEventKeys = ({ eventKeys }) => {
    return (
        <Row>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>№ п/п</th>
                            <th>Аудитория</th>
                            <th>Курс</th>
                            <th>Группа</th>
                            <th>Время вскрытия</th>
                            <th>Время сдачи</th>
                        </tr>
                    </thead>
                    <EventKeysList eventKeys={eventKeys}></EventKeysList>
                </Table>
            </Col>
        </Row>
    )
}

export default TableEventKeys