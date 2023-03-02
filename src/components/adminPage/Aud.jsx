import React from 'react'

const Aud = ({ aud,  number}) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{aud.name}</td>
      <td>{aud.notation}</td>
    </tr>
  )
}

export default Aud