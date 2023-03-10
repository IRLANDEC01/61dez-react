import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import HistoryEventKey from './HistoryEventKey'


const TableHistory = ({ historyEventKeys }) => {
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
                        </tr>
                    </thead>
                    <tbody>
                        {historyEventKeys.map((event, index) =>
                            <HistoryEventKey
                                key={event._id}
                                eventKey={event}
                                number={index + 1}
                            >
                            </HistoryEventKey>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TableHistory