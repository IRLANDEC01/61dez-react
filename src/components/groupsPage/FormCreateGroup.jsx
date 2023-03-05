import { Formik } from 'formik'
import React, { useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import APIGroups from '../../API/groups'
import { GroupsContext } from '../../context'

const FormCreateGroup = () => {
    const [showFormCreateGroupModal, setShowFormCreateGroupModal] = useState(false)
    const { groups, setGroups } = useContext(GroupsContext)

    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col>
                    <Button onClick={() => setShowFormCreateGroupModal(true)}>Создать группу</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Modal show={showFormCreateGroupModal} onHide={() => setShowFormCreateGroupModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Заполните форму</Modal.Title>
                        </Modal.Header>
                        <Formik
                            initialValues={{ name: 0, course: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'Введите название группы!';
                                }
                                if (groups.find(group => group.name == values.name)) {
                                    errors.name = 'Такая группа уже существует!';
                                }
                                if (!values.course) {
                                    errors.course = 'Выберете курс!';
                                }
                                return errors;
                            }}
                            onSubmit={async (values) => {
                                await APIGroups.createGroup(values)
                                setGroups([...groups, values])
                                setShowFormCreateGroupModal(false)
                            }}
                        >
                            {
                                ({
                                    handleSubmit,
                                    touched,
                                    errors,
                                    handleBlur,
                                    handleChange }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Modal.Body>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupName">
                                                        <Form.Label>Учебная группа</Form.Label>
                                                        <Form.Control type="text" name='name' placeholder="номер группы..."
                                                            onChange={handleChange}
                                                            isValid={touched.name && !errors.name}
                                                            isInvalid={errors.name}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="valid">Готово!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.name}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Курс</Form.Label>
                                                        <Form.Select aria-label="Default select example"
                                                            name="course"
                                                            onChange={handleChange}
                                                            isValid={touched.course && !errors.course}
                                                            isInvalid={errors.course}
                                                        >
                                                            <option> Не выбрано</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </Form.Select>
                                                        <Form.Control.Feedback type="valid">Готово!</Form.Control.Feedback>
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

export default FormCreateGroup