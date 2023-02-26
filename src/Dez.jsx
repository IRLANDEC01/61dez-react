import React, { useState } from 'react'
import CreateEventKey from './components/CreateEventKey'
import FormCreateEventKey from './components/FormCreateEventKey'
import TableEventKeys from './components/TableEventKeys'

const Dez = () => {

  const [showFormModal, setShowFormModal] = useState(false)
  const [eventKeys, setEventKeys] = useState([])

  const createEventKeys = (newEventKey) => {
    setEventKeys([...eventKeys, newEventKey])
  }
  return (
    <div>
      <TableEventKeys
        eventKeys={eventKeys}
      ></TableEventKeys>
      <CreateEventKey
        setShowFormModal={setShowFormModal}
      ></CreateEventKey>
      <FormCreateEventKey
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
        create={createEventKeys}
      ></FormCreateEventKey>
    </div>
  )
}

export default Dez