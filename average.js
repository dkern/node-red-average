module.exports = function(RED) {
    'use strict';

    function average(config) {
        RED.nodes.createNode(this, config);

        let node = this;

        this.topic = config.topic;
        this.topics = {};

        this.on('input', (msg) => {
            if (msg.hasOwnProperty('payload')) {
                let input = Number(msg.payload);

                // handle reset
                if (msg.hasOwnProperty('reset') && msg.reset) {
                    node.topics = {};
                    msg.payload = 0;
                    node.send(msg);
                }

                // handle input
                else if (!isNaN(input) && isFinite(input)) {
                    node.topics[msg.topic.toString()] = input;

                    let amount = 0;
                    let sum = Object.keys(node.topics).reduce((a, b) => {
                        ++amount;
                        return a + node.topics[b];
                    }, 0);

                    msg.payload = sum / amount;
                    msg.topics_count = amount;

                    // overwrite topic if configured
                    if (node.topic) {
                        msg.topic = node.topic;
                    }

                    node.send(msg);
                }

                // everything else
                else {
                    node.log(`Not a number: ${msg.payload}`);
                }
            }
        });
    }

    RED.nodes.registerType('average', average);
};
