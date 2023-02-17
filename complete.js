document.addEventListener('DOMContentLoaded', async () => { 
    // testing
    // const stripe = Stripe('pk_test_51MUqw7SG3wK40Fpy1BptUs4jHEwUsdXf8g7ZjREwIYpPC2SYxJKkblUJaC4p4PX1o4mRqmmALtfmFAHJzihop97U00LFj22gfN');
    
    // hemanth test
    // const stripe = Stripe("pk_test_51MTIndSC5HaNtnJLf7AGxJdEQL78HFYsIU8grt3utWbHE5fM1PpGLyRI210C7BrRXp97xIW7QIFc8y8tS0pSMUyq00MEst7cA4")

    // codeops
    // const stripe = Stripe("pk_test_51MCNLWSHKmhNN06eK2nhUOXeZSKMlS50dgY41nyZXvROSp4BLUgPUGfzrT7i7wQTY3ePNIJKPW5xXAF0xpFzppyu00wyiQtft9");

    // knofhub
    const us_account = "acct_1MZGcuLOeY8yaQi9"
    const stripe = Stripe("pk_test_51MTmTySEyw5Of2ovYJUlVlCNHbz2cssZHqH6xlp1eL7lw82ezygOabmrB8aoRBGlDGgdlhvRDCE0kF1l0IvacQwz00e4hLvmJP", {stripeAccount: us_account});

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