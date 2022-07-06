import {useEffect, useState} from "react"

function App() {

  const [ state, setState ] = useState([])

  useEffect(() => {
    async function traerUsuarios() {
      const url = "http://localhost:3000/app-user-tbs";
      const respond = await fetch(url);
      const data = await respond.json();
      console.log(data)
      console.log(data[0].username)
      setState(data);
      console.log('El total usuarios es :', data.length)
    }
    traerUsuarios();
  }, [])


  const [datos, setDatos] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) =>{
    let { name, value } = e.target;
    let newDatos = {...datos, [name]: value};
    setDatos(newDatos);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    async function traerUsuarios() {
      const url = "http://localhost:3000/app-user-tbs";
      const respond = await fetch(url);
      const data = await respond.json();
  
      if(e.target.value == data[0].username && e.target.value == data[0].password){
        console.log("enviar");
      }else{
        console.log("No enviar");
      }
    }
  traerUsuarios();
}

  return (
    <>
      <section className="h-100">
        <div className="container h-100 mt-5">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4 text-center">Registro</h1>
                  <form onSubmit={handleSubmit} className="needs-validation" noValidate={true} autoComplete="off">
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">Usuario</label>
                      <input onChange={handleInputChange} id="email" type="text" className="form-control" name="username" required autoFocus />
                      <div className="invalid-feedback">
                        Usuario inválido
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="text-muted" htmlFor="password">Contraseña</label>
                        <a href="/" className="float-end">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <input onChange={handleInputChange} id="password" type="password" className="form-control" name="password" required />
                      <div className="invalid-feedback">
                        Contraseña es requerida
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                        <label htmlFor="remember" className="form-check-label">Recordarme</label>
                      </div>
                      <button type="submit" className="btn btn-primary ms-auto">
                        <i className="bi bi-box-arrow-in-right"></i> Ingresar
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Todos los derechos reservados &copy; 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App