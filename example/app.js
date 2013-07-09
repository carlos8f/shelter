var safer = require('safer');

// passphrase is "blah blah"

safer.prompt(__dirname + '/conf.safe', function (err, conf) {
  if (err) throw err;
  console.log(JSON.stringify(conf, null, 2));
  // crash in a bit
  setTimeout(function () {
    throw new Error('i crash');
  }, 5000);
});
