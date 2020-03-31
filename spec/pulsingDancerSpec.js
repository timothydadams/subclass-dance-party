describe('pulsingDancer', function() {

  var pulsingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pulsingDancer = new PulsingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pulsingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(pulsingDancer.$node, 'toggleClass');
    pulsingDancer.step();
    expect(pulsingDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pulsingDancer, 'step');
      expect(pulsingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pulsingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pulsingDancer.step.callCount).to.be.equal(2);
    });
  });
});