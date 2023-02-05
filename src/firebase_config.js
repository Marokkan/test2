
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firestore from "firebase/compat";
import {ref} from "vue"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6EbFEt2qJ-CGpPAZMt35RUJIjb-dpCoM",
  authDomain: "qasba-e7296.firebaseapp.com",
  projectId: "qasba-e7296",
  storageBucket: "qasba-e7296.appspot.com",
  messagingSenderId: "383241698358",
  appId: "1:383241698358:web:b665a55f2b58c3876cec97"
};





export const config = firestore.initializeApp(firebaseConfig)

const db = config.firestore() //on va dans firestore



export const ProductCollection = db.collection("products") // on prend la collection users qui se trouve dans le firestore
export const AdminDB = db.collection("admin")






/*----------PRODUCTS COLLECTION--------------*/


export const AddProduct = (product) =>{
    return ProductCollection.add(product) //on ajoute a firestore ddes valeurs

}

export const GetProduct = async (id) => {
    const product = await ProductCollection.doc(id).get()
    return  product.exists ?  product.data() : null

}


export const Delete = (id)=>{
    return ProductCollection.doc(id).delete()

}


export const Upload = (id,product)=>{
    return ProductCollection.doc(id).update(product)

}


export const LoadProduct = ()=>{
    const product = ref()
    const SnapShotProduct = ProductCollection.onSnapshot(snapshot => {
        product.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() })) 
    })


    return {
        SnapShotProduct
    }


    /*
    const close =  ProductCollection.onSnapshot(snapshot => {
        Events.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }) )
          
    })*/
        
    

}


/*------------------------ADMIN-------------------------------*/

export const GetAdmin = async (id) => {
    const admin = await AdminDB.doc(id).get()
    return  admin.exists ?  admin.data() : null
}




