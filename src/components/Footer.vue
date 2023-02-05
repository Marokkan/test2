<template>
  <div class="footer">
    <footer>
        <div class="cb-img">
            <img src="../assets/amex.png" alt="">
            <img src="../assets/visa.png" alt="" class="visa">
            <img src="../assets/paypal.png" alt="" class="paypal">
            <img src="../assets/mastercard.png" alt="" class="master-card">
        </div>
        <p>
            &copy 2022, qasba <router-link to="/terms-conditions" > Terms & Conditions</router-link>
        </p>
    
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

footer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 17px;
    padding: 50px 10px;
    padding-top: 100px;
    margin-top: 50px;
    color: rgba(40, 40, 40, 0.755);
    background-color: #020912;
}

footer p a{
    color: white;
    font-weight: bold;
    position: relative;
}

footer p {
    color: white;
    font-weight: bold;
    position: relative;
    font-size: 12px;
}



.cb-img{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.cb-img img{
    height: 25px;
    width: 40px;
    border-radius: 3px;
}








/*-----------RESPONSIVE DESIGN---------------- */

@media screen and (max-width: 820px) {
    footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    footer p a{
        outline: none;
    }

}



@media screen and (max-height: 768px){
    footer{
        margin-top: 0px;
    }


}



</style>