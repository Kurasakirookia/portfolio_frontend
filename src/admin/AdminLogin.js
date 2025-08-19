import { useState } from "react";
import API from "../utils/api";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/AdminLogin.css"
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { jwtDecode } from "jwt-decode";

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
   
      });

        const token = res.data.token;
        const decoded = jwtDecode(token);

        if (decoded.role === "admin") {
        localStorage.setItem("token", token);
        navigate("/admin");
        } else {
        toast.error("Access Denied: Not an admin");
        }
    } catch (err) {
        const msg = err?.response?.data?.message || "Login failed";
        toast.error(msg);
        console.error("Login error:", err);
    }
  };

    


  return (
    <div className="form_container">
      <form onSubmit={handleLogin} className="_login_form">

        <h2>Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="user_email"
        />

        <div className="password_field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="user_password"
          />
          <span
            className="toggle_eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye />: <FaEyeSlash /> }
          </span>
        </div>

        <button type="submit">Login</button>
        {/* <div className="route_div"><Link className="forgot_pass_link" to='/forgotPassword'>Forgot Password?</Link>
        <Link className="forgot_pass_link" to='/signUp'>Register</Link></div> */}
        
      </form>
    </div>
  );
};

export default AdminLogin;
