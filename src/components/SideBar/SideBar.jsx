import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";

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
