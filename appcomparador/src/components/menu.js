import {Link} from "react-router-dom"
function Menu(){
    return(
        <div className="menu">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">Inicio</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/productos">Productos</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalagos</Link>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to="#">Teclados</Link></li>
                      <li><Link class="dropdown-item" to="#">Mouse</Link></li>
                      <li><Link class="dropdown-item" to="#">Bocinas</Link></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Reportes
                    </Link>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to="#">Ventas</Link></li>
                      <li><Link class="dropdown-item" to="#">Productos</Link></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><Link class="dropdown-item" to="#">Clientes</Link></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/Soporte">Soporte</Link>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                  <ul>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="#">
                        <button className="btn btn-info">
                        <i class="bi bi-person-square"></i>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </nav>
        </div>
    )
}
export default Menu

