var PulsingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}

PulsingDancer.prototype = Object.create(makeDancer.prototype);
PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('pulsing');
}