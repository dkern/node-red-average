node-red-contrib-average
========================

[![GitHub version](https://badge.fury.io/gh/eisbehr-%2Fnode-red-average.svg)](http://github.com/eisbehr-/node-red-average)
[![NPM version](https://badge.fury.io/js/node-red-contrib-average.svg)](http://www.npmjs.org/package/node-red-contrib-average)
[![Dependencies Status](https://david-dm.org/eisbehr-/node-red-average/status.svg)](https://david-dm.org/eisbehr-/node-red-average)

A <a href="http://nodered.org" target="_new">Node-RED</a> node to calculate average (_avg_).

---

## Table of Contents
* [Install](#install)
* [Usage](#usage)
* [Example Flow](#example-flow)
* [Bugs / Feature request](#bugs--feature-request)
* [License](#license)
* [Donation](#donation)

---

## Install

Run the following command in your Node-RED user directory - typically `~/.node-red`:

```
npm install node-red-contrib-average
```


## Usage

Calculate the average of incoming `msg.payload` values.

Incoming `msg.topic` has to be used to separate and identify values.
Messages not containing a valid numeric value will be rejected.

Will return the current average as `msg.payload`. Every other data will be pushed through.


## Example Flow

Simple example showing how to calculate and average of static values.

![example.png](./doc/example.png)

```JSON
[{"id":"b022f03f.da047","type":"average","z":"470977d9.9fb538","name":"","x":680,"y":240,"wires":[["5a8eea2a.b67d3c"]]},{"id":"5a8eea2a.b67d3c","type":"debug","z":"470977d9.9fb538","name":"debug","active":true,"console":"false","complete":"payload","x":810,"y":240,"wires":[]},{"id":"c79942e7.6ae498","type":"inject","z":"470977d9.9fb538","name":"1","topic":"name_one","payload":"1","payloadType":"num","repeat":"","crontab":"","once":false,"x":510,"y":180,"wires":[["b022f03f.da047"]]},{"id":"5b6c2de0.a35dc4","type":"inject","z":"470977d9.9fb538","name":"2","topic":"name_two","payload":"2","payloadType":"num","repeat":"","crontab":"","once":false,"x":510,"y":220,"wires":[["b022f03f.da047"]]},{"id":"689a005a.9f41b8","type":"inject","z":"470977d9.9fb538","name":"3","topic":"name_three","payload":"3","payloadType":"num","repeat":"","crontab":"","once":false,"x":510,"y":260,"wires":[["b022f03f.da047"]]},{"id":"4b264eb1.263c88","type":"inject","z":"470977d9.9fb538","name":"4","topic":"name_four","payload":"4","payloadType":"num","repeat":"","crontab":"","once":false,"x":510,"y":300,"wires":[["b022f03f.da047"]]}]
```


## Bugs / Feature request
Please [report](http://github.com/eisbehr-/node-red-average/issues) bugs and feel free to [ask](http://github.com/eisbehr-/node-red-average/issues) for new features directly on GitHub.


## License
This project is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) license.


## Donation
_You like to support me?_  
_You appreciate my work?_  
_You use it in commercial projects?_  
  
Feel free to make a little [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FFL6VQJCUZMXC)! :wink: