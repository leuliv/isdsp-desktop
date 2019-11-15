const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'public/images/favicon.png'
  })

  // and load the index.html of the app.
  win.loadFile('public/index.html')
}

app.on('ready', createWindow)