import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from '../../logo.svg'
import './Register.css'
import { useSelector, useDispatch } from "react-redux";
import { registerInitiate } from "../../redux/actions";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user} = useSelector((state) => state.data);

    let history = useHistory();

    useEffect(() => {
      if (user) {
        history.push("/");
      }
    }, [user, history]);

    let dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email, password));
        setEmail("");
        setPassword("");
      };

    return (
        <div className="register">
      <Link to="/">
        <img className="register-logo" src={Logo} alt="cozmoo_logo" />
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
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
          <button type="submit" onClick={register} className="continue">
            Continue
          </button>
          <div className="detail">
            <p>Already have an account ?</p>
            <Link to="/login" className="signin-link">
              <p>Sign in</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
    )
}
