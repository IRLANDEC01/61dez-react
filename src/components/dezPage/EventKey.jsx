import React, { useContext } from 'react'
import { Badge, Button } from 'react-bootstrap'
import APIEventKeys from '../../API/eventKeys'
import { EventKeysContext } from '../../context'

const EventKey = ({ eventKey, number, passEventKey, openChangeModal }) => {
  const { setEventKeys } = useContext(EventKeysContext)

  const deleteEventKey = async (id) => {
    await APIEventKeys.deleteEventKey(id)
    setEventKeys(await APIEventKeys.getEventKeys())
  }
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
            onClick={() => deleteEventKey(eventKey.id)}
          >
            Удалить
          </Button>
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