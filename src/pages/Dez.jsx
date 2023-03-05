import React, { useContext, useState } from 'react'
import APIAuds from '../API/auds'
import APIEventKeys from '../API/eventKeys'
import FormChangeEventKey from '../components/dezPage/FormChangeEventKey'
import FormCreateEventKey from '../components/dezPage/FormCreateEventKey'
import TableEventKeys from '../components/dezPage/TableEventKeys'
import { AudsContext, EventKeysContext } from '../context'

const Dez = () => {
  const [showFormCreateModal, setShowFormCreateModal] = useState(false)
  const [showFormChangeModal, setShowFormChangeModal] = useState(false)
  const [changeableEventKey, setChangeableEventKey] = useState(false)

  const { eventKeys, setEventKeys } = useContext(EventKeysContext)
  const { auds, setAuds } = useContext(AudsContext)

  const createEventKey = async (newEventKey) => {
    await APIEventKeys.createEventKey(newEventKey)
    await APIAuds.updateStateAud(newEventKey.aud)
    setEventKeys([...eventKeys, newEventKey])
    setShowFormCreateModal(false)
  }
  const deleteEventKey = async (eventKeyID) => {
    await APIEventKeys.deleteEventKey(eventKeyID)
    setEventKeys([...eventKeys.filter((a) => a.id !== eventKeyID)])
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

  const passEventKey = async (eventKey) => {
    eventKey.isUsed = false
    eventKey.timeToPassKey = new Date(Date.now()).toLocaleString().split(',')[1]

    await APIEventKeys.passEventKey(eventKey.id, { isUsed: eventKey.isUsed, timeToPassKey: eventKey.timeToPassKey })
    setEventKeys([...eventKeys.map((item) => {
      if (item.id === eventKey.id) return eventKey;
      return item
    })])
  }
  return (
    <div>
      <TableEventKeys
        deleteEventKey={deleteEventKey}
        passEventKey={passEventKey}
        openChangeModal={openChangeModal}
      ></TableEventKeys>
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