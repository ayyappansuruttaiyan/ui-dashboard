import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

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
