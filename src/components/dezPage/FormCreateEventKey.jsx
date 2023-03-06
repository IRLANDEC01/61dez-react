import { Formik } from 'formik'
import React, { useContext, useMemo, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import APIAuds from '../../API/auds'
import APIEventKeys from '../../API/eventKeys'
import { AudsContext, EventKeysContext, GroupsContext } from '../../context'

const FormCreateEventKey = ({ showFormCreateModal, setShowFormCreateModal, create }) => {
    const { auds, setAuds } = useContext(AudsContext)
    const { groups } = useContext(GroupsContext)
    const { setEventKeys } = useContext(EventKeysContext)

    const createEventKey = async (eventKey) => {
        await APIEventKeys.createEventKey(eventKey)
        await APIAuds.updateStateAud(eventKey.aud)
        setAuds(await APIAuds.getAuds())
        setEventKeys(await APIEventKeys.getEventKeys())
        setShowFormCreateModal(false)
    }

    return (
        <div>
            <Row>
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
                        <Card.Footer className="text-muted">
                            {auds.map(aud =>
                                !aud?.isUsed ?
                                    aud.name + (aud.notation ? ` (${aud.notation}), ` : ', ')
                                    : null
                            )}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Modal show={showFormCreateModal} onHide={() => setShowFormCreateModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Заполните форму</Modal.Title>
                        </Modal.Header>
                        <Formik
                            initialValues={{ group: '', course: null, aud: null }}
                            validate={values => {
                                const errors = {};
                                if (!values.aud) {
                                    errors.aud = 'Выберете аудиторию!';
                                }
                                if (!values.course) {
                                    errors.course = 'Выберете курс!';
                                }
                                if (!values.group) {
                                    errors.group = 'Выберете группу!';
                                }
                                return errors;
                            }}
                            onSubmit={(values) => {
                                const newEventKey = {
                                    ...values,
                                    id: Date.now(),
                                    aud: Number(values.aud),
                                    timeToTakeKey: new Date(Date.now()).toLocaleString().split(',')[1],
                                    timeToPassKey: null,
                                    isUsed: true
                                }
                                createEventKey(newEventKey)
                            }}
                        >
                            {
                                ({
                                    handleSubmit,
                                    touched,
                                    errors,
                                    handleBlur,
                                    handleChange }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Modal.Body>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupAud">
                                                        <Form.Label>Аудитория</Form.Label>
                                                        <Form.Select aria-label="Default select example"
                                                            name='aud'
                                                            onChange={handleChange}
                                                            isValid={touched.aud && !errors.aud}
                                                            isInvalid={errors.aud}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option> Не выбрано</option>
                                                            {auds.map((aud) =>
                                                                <option key={aud.name} value={aud.name}>
                                                                    {aud.name + (aud.notation ? ` (${aud.notation})` : null)}
                                                                </option>)}
                                                        </Form.Select>
                                                        <Form.Control.Feedback type="valid">Готово!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.aud}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupCourse">
                                                        <Form.Label>Курс</Form.Label>
                                                        <Form.Select aria-label="Default select example"
                                                            name='course'
                                                            onChange={handleChange}
                                                            isValid={touched.course && !errors.course}
                                                            isInvalid={errors.course}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option> Не выбрано</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </Form.Select>
                                                        <Form.Control.Feedback type="valid">Готово!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.course}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupGroup">
                                                        <Form.Label>Группа</Form.Label>
                                                        <Form.Select aria-label="Default select example"
                                                            name='group'
                                                            onChange={handleChange}
                                                            isValid={touched.group && !errors.group}
                                                            isInvalid={errors.group}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option> Не выбрано</option>
                                                            {groups.map(group => <option key={group.name} value={group.name}>{group.name}</option>)}
                                                        </Form.Select>
                                                        <Form.Control.Feedback type="valid">Готово!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.group}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
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
                                )}
                        </Formik>
                    </Modal>
                </Col>
            </Row >
        </div >

    )
}
export default FormCreateEventKey