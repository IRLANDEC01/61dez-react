import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import APIGroups from '../../API/groups';
import { GroupsContext } from '../../context';

const Group = ({ group, number }) => {
    const { setGroups } = useContext(GroupsContext)

    const deleteGroup = async (id) => {
        await APIGroups.deleteGroup(id)
        setGroups(await APIGroups.getGroups())
    }
    return (
        <tr>
            <td>{number}</td>
            <td>{group.course}</td>
            <td>{group.name}</td>
            <td>
                <Button
                    variant="primary"
                    onClick={() => deleteGroup(group._id)}
                >
                    Удалить
                </Button>
            </td>
        </tr>
    )
}

export default Group