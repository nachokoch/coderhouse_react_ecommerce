import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import CartList from '../CartList/CartList'

function Cart() {

    const {cartList} = useContext(CartContext)

    return (
        <>
        {cartList.length === 0 
        ? 
            <div className="container mt-5">
                <div className="row text-center justify-content-center">
                    <h3 className="mt-5 mb-5">Carrito vacio</h3>
                    <Link className="btn btn-primary bg-gradient w-25" to="/">
                        Home - Comprar productos
                    </Link>
                </div>
            </div>
        :

        <CartList />
        }
        </>
    )
}

export default Cart
