import { Container, Col, Image, Nav, Navbar } from 'react-bootstrap'
import css from './Sidebar.module.css'
import logo from '../../images/logo.png'
//import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <Col md={12} lg={2} className={css.stickytop + ' ' + css.vh100 + ' bg-light vh-100 sticky-top'}>
            <Image className="w-75 mt-3" src={logo} alt="logo" />
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-block">
                        <Nav.Link href="/OrderForm" className="nav-link active">
                            Создать заказ
                        </Nav.Link>
                        <Nav.Link href="/MyOrders" className="nav-link">
                            Мои заказы
                        </Nav.Link>
                        <Nav.Link href="/FormConstructor" className="nav-link">
                            Конструктор форм
                        </Nav.Link>
                        <Nav.Link href="/Contracts" className="nav-link">
                            Договора
                        </Nav.Link>
                        <Nav.Link href="/Login" className="nav-link">
                            Login
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Col>
    )
}

export default Sidebar