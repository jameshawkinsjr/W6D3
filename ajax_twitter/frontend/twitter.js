const FollowToggle = require('./follow_toggle');
const APIUtil = require('./api_util');

const followButtons = () => {
  $(function () {  
    $buttons = $('.follow-toggle')
    $buttons.each( (idx, button) => {
      button = new FollowToggle(button);
    })
})}

$(followButtons);
