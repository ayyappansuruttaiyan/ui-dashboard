export default function Nav({ nav }) {
  const icons = [
    "fa-solid fa-vial-virus",
    "fa-solid fa-flask",
    "fa-solid fa-calendar-check",
    "fa-solid fa-prescription-bottle-medical",
    "fa-solid fa-message",
    "fa-solid fa-money-check-dollar",
    "fa-solid fa-gear",
    "fa-regular fa-circle-question",
  ];
  const length = icons.length ? "help" : "";
  console.log(length);
  // nav.map((e) => console.log(e));

  return (
    <ul className="nav flex-column">
      {nav.length > 0 &&
        nav.map((e, i) => (
          <li
            className={`nav-item    ${nav[i] === "Help" ? "help" : ""} `}
            key={e}
          >
            <a className="nav-link " href="w">
              <i className={icons[i]}></i> {e}
            </a>
          </li>
        ))}
    </ul>
  );
}
