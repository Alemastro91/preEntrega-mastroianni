import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemDetailContainer = () => {

const [producto, setProducto] = useState({});    
const {id} = useParams()

// useEffect(() => {
//     fetch(`https://64ac87ab9edb4181202f9bd9.mockapi.io/dbiPhone/${id}`)
//     .then((response) => response.json())
//     .then((response) =>{
//     setProducto(response)
//     })
//     .catch((error) => {
//     console.log("error:", error)
//     })
// },[id]);

useEffect(() => {
    const collectionProduct = collection(db, "iPhoneDB")
    const referenceDoc = doc(collectionProduct, id)
    getDoc(referenceDoc)
    .then((response) => setProducto({id:response.id, ...response.data()}))
    .catch((error) => console.log(error))
},[])

return (

    <div>

        <ItemDetail producto={producto} />
        

    </div>

)
}

export default ItemDetailContainer;