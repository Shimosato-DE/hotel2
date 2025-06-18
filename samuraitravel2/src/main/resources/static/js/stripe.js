const stripe = Stripe('pk_test_51RZnWOHHR2LprZysTbDB6PXYgemVCJd3T6Lqid3Q4Tc4ajJAGnosUqX0Cyq8BlO2QNYrt9BvyIwOgcwYtyNSFsrh005NKeZUeH');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});