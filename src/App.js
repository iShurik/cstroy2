import { Container, Row } from "react-bootstrap"
import Sidebar from "./components/sidebar/Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from "./components/content/Content"

const App = () => {

  const field = [
    {
      id: '1',
      type: 'input',
      head: 'Qwe'
    },
    {
      id:'2',
      type: 'textarea',
      head: 'Rty'
    }
  ]

  const saveField = (inputField) => {
    const field = {
      ...inputField,
      id: Math.random().toString()
    }
    console.log(field)
  }

  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Content field={field} onSaveField={saveField} />
      </Row>
    </Container>
  )
}

export default App