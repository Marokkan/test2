<template>
  <div class="payment">
      <div class="back-home">
          <router-link to="/">
              <img src="../assets/qasba_home.png" class="home-back-img" alt="">
          </router-link>
      </div>
      <div class="content">
        <h2 align=center>Home sweet home,  RUG</h2>
        <div id="paypal-button-container"></div>
      </div>

    
  </div>
</template>

<script>
import {AddProduct} from "../firebase_config"

export default {
    mounted(){
        

         //----------------CONFIG BUTTONS PAY PAL-----------------------
        paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01' // Can also reference a variable or function
              }
            }]
          });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
          return actions.order.capture().then(function(orderData) {
            // Successful capture! For dev/demo purposes:

            //-----------ADD Order---------------


            setTimeout(()=>{
              AddProduct({...orderData})
            },4000)

            
            

          });
        }
      }).render('#paypal-button-container');

    }
}
</script>

<style scoped>


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



.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#paypal-button-container{
    width: 50%;
}

h2{
  font-size: 5.5vw;
}


</style>






