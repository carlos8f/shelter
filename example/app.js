var prompt = require('cli-prompt');

// crash in a bit
setTimeout(function () {
  throw new Error('i crash');
}, 5000);

prompt.multi([
  {key: 'username', required: true},
  {key: 'password', required: true, type: 'password'}
], function (conf) {
  console.log(JSON.stringify(conf, null, 2));
});
