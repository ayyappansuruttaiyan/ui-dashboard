import data from "../Data/data.js";

export default function Table() {
  const header = [
    "Invoice Id",
    "Date",
    "Customer",
    "Payable Amount",
    "Paid Amount",
    "Due Amount",
  ];
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          {header.map((h) => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((d) => {
          let tableData = data[d];
          return (
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <td key={tableData.invoice_id}>{tableData.invoice_id}</td>
              <td>{tableData.date}</td>
              <td>{tableData.customer}</td>
              <td>&#8377; {tableData.payable_amount}</td>
              <td>&#8377; {tableData.paid_amount}</td>
              <td>&#8377; {tableData.due_amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
