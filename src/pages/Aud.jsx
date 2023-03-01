import React from 'react'
import FormCreateAud from '../components/adminPage/FormCreateAud'
import TableAud from '../components/adminPage/TableAud'
import FormExample from '../components/adminPage/text'

const Aud = () => {
  return (
    <div>
        <FormCreateAud></FormCreateAud>
        <TableAud></TableAud>
        <FormExample></FormExample>
    </div>
  )
}

export default Aud