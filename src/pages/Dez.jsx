import React, { useContext, useState } from 'react'
import FormCreateEventKey from '../components/dezPage/FormCreateEventKey'
import TableEventKeys from '../components/dezPage/TableEventKeys'

const Dez = () => {
  const [showFormCreateModal, setShowFormCreateModal] = useState(false)

  return (
    <div>
      <TableEventKeys
      ></TableEventKeys>
      <FormCreateEventKey
        setShowFormCreateModal={setShowFormCreateModal}
        showFormCreateModal={showFormCreateModal}
      ></FormCreateEventKey>
    </div>
  )
}

export default Dez