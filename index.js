var request = require('request');

function Payeer(accountData) {
    this.accountData = accountData;
    this.postURI = 'https://payeer.com/ajax/api/api.php';
    this.headers = {
        'content-type': 'application/x-www-form-urlencoded',
    }

    this.authCheck = function (callback) {
        var options = {
            url: this.postURI,
            headers: this.headers,
            qs: {
                account: this.accountData.account,
                apiId: this.accountData.apiId,
                apiPass: this.accountData.apiPass
            }
        }
        request.post(options, (error, response, body) => {
            callback(JSON.parse(error), JSON.parse(body));
        });
    }

    this.transfer = function (requestOptions, callback) {
        var options = {
            url: this.postURI,
            headers: this.headers,
            qs: {
                account: this.accountData.account,
                apiId: this.accountData.apiId,
                apiPass: this.accountData.apiPass,
                action: 'transfer',
                curIn: requestOptions.curIn,
                sum: requestOptions.sum,
                curOut: requestOptions.curOut,
                to: requestOptions.to,
                comment: requestOptions.comment,
                anonim: requestOptions.anonim || '',
                protect: requestOptions.protect || '',
                protectPeriod: requestOptions.protectPeriod || '',
                protectCode: requestOptions.protectCode || ''
            }
        }
        request.post(options, (error, response, body) => {
            callback(JSON.parse(error), JSON.parse(body));
        });
    }
}

var options = {
    account: 'P67147160',
    apiId: '391715809',
    apiPass: '4ckgo8fW'
};

var Client = new Payeer(options);

Client.authCheck((err, data) => {
    console.log(data);
})

module.exports = {
    Payeer: Payeer
}