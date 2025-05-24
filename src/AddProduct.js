import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  });

  async function AddProductdb() {
    //console.log(name, price, description, file.name);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);

    let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });

    alert("Product Added Successfully");
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Add Product</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="form-control"
          placeholder="Price"
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="form-control"
          placeholder="Description"
        />
        <br />
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          className="form-control"
          placeholder="File"
        />
        <br />
        <button onClick={AddProductdb} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
