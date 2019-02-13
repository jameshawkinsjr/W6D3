const FollowToggle = require('./follow_toggle');

$(function () {  
  $buttons = $('.follow-toggle')
  $buttons.each( (idx, button) => {
    button = new FollowToggle(button);
  })

});