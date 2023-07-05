function Busqueda(){
    return(
        <>
            <div>
            <div className="input-group flex-nowrap p-2">
                    <span className="input-group-text" id="addon-wrapping">
                        <i className="bi bi-search"></i>
                    </span>
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Escribe tu nombre" 
                    aria-label="Escribe tu nombre" 
                    aria-describedby="addon-wrapping"/>
                </div>
            </div>
      </>
    )

}
export default Busqueda;