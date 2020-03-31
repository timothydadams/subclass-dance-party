$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("div.floor").height()*.1 + $("div.floor").height()*.8 * Math.random(),
      $("div.floor").width()*.1 + $("div.floor").width()*.9 * Math.random(),
      Math.random() * 1000
    );
    $('.floor').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpBtn').click(function() {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp.call(dancer);
    })
  });

  $('.findBtn').click(function() {
    window.dancers.forEach(function(dancer) {
      dancer.findPartners.call(dancer);
    })
    window.dancers.forEach(function(dancer) {
      dancer.danceWithPartners.call(dancer);
    })
  });
});

