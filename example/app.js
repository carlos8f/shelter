var prompt = require('cli-prompt');

setInterval(function () {
    // keep process open
  }, 1000);

prompt.multi([
  {key: 'username', required: true},
  {key: 'password', required: true, type: 'password'}
], function (conf) {
  console.log(JSON.stringify(conf, null, 2));
});
