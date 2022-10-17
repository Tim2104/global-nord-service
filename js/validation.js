$('#sub').click(function() {
    
    var phoneMsg = "укажите корректный номер телефона";
    
    $.validator.addMethod( "mobileRU", function( phone_number, element ) {
	   var ruPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
        
	   return this.optional( element ) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test( ruPhone_number );
    }, phoneMsg );
    
  $("form[name='order']").validate({
    rules: {
        name: "required",
        phone: {
            required: true,
            mobileRU: true
        },
        email: {
            required: true,
            email: true
      }
    },
    messages: {
      name: "укажите свое имя",
      phone: phoneMsg,
      email: "укажите корректный адрес"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
    
})