import React, { useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { AudListContext } from '../context'

const FormCreateEventKey = ({ showFormModal, setShowFormModal, create }) => {
    const [eventKey, setEventKey] = useState({ aud: '', course: '', group: '' })
    const [formBtn, setFormBtn] = useState('true')
    const { audList } = useContext(AudListContext)

    const select = (e) => {
        console.log(e.target.value);
        setEventKey({ ...eventKey, aud: e.target.value })
    }
    const addNewEventKey = (e) => {
        e.preventDefault()
        console.log(e);
        const newEventKey = {
            ...eventKey,
            id: Date.now(),
            timeToTakeKey: new Date(Date.now()).toLocaleString().split(',')[1],
            isUsed: true
        }
        setShowFormModal(false)
        setEventKey({ aud: '', course: '', group: '' })
        create(newEventKey)
    }
    return (
        <Row>
            <Col>
                <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Заполните форму</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={addNewEventKey}>
                        <Modal.Body>
                            <Row>
                                <Col>

                                    <Form.Select aria-label="Default select example"
                                        onChange={select}
                                    >
                                        <option >Аудитория</option>
                                        {audList.map((aud) => <option key={aud.name} value={aud.name}>{aud.name+' '+aud.notation}</option>)}
                                    </Form.Select>
                                </Col>
                                <Col>

                                    <Form.Select aria-label="Default select example"
                                        onChange={e => setEventKey({ ...eventKey, course: e.target.value })}
                                    >
                                        <option >Курс</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select aria-label="Default select example"
                                        onChange={e => setEventKey({ ...eventKey, group: e.target.value })}
                                    >
                                        <option>Группа</option>
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
                                disabled={formBtn}
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