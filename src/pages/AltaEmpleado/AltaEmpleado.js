import React, { useContext, useState }from "react";
import Swal from "sweetalert2";
import { fetchSinToken } from "../../common/helpers/fetch";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./AltaEmpleado.css";

export const AltaEmpleado = ({ history }) => {

  const { dispatch } = useContext(AuthContext);


const [userName, setuserName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [passwordConf, setpasswordConf] = useState();
const [isAdmin, setisAdmin] = useState();

const handleRegister = async (e) => {
  e.preventDefault();

  if(userName.length == 0 || email.length == 0 || password.length == 0 || passwordConf.length == 0){
    Swal.fire('Campos Obligatorios', "Los campos no pueden estar vacíos.", 'warning');
    return;
    }
  if(password !== passwordConf){
    Swal.fire('Error', "Las contraseñas no coinciden.", 'warning');
    return;
    }
    if(!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/).test(email)){
      Swal.fire('Email erroneo', "El mail es erroneo", 'warning');
      return;
  }

  const respuesta = await fetchSinToken(
    "auth/newUser",
    { userName, email, password, isAdmin },
    "POST"
  );

  const body = await respuesta.json();
  if (body.ok) {
    const user = {
      logged: true,
      uid: body.uid,
      userName: userName,
      isAdmin: body.isAdmin,
      email: body.email,
      token: body.token,
    };
    localStorage.setItem("user", JSON.stringify(user));
    history.replace("/");
    dispatch({
      type: types.login,
      payload: user,
    });
    Swal.fire('Exito', "Registrado correctamente", "success")
  }
       
       else {
      Swal.fire('Error', "Error", 'error');

    }
  };






  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          
          <div className="col-lg-12 login-title">Alta Empleado</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">NOMBRE DE USUARIO</label>
                  <input type="text" className="form-control" onChange={(event) => setuserName(event.target.value)}></input>
                </div>
                <div className="form-group">
                  <label className="form-control-label">E-MAIL</label>
                  <input type="text" className="form-control" onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div className="form-group">
                  <label className="form-control-label">
                    CONFIRMAR PASSWORD
                  </label>
                  <input type="password" className="form-control" onChange={(event) => setpasswordConf(event.target.value)}></input>
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* <!-- Error Message --> */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button className="btn btn-outline-primary" onClick={handleRegister}>Submit</button>
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
