<template>
  <div class="nav">


  </div>
  <router-view/>
</template>

<style>

@font-face {
    font-family: Arial, Helvetica, sans-serif;
    src: URL("./Fonts/ArialB.ttf") 
}



html{
  scroll-behavior: smooth;
}


body{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 45px;
  margin: 0;
  padding:0;
  overflow-x: hidden;

}

h1{
  font-weight: bold;
}

h2,h3,h4,p,li{
  font-weight: 0;
}

*{
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}



ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
}












/* BUTTON  */

.button-home-sweet{
    font-weight: bold;
    cursor: pointer;
    border: none;
    width: 100%;
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


@media only screen and (max-width:790px){

.button-pay-pal{
    color: white;
    background-color: #020912;
    font-size: 15px;
    padding: 10px 0px;
    transition: .5s ease-in-out;
}

.button-pay-pal:hover{
    transform: scale(1.05);
    transition: .5s ease-in-out;
}





}





</style>
