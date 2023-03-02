import React, { useContext } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { AudListContext } from '../../context'
import Aud from './Aud'


const TableAud = () => {
    const { audList } = useContext(AudListContext)

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
                    <tbody>
                        {audList.map((aud, index) => 
                            <Aud
                                aud={aud}
                                key={aud.name}
                                number={index + 1}
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