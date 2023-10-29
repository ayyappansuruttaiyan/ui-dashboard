import Table from "react-bootstrap/Table";
import "./salesTable.css";

export function SalesTable(props) {
  return (
    <div className="salesTable">
      <Table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Invoice Id</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Payable Amount</th>
            <th scope="col">Paid Amount</th>
            <th scope="col">Due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{props.datas[0]}</td>
            <td>23/09/2022</td>
            <td>Jacob Marcus</td>
            <td>&#8377; 100</td>
            <td>&#8377; 100</td>
            <td>&#8377; 000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
