import { Formik } from 'formik'
import moment from 'moment'
import React, { useContext, useMemo, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import APICurrentEK from '../../API/currentEK'
import { AudsContext, GroupsContext } from '../../context'


const FormCreateEventKey = ({ showFormCreateModal, setShowFormCreateModal, currentEK, setCurrentEK }) => {
    const { auds } = useContext(AudsContext)
    const { groups } = useContext(GroupsContext)
    const [selectedCourse, setSelectedCourse] = useState(null)

    const freeAuds = useMemo(() => {
        return auds.filter((aud) => !currentEK.find(eventKey => eventKey.aud == aud.name && eventKey.timeToPassKey == null))
    }, [currentEK, auds])

    const sortGroups = useMemo(() => {
        return groups.filter((group) => group.course === selectedCourse &&
                (!currentEK.find(eventKey => eventKey.group == group.name && eventKey.timeToPassKey == null)))
    }, [selectedCourse, groups, currentEK])

    const createCurrentEK = async (eventKey) => {
        await APICurrentEK.addCurrentEK(eventKey)
        setCurrentEK(await APICurrentEK.getCurrentEK())
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
                            {freeAuds.map(aud =>
                                aud.name + (aud.notation ? ` (${aud.notation}), ` : ', ')
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
                                    date: moment(Date.now()).format('DD-MM-YYYY'),
                                    aud: Number(values.aud),
                                    timeToTakeKey: moment(Date.now()).format('HH:mm'),
                                    timeToPassKey: null
                                }
                                createCurrentEK(newEventKey)
                            }}
                        >
                            {
                                ({
                                    handleSubmit,
                                    touched,
                                    errors,
                                    handleBlur,
                                    handleChange,
                                    setFieldValue }) => (
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
                                                            {freeAuds.map((aud) =>
                                                                <option key={aud._id} value={aud.name}>
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
                                                            onChange={e => {
                                                                setSelectedCourse(e.target.value)
                                                                setFieldValue("course", e.target.value)
                                                            }}
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
                                                            {sortGroups.map(group => <option key={group._id} value={group.name}>{group.name}</option>)}
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