import React, { useContext, useState } from 'react'
import FormChangeEventKey from '../components/dezPage/FormChangeEventKey'
import FormCreateEventKey from '../components/dezPage/FormCreateEventKey'
import TableEventKeys from '../components/dezPage/TableEventKeys'
import { EventKeysContext } from '../context'

const Dez = () => {
  const [showFormCreateModal, setShowFormCreateModal] = useState(false)
  const [showFormChangeModal, setShowFormChangeModal] = useState(false)
  const [changeableEventKey, setChangeableEventKey] = useState(false)

  const { eventKeys, setEventKeys } = useContext(EventKeysContext)


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

  return (
    <div>
      <TableEventKeys
        openChangeModal={openChangeModal}
      ></TableEventKeys>
      <FormCreateEventKey
        setShowFormCreateModal={setShowFormCreateModal}
        showFormCreateModal={showFormCreateModal}
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