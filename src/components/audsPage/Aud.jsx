import React from 'react'
import { Button } from 'react-bootstrap'

const Aud = ({ aud, number, deleteAud }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{aud.name}</td>
      <td>{aud.notation}</td>
      <td>
        <Button
          variant="primary"
          onClick={() => deleteAud(aud.name)}
        >
          Удалить
        </Button>
      </td>
    </tr>
  )
}

export default Aud