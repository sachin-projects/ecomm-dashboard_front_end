import { useNavigate } from "react-router-dom";
import react, { useEffect, useState } from "react";
import { Table, tbody, Button } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  });

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE",
    });

    result = await result.json();
    getData();
    console.log(result);
  }

  function getData() {
    async function getlist() {
      return await fetch("http://127.0.0.1:8000/api/list");
    }

    let result = getlist();
    result.then((res) => res.json()).then((data) => setData(data));
  }

  return (
    <div>
      <Header />
      <h1>Product List</h1>
      <div className="col-sm-6 offset-sm-3">
        <tbody>
          <Table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Operations</th>
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
                  <td>
                    <Button
                      onClick={() => deleteOperation(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                    &nbsp;&nbsp;
                    <Link className="btn btn-warning" to={"/update/" + item.id}>
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
          </Table>
        </tbody>
      </div>
    </div>
  );
}

export default ProductList;
