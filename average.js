module.exports = function(RED) {
    "use strict";

    function average(config) {
        RED.nodes.createNode(this, config);

        var node = this;
        this.topics = {};

        this.on("input", function(msg) {
        	if( msg.hasOwnProperty("payload") ) {
				var input = Number(msg.payload);

				if( !isNaN(input) && isFinite(input) ) {
					node.topics[msg.topic.toString()] = input;

	                var amount = 0;
	                var sum = Object.keys(node.topics).reduce(function(a, b) {
	                    ++amount;
	                    return a + node.topics[b];
	                }, 0);

	                msg.payload = sum / amount;
	                node.send(msg);
				}
				else {
					node.log("Not a number: " + msg.payload);
				}
			}
        });
    }

    RED.nodes.registerType("average", average);
};