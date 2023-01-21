


const { PythonShell } = require('python-shell');

let options = {
    mode: 'text',
    pythonPath: 'D:/python/python.exe',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'd:/project bdd/Scancer/backend/controllers/runAi.py',
    args: []
};

PythonShell.run('scraper.py', options, function(err, results) {
    if (err) console.log(err);
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});