import React from "react";
import "./AltaEmpleado.css";

export const AltaEmpleado = () => {
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
                  <input type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label className="form-control-label">E-MAIL</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label className="form-control-label">
                    CONFIRMAR PASSWORD
                  </label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* <!-- Error Message --> */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button className="btn btn-outline-primary">Submit</button>
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
