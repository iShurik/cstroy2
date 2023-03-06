import FormConstructor from './formConstructor/FormConstructor'
import OrderForm from './formConstructor/OrderForm'
import { Col, Row, Button, Form } from 'react-bootstrap'


const Content = (props) => {

    return (
        <Col md={12} lg={10} className='bg-dark text-light vh-100'>
            <FormConstructor onSaveField={props.onSaveField} />
            <OrderForm fields={props.field} />
        </Col>

    )
}

export default Content