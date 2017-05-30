// Module dependencies
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();

// Files path
const files_path = __dirname + '/build';

// Express static server
app.use(express.static(path.join(files_path)));

// Router
app.get('*', function(request, response) {
  response.sendFile(files_path + '/index.html')
});

// Server setup
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Event listener for HTTP server "error" event.
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
// Function to get local ip_address
function address() {
  // Network interfaces
  const ifaces = require('os').networkInterfaces();

  // Iterate over interfaces ...
  const adress = Object.keys(ifaces).reduce(function (result, dev) {
    return result.concat(ifaces[dev].reduce(function (result, details) {
      return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
    }, []));
  });

  return adress.replace(/[^0-9.]/g, '');
}

// Event listener for HTTP server "listening" event.
function onListening () {

  const addr = address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

  const environment = {
    'NODE_ENV': (process.env.NODE_ENV || 'Not defined'),
    'HOSTNAME': (process.env.HOSTNAME || addr || 'localhost'),
    'PORT': (port || 'Not defined')
  };

  console.log('Environment: ', JSON.stringify(environment, null, ' '));
  
  // console.info('==> Listening on %s. Visit http://%s:%s in your browser.', bind, addr, port);
  console.info('==> Listening on %s. Visit http://%s:%s in your browser.', port , 'localhost', port);
}
