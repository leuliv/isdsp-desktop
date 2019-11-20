const { app, BrowserWindow, Menu, globalShortcut } = require('electron')
const url = require("url");
const path = require("path");

//process.env.NODE_ENV = 'production';

let mainWindow

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 650,
        minWidth: 900,
        minHeight: 650,
        frame: false,
        title: 'ISDSP',
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: "file:",
            slashes: true
        })
    );
    
    mainWindow.on('closed',function(){
        app.quit;
    });

    globalShortcut.register('CommandOrControl+F4',function(){
        mainWindow.close()
    });

    globalShortcut.register('CommandOrControl+m',function(){
        mainWindow.minimize()
    });

    globalShortcut.register('Shift+m',function(){
        mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
    });

    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Menu.setApplicationMenu(mainMenu);

})

const mainMenuTemplate = [
    {
        label: 'File'
    }
];