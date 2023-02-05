<template>
  <div class="shop">
    <div class="back-home">
          <router-link to="/">
              <img src="../assets/qasba_home.png" class="home-back-img" alt="">
          </router-link>
      </div>   

      <h1>SHOP</h1>

      <section class="products" >
        
        <div class="product-box" v-for="res in All_products ">
            <img class="img1" :src="res.images[0]" alt="">
            <p>{{ res.name }}</p>
            <router-link :to="'/product/'+res.id">
                <button class="button-home-sweet button-pay-pal">SHOP</button>
            </router-link>
        </div>

        

      </section>

      <Footer></Footer>
    
  </div>
</template>

<script>
import axios from "axios"
import Footer from "../components/Footer.vue"
import {ref,onMounted} from "vue"

export default {
    components:{
        Footer
    },  
    setup() {

        
        let All_products = ref([])
       
        onMounted(()=>{

            

            fetch("/.netlify/functions/list-products").then(res => res.json()).then(data => {
                
                All_products.value = data.data
                console.log(All_products.value);

            })



        })
        
    

      
        return {
            All_products
        }


        
    },
}
</script>


<style scoped>




/*-------BACK HOME-------- */
.back-home{
    padding: 15px;
}

.home-back-img{
    width: 60px;
    cursor: pointer;
    margin-bottom: 30px;
}

.home-back-img {
    transform: scale(1) rotate(0deg);
    transition-property: transform;
    transition-timing-function: ease-in;
    transition: transform 900ms ease-in;
    transition-duration: 0.09s;
  }

.home-back-img:hover {
    transform: scale(1.17) rotate(-50deg);
  }




h1{
    text-align: center;
    font-size: 2em;
}

.header-img img{
    height: 150px;
}


/* SECTION PRODUCTS */

.products {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    align-content: start;
    padding:10px 100px ;
    margin: 100px 0px;
}


.product-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    width: 300px;

}

.product-box img{
    height: 200px;
}

.product-box a {
    width: 100%;
}

.product-box p{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}




@media only screen and (max-width:790px){

h1{
    font-size: 1.5em;
}

.products {
    gap: 40px;
    align-content: start;
    padding:10px 0px ;
    margin: 50px 0px;
}


.product-box {
    padding: 20px;
    width: 150px;

}

.product-box .img1{
    height: 120px;
    width: 100px;
}

.product-box .img2{
    height: 120px;
    width: 120px;
}

.product-box a {
    width: 100%;
}

.product-box p{
    text-align: center;
    font-size: 15px;
    font-weight: 600;
}









}










</style>


