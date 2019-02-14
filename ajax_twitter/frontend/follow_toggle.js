const APIUtil = require('./api_util');

const FollowToggle = function(el) {
  let $el = $(el);
  this.userId = $el.data("user-id");
  this.followState = $el.data("initial-follow-state");
  this.render($el);
  this.handleClick($el);
}

FollowToggle.prototype.render = function($el) {
  $el.empty();
  if (this.followState === "unfollowed"){
    let $buttonText = "Follow!"
    $el.append($buttonText)
  } else if (this.followState === "followed") {
    let $buttonText = "Unfollow!"
    $el.append($buttonText)
  };
}


FollowToggle.prototype.handleClick = function($el) {
  let that = this;
  let el2 = $el
  $el.on('click', function(clickEvent) {
    clickEvent.preventDefault();
    if (that.followState === "unfollowed"){
      APIUtil.followUser(that.userId).then(
        that.render(el2)
        )
        that.followState = "followed";
    } else if (that.followState === "followed"){
      APIUtil.unfollowUser(that.userId).then(
        that.render(el2)
        )
        that.followState = "unfollowed";
    }
  })
};


module.exports = FollowToggle