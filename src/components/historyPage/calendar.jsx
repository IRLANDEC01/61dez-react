import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import moment from 'moment/moment';
import { Col, Row } from 'react-bootstrap';
import APIHistory from '../../API/history';
registerLocale('ru', ru)

const Calendar = ({ setHistoryEventKeys }) => {
    const [startDate, setStartDate] = useState(new Date());

    const getDateEventKeys = async (date) => {
        setStartDate(date)
        if (startDate < new Date()) {
            let day = moment(date).format('DD-MM-YYYY')
            setHistoryEventKeys(await APIHistory.getHistory(day))
        }
    }
    return (
        <Row>
            <Col>
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
            </Col>
        </Row>
    );
}

export default Calendar 