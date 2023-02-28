import React, { useState } from 'react'
import CreateEventKey from '../components/CreateEventKey'
import FormChangeEventKey from '../components/FormChangeEventKey'
import FormCreateEventKey from '../components/FormCreateEventKey'
import TableEventKeys from '../components/TableEventKeys'

const Dez = () => {

  const [showFormCreateModal, setShowFormCreateModal] = useState(false)
  const [showFormChangeModal, setShowFormChangeModal] = useState(false)
  const [changeableEventKey, setChangeableEventKey] = useState(false)
  const [eventKeys, setEventKeys] = useState([])

  const createEventKey = (newEventKey) => {
    setEventKeys([...eventKeys, newEventKey])
    setShowFormCreateModal(false)
  }
  const deleteEventKey = (eventKey) => {
    setEventKeys([...eventKeys.filter((a) => a.id !== eventKey.id)])
  }

  const openChangeModal = (eventKey) => {
    setShowFormChangeModal(true)
    setChangeableEventKey(eventKey)
  }

  const changeEventKey = (eventKey) => {
    setShowFormChangeModal(false)
    setEventKeys([...eventKeys.map((item) => {
      if (item.id === eventKey.id) return eventKey;
      return item
    })])
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
        openChangeModal={openChangeModal}
      ></TableEventKeys>
      <CreateEventKey
        setShowFormCreateModal={setShowFormCreateModal}
      ></CreateEventKey>
      <FormCreateEventKey
        setShowFormCreateModal={setShowFormCreateModal}
        showFormCreateModal={showFormCreateModal}
        create={createEventKey}
      ></FormCreateEventKey>
      <FormChangeEventKey
        changeableEventKey={changeableEventKey}
        setChangeableEventKey={setChangeableEventKey}
        showFormChangeModal={showFormChangeModal}
        setShowFormChangeModal={setShowFormChangeModal}
        change={changeEventKey}
      >
      </FormChangeEventKey>
    </div>
  )
}

export default Dez