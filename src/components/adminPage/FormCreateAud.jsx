import React, { useContext, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import { AudListContext } from '../../context'

const FormCreateAud = () => {
    const [newAud, setNewAud] = useState({ name: '', notation: '' })
    const [showFormCreateAudModal, setShowFormCreateAudModa] = useState(false)
    const { audList, setAudList } = useContext(AudListContext)

    const [validated, setValidated] = useState(false);

    const addNewAud = (e) => {
        e.preventDefault()
        const isAudExists = audList.forEach(aud => {
            if (aud.name === newAud.name) return true
        });
        if (!e.currentTarget.checkValidity() || isAudExists) {
            setAudList([...audList, newAud])
        }
        setValidated(true);
        // setShowFormCreateAudModa(false)
    }
    return (
        <div>

            <Row className='justify-content-md-center'>
                <Col>

                    <Button onClick={() => setShowFormCreateAudModa(true)}>Создать аудиторию</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Modal show={showFormCreateAudModal} onHide={() => setShowFormCreateAudModa(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Заполните форму</Modal.Title>
                        </Modal.Header>
                        <Form noValidate validated={validated} onSubmit={addNewAud}>
                            <Modal.Body>
                                <Row>
                                    <Col>

                                        <Form.Group className="mb-3" controlId="formGroupName">
                                            <Form.Label>Аудитория</Form.Label>
                                            <Form.Control type="text" placeholder="номер аудитории..."
                                                required
                                                onChange={e => setNewAud({ ...newAud, name: e.target.value })}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Введите номер аудитории!
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                Такая аудитория уже существусу
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupNotation">
                                            <Form.Label>Примечание</Form.Label>
                                            <Form.Control type="text" placeholder="не обязательно"
                                                onChange={e => setNewAud({ ...newAud, notation: `(${e.target.value})` })}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary"
                                    type="submit"
                                >
                                    Добавить
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </Col>
            </Row >
        </div>

    )
}

export default FormCreateAud