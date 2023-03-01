import React, { useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { AudListContext } from '../context'

const FormCreateEventKey = ({ showFormCreateModal, setShowFormCreateModal, create }) => {
    const [eventKey, setEventKey] = useState({ aud: '', course: '', group: '' })
    const { audList } = useContext(AudListContext)


    const addNewEventKey = (e) => {
        e.preventDefault()
        const newEventKey = {
            ...eventKey,
            id: Date.now(),
            timeToTakeKey: new Date(Date.now()).toLocaleString().split(',')[1],
            timeToPassKey: null,
            isUsed: true
        }
        setEventKey({ aud: '', course: '', group: '' })
        create(newEventKey)
    }
    return (
        <Row>
            <Col>
                <Modal show={showFormCreateModal} onHide={() => setShowFormCreateModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Заполните форму</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={addNewEventKey}>
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Аудитория</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            onChange={e => setEventKey({ ...eventKey, aud: e.target.value })}
                                        >
                                            <option> Не выбрано</option>
                                            {audList.map((aud) => <option key={aud.name} value={aud.name}>{aud.name + ' ' + aud.notation}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Курс</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                        onChange={e => setEventKey({ ...eventKey, course: e.target.value })}
                                    >
                                        <option> Не выбрано</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Label>Группа</Form.Label>

                                    <Form.Select aria-label="Default select example"
                                        onChange={e => setEventKey({ ...eventKey, group: e.target.value })}
                                    >
                                        <option> Не выбрано</option>
                                        <option value="62/12">662/12</option>
                                        <option value="661/11">661/11</option>
                                        <option value="6444/1">6444/1</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary"
                                type="submit"
                            >
                                Создать запись
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </Col>
        </Row >
    )
}

export default FormCreateEventKey