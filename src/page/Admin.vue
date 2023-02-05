<template>
  <div class="admin">
      <div v-if="!BoolDisplayAdmin" class="connexion-admin">
          <h2>Admin Connexion</h2>
          <form @submit.prevent="ConnexionAdmin">
                <input type="text" v-model="FormObjAuthAdmin.username" placeholder="Enter Username">
                <input type="password" v-model="FormObjAuthAdmin.password" placeholder="Enter Password">
                <input type="submit" value="Connexion">
                
          </form>
      </div>

      <div v-if="BoolDisplayAdmin" class="admin-panel">
          
          <div v-if="!BoolViewProduct" class="admin-main">
              <router-link to="/" class="admin-back-home">  Back to Home</router-link>
              <h2>ADMIN</h2>
                <table>
                    <tr>
                        <th>Full Name</th>
                        <th>E-mail</th>
                        <th>Date Order</th>
                        <th>more info</th>
                    </tr>
                    <tr v-for="res in AllProductData" >
                        <td>{{res.purchase_units[0].shipping.name.full_name}}</td>
                        <td>{{res.purchase_units[0].payee.email_address}}</td>
                        <td>{{res.purchase_units[0].payments.captures[0].create_time}}</td>
                        <td @click="ViewProduct(res.id_)" class="view-link" > view  </td>
                        
                    </tr>
                    
                   
                    
                </table>

          </div>
          <div v-if="BoolViewProduct" class="admin-view-product">
              <p class="admin-back" @click="BackAdminPanel">Back</p>
              <h2>View Info</h2>
              <table>
                    <tr>
                        <th>Full Name</th>
                        <th>E-mail</th>
                        <th>Country Code</th>
                        <th>City</th>
                        <th>Address 1</th>
                        <th>Postal Code</th>
                        <th>Date Order</th>
                    </tr>
                    <tr>
                        <td>{{AllInfoProduct.purchase_units[0].shipping.name.full_name}} </td>
                        <td>{{AllInfoProduct.purchase_units[0].payee.email_address}} </td>
                        <td>{{AllInfoProduct.payer.address.country_code}} </td>
                        <td>{{AllInfoProduct.purchase_units[0].shipping.address.admin_area_2}}</td>
                        <td>{{AllInfoProduct.purchase_units[0].shipping.address.address_line_1}}</td>
                        <td>{{AllInfoProduct.purchase_units[0].shipping.address.postal_code}}</td>
                        <td>{{AllInfoProduct.purchase_units[0].payments.captures[0].create_time}}</td>
                    </tr>
                    
                </table>
          </div>
      </div>

  </div>
</template>



<script>
import {GetAdmin,ProductCollection,AddProduct,GetProduct} from "../firebase_config"
import {onBeforeMount,ref} from "vue"

export default {
    setup(){
        const AuthAdmin = ref()
        const AllInfoProduct = ref()
        const AllProductData = ref()
        const BoolViewProduct = ref()
        const Id_Collection = ref()
        const BoolDisplayAdmin = ref(false)
        const FormObjAuthAdmin = ref({
            username:null,
            password:null
        })


        onBeforeMount(()=>{
            
            //--------GET AUTH ADMIN--------------
            GetAdmin("admin")
            .then(res => AuthAdmin.value = res)


            //----------LOAD DATA PRODUCTS -----------------
            
             
                const SnapShotProduct = ProductCollection.onSnapshot(snapshot => {
                    AllProductData.value = snapshot.docs.map(doc => ({id_:doc.id, ...doc.data() })) 
                    
                })

             


        })



        const ConnexionAdmin = ()=>{
            if(FormObjAuthAdmin.value.username == AuthAdmin.value.username && FormObjAuthAdmin.value.password == AuthAdmin.value.password){
                BoolDisplayAdmin.value = true
            }

        }

        const ViewProduct = (id)=>{
            Id_Collection.value = id
            BoolViewProduct.value = true

            setTimeout(async()=>{
                await GetProduct(Id_Collection.value).then(res => AllInfoProduct.value = res)
            },1000)

            
        }

        const BackAdminPanel = ()=>{
            BoolViewProduct.value = false
            
        }

        



        return{
            AuthAdmin,
            FormObjAuthAdmin,
            ConnexionAdmin,
            BoolDisplayAdmin,
            BoolViewProduct,
            ViewProduct,
            BackAdminPanel,
            AllProductData,
            Id_Collection,
            AllInfoProduct

        }
    }

}
</script>




<style scoped>


/*------------CONNEXION ADMIN (FORM)----------------*/

h2{
    text-align: center;
}

.connexion-admin{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.connexion-admin form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 50px;
    margin:5%  0px;
    background-color: #eeee;
    border-radius: 10px;
}

form input{
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    width: 300px;
}

form input[type="submit"]{
    margin-top: 20px;
    background-color: rgb(203, 201, 201);
    color: white;
    cursor: pointer;
}

form input[type="submit"]:hover{
    transform: scale(.96);
    transition: .2s ease-in-out;
}





/*--------ADMIN PANEL-------------*/

/* ADMIN MAIN*/


table {
    margin: 0 auto;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    font-size: 20px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:first-child {
  background-color: #dddddd;
}

.view-link{
    color: #a1a1a1;
    text-decoration: underline;
    cursor: pointer;
}

.admin-back-home{
    position: relative;
    left: 2%;
    font-size: 15px;
    color: #a1a1a1;
    text-decoration: underline;
}




/* VIEW PRODUCT */

.admin-view-product{
    position: relative;
}

.admin-back{
    position: relative;
    top: -20%;
    left: 2%;
    font-size: 15px;
    text-decoration: underline;
    color: #a1a1a1;
    cursor: pointer;
}







</style>





