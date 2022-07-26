import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });


  const handleName = (e) => {
    let val = { username: e.target.value };
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handlePassword = (e) => {
    let val = { password: e.target.value };
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handleSubmit = () => {
    if (user.username === "foo" && user.password === "bar") {
      navigate("/home");
    } else {
      alert("Invalid");
    }
  };
  
  return (
    <div className="main">
      <div className="form">
        <form>
          <h1 style={{"color":'white'}}>Log In</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" style={{"color":'white'}}>Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={handleName}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputPassword1" style={{"color":'white'}}>Password</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              onChange={handlePassword}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3 w-100"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <footer>
                <h4>Built with 💙 by <a className="anchor" href="https://github.com/Vaibhav041/Contact-List" target="_blank">Vaibhav</a></h4>
            </footer>
    </div>
  );
};

export default Login;
