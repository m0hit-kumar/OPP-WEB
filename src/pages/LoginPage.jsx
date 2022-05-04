// import React from "react";
import "../CSS/LoginPage.css";
// import ScriptTag from "react-script-tag";

const LoginPage = () => {
  return (
    <>
      {/* <ScriptTag src="https://kit.fontawesome.com/b99e675b6e.js" /> */}

      <div className="background">
        <div id="loginform">
          <div className="innerCont">
            <h1 className="title">Welcome back!</h1>
            <h1 className="sub-title">Use your rollno and password to login</h1>

            <form className="myform">
              <label>Username or Rollno</label>
              <input></input>
              <label>Password</label>

              <input></input>
              <h1 className="forgot">Forget Password?</h1>

              <button path="./homepage">Login</button>
              <h1 className="need-acc">
                Need an Account? <span>Register</span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
