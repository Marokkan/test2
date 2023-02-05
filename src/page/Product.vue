<template>
  <div class="shop">
      <div class="back-home">
          <router-link to="/">
              <img src="../assets/qasba_home.png" class="home-back-img" alt="">
          </router-link>
      </div>
    <div class="main-home">
        <div class="left-home">
            <div class="main-img-shop">
                
                    <img v-if="BoolDisplayImg1" :src="image_product" class="home-sweet" alt="src_img">
                    <!--
                        <img v-if="BoolDisplayImg2" src="../assets/affiche.png" class="home-sweet" alt="src_img">
                    -->
                
            </div>
            <div class="change-img">
                <!--
                    <img src="../assets/carpet.png" class="image1" @click.prevent="BoolImg()" alt="">
                    <img src="../assets/affiche.png" class="image2" @click.prevent="BoolImg()" alt="">

                -->
                
            </div>
        </div>
        
        <div class="right-home">
            <h2 class="title-home-sweet">{{ All_info_products.name }}</h2>
            <p class="price-home-sweet">{{ price_product }} €</p>
            <div class="buttons-home">
                <a target="_blank" :href="url_payment  ">
                    <button class="button-pay-pal button-home-sweet">Buy </button>
                </a>
                
            </div>
        </div>
    </div>
    
    
	

    
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import {ref,onMounted} from "vue"
import {useRoute} from "vue-router"

export default {
    components:{
        Footer
    },
    setup(){

        const route = useRoute()
        let All_info_products = ref([])
        let url_payment = ref()
        let image_product = ref()
        let price_product = ref()
        
        



       
        onMounted(()=>{

            
        
                console.log(route.params.id);
                fetch("/.netlify/functions/product?"+route.params.id).then(res => res.json()).then(data => {
                    
                    All_info_products.value = data // ALL DATA OF PRODUCT

                    console.log(All_info_products.value);
                    
                    url_payment.value = data.metadata.url // URL PAYMENT LINK
                    image_product.value = data.images[0] //URL IMAGE


                    
                    fetch("/.netlify/functions/price-products?"+All_info_products.value.default_price).then(res => res.json()).then(data => {
                    
                        price_product.value = data.unit_amount / 100

                    })
                    

                })

                

                
                    
                


        })
        
    

      






        //BOOLEAN IMAGE 
        const BoolDisplayImg1 = ref(true)
        const BoolDisplayImg2 = ref(false)

        const BoolImg = ()=>{
            if(BoolDisplayImg1.value){
                BoolDisplayImg1.value = false
                BoolDisplayImg2.value = true
            }else if(BoolDisplayImg1.value == false){
                BoolDisplayImg1.value = true
                BoolDisplayImg2.value = false
            }
        }












    


        return{
            BoolDisplayImg1,
            BoolDisplayImg2,
            BoolImg,
            All_info_products,
            url_payment,
            image_product,
            price_product
        }

    },
    mounted(){
        /*
        const image1 = document.querySelector(".image1")
        const image2 = document.querySelector(".image2")
        image1.style.border = "1px solid black"
        image1.style.pointerEvents = "none";

        image1.addEventListener("click",()=>{
            image1.style.border = "1px solid black"
            image2.style.border = "none"
            image1.style.pointerEvents = "none";
            image2.style.pointerEvents = "";
        })

        image2.addEventListener("click",()=>{
            image2.style.border = "1px solid black"
            image1.style.border = "none"
            image2.style.pointerEvents = "none";
            image1.style.pointerEvents = "";
        })*/

    }

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







/* ------------- MAIN -------------- */

.main-home{
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    gap: 100px;
    margin: 100px 0px;
    margin-bottom: 20%;
    
}

.right-home{
    display: flex;
    flex-direction: column;
}

.left-home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
}



.left-home .main-img-shop{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #02091206;
    padding: 50px;
    margin-bottom: 30px;
    height: 100%;
}

.change-img {
    display: flex;
    gap: 30px;
    
}

.change-img img{
    width: 60px;
    cursor: pointer;
    padding: 2px 5px;
}

.change-img img:hover{
    opacity: .6;
}



.hover-left-home{
    opacity: .8;
}

img.home-sweet{
    width: 280px;
    height: 280px;
}

img.home-full-screen{
    position: absolute;
    bottom: 27%;
    right: -15%;
    width: 40px;
    visibility: hidden;
    opacity: .3;
}

img.home-full-screen-visible{
    visibility: visible;
}

.title-home-sweet{
    font-size: 35px;
    margin-top: 0px;
}

.price-home-sweet{
    font-size: 25px;
    font-weight: 100;
    font-family: Arial, serif;
    transform: scaleY(.8);
    color: rgba(0, 0, 0, 0.612);
    margin: 30px 0px;
    text-align: left;
}




.button-home-sweet{
    font-weight: bold;
    cursor: pointer;
    border: none;
    width: 400px;
}


.button-pay-pal{
    color: white;
    background-color: #020912;
    font-size: 25px;
    padding: 10px 0px;
    transition: .5s ease-in-out;
}

.button-pay-pal:hover{
    transform: scale(1.05);
    transition: .5s ease-in-out;
}



/*--------POPUP---------*/


.overlay {
  position:fixed ;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 1;
  z-index: 999;
}

.overlay-visible{
    position:fixed ;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: visible;
  opacity: 1;
  z-index: 999;
}

.overlay:target {
  visibility: visible;
  opacity: 0;
}

.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: #fff;
  border-radius: 5px;
  width: 80%;
  height: 90%;
  position: relative;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #06D85F;
}

.popup .content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.carpet-popup{
    width: 55%;
}



/* --------------RESPONSIVE DESIGN ------------------*/

@media only screen and (max-width:790px){

    .home-back-img{
        width: 40px;
        cursor: pointer;
    }


    /* MAIN */
    .main-home{
        display: flex;
        flex-direction: column;
        gap: 0px;
        margin-bottom: 200px;
    }

    .left-home{
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }

    .left-home .main-img-shop{
        padding: 20px ;
        margin-bottom: 20px;
    }

    .change-img img{
        width: 40px;
        cursor: pointer;
    }

    .change-img {
        gap: 15px;
        
    }

    .right-home{
        justify-content: center;
        align-items: center;

    }

    img.home-sweet{
        width: 220px;
    }
    
    .title-home-sweet{
        font-size: 25px;
        text-align: center;
    }

    img.home-full-screen{
        display: none;
    }

    .button-pay-pal{
        padding:10px 80px;
    }

    .button-pay-pal:hover{
        transform: scale(1);
    }

    .popup {
        height: 80%;
    }

    .carpet-popup{
        width: 95%;
    }

    .button-home-sweet{
        font-weight: bold;
        cursor: pointer;
        border: none;
        width: 200px;
    }



}










</style>