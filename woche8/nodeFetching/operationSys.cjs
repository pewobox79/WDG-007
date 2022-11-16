const os = require('os');

//Operating system module

//allgemeine object zu OS
console.log(os);

//platfrom
console.log("platform", os.platform());

//cpus
console.log("CPUs", os.cpus())

//total memory
console.log("total mem", os.totalmem())
