This project aims to provide a Real-time console mirroring on a web page. 

### How it works

This module extends in your node app some console functions:
- <code>console.log</code>
- <code>console.info</code>
- <code>console.warn</code>
- <code>console.error</code>

Every function extended got his own color on the web page UI.

## Install

    npm install console-mirroring --save

## Use

Just include it in your app passing a socket.io reference, like this:

    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    require('console-mirroring')(io);

    // Every console.* will be sent to the client web UI.
    console.log('Hello World'); // white
    console.info('Hello World'); // blue
    console.warn('Hello World'); // orange
    console.error('Hello World'); // red


## Client side

    <div id="#console"></div>

    <script src="https://cdn.socket.io/socket.io-1.4.3.js"></script>
	<script src="browser.console.mirror.js"></script>

    <script type="text/javascript">
        var socket = io.connect('http://' + location.host, {
            'reconnect': true,
            'reconnection delay': 50,
            'max reconnection attempts': 300
        });
    
        // Make sure to pass a valid socket.io obj to the init method.
        consoleMirroring.init({
            socketLib: socket,
            containerId: '#console' 
        });
    </script>

#### Optional properties:
    
    {
        fullScreen: true/false,  // false by default
        border: true/false       // true by default
    }

### Dependencies

- Socket.io

### Author

Rocco Musolino (MIT License) - HackersTribe.com