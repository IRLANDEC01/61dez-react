import React from 'react'
import { Badge, Button } from 'react-bootstrap'

const EventKey = ({ eventKey, number, deleteEventKey, passEventKey, openChangeModal }) => {

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
          </Badge> :
          eventKey.timeToPassKey
        }
      </td>
      {eventKey.isUsed ?
        <td>
          <Button
            variant="primary"
            onClick={() => openChangeModal(eventKey)}
          >Изменить
          </Button>
          <Button
            variant="primary"
            onClick={() => deleteEventKey(eventKey)}
          >
            Удалить</Button>
          <Button variant='primary'
            onClick={() => passEventKey(eventKey)}
          >
            Сдать аудиторию</Button>
        </td> :
        <td></td>
      }
    </tr>
  )
}

export default EventKey