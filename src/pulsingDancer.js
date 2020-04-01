var PulsingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pulsing');
  this.goingLeft = true;
}

PulsingDancer.prototype = Object.create(makeDancer.prototype);
PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.goingLeft) {
    this.$node.animate({"left": "-=25px"}, 2000);
  } else {
    this.$node.animate({"left": "+=25px"}, 2000);
  }
  this.goingLeft = !this.goingLeft;
}