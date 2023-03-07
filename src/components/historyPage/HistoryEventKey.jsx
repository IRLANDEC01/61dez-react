import React from 'react'
import { Badge } from 'react-bootstrap'

const HistoryEventKey = ({ eventKey, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{eventKey.aud}</td>
            <td>{eventKey.course}</td>
            <td>{eventKey.group}</td>
            <td>{eventKey.timeToTakeKey}</td>
            <td>
                {eventKey.isUsed ?
                    <Badge pill bg="success">
                        Используется
                    </Badge>
                    :
                    eventKey.timeToPassKey
                }
            </td>
        </tr>
    )
}

export default HistoryEventKey