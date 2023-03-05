import React, { useContext } from 'react'
import APIAuds from '../API/auds'
import FormCreateAud from '../components/audsPage/FormCreateAud'
import TableAud from '../components/audsPage/TableAud'
import { AudsContext } from '../context'

const Aud = () => {
  const { auds, setAuds } = useContext(AudsContext)

  const deleteAud = async (audName) => {
    await APIAuds.deleteAud(audName)
    setAuds(auds.filter(item => item.name != audName))
  }
  return (
    <div>
      <FormCreateAud></FormCreateAud>
      <TableAud
        deleteAud={deleteAud}>
      </TableAud>
    </div>
  )
}

export default Aud