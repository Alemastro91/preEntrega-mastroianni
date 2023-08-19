import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {

const [producto, setProducto] = useState({});    
const {id} = useParams()
const [loading , setLoading] = useState(true)

useEffect(() => {
    setTimeout(() => {
        setLoading(false)
      }, 2000);

    const collectionProduct = collection(db, "iPhoneDB")
    const referenceDoc = doc(collectionProduct, id)
    getDoc(referenceDoc)
    .then((response) => setProducto({id:response.id, ...response.data()}))
    .catch((error) => console.log(error))
},[])

return (

    <div>

        {loading ? <Loader /> : <ItemDetail producto={producto} />}        
        
    </div>

)
}

export default ItemDetailContainer;