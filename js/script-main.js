
$('#yes').click(function() {
  
  $('#yes-no').addClass('hidden');
  $('#the-island-wash').addClass('hidden');
  $('#the-island').addClass('anim-shake');
  $('#delorean').addClass('anim-shake2');
  $('#tickets').addClass('anim-ticket-rise');
  $('#ticket-waves').addClass('anim-ticket-waves');
  
  return false;
  
});

$('#no').click(function() {
  
  $('#yes-no').addClass('hidden');
  $('#the-island-wash').addClass('hidden');
  $('#the-island').addClass('anim-shake-long');
  $('#compass').addClass('anim-fadeout');
  $('#sky p').addClass('anim-fadeout');
  $('#burst').addClass('anim-fadeout');
  $('#helicopter').addClass('anim-fadeout');
  $('h1').addClass('anim-fadeout');
  $('#ship').addClass('anim-fadeout');
  $('#tentacle').addClass('anim-fadeout');
  $('#tentacle-sea').addClass('anim-fadeout');
  $('#llama').addClass('anim-fadeout');
  $('#llama-bubbles').addClass('hidden');
  $('#fishies').addClass('hidden');
  $('#waves').addClass('anim-fadeout');
  $('#smoke').addClass('hidden');
  $('#delorean').addClass('anim-delorean');
  $('#delorean-shadow').addClass('anim-delorean-shadow');
  $('#delorean-container').addClass('anim-delorean-container');
  $('#delorean2').addClass('anim-delorean2');
  $('#whiteout').addClass('anim-whiteout');
  $('#whiteout-full').addClass('anim-whiteout-full');

  return false;

});