document.getElementById("schuh").style.display = "none";

function produktAnzeigen(nr){
  if(nr == 1){
    document.getElementById("t-shirt").style.display = "block";
    document.getElementById("schuh").style.display = "none";

  } else if(nr == 2){
    document.getElementById("t-shirt").style.display = "none";
    document.getElementById("schuh").style.display = "block";
  }
}


function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'blue',
      layout: 'vertical',
      label: 'paypal',
    },

    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{ "amount": { "currency_code": "EUR", "value": 11.9, "breakdown": { "item_total": { "currency_code": "EUR", "value": 10 }, "shipping": { "currency_code": "EUR", "value": 0 }, "tax_total": { "currency_code": "EUR", "value": 1.9 } } } }]
      });
    },

    onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {

        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');
      });
    },

    onError: function (err) {
      console.log(err);
    }
  }).render('#paypal-button-t-shirt');


  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'blue',
      layout: 'vertical',
      label: 'paypal',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code":"EUR","value":11.9,"breakdown":{"item_total":{"currency_code":"EUR","value":10},"shipping":{"currency_code":"EUR","value":0},"tax_total":{"currency_code":"EUR","value":1.9}}}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        
        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');
        
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-schuh');
}
initPayPalButton();