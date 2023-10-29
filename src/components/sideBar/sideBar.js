import Nav from "react-bootstrap/Nav";
import "./sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseMedical,
  faCalendar,
  faDashboard,
  faGear,
  faMessage,
  faMoneyBill,
  faPumpMedical,
} from "@fortawesome/free-solid-svg-icons";

import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

export function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">
        <FontAwesomeIcon icon={faDashboard} /> Dashboard
      </Nav.Link>
      <Nav.Link eventKey="link-1">
        <FontAwesomeIcon icon={faBriefcaseMedical} /> Lab Test
      </Nav.Link>
      <Nav.Link eventKey="link-2">
        <FontAwesomeIcon icon={faCalendar} /> Appointment
      </Nav.Link>
      <Nav.Link eventKey="link-3">
        <FontAwesomeIcon icon={faPumpMedical} /> Medicine Order
      </Nav.Link>
      <Nav.Link eventKey="link-4">
        <FontAwesomeIcon icon={faMessage} /> Messages
      </Nav.Link>
      <Nav.Link eventKey="link-5">
        <FontAwesomeIcon icon={faMoneyBill} /> Payment
      </Nav.Link>
      <Nav.Link eventKey="link-6">
        <FontAwesomeIcon icon={faGear} /> Settings
      </Nav.Link>
      <Nav.Link eventKey="link-7" className="help">
        <FontAwesomeIcon icon={faQuestionCircle} /> Help
      </Nav.Link>
    </Nav>
  );
}
