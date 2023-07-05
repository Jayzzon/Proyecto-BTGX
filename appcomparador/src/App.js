import {BrowserRouter} from 'react-router-dom';
import Rutas from "./Ruta/Rutas";
import RutasClientes from "./Ruta/RutasCliente";
function App(){
  return(
    <BrowserRouter>
      <div>
        <Rutas/>
        <RutasClientes/>
      </div>
    </BrowserRouter>
  )
}

export default App;
