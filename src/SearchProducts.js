import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

function SearchProducts() {
  const [data, setData] = useState([]);

  async function search(key) {
    console.log(key);
    if (key !== "") {
      let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
      result = await result.json();

      setData(result);
    }
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Products</h1>
        <br />
        <input
          type="text"
          onChange={(e) => {
            search(e.target.value);
          }}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <Table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    src={"http://localhost:8000/" + item.file_path}
                    style={{ width: "100px", border: "solid 1px black" }}
                    alt="product"
                  />
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default SearchProducts;
