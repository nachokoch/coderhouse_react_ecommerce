import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import {fakeAPI} from '../../helpers/fakeAPI'
import ItemList from '../ItemList/ItemList'
import {db} from "../../firebase/firebase"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    console.log(db)

    useEffect(() => {
        const db = getFirestore();
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'productos'), where('category', '==', idCategory) )
            getDocs(queryCollectionCategory)
            .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        }  
    }, [idCategory])

    // useEffect(() => {

    //     if (idCategory) {            
    //         fakeAPI
    //         .then(resp => setProductos(resp.filter(prod => prod.category === idCategory)))
    //         .catch(err => console.error(err))
    //         .finally(() => setLoading(false))
    //     } else {
    //         fakeAPI
    //         .then(resp => setProductos(resp))
    //         .catch(err => console.error(err))
    //         .finally(() => setLoading(false))
    //     }
    // }, [idCategory])



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
