var Payeer = require('./index.js').Payeer;

var options = {
    account: 'P67147160',
    apiId: '391715809',
    apiPass: 'K09C8opl3d8xRKRT'
};

var Client = new Payeer(options);

Client.authCheck((err, data) => {
    console.log(err + data);
})