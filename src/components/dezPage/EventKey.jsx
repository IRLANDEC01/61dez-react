import React, { useContext } from 'react'
import { Badge, Button } from 'react-bootstrap'
import APIAuds from '../../API/auds'
import APIEventKeys from '../../API/eventKeys'
import { AudsContext, EventKeysContext } from '../../context'

const EventKey = ({ eventKey, number }) => {
  const { setEventKeys } = useContext(EventKeysContext)
  const { setAuds } = useContext(AudsContext)

  const deleteEventKey = async (id) => {
    await APIEventKeys.deleteEventKey(id)
    await APIAuds.updateStateAud(eventKey.aud)
    setEventKeys(await APIEventKeys.getEventKeys())
    setAuds(await APIAuds.getAuds())
  }
  const passEventKey = async (id) => {
    const update = {
      isUsed: false,
      timeToPassKey: new Date(Date.now()).toLocaleString().split(',')[1]
    }
    await APIEventKeys.passEventKey(id, update)
    await APIAuds.updateStateAud(eventKey.aud)
    setEventKeys(await APIEventKeys.getEventKeys())
    setAuds(await APIAuds.getAuds())
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
          </Badge>
          :
          eventKey.timeToPassKey
        }
      </td>
      {eventKey.isUsed ?
        <td>
          <Button
            variant="primary"
            onClick={() => deleteEventKey(eventKey._id)}
          >
            Удалить
          </Button>
          <Button variant='primary'
            onClick={() => passEventKey(eventKey._id)}
          >
            Сдать аудиторию</Button>
        </td>
        :
        <td></td>
      }
    </tr>
  )
}

export default EventKey