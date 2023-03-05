import React, { useState } from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationLink = () => {
    const [isAIminPage, setIsAdminPage] = useState(true)
    return (
        isAIminPage
            ?
            <Nav className="me-auto">
                <NavLink as={Link} to="/admin"
                    onClick={() => setIsAdminPage(false)}
                >
                    Дежурный по кафедре:
                </NavLink>
            </Nav>
            :
            <Nav className="me-auto">
                <NavLink as={Link} to="/dez"
                    onClick={() => setIsAdminPage(true)}
                >
                    Выдача ключей
                </NavLink>
                <NavLink as={Link} to="/auds"
                >
                    Аудитории
                </NavLink>
                <NavLink as={Link} to="/groups"
                >
                    Учебные группы
                </NavLink>
                <NavLink as={Link} to="/history"
                >
                    История
                </NavLink>
            </Nav>

    )
}

export default NavigationLink