import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";

export default function SideBar() {
  return (
    <div>
      <Logo brand="Medico Sales" />
      <Nav
        nav={[
          "Dashboard",
          "Labtest",
          "Appointment",
          "Medicine Order",
          "Messages",
          "Payment",
          "Settings",
          "Help",
        ]}
      />
    </div>
  );
}
