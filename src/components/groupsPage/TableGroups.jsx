import React, { useContext } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { GroupsContext } from '../../context'
import Group from './Group'

const TableGroups = ({deleteGroup}) => {
    const { groups } = useContext(GroupsContext)
    return (
        <Row>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>№ п/п</th>
                            <th>Курс</th>
                            <th>Группа</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((group, index) => 
                            <Group
                                group={group}
                                key={group.name}
                                number={index + 1} 
                                deleteGroup={deleteGroup}
                            >
                            </Group>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TableGroups