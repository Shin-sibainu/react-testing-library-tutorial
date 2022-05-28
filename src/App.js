import "./App.css";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";

function App() {
  return (
    <div className="Container app-container" role="parent">
      <Row>
        <Col>
          <h1>Reactでテストチュートリアル</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Login data-testid="child" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
