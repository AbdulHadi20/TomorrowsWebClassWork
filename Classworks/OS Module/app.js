const os = require('os');

osarch = os.arch();
oscpus = os.cpus();
oshostname = os.hostname();
osplatform = os.platform();
ostype = os.type();

console.log(osarch);
console.log(oscpus);
console.log(oshostname);
console.log(osplatform);