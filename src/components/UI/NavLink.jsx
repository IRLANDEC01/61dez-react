import React, { useState } from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationLink = () => {
    const [isAIminPageContext, setIsAdminPageContext] = useState(true)
    return (
        isAIminPageContext
            ?
            <Nav className="me-auto">
                <NavLink as={Link} to="/admin"
                    onClick={() => setIsAdminPageContext(false)}
                >
                    Дежурный по кафедре:
                </NavLink>
            </Nav>
            :
            <Nav className="me-auto">
                <NavLink as={Link} to="/dez"
                    onClick={() => setIsAdminPageContext(true)}
                >
                    Выдача ключей
                </NavLink>
                <NavLink as={Link} to="/aud"
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