import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
      return; // Important: return early to prevent further execution
    }
  });

  useEffect(() => {
    const getData = async (id) => {
      let result = await fetch(`http://127.0.0.1:8000/api/getProduct/${id}`);
      result = await result.json();
      setData(result);
    };

    getData(id);
  }, [id]);

  return (
    <div>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h1>Update Product</h1>
        <input
          type="text"
          defaultValue={data.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          defaultValue={data.price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="form-control"
          placeholder="Price"
        />
        <br />
        <input
          type="text"
          defaultValue={data.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="form-control"
          placeholder="Description"
        />
        <br />
        <input
          type="file"
          defaultValue={data.file_path}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          className="form-control"
          placeholder="File"
        />
        <br />
        <img
          src={"http://localhost:8000/" + data.file_path}
          alt=""
          style={{ width: "100px" }}
        />
        <br />
        <button className="btn btn-primary">Update</button>
      </div>
    </div>
  );
}

export default UpdateProduct;
