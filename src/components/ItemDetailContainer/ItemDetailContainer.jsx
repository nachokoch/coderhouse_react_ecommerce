import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fakeAPI } from '../../helpers/fakeAPI'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

    const {idProduct} = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        fakeAPI
        .then(resp => setProducto(resp.find(prod => prod.id === idProduct)))
        .catch(err => console.error(err))
    }, [idProduct])


    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
