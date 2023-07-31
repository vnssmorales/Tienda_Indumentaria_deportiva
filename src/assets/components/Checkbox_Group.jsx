import { useRef } from "react";

function Checkbox_Group(props) {
    
    let inputRef = useRef()
    let inputZapatillas = useRef()
    let inputShorts = useRef()
    let inputCalzas = useRef()
    let inputPoleras = useRef()
   
    return (
        <>
            <div className="container">
                <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="zapatillas" ref={inputZapatillas} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Zapatillas</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="shorts" ref={inputShorts} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Shorts</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="calzas" ref={inputCalzas} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Calzas</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="poleras" ref={inputPoleras} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Poleras</p>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" id="textsearch" ref={inputRef} />
                        <div className="input-group-append">
                            <button onClick={() => props.filterProducts()} className="btn btn-outline-secondary" type="button">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkbox_Group;