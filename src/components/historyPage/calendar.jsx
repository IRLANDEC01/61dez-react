import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import moment from 'moment/moment';
import { Col, Row } from 'react-bootstrap';
import APIEventKeys from '../../API/eventKeys';
registerLocale('ru', ru)

const Calendar = ({ setHistoryEventKeys }) => {
    const [startDate, setStartDate] = useState(new Date());

    const getEventKeys = async (date) => {
        console.log(moment(date).format('DD-MM-YYYY'));
        setStartDate(date)
        if (startDate < new Date()) {
            setHistoryEventKeys(await APIEventKeys.getEventKeys(moment(date).format('DD-MM-YYYY')))
        }
    }
    return (
        <Row>
            <Col>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => getEventKeys(date)}
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