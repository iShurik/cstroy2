import { Container, Row } from "react-bootstrap"
import Sidebar from "./components/sidebar/Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from "./components/content/Content"

const App = () => {


  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Content />
      </Row>
    </Container>
  )
}

export default App