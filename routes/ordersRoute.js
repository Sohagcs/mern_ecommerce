const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51JFYoPSDRucKckuzzb13NmHzWsuYF9I3KaArJjvP2VbokWo8sonxnL2Ro5GI2EsSyxg0Nb3jMRsJZSkYKmVWfPEj00WGXblJDi")

router.post("/placeorder", async(req, res) => {

 const{token , subtotal , currentUser , cartItems} = req.body

    try {
         const customer = await stripe.customers.create({
            email : token.email,
            source: token.id
         })

         const payment = await stripe.charges.create({
            amount:subtotal*100,
            currency:'inr',
            customer : customer.id,
            receipt_email : token.email
         }, {
             idempotencyKey : uuidv4()
         })

         if(payment)
         {
             res.send('Payment Done')
         }
         else{
             res.sendStatus('Payment Failed')
         }

    } catch (error) {
        return res.status(400).json({ messege: 'Something Went Wrong' + error });
    }
});

module.exports = router
