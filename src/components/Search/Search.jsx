import Icons from "../Icons/Icons.jsx";
import TextInput from "../TextInput/TextInput.jsx";

export default function Search() {
  return (
    <div className="search">
      <span>
        <TextInput icon="icon" type="text" placeholder="Search" />
      </span>
      <Icons bell="fa-solid fa-bell" />
    </div>
  );
}
