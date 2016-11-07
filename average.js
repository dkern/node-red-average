module.exports = function(RED) {
    "use strict";

    function average(config) {
        RED.nodes.createNode(this, config);

        var node = this;
        this.topics = {};

        this.on("input", function(msg) {
            if( !isNaN(parseFloat(msg.payload)) && isFinite(msg.payload)) {
                node.topics[msg.topic.toString()] = parseInt(msg.payload, 10);

                var amount = 0;
                var sum = Object.keys(node.topics).reduce(function(a, b) {
                    ++amount;
                    return a + node.topics[b];
                }, 0);

                msg.payload = sum / amount;
                node.send(msg);
            }
        });
    }

    RED.nodes.registerType("average", average);
};