import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./salesInfo.css";
export function SalesInfo() {
  return (
    <div className="salesInfo">
      <Row>
        <Col>
          <h4>Sales Information</h4>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <h6>Customer</h6>
          <input type="text" placeholder="Enter Costumer Name" />
        </Col>
        <Col md={3}>
          <h6>Invoice ID</h6>
          <input type="text" placeholder="Enter Invoice ID" />
        </Col>
        <Col md={3}>
          <h6>Start Date</h6>
          <input type="text" placeholder="Start Date" />
        </Col>
        <Col md={3}>
          <h6>End Date</h6>
          <input type="text" placeholder="End Date" />
        </Col>
      </Row>
    </div>
  );
}
