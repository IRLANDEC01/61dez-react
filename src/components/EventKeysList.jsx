import React, { useState } from 'react'
import EventKey from './EventKey'

const EventKeysList = ({ eventKeys, deleteEventKey, passEventKey, openChangeModal }) => {
  return (
    <tbody>
      {eventKeys.map((event, index) =>
        <EventKey
          key={event.id}
          eventKey={event}
          number={index + 1}
          deleteEventKey={deleteEventKey}
          passEventKey={passEventKey}
          openChangeModal={openChangeModal}
        >
        </EventKey>
      )}
    </tbody >
  )
}

export default EventKeysList