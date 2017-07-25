var EventEmitter = require('events');
var sinon = require('sinon');
var workerListener = require('../../workerModule1');

var worker = new EventEmitter();
workerListener.call(worker);

describe("Worker", function() {
  it("should handle message correctly", function() {
    var finished = sinon.spy();
    worker.emit('message', {}, () => {}, finished);

    expect(finished.called).toBe(true);

    expect(finished.calledWith({
      hello: 'world'
    })).toBe(true);
  });
});
