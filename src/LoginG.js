import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginG = () => {
    const navigate = useNavigate();

    return (
        // <GoogleLogin
        //     onSuccess={(credentialResponse) => {
        //         const credientResponseDecode = jwtDecode(
        //             credentialResponse.credential
        //         );
        //         console.log(credientResponseDecode);
        //     }}
        //     onError={() => {
        //         console.log("Login Failed");
        //     }}
        // />

        <GoogleLogin
            onSuccess={async (credentialResponse) => {
                const idToken = credentialResponse.credential;

                try {
                    const res = await axios.post(
                        "http://localhost:8000/api/auth/google",
                        {
                            token: idToken,
                        }
                    );

                    console.log("User authenticated:", res.data);

                    localStorage.setItem("user-info", JSON.stringify(res.data));
                    navigate("/add");
                } catch (error) {
                    console.error(
                        "Backend error:",
                        error.response?.data || error.message
                    );
                }
            }}
            onError={() => {
                console.log("Login Failed");
            }}
        />
    );
};

export default LoginG;
