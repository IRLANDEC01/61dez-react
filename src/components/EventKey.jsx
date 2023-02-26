import React from 'react'
import { Badge, Button } from 'react-bootstrap'

const EventKey = ({ eventKey, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{eventKey.aud}</td>
      <td>{eventKey.course}</td>
      <td>{eventKey.group}</td>
      <td>{eventKey.timeToTakeKey}</td>
      <td>
        <Badge pill bg="success">
          Используется
        </Badge></td>
      <td>
        <Button variant="primary">Изменить</Button>
        <Button variant="primary">Удалить</Button>
        <Button variant='primary'>Сдать аудиторию</Button>
      </td>
    </tr>
  )
}

export default EventKey