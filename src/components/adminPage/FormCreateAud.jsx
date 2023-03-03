import { Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import axiosInstance from '../../axios'
import { AudListContext } from '../../context'

const FormCreateAud = () => {
    const [showFormCreateAudModal, setShowFormCreateAudModal] = useState(false)
    const { audList, setAudList } = useContext(AudListContext)

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
                                } else if (audList.find(aud => aud.name == values.name)) {
                                    errors.name = 'Такая аудитория уже существует!';
                                }
                                return errors;
                            }}
                            onSubmit={(values) => {

                                setAudList([...audList, values])
                                axiosInstance.post('/createAud ',values)
                                    .then(function (response) {
                                        console.log(response);
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    })
                                setShowFormCreateAudModal(false)
                            }}
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