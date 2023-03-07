import { Formik } from 'formik'
import React, { useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import APIAuds from '../../API/auds'
import { AudsContext } from '../../context'

const FormCreateAud = () => {
    const [showFormCreateAudModal, setShowFormCreateAudModal] = useState(false)
    const { auds, setAuds } = useContext(AudsContext)

    const createAud = async (values) => {
        await APIAuds.createAud(values)
        setAuds(await APIAuds.getAuds())
        setShowFormCreateAudModal(false)
    }
    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col>
                    <Button onClick={() => setShowFormCreateAudModal(true)}>Создать аудиторию</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Modal show={showFormCreateAudModal} onHide={() => setShowFormCreateAudModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Заполните форму</Modal.Title>
                        </Modal.Header>
                        <Formik
                            initialValues={{ name: 0, notation: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'Введите номер аудитории!';
                                } else if (auds.find(aud => aud.name === values.name)) {
                                    errors.name = 'Такая аудитория уже существует!';
                                }
                                return errors;
                            }}
                            onSubmit={(values) => { createAud({ ...values, isUsed: false }) }}
                        >
                            {
                                formik => (
                                    <Form noValidate onSubmit={formik.handleSubmit}>
                                        <Modal.Body>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupName">
                                                        <Form.Label>Аудитория</Form.Label>
                                                        <Form.Control type="number" name='name' placeholder="номер аудитории..."
                                                            onChange={formik.handleChange}
                                                            isValid={formik.touched.name && !formik.errors.name}
                                                            isInvalid={formik.errors.name}
                                                            onBlur={formik.handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="valid">Готово!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {formik.errors.name}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formGroupNotation">
                                                        <Form.Label>Примечание</Form.Label>
                                                        <Form.Control type="text" name='notation' placeholder="не обязательно"
                                                            onChange={formik.handleChange}
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
                                )
                            }
                        </Formik>
                    </Modal>
                </Col>
            </Row >
        </div >
    )
}

export default FormCreateAud