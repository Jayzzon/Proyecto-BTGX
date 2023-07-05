import React from "react";
import { gatches } from "../../bd/data";

export default function Home() {
    const Compra=()=>{
        alert("El producto ha sido agregado al carrito de compras")
    }
    return (
        <div className="p-3">
            <div class="row row-cols-1 row-cols-md-4 g-6">
            {gatches.map((refresco)=>{
                return(
                    <div class="col">
                        <div class="card">
                            <img src={refresco.imagen} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{refresco.nombre}</h5>
                                <p class="card-text">{refresco.descripcion}</p>
                                <div class="card-footer">
                                    <p class="text-end">
                                        $:{refresco.precio}&nbsp; Exsitencia:&nbsp;
                                        {refresco.cantidad}&nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-success inline-block">
                                            <i class="bi bi-cart-dash" onClick={Compra}></i>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            );
        })}

</div>
        </div>
        
    )
}