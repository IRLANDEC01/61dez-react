import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import EventKeysList from './EventKeysList'

const TableEventKeys = ({ eventKeys, deleteEventKey, passEventKey,openChangeModal }) => {
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
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <EventKeysList
                        eventKeys={eventKeys}
                        deleteEventKey={deleteEventKey}
                        passEventKey={passEventKey}
                        openChangeModal={openChangeModal}
                    ></EventKeysList>
                </Table>
            </Col>
        </Row>
    )
}

export default TableEventKeys