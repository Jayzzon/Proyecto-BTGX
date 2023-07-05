import { Routes,Route} from "react-router-dom";

import ClienteLayout from "../Layout/ClientLayout/ClienteLayout";
import Home from "../pages/client/Home";
import Soporte from "../suport/soporte";

function RutasClientes(){
return(
        <ClienteLayout>
        <Routes>
            <Route path="/productos" element={<Home/>}/>
            <Route path="/Soporte" element={<Soporte/>}/>
        </Routes>
        </ClienteLayout>

    )
}

export default RutasClientes;