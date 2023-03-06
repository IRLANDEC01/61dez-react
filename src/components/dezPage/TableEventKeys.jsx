import React, { useContext } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { EventKeysContext } from '../../context'
import EventKey from './EventKey'

const TableEventKeys = () => {
    const { eventKeys } = useContext(EventKeysContext)

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
                            <th>Время получения</th>
                            <th>Время сдачи</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventKeys.map((event, index) =>
                            <EventKey
                                key={event.id}
                                eventKey={event}
                                number={index + 1}
                            >
                            </EventKey>
                        )}
                    </tbody >
                </Table>
            </Col>
        </Row>
    )
}

export default TableEventKeys