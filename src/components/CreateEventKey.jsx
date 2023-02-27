import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const CreateEventKey = ({setShowFormCreateModal}) => {
    return (
        <Row className='justify-content-md-center'>
            <Col lg={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Перед получением ключа заполните форму</Card.Title>

                        <Button
                            variant="primary" 
                            onClick={() => setShowFormCreateModal(true)}
                        >
                            Создать запись
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Свободные аудитории:</Card.Footer>
                    <Card.Footer className="text-muted">213, 216, 225, 314</Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default CreateEventKey