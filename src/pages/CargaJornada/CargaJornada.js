import React, { useState, useEffect, useContext } from "react";
import DateTimePicker from "react-datetime-picker";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth/AuthContext";
import { fetchSinToken } from "../../common/helpers/fetch";

export const CargaJornada = () => {

  const [tipos, setTipos] = useState([]);

  const [tipoUsuario, setTipoUsuario] = useState("");

  const [fechaInicio, setInicio] = useState("");

  const [fechaFin, setFin] = useState("");

  const { user } = useContext(AuthContext);
  const [tipoJornada, settipoJornada] = useState("")

  useEffect(() => {
    getTipos();
  }, [])





  const getTipos = async (e) => {

    const respuesta = await fetchSinToken(
      "tipoJornada/getTipos",
      {},
      "GET"
    );

    const body = await respuesta.json();
    if (body.ok) {
      const oTipos = body.tipos.map(elem => {
        return {
          id: elem._id,
          tipo: elem.tipoJornada
        }
      })

      setTipos(oTipos);
      if (oTipos.length > 0)
        settipoJornada(oTipos[0].tipo);
    }

  }

  const handleAltaJornada = async (e) => {
    e.preventDefault();

    const uid = user.uid;

    const respuesta = await fetchSinToken(
      "jornada/newJornada",
      { fechaInicio, fechaFin, uid, tipoJornada },
      "POST"
    );

    const body = await respuesta.json();
    if (body.ok) {
      Swal.fire('Exito', "Registrado correctamente", "success");

    }
    else {
      Swal.fire('Error', body.msg, 'error');
      console.log(body.msg)

    }

  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-title">Carga jornada</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    <label className="form-control-label">
                      Tipo de jornada
                    </label>
                    <select onChange={(event) => settipoJornada(event.target.value)} className="form-control" name="cars" id="cars">
                      {
                        tipos.map(elem => {
                          return <option key={elem.id} value={elem.tipo}>{elem.tipo}</option>

                        })
                      }

                    </select>
                    {/* <input type="text" className="form-control" value={} onChange={() => setuserName(event.target.value)}></input> */}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      Fecha y hora de inicio
                    </label>
                    <DateTimePicker className="form-control"
                      onChange={(event) => setInicio(event)}
                      value={fechaInicio} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      Fecha y hora de fin
                    </label>
                    <DateTimePicker className="form-control"
                      onChange={(event) => setFin(event)}
                      value={fechaFin}
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                      {/* <!-- Error Message --> */}
                    </div>
                    <div className="col-lg-6 login-btm login-button">
                      <button className="btn btn-outline-primary" onClick={handleAltaJornada}>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
