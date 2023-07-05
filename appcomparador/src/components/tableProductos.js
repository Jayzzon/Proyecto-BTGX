import React, { useState, useEffect} from 'react';
import Axios from '../services/Axios';
import { useNavigate } from 'react-router-dom';


export default function TableProductos() {
  const datos={
    nombre:"",
    precio:"",
    cantidad:"",
    descripcion:"",
    imagen:""
  };
  const urlImages = "http://localhost:4000/images/";
  const [saveDatos, setSaveDatos]=useState(datos);
  const [almacenarDatos, setAlmacenarDatos]=useState([]);
  const navigate=useNavigate();
  const onChange=(e)=>{
    const {name,value}=e.target;
    setSaveDatos({...saveDatos,[name]:value})
  }

  const Eliminar=async(id)=>{
    const eliminar=await Axios.delete(`producto/deleteProducto/${id}`);
    console.log("los datos han sido eliminados exitosamente: "+eliminar);
    consultarInfo();
  }
  const Guardar=async(e)=>{
    e.preventDefault();
    const formu = document.getElementById("form-producto");
    const formData = new FormData(formu);

    await Axios.post("producto/guardarProducto",saveDatos).then(
    ()=>{
      console.log("Registros guardados con exito");
    }
    )
    //console.log(saveDatos);
    //consultarInfo();
  };
  const consultarInfo=async()=>{
    const consultar=await Axios.get("producto/consultarProduct");
    setAlmacenarDatos(consultar.data);
    //console.log(almacenarDatos.data);
    //consultarInfo();
  }
  const Editar=async(id)=>{
    alert("Se va a editar")
  }

  useEffect(()=>{
    consultarInfo();
  },[])

  const ListaProducto=almacenarDatos.map(productos=>{
    return(
      <tbody>
          <th scope='row'>{productos.id}</th>
          <td>{productos.nombre}</td>
          <td>$&nbsp;{productos.precio}.00</td>
          <td>{productos.cantidad}</td>
          <td>{productos.descripcion}</td>
          <td>
            <img
              src={urlImages + productos.filename}
              class="img-thumbnail"
              alt="..."
              style={{width:"100px"}}
            />
          </td>
          <td>
            <button className='btn btn-info' onClick={()=>navigate(`/admin/editar/${productos._id}`)}><i className='bi bi-pencil'></i></button></td>
          <td><button className='btn btn-danger' onClick={()=>Eliminar(productos._id)}><i className='bi bi-trash'></i></button></td>
        </tbody>
    )
  })
  return (
    <div>
      <div className='section'>
        <button className='btn btn-success'
        data-bs-toggle="modal"
        data-bs-target='#exampleModal'
        >Agregar un articulo...</button>
      </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope='col'>Cantidad</th>
      <th scope='col'>Descripcion</th>
      <th scope='col'>imagen</th>
      <th scope='col'>Editar</th>
      <th scope='col'>Eliminar</th>
    </tr>
  </thead>
  {ListaProducto}
  </table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Registro de productos
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3" onSubmit={Guardar} id="form-productos" encType="multiplart/form-data">
                <div class="col-md-12">
                  <label for="validationDefault01" class="form-label">
                    Nombre del producto
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Nombre del producto"
                    name='nombre'
                    value={saveDatos.nombre}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationDefault02" class="form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Precio del producto"
                    name='precio'
                    value={saveDatos.precio}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationDefault02" class="form-label">
                    Cantidad
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Cantidad de productos"
                    name='cantidad'
                    value={saveDatos.cantidad}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationDefault02" class="form-label">
                    Descripcion
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="descripcion"
                    placeholder="Redacta una descripción"
                    name="descripcion"
                    value={saveDatos.descripcion}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="file"
                    class="form-control"
                    id="image"
                    placeholder="Ingresa la imagen"
                    name="image"
                    value={saveDatos.imagen}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}