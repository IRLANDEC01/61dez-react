import React from 'react'
import { Button } from 'react-bootstrap'

const Group = ({ group, number, deleteGroup }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{group.course}</td>
            <td>{group.name}</td>
            <td>
                <Button
                    variant="primary"
                    onClick={() => deleteGroup(group.name)}
                >
                    Удалить
                </Button>
            </td>
        </tr>
    )
}

export default Group