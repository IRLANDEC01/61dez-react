import React, { useContext, useEffect, useState } from 'react'
import APICurrentEK from '../API/currentEK'
import FormCreateEventKey from '../components/dezPage/FormCreateEventKey'
import TableEventKeys from '../components/dezPage/TableEventKeys'

const Dez = () => {
  const [showFormCreateModal, setShowFormCreateModal] = useState(false)
  const [currentEK, setCurrentEK] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setCurrentEK(await APICurrentEK.getCurrentEK())
    }
    fetchData();
   
  }, [])
  
  return (
    <div>
      <TableEventKeys
        currentEK={currentEK}
        setCurrentEK={setCurrentEK}
      ></TableEventKeys>
      <FormCreateEventKey
        currentEK={currentEK}
        setCurrentEK={setCurrentEK}
        setShowFormCreateModal={setShowFormCreateModal}
        showFormCreateModal={showFormCreateModal}
      ></FormCreateEventKey>
    </div>
  )
}

export default Dez