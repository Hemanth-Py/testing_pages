document.addEventListener('DOMContentLoaded', async () => { 
    const stripe = Stripe('pk_test_51MUqw7SG3wK40Fpy1BptUs4jHEwUsdXf8g7ZjREwIYpPC2SYxJKkblUJaC4p4PX1o4mRqmmALtfmFAHJzihop97U00LFj22gfN');

    const params = new URLSearchParams(window.location.href)
    const clientSecret = params.get('payment_intent_client_secret')

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)

    const paymentIntentPre = document.getElementById('payment-intent')

    paymentIntentPre.innerText = JSON.stringify(paymentIntent, null, 2)

    fetch('https://fi9tv7oval.execute-api.us-east-1.amazonaws.com/dev/capture-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({payment_intent_id: paymentIntent.id})
    }).then(function (response) { 

        const capturePre = document.getElementById('capture-payment')
    
        capturePre.innerText = "Capture Successful"
    

    });
    


})