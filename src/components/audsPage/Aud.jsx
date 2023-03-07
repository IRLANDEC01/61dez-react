import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import APIAuds from '../../API/auds'
import { AudsContext } from '../../context'

const Aud = ({ aud, number }) => {
  const { setAuds } = useContext(AudsContext)
  
  const deleteAud = async (id) => {
    await APIAuds.deleteAud(id)
    setAuds(await APIAuds.getAuds())
  }
  return (
    <tr>
      <td>{number}</td>
      <td>{aud.name}</td>
      <td>{aud.notation}</td>
      <td>
        <Button
          variant="primary"
          onClick={async () => deleteAud(aud._id)}
        >
          Удалить
        </Button>
      </td>
    </tr>
  )
}

export default Aud