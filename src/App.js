import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Logo } from "./components/logo/logo";
import { SalesInfo } from "./components/salesInfo/salesInfo";
import { SalesTable } from "./components/salesTable/salesTable";
import { Search } from "./components/search/search";
import { Sidebar } from "./components/sideBar/sideBar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const datas = [
  { invoice_id: "#AHGA68" },
  { date: Date.now() },
  { customer: "Javob" },
  { payable_amount: 100 },
  { paid_amount: 100 },
  { due_amount: 0 },
];

function App() {
  return (
    <Container style={{ margin: 0, padding: 0 }}>
      <Row>
        <Col className="bg-color" md={3}>
          <Logo />
          <Sidebar />
        </Col>
        <Col md={9}>
          <Search />
          <SalesInfo />
          <SalesTable invoice={datas[0]} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
