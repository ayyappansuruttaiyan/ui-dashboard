import TextInput from "../TextInput/TextInput.js";

export default function SalesInfo({ title }) {
  return (
    <div className="salesInfo">
      <h3>{title}</h3>
      <div>
        <TextInput type="text" placeholder="Customer Name" />
        <TextInput type="text" placeholder="Invoice ID" />
        <TextInput type="date" placeholder="StartDate" />
        <TextInput type="date" placeholder="EndDate" />
      </div>
    </div>
  );
}
