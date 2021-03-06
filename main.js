var app = require('app') // Module to control application life.
var BrowserWindow = require('browser-window'); // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.plaatform != 'darwin') {
        app.quit();
    };
});

app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/index.html');


    // Open the DevTools.
    mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});