var request = require('request');

function Payeer(accountData) {
    this.accountData = accountData;
    this.postURI = 'https://payeer.com/ajax/api/api.php';
    this.headers = {
        'content-type': 'application/x-www-form-urlencoded',
    }
    this.paymentSystems = {
        'Яндекс.Деньги': '57378077',
        'QIWI': '26808',
        'Payeer': '1136053',
        'VISARUB': '117146509',
        'VISAEURUSD': '244385496',
        'MasterCardRUB': '57644634',
        'MasterCardEURUSD': '244773909',
        
    };
    this.authCheck = function (callback) {
        var options = {
            url: this.postURI,
            headers: this.headers,
            body: 'account=' + this.accountData.account + '&apiId=' + this.accountData.apiId + '&apiPass=' + this.accountData.apiPass
        }
        request.post(options, (error, response, body) => {
            callback(JSON.parse(error), JSON.parse(body));
        });
    }

    this.transfer = function (requestOptions, callback) {
        var options = {
            url: this.postURI + '?transfer',
            headers: this.headers,
            body: 'account=' + this.accountData.account + '&apiId=' + this.accountData.apiId + '&apiPass=' + this.accountData.apiPass + '&action=transfer' + 
            '&comment=' + requestOptions.comment + '&sum=' + requestOptions.sum + '&curIn=' + requestOptions.curIn + 
            '&curOut=' + requestOptions.curOut + '&to=' + requestOptions.to,
        }
        request.post(options, (error, response, body) => {
            callback(JSON.parse(error), JSON.parse(body));
        });
    }

    this.getPaymentSystems = function (callback) {
        var options = {
            url: this.postURI + '?getPaySystems',
            headers: this.headers,
            body: 'account=' + this.accountData.account + '&apiId=' + this.accountData.apiId + '&apiPass=' + this.accountData.apiPass + '&action=getPaySystems'
        }
        request.post(options, (error, response, body) => {
            callback(JSON.parse(error), JSON.parse(body));
        });
    }

    this.payoutCheck = function (requestOptions, callback) {
        var options = {
            url: this.postURI + '?initOutput',
            headers: this.headers,
            body: 'account=' + this.accountData.account + '&apiId=' + this.accountData.apiId + '&apiPass=' + this.accountData.apiPass + '&action=initOutput' + '&ps=' + requestOptions.ps + '&sumIn=' + requestOptions.sumIn + '&curIn=' + requestOptions.curIn + '&curOut=' + requestOptions.curOut + '&param_ACCOUNT_NUMBER=' + requestOptions.accountNumber
        }
        request.post(options, (error, response, body) => {
            callback(JSON.parse(error), JSON.parse(body));
        });
    }

    this.payout = function (requestOptions, callback) {
        var options = {
            url: this.postURI + '?output',
            headers: this.headers,
            body: 'account=' + this.accountData.account + '&apiId=' + this.accountData.apiId + '&apiPass=' + this.accountData.apiPass + '&action=output' + '&ps=' + requestOptions.ps + '&sumIn=' + requestOptions.sumIn + '&curIn=' + requestOptions.curIn + '&curOut=' + requestOptions.curOut + '&param_ACCOUNT_NUMBER=' + requestOptions.accountNumber
        }
        request.post(options, (error, response, body) => {
            callback(JSON.parse(error), JSON.parse(body));
        });
    }
}

module.exports = {
    Payeer: Payeer
}