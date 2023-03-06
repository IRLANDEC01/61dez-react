import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import moment from 'moment/moment';
registerLocale('ru', ru)

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    const getDateEventKeys = (date) => {
        if (startDate > new Date()) return;
        setStartDate(date)
        
        console.log(moment(startDate).format('DD-MM-YYYY'));
    }
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => getDateEventKeys(date)}
            locale="ru"
            inline
            dateFormat="yyyy/MM/dd"
        >
            {startDate > new Date() ?
                <div style={{ color: "red" }}>Дата выбрана неверно!</div>
                : null
            }
        </DatePicker>
    );
}

export default Calendar 