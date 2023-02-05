<template>
  <div class="program">
      <div class="back-home">
          <router-link to="/">
              <img src="../assets/qasba_home.png" class="home-back-img" alt="">
          </router-link>
      </div>
      <div class="program">
        <h1 class="animate__animated animate__fadeInDown">PROGRAM</h1>
          <div class="text_program">
                <p class="animate__animated animate__fadeInRight"><img src="../assets/logo_entier.svg" >
                    WANTS TO INCLUDE HIS WORK IN A SOCIAL DIMENSION. THIS IS WHY  THIS HOUSE  INCLUDES AN ASSOCIATION WHICH ACT THROUGH VARIOUS PROJECTS AND PROGRAMS THAT WE WILL DEVELOP.
                </p>
            <p class="animate__animated animate__slideInLeft " ><br><strong>« BUILD A TEAM SO STRONG »</strong> IS THE NAME OF THIS PROJECT THAT WE WANT TO EVOLVE IN THE FUTURE.</p>
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


<style  scoped>


/*-------BACK HOME-------- */
.back-home{
    padding: 15px;
}

.home-back-img{
    width: 60px;
    cursor: pointer;
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





.program{
    height: 120vh;
}

.program h1 {
    display: flex;
    justify-content: center;
    text-align: center;
}

.text_program img{
    width: 155px;
    position: relative;
    top: 9px;
    right: 6px;
}

.text_program {
    margin: 40px;
    padding: 30px;
    font-size: 20px;
}

.text_program p{
    text-align: center;
}









/*---------------- PROGRAMS ---------------------------*/

@media screen and (max-width: 820px) {
    .home-back-img{
        width: 40px;
        cursor: pointer;
    }


    .program{
        position: relative;
        bottom: 10px;
        height: 80vh;
    }

    .program h1{
        font-size: 45px;
        display: flex;
        text-align: center;
        width: none;
        margin: none;
        justify-content: center;

    }
    .text_program img{
        width: 65px;
        margin: 0%;
        padding: 0%;
        position: relative;
        top: 5.8px;
        right: 5px;
    }
    .text_program {
        font-size: 20px;
        display: flex;
        text-align: center;
        display: block;
        margin-block-start: 2em;
        margin-block-end: 2em;
        margin-inline-start: 27px;
        margin-inline-end: 27px;
        padding: 20px;
        height: 70vh;
        line-height: none;
    }
    .text_program p {
        margin-bottom: 60px;
        font-size: 16px;

    }
}

@media screen and (max-width : 450px){
    .program{
        height: 80vh;

    }

}

@media screen and (max-width : 370px){
    .program{
        height: 85vh;

    }

}




</style>