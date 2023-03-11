import React, {  useEffect, useState } from 'react'
import Calendar from '../components/historyPage/calendar'
import "react-datepicker/dist/react-datepicker.css";
import TableHistory from '../components/historyPage/TableHistory';
import APIEventKeys from '../API/eventKeys';
import moment from 'moment';

const History = () => {
  const [historyEventKeys, setHistoryEventKeys] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setHistoryEventKeys(await APIEventKeys.getEventKeys(moment(Date.now()).format('HH:mm')))
    }
    fetchData();
  }, []) 
console.log('render history');
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