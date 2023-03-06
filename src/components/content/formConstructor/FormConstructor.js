import { Col, Row, Button, Form } from 'react-bootstrap'
import React, { useState } from 'react'


const FormConstructor = (props) => {

    const [field, setField] = useState({
        type: 'input',
        head: ''
    })
    
    const changeFieldType = () => {
        setField((previousState) => {
            return {
                ...previousState,
                type: 'textarea'
            }
        })
    }
    
    const changeHead = (event) => {
        setField((previousState) => {
            return {
                ...previousState,
            head: event.target.value
            }
        })
    }
    
    const clearField =() => {
        props.onSaveField(field)
        setField({
            type: 'input',
            head: ''
        })
    }    

    return (
        <Row>
            <Col lg={1}>
                <Button>Input</Button>
                <Button onClick={changeFieldType}>Textarea</Button>
            </Col>
            <Col lg={11}>
                <Form.Control as={field.type} onChange={changeHead} value={field.head} />
                <Button onClick={clearField}>Сбросить</Button>
            </Col>
        </Row>
        )
}

export default FormConstructor