describe('flashyDancer', function() {

  var flashyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flashyDancer = new FlashyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flashyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(flashyDancer.$node, 'toggleClass');
    flashyDancer.step();
    expect(flashyDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flashyDancer, 'step');
      expect(flashyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(flashyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(flashyDancer.step.callCount).to.be.equal(2);
    });
  });
});
