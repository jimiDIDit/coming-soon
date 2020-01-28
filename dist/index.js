// Wait for the DOM to be ready
$(function() {
  let firebaseConfig = {
      apiKey: "AIzaSyAu7GpEbD4_dIIJDSDMqWbydp1dJ8P_WK0",
      authDomain: "med-tel-plus.firebaseapp.com",
      databaseURL: "https://med-tel-plus.firebaseio.com",
      projectId: "med-tel-plus",
      storageBucket: "med-tel-plus.appspot.com",
      messagingSenderId: "767947870810",
      appId: "1:767947870810:web:e863a33bb9f39c59"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const subscribers = db.collection('subscribers');
  const form = $('form[name=\'subscribe\']');
  
  form.validate({
    debug: true,
    rules: {
      email: {
        required: true,
        email: true,
        normalizer: function(value) {
				  return $.trim(value);
			  }
      }
    },
    messages: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    invalidHandler: function(e, validator) {
      $('submitBtn').attr('disabled', true);
      
      console.log('invalid hndlr', e, validator)
    },
    errorPlacement: function(error, element) {
      error.insertAfter('.input-group');
    },
    success: function(label, el) {
      $('submitBtn').removeAttr('disabled');
      $('#emailInput').css('border', 'solid green 1px', 'background-color', 'green');
  },
  });

  form.on('submit', function(e) {
    e.preventDefault();
    if ($('#emailInput').hasClass('valid')) {
      subscribers.add({
          email: $('#emailInput')[0].value, 
          timestamp: new Date()
        })
        .then(function(res) { 
          console.log('sent data', res);
          $('#submitBtn').addClass('bg-success').html(`Success! <i class="fa fa-check text-white"></i>`);
        }).catch(function(err) { 
          console.error(err);
        });
    }
  })
});




