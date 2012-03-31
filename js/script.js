jQuery(function(){
  $('#interest-form').submit(function(){
    $.post($(this).attr('action') + '.js', $(this).serialize())
    $(this).slideUp()
    return false
  })
})