import Header from "./Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  });

  const login = async () => {
    console.log("login");
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();

    console.log("result=", result);

    if (!result.error) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/add");
    }
  };

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Login</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control"
          placeholder="Email"
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="form-control"
          placeholder="password"
        />
        <br />
        <button onClick={login} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Login;
