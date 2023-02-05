<template>
  <div class="home">
    <div class="home-scroll-snap-y">
      <header>
      <div class="home_btn">
        <div>
          <p class="animate__animated animate__bounce animate__bounceInDown animate__slow 1s">
            <img @click="ScrollMiddle" class="home-qasba-header" src="../assets/qasba_home.png"> 
          </p>
        </div>
      </div>

    </header>

    <section class="list" id="slide_down">
       <ul>
           <router-link @click="ScrollTopClick" to="/qasba-page"><li class="first-li" ><img src="../assets/logo_entier.svg" class="qasba-link" width="544px" heigth="140px" ></li></router-link>
           <router-link @click="ScrollTopClick" to="/program"><li>PROGRAM</li></router-link>
           <router-link  @click="ScrollTopClick" to="/about"><li>ABOUT</li></router-link>
           <router-link @click="ScrollTopClick" to="/shop"><li>SHOP</li></router-link>
       </ul>
       <Footer></Footer>
    </section>

    </div>
    
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"

export default {
  components:{
    Footer
  },
  setup(){

    const ScrollTopClick = ()=>{
      setTimeout(()=>{
        document.documentElement.scrollTop = 0
      },1)
    }

    const ScrollMiddle = ()=>{
      const section = document.querySelector(".first-li")
      section.scrollIntoView()
      
    }


    return{
      ScrollTopClick,
      ScrollMiddle
    }
  }

}
</script>


<style scoped>

/* SCROLL */






/*HEADER */

header{
    display: flex;
    flex-wrap: wrap;
    height: 110vh;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}

header .logo img{
  max-width: 230px;
  max-height: 270px;

}

.home_btn{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.home_btn img{
    transform: scale(1);
    transition-property: transform;
    transition-timing-function: ease-in;
    transition: transform 9000ms ease-in;
    transition-duration: 0.4s;
    animation-delay: 0.9s;

}
.home_btn img:hover {
    transform: scale(1.3);
  }


.home-qasba-header{
  width: 250px;
}

 

section a{
    outline: none;
    text-decoration: none;
    color: black;
}

section{
    height: 100vh;
    margin-top: 50px;
    margin-bottom: 0px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
}

.list img{
  height: 300px;
  width: 380px;
}

section ul li{
  font-weight: 200;
  margin-bottom: 70px;
}

.first-li{
    margin: 0px;
  }


/*---------------SLOGAN-------------------- */





/*-------------------RESPONSIVE DESIGN-----------------------*/




@media screen and (max-width: 820px) {

  


  /*------------HEADER-------------------*/

  header{
    height: 100vh;
    padding-bottom: 0;

  }
  header .logo img{
    max-width: 230px;
    max-height: 270px;
  }


  .home_btn img{}

  .home_btn img:hover {
    transform: scale(1);
  }


  /*-------SECTION------------ */

    section{
        height: 100vh;
        display: flex;
        text-align: center;
        justify-content: center;
    }

    section ul {
      font-size: 40px;
    }

    .qasba-link{
      margin-bottom: 50px;
    }

    section li{
        display: flex;
        justify-content: space-around;
    }

    .list img{
        height: 200px;
        width: 280px;
    }

    section ul a li img{
        position: relative;
        top: 50px;
    }

    section ul a li {
      margin-bottom: 17%;
    }



  /*-------SLOGAN------------- */
    .slogan{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
      
    }

    .slogan a{
      margin-top: 0px;
    }

    .slogan img{
      width: 93%;
      height: 93%;
    }

  /*--------FOOTER--------- */
    
  .top-footer img{
    width: 30px;
  }

  .top-footer a{
    color: #a1a1a1;
    font-size: 16px;
    font-weight: 550;
  }

  .footer-home h2{
    font-size: 100px;
    text-align: center;
    margin: 0px;
    color: #a57456;
    text-shadow: 7px 4px 0px black;
  }

  .footer-home .img-middle{
    width: 200px;
    height: 370px;
    margin-top: 40px;
  }

  .footer-home p{
    margin:25px 0px;
    font-size: 20px;
    font-weight: 550;
  }












}





@media screen and (max-height: 768px){
  .slogan img{
    width: 700px;
    height: 0px;
  }

  .first-li{
    margin: 0px;
  }

  section {
    margin-top: 140px;
  }

  section ul{
    margin-bottom: 100px;
  }

  section ul li{
    font-weight: 200;
    margin-bottom: 50px;
  }

  section{
    margin-bottom: 0px;
  }


}






</style>
