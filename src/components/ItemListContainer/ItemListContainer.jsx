import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {fakeAPI} from '../../helpers/fakeAPI'
import ItemList from '../ItemList/ItemList'


function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {

        if (idCategory) {            
            fakeAPI
            .then(resp => setProductos(resp.filter(prod => prod.category === idCategory)))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
        } else {
            fakeAPI
            .then(resp => setProductos(resp))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
        }
    }, [idCategory])



    return (
        <div>           
            <div className="container">
                <div className="row">
                    { loading ? 
                        <h2 className="text-center">Loading.</h2>
                        :
                        <ItemList productos={productos}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
