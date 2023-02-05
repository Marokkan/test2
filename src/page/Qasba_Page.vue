<template>
  <div class="qasba-page">
    <div class="back-home">
          <router-link to="/">
              <img src="../assets/qasba_home.png" class="home-back-img" alt="">
          </router-link>
      </div>
    <div class="presentation">
        <div class="image-qasba">
            <img src="../assets/logo_entier.svg" width="364px" heigth="140px">
        </div>
        <div class="text">
            <a>Presents</a>
            <p class="p-left  p-one ">Content</p>
            <p class="p-right  p-two">Production</p>
            <p class="p-left   p-trhee">Creation</p>
            <p class="p-right  p-four ">Photography</p>
            <p class="p-left  p-five">Clothing</p>
            <p class="p-right  p-six">Videos</p>
            <p class="p-left  p-seven">Visuals</p>
            <p class="p-right  p-eight">Branding</p>
            <p class="p-left  p-nine">Directing</p>
            <p class="p-right  p-ten">Architecture</p>
            <p class="p-left  p-eleven">Panting</p>
            <p class="p-right  p-twelve">House of arts</p> 
            
        </div>
    </div> 
    <div class="lil">
        <img src="Photo/qasba_home.svg" height="50px" width="45px">
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





/*------ PRESENTATION -------*/

.presentation{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    margin-top: 50px;
}

.presentation img {
    width: 500px;
    position: relative;
    bottom: 130px;
    margin: 80px 0px;
}

.image-qasba{
    display: flex;
    justify-content: center;
    align-items: center;   
}

.text{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 100px;
}

.text a{
    position: relative;
    bottom: 60px;
    font-size: 30px;
}

.text p {
    margin-top: 0px;
    line-height: 10px;
    font-weight: 200;
    font-size: 40px;
}

.lil {

    justify-content: center;
    align-items: center;

}

.lil img{
    display: flex;
    margin: auto;
    padding-top: 7px;
    padding-bottom: 7px;
}

/*-----------TEXT ANIMATION------------ */


.p-one{
    position: relative;
    right: 2000px;
    animation: left .2s  ease-in-out forwards;
}

.p-two{
    position: relative;
    left: 2000px;
    animation: right .4s  ease-in-out forwards;
}

.p-trhee{
    position: relative;
    right: 2000px;
    animation: left .6s  ease-in-out forwards;
}

.p-four{
    position: relative;
    left: 2000px;
    animation: right .8s  ease-in-out forwards;
}

.p-five{
    position: relative;
    right: 2000px;
    animation: left 1s  ease-in-out forwards;
}

.p-six{
    position: relative;
    left: 2000px;
    animation: right 1.2s  ease-in-out forwards;
}

.p-seven{
    position: relative;
    right: 2000px;
    animation: left 1.4s  ease-in-out forwards;
}   
.p-eight{
    position: relative;
    left: 2000px;
    animation: right 1.6s  ease-in-out forwards;
}

.p-nine{
    position: relative;
    right: 2000px;
    animation: left 1.8s  ease-in-out forwards;
}

.p-ten{
     position: relative;
    left: 2000px;
    animation: right 2s  ease-in-out forwards;
}

.p-eleven{
    position: relative;
    right: 2000px;
    animation: left 2.2s  ease-in-out forwards;
}
.p-twelve{
    position: relative;
    left: 2000px;
    animation: right 2.4s  ease-in-out forwards;
}






@keyframes left {
    0%{
        opacity: .2;
    }
    50%{
        opacity: .3;
    }
    100%{
        right: 0px;
        opacity: 1;
    }
}

@keyframes right {
    0%{
        opacity: .2;
    }
    50%{
        opacity: .3;
    }
    100%{
        left: 0px;
        opacity: 1;
    }
}





/*--------RESPONSIVE DESIGN--------- */


@media screen and (max-width: 820px) {
    .home-back-img{
        width: 40px;
        cursor: pointer;
    }


    .nav{
        margin-bottom: 10px;
    }


    .presentation{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
    }

    .presentation img{
        width: 40%;
        position: relative;
        bottom: 70px;
        margin-bottom: 60px;
        margin-top: 0px;
    }

    .text{
        position: relative;
        bottom: 30px;   
    }

    .text a{
        position: relative;
        bottom: 40px;
        line-height: 10px;
        font-size: 25px;
    }
    .text span {
        font-weight: 400;
        font-size: 30px;
        line-height: 15px;
        position: relative;
        top: 10px;

    }
}


/*---------------------ANIMATIONS---------------------- */




</style>

