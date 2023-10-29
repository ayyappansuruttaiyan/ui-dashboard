import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./search.css";

export function Search() {
  return (
    <div className="search">
      <input className="input" type="text" placeholder="Search" />
      <span>
        <FontAwesomeIcon icon={faBell} />
      </span>
    </div>
  );
}
