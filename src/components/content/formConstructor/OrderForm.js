import { Col, Row, Button, Form } from 'react-bootstrap'


const OrderForm = (props) => {

    let fields= props.fields.map(f=> <div><div>{f.id}. {f.type}</div><div>{f.head}</div></div>)

    return (
        <Row>
            <Col lg={12}>
                {fields}
            </Col>
        </Row>
    )
}

export default OrderForm