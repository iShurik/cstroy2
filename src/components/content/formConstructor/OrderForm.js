import { Col, Row } from 'react-bootstrap'


const OrderForm = (props) => {


    return (
        <Row>
            <Col lg={12}>
                {props.fields.map(f=> <div key={f.id}><div>{f.id}. {f.type}</div><div>{f.head}</div></div>)}
            </Col>
        </Row>
    )
}

export default OrderForm