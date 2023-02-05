<template>
  <div class="about">
   <div class="back-home">
          <router-link to="/">
              <img src="../assets/qasba_home.png" class="home-back-img" alt="">
          </router-link>
      </div>
      
      <div class="about">
          <h1 class="animate__animated animate__fadeInDown">ABOUT</h1>
      <div class="text_about">
          <p class="animate__animated animate__fadeInLeft"> 
            <img src="../assets/logo_entier.svg" > 
            CREATIVE HOUSE HAS BEEN FOUNDED IN 2021 FOLLOWING YEARS WORKING INDIVIDUALLY AS CREATIVE
            ALWAYS LOOKING FOR NEW PROJECTS THE HOUSE WANTS TO MAKE ART INTERACT WITH EACH OTHER: EACH DOMAINS OF THE HOUSE PAYS A SPECIAL ATTENTION TO DETAIL AND HAS THE WILL TO TRANSCRIBE A VISION OF SHARING.
          </p>
          <p class="animate__animated animate__fadeInLeft">THE IDEA OF THIS PROJECT WAS BORN TO GIVE A PLATFORM TO CREATIVES AND GIVE BACK TO FUTURE GENERATIONS. </p>
        <p class="animate__animated animate__fadeInUp"><br>BASED IN PARIS </p>
      </div>
    </div>
    <Footer/>
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




/*MAIN ABOUT */
.about{
    height: 110vh;
    
}
.about h1 {
    display: flex;
    justify-content: center;
    text-align: center;
}

.text_about {
    margin: 40px;
    padding: 50px;
    
}

.text_about img{
    width: 130px;
    position: relative;
    top: 9px;
    right: 7px;
}

.text_about p{
    font-size: 20px;
    text-align: center;
}




/*--------RESPONSIVE DESIGN----------------- */

@media screen and (max-width : 820px) {
    .home-back-img{
        width: 40px;
        cursor: pointer;
    }


    .about{
        position: relative;
        bottom: 10px;
        height: 80vh;

    }
    .about h1{
        font-size: 45px;
        display: flex;
        text-align: center;
        justify-content: center;

    }
    .text_about img{
        width: 70px;
        margin: 0%;
        padding: 0%;
        position: relative;
        top: 6px;
        right: 3px;
    }
    .text_about {
        font-size: 20px;
        display: flex;
        text-align: center;
        display: block;
        margin-block-start: 2em;
        margin-block-end: 2em;
        margin-inline-start: 27px;
        margin-inline-end: 27px;
        padding: 15px;
        height: 80vh;
    }
    .text_about p {
        margin-bottom: 60px;
        font-size: 17px;
        
    }

}

@media screen and (max-width : 450px){
    .about{
        height: 105vh;

    }

}

@media screen and (max-width : 370px){
    .about{
        height: 130vh;

    }

}



</style>




