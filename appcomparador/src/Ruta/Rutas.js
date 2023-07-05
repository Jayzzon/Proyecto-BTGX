import { Routes,Route} from "react-router-dom";

import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import HomeAdmin from "../pages/admin/Home";
import Editar from "../components/Editar";


function Rutas(){
return(
        <AdminLayout>
        <Routes>
            <Route path="/admin/home" element={<HomeAdmin/>}/>
            <Route path="/admin/editar/:id" element={<Editar/>}/>
        </Routes>
        </AdminLayout>

    )
}

export default Rutas;