import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemListContainer/ItemCount'
import './ItemDetail.css'

function ItemDetail({producto}) {

    const [irCarrito, setIrCarrito] = useState(false)

    const {cartList, agregarAlCarrito, unidades} = useContext(CartContext)

   
    const onAdd = (cantidad) => {       
        setIrCarrito(true)
        agregarAlCarrito({...producto, cantidad: cantidad})        
    }

    return (
        <div key={producto.id} className="container mt-5">
            <div className="row justify-content-center text-left align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 pb-5">  
                    <img src={producto.image} className="itemDetail-img"></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3 className="fw-bold">{producto.name}</h3>
                    <h4>${producto.price}</h4>
                    <p>{producto.description}</p>
                    <h5>Stock: {producto.stock}</h5>
                    {!irCarrito ? 
                    <ItemCount inicial={1} max={producto.stock} onAdd={onAdd} /> 
                    : 
                    <div className="d-flex justify-content-center">
                        <Link to={`/cart`}> 
                            <button className="btn btn-danger bg-gradient mt-3">Ir al carrito</button>
                        </Link>
                        <Link to={`/`}> 
                            <button className="btn btn-danger bg-gradient ms-3 mt-3">Seguir comprando</button>
                        </Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
