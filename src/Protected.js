import { useNavigate } from "react-router-dom";

function Protected() {
  const navigate = useNavigate();

  if (localStorage.getItem("user-info")) {
    navigate("/add");
  } else {
    navigate("/login");
  }

  return "Navigation";
}

export default Protected;
