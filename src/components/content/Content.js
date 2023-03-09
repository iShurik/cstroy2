import FormConstructor from './formConstructor/FormConstructor'
import OrderForm from './formConstructor/OrderForm'
import { Col } from 'react-bootstrap'
import React, { useState } from 'react'

const INITIAL_FIELDS = [
  {
    id: '1',
    type: 'input',
    head: 'Qwe'
  },
  {
    id:'0',
    type: 'textarea',
    head: 'Rty'
  }
]

const Content = () => {

  const [fields, setFields] = useState(INITIAL_FIELDS)

  const saveField = (inputField) => {
    setFields(prevFields => {
      return [{id:fields.length, ...inputField}, ...prevFields]
    })
  }

  return (
    <Col md={12} lg={10} className='bg-dark text-light vh-100'>
      <FormConstructor onSaveField={saveField} />
      <OrderForm fields={fields} />
    </Col>

  )
}

export default Content