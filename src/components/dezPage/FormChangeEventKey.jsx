import { Formik } from 'formik'
import React, { useContext } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { AudsContext } from '../../context'

const FormChangeEventKey = ({ showFormChangeModal, setShowFormChangeModal, changeableEventKey, setChangeableEventKey, change }) => {
    const { auds  } = useContext(AudsContext)

    const changeEventKey = (e) => {
        e.preventDefault()
        const updateEventKey = {
            ...changeableEventKey,
            timeToTakeKey: new Date(Date.now()).toLocaleString().split(',')[1],
            timeToPassKey: null,
            isUsed: true  
        }
        change(updateEventKey) 
    }
    return (
        <Row>
            <Col>
                <Modal show={showFormChangeModal} onHide={() => setShowFormChangeModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Изменить запись</Modal.Title>
                    </Modal.Header>
                    <Formik
                    
                    >

                    <Form onSubmit={changeEventKey}>
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupAud">
                                        <Form.Select aria-label="Default select example"
                                      
                                            onChange={e => setChangeableEventKey({ ...changeableEventKey, aud: e.target.value })}
                                        >
                                            <option  >Аудитория</option>
                                            {auds.map((aud) => <option key={aud.name} value={aud.name}>{aud.name + ' ' + aud?.notation}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>

                                    <Form.Select aria-label="Default select example"
                                        onChange={e => setChangeableEventKey({ ...changeableEventKey, course: e.target.value })}
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
                                        onChange={e => setChangeableEventKey({ ...changeableEventKey, group: e.target.value })}
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
                            >
                                Изменить
                            </Button>
                        </Modal.Footer>
                    </Form>
                    </Formik>

                </Modal>
            </Col>
        </Row >
    )
}

export default FormChangeEventKey