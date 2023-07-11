import React, { useState, useEffect } from "react";
import Axios from "../services/Axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Editar() {
  const variables = {
    id: "",
    nombre: "",
    precio: "",
    cantidad: "",
    descripcion: "",
    image: "",
  };

  const [saveDatos, setSaveDatos] = useState(variables);

  const params = useParams();
  const navigate = useNavigate();

  const buscarOne = async () => {
    const editar = await Axios.get(`producto/oneProducto/${params.id}`);
    setSaveDatos(editar.data);
    console.log(editar.data);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSaveDatos({ ...saveDatos, [name]: value });
  };

  const EditarForm = async (event) => {
    const form = document.getElementById("formedit");
    const formData = new FormData(form);
    Axios.patch("producto/updateProducto/" + params.id, formData).then(() => {
      console.log("Datos actualizados correctamente");
    });
    navigate("/admin/home");
  };

  useEffect(()=>{
    buscarOne(params.id);
  }, [params.id]);

  return (
    <div>
      <form
        className="row g-3"
        onSubmit={EditarForm}
        id="formedit"
        encType="multipart/form-data"
      >
        <div className="col-md-12">
          <label htmlFor="validationDefault01" className="form-label">
            Nombre del producto
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="Nombre del producto"
            name="nombre"
            value={saveDatos.nombre}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="validationDefault02" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            placeholder="Precio del producto"
            name="precio"
            value={saveDatos.precio}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="validationDefault02" className="form-label">
            Cantidad
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            placeholder="Cantidad de productos"
            name="cantidad"
            value={saveDatos.cantidad}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="validationDefault02" className="form-label">
            Descripcion
          </label>
          <textarea
            type="text"
            className="form-control"
            id="validationDefault02"
            placeholder="Redacta una descripción"
            name="descripcion"
            value={saveDatos.descripcion}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="validationDefault02" className="form-label">
            {saveDatos.filename}
          </label>
        </div>
        <div className="col-md-12">
          <input
            type="file"
            className="form-control"
            id="validationDefault02"
            placeholder="Ingresa la imagen"
            name="image"
            value={saveDatos.image}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Editar
          </button>
        </div>
      </form>
    </div>
  );
}