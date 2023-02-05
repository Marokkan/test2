<template>
  <div class="terms-conditions">
    <div class="back-home">
          <router-link to="/">
              <img src="../assets/qasba_home.png" class="home-back-img" alt="">
          </router-link>
      </div>
    <div class="logo_tc">
      <img src="../assets/logo_entier.svg" width="214px" height="89px">
    </div>
    <div class="title_tc">
        <a>Terms & Conditions</a>
    </div>

    <div class="tc">
        <p class="animate__animated animate__fadeInUp">ALL SALES FINAL.
        <br>NO RETURNS. NO EXCHANGES.
        <br>-Shipping operator: Colissimo / DHL.
        <br>-Purchases are normally shipped within 2 business days after order receipt.
        <br>-Please take note that delivery may be delayed at times of high order volumes.
        <br>-Shipment dates will be specified approximately.
        <br>-Shipment arrival can be delayed due to weather-, road-, or regional conditions. Customs duties and taxes Purchases shipped to destinations outside of France may be subject to customs duties and customs fees. All customs duties and customs
        fees in such cases must be paid by customers. Please note that the Company accepts no responsibility for customs procedures. Approximate customs duty amounts are displayed on the product purchase pages. Please note that the displayed customs
        duty amounts are estimates.
        </p>
    </div>

    <Footer />
  </div>
</template>



<script>
import Footer from "../components/Footer.vue"

export default {
  components:{
    Footer
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






.logo_tc {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

}
.title_tc{
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 60px;
    font-weight: bolder;
    letter-spacing: 5px;
}
.tc {
    font-family: aria-text-g2, sans-serif;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 50px;

  }
  
.tc p {
    display: flex;
    width: 70%;
    text-align: center;
    margin: auto;
    padding-top: 50px;
    font-size: 20px;
  }



/*-------RESPONSIVE DESIGN-------------- */


@media screen and (max-width:820px) {
    .title_tc a {
      display: flex;
      text-align: center;
      margin: auto;
      justify-content: center;
      margin: 30px;
      font-size: 20px
    }
  
    .tc {
      line-height: 25px;
      overflow: hidden;
    }
  
    .tc p {
      display: flex;
      position: relative;
      bottom: 30px;
      text-align: center;
      margin: auto;
      font-size: 14px;
    }
  }
  



</style>