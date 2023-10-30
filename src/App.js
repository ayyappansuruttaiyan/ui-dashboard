// https://653f55bd9c2d71227a654e58--luxury-pavlova-32f667.netlify.app/
import "./App.css";
import Search from "../Search/Search";
import SalesInfo from "./Components/SalesInfo/SalesInfo";
import Table from "./Components/Table/Table";
import data from "./Components//Data/data";

import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-3 secondary-color ">
          <SideBar />
        </div>
        <div className="col-md-9">
          <Search />
          <SalesInfo title="Sales Information" />
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
