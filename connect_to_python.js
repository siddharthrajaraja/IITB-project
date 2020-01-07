/*let {PythonShell} = require('python-shell')
PythonShell.run('read.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});

*/

var spawn = require('child_process').spawn,
    py    = spawn('python', ['new.py']),
    data = "def.xlsx",
    dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('ending=',dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();