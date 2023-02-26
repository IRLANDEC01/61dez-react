import React, { useState } from 'react'
import EventKey from './EventKey'

const EventKeysList = ({ eventKeys }) => {
  return (
    <tbody>
      {eventKeys.map((event, index) =>
        <EventKey
          key={event.id}
          eventKey={event}
          number={index + 1}
        >
        </EventKey>
      )
      }
    </tbody >
  )
}

export default EventKeysList