import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./Login.css";

export const Login = ( {history} ) => {

  const {dispatch} = useContext(AuthContext);

  const [userName, setuserName] = useState();

  const [password, setPassword] = useState();

  const handleLogin = ( e ) => {

    e.preventDefault();
    console.log(userName, password)
    history.replace("/");
    dispatch({
      type: types.login,
      payload: {
        userName: userName ,
        isAdmin: true,
        logged: true
      }
    })
  }



  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          
          <div className="col-lg-12 login-title">Log In</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input type="text" className="form-control" 
                  onChange={(event)=>setuserName(event.target.value)}></input>
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" 
                  onChange={(event)=>setPassword(event.target.value)}></input>
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* <!-- Error Message --> */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button className="btn btn-outline-primary" onClick={ handleLogin }>
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
};
