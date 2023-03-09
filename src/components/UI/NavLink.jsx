import React, { useState } from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationLink = () => {
    const [isAIminPage, setIsAdminPage] = useState(false)
    return (
        !isAIminPage
            ?
            <Nav className="me-auto">
                <NavLink as={Link} to="/admin"
                    onClick={() => setIsAdminPage(true)}
                >
                    Дежурный по кафедре:
                </NavLink>
            </Nav>
            :
            <Nav className="me-auto">
                <NavLink as={Link} to="/"
                    onClick={() => setIsAdminPage(false)}
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