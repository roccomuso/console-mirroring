This project aims to provide a Real-time console mirroring on a web page. 

### How it works

The app.js extends in your node app some console functions:
- console.log
- console.info
- console.warn
- console.error

Every function extended got his own color on the web page UI.

Just include it in your app like this:

    require('console-mirroring');

    // Will be sent
    console.log('Hello World'); // white
    console.info('Hello World'); // blue
    console.warn('Hello World'); // orange
    console.error('Hello World'); // red

## Install

    npm install console-mirroring --save

## Init on browser

	<script src="browser.console.mirror.js"></script>
	<!-- Make sure to include Socket.io before calling the init method. -->
	<script type="text/javascript">
        consoleMirroring.init({
           socketLib: socket,
           containerId: '#console' 
        });
	</script>


### dependencies

- Socket.io

### Author

Rocco Musolino (MIT License) - HackersTribe.com