import React, { useState } from 'react'
import CreateEventKey from './components/CreateEventKey'
import FormCreateEventKey from './components/FormCreateEventKey'
import TableEventKeys from './components/TableEventKeys'

const Dez = () => {

  const [showFormModal, setShowFormModal] = useState(false)
  const [eventKeys, setEventKeys] = useState([])

  const createEventKey = (newEventKey) => {
    setEventKeys([...eventKeys, newEventKey])
    setShowFormModal(false)
  }
  const deleteEventKey = (eventKey) => {
    setEventKeys([...eventKeys.filter((a) => a.id !== eventKey.id)])
  }
  const passEventKey = (eventKey) => {
    setEventKeys([...eventKeys.map((item) => {
      if (item.id === eventKey.id) {
        return {
          ...item,
          isUsed: false,
          timeToPassKey: new Date(Date.now()).toLocaleString().split(',')[1]
        }
      }
      return item
    })])
  }
  return (
    <div>
      <TableEventKeys
        eventKeys={eventKeys}
        deleteEventKey={deleteEventKey}
        passEventKey={passEventKey}
      ></TableEventKeys>
      <CreateEventKey
        setShowFormModal={setShowFormModal}
      ></CreateEventKey>
      <FormCreateEventKey
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
        create={createEventKey}
      ></FormCreateEventKey>
    </div>
  )
}

export default Dez