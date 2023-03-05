import React, { useContext } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { AudsContext } from '../../context'
import Aud from './Aud'


const TableAud = ({  deleteAud}) => {
    const { auds } = useContext(AudsContext)
    return (
        <Row>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>№ п/п</th>
                            <th>Аудитория</th>
                            <th>Примечание</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {auds.map((aud, index) => 
                            <Aud
                                aud={aud}
                                key={aud.name}
                                number={index + 1}
                                deleteAud={deleteAud}
                            >
                            </Aud>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TableAud