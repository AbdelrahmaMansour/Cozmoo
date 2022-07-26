import React, { useState, useEffect } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import Logo from '../../logo.svg'
import { useHistory } from "react-router-dom";
import { loginInitiate } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useSelector((state) => state.data);

    let dispatch = useDispatch();

    let history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);
    const signIn = (e) => {
        e.preventDefault();
        dispatch(loginInitiate(email, password));
        setEmail("");
        setPassword("");
      }; 

    return (
        <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="Cozmo_logo" />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signIn">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Cozmo's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <p>New to Cozmoo?</p>
      <Link to="/register">
        <button className="login-register">Create Your Cozmoo Account</button>
      </Link>
    </div>
    )
}
