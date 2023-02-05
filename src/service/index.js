




export const Func = ()=>{

    console.log("m&rok");

    const axios = require('axios')

    

    const response =  axios.get('https://api.stripe.com/v1/payment_links', {
        params: {
            'limit': '3'
        },
        auth: {
            username: 'sk_test_51MOp9mAGo9H7uACc481sF4zu1Z27h6STGyok9LTAKGqNhWcc08W0q7zkyQZxMEfFtHQWZHGx53NAVA8EbyBqMvyd00QCKUqeRk'
        }
    })

    console.log("marr");

     

}




  
