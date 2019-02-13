const FollowToggle = function(el) {
  let $el = $(el);
  this.userId = $el.data("user-id");
  this.followState = $el.data("initial-follow-state");
  this.render($el);
  this.handleClick($el);
}

FollowToggle.prototype.render = function($el) {
  $el.empty();
  if (this.followState === false){
    let $buttonText = "Follow!"
    $el.append($buttonText)
  } else if (this.followState === true) {
    let $buttonText = "Unfollow!"
    $el.append($buttonText)
  };
}

FollowToggle.prototype.handleClick = function($el) {
  let that = this;
  let el2 = $el
  $el.on('click', function(clickEvent) {
    clickEvent.preventDefault();
    if (that.followState === false){
      $.ajax({
        url: `/users/${that.userId}/follow`,
        method: "POST",
        dataType: "json"
      });
      that.followState = true;
      that.render(el2);
    } else if (that.followState === true){
      $.ajax({
        url: `/users/${that.userId}/follow`,
        method: "DELETE",
        dataType: "json"
      });
      that.followState = false;
      that.render(el2);
    }
  })
};


module.exports = FollowToggle