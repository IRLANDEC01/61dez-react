import moment from 'moment'
import React from 'react'
import { Badge, Button } from 'react-bootstrap'
import APICurrentEK from '../../API/currentEK'
import APIEventKeys from '../../API/eventKeys'

const EventKey = ({ eventKey, number, setCurrentEK }) => {

  const deleteCurrentEK = async () => {
    await APICurrentEK.deleteCurrentEK(eventKey._id)
    setCurrentEK(await APICurrentEK.getCurrentEK())
  }
  const passEventKey = async () => {
    const update = {
      isUsed: false,
      timeToPassKey: moment(Date.now()).format('HH:mm')
    }
    await APICurrentEK.passCurrentEK(eventKey._id, update)
    setCurrentEK(await APICurrentEK.getCurrentEK())
    const newEventKey = {
      ...eventKey,
      ...update
    }
    await APIEventKeys.createEventKey(newEventKey)
  }

  return (
    <tr>
      <td>{number}</td>
      <td>{eventKey.aud}</td>
      <td>{eventKey.course}</td>
      <td>{eventKey.group}</td>
      <td>{eventKey.timeToTakeKey}</td>
      <td>
        {!eventKey.timeToPassKey ?
          <Badge pill bg="success">
            Используется
          </Badge>
          :
          eventKey.timeToPassKey
        }
      </td>
      {!eventKey.timeToPassKey ?
        <td>
          <Button
            variant="primary"
            onClick={() => deleteCurrentEK()}
          >
            Удалить
          </Button>
          <Button variant='primary'
            onClick={() => passEventKey()}
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