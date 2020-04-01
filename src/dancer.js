// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   //var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step(), timeBetweenSteps)
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //

//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   //return dancer;
// };

var makeDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create()
  this.$node = $('<span class="dancer"></span>');
  this.$node.mouseover(function() {
    $(this).css({borderColor: 'green'});
  });
  this.setPosition(top, left);
  this._tBS = timeBetweenSteps;
  this.step();
  this.partners = [];
};

//potential refactor of properties/functions
makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this._tBS);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.$node.toggleClass("leftLineup");
};

makeDancer.prototype.findPartners = function() {
  var min = 200;
  var thisTop = Number(this.$node.css('top').slice(0, -2));
  var thisLeft = Number(this.$node.css('left').slice(0, -2));

  dancers.forEach((current) => {
    var currentTop = Number(current.$node.css('top').slice(0, -2));
    var currentLeft = Number(current.$node.css('left').slice(0, -2));

    var heightBetween = currentTop - thisTop;
    var widthBetween = currentLeft - thisLeft;
    var c = Math.sqrt((heightBetween * heightBetween) + (widthBetween * widthBetween));
    if (c < min) {
      if (!current.partners.includes(this)) {
        this.partners.push(current);
      }
    }
  });
}

makeDancer.prototype.danceWithPartners = function() {
  // switch positions with animate
  var thisTop = Number(this.$node.css('top').slice(0, -2));
  var thisLeft = Number(this.$node.css('left').slice(0, -2));

  this.partners.forEach((current) => {
    var currentTop = Number(current.$node.css('top').slice(0, -2));
    var currentLeft = Number(current.$node.css('left').slice(0, -2));
    current.$node.animate({top: thisTop, left: thisLeft}, 2000);
    thisTop = currentTop;
    thisLeft = currentLeft;
  });
  this.$node.animate({top: thisTop, left: thisLeft}, 2000);
}