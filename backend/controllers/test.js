const {spawn} = require('child_process');
const pyProg = spawn('D:/python/python.exe', ['haha.py']);

    pyProg.stdout.on('data', function(data) {

        dataToSend = data.toString();
    });