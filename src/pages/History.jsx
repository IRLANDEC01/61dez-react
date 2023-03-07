import React, { useState } from 'react'
import Calendar from '../components/historyPage/calendar'
import "react-datepicker/dist/react-datepicker.css";
import TableHistory from '../components/historyPage/TableHistory';
const History = () => {
  const [historyEventKeys, setHistoryEventKeys] = useState([])
  return (
    <div>
      <Calendar
      setHistoryEventKeys={setHistoryEventKeys}
      ></Calendar>
      <TableHistory 
      historyEventKeys={historyEventKeys}
      ></TableHistory>
    </div>
  )
}

export default History