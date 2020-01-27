(function($) {
  "use strict"; // Start of use strict
  console.log('Page load complete!');
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
    const db = app().firestore();
    const subcribers = db.collection('subscribers');
        const emailInput = $('input#emailInput.form-control');
        const submitBtn = $('button#submitBtn.btn.btn-secondary');
        let inputVal = '';
        let showCompletedPanel = false;
    
        submitBtn.on('click', (e) => {
            inputVal = getVal(emailInput[0]);
            console.log('form submitted start', e, inputVal, db);
            e.preventDefault();
            if (inputVal && inputVal.length > 8) {
                console.log('input val ok:');
            }
        })

        function getVal(el) {
            return el.value;
        }

})(jQuery); // End of use strict
