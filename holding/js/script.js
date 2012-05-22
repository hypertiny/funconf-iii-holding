jQuery(function(){
  $('#interest-form').submit(function(){
    email = $('#email').val()
    email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if($.trim(email) != '' && email_regex.test(email))
    {
      $('#message').text(email + ' has been added to the list.')
      $.post($(this).attr('action') + '.js', $(this).serialize())
      $('#form-fields').slideUp()
    }
    else
    {
      $('#message').text('Please enter a valid email address:')
    }
      
    return false
  })
})