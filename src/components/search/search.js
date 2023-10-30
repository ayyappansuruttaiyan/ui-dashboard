import Icons from "../Icons/Icons";
import TextInput from "../TextInput/TextInput";

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
