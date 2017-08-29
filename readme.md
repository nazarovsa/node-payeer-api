node-payeer-api
================
Official [documentation](http://docs.payeercom.apiary.io/#introduction/) for Payeer api.

Get started
----------------
```
npm install node-qiwi-api
```
Init payeer client
```js
var Payeer = require('node-payeer-api').Payeer;

var accountData = {
  account: 'P1000000',
  apiId: '12345',
  apiPass: 'qwerty'
}
var Client = new Payeer(accountData);
```

| Parameter | Description | Example |
| --- | --- | --- |
| **account** |  Your account number in the Payeer system. | P1000000 |
| **apiId** | The API user’s ID; given out when adding the API. | 12345 |
| **apiPass** | The API user's secret key. | qwerty |

[getPS]:Get Payment Systems
```js
Client.getPaymentSystems((err, systems) => {
  if(err) {
    /*hanle error*/
  }
  /*some actions*/
}
```

Payout Check
----------------
```js
var requestOptions = {
    account: 'P1000000',
    apiId: '12345',
    apiPass: 'qwerty',
    ps: '26808',
    sumIn: '10.00',
    curIn: 'RUB',
    curOut: 'RUB',
    accountNumber: '79191234567'
}

Client.payoutCheck(requestOptions, (err, result) => {
  if(err) {
    /*hanle error*/
  }
  
    /*some actions*/
}
```

| Parameter | Description | Example |
| --- | --- | --- |
| **account** |  Your account number in the Payeer system. | P1000000 |
| **apiId** | The API user’s ID; given out when adding the API. | 12345 |
| **apiPass** | The API user's secret key. | qwerty |
| **ps** | ID of selected payment system. | 1136053 |
| **sumIn** | Amount withdrawn (the amount deposited will be calculated automatically, factoring in all fees from the recipient). | 	1.00 |
| **curIn**  | Currency with which the withdrawal will be performed. | USD, EUR, RUB |
| **curOut** | deposit currency (if the withdrawal currency is different from the deposit currency, the conversion will be performed automatically based on the Payeer system’s exchange rate when the transfer takes place). | USD, EUR, RUB |
| **accountNumber** | recipient's account number in the selected payment system *ps* | P1000441 |

Payout
----------------
```js
var requestOptions = {
    account: 'P1000000',
    apiId: '12345',
    apiPass: 'qwerty',
    ps: '26808',
    sumIn: '10.00',
    curIn: 'RUB',
    curOut: 'RUB',
    accountNumber: '79191234567'
}

Client.payout(requestOptions, (err, result) => {
  if(err) {
    /*hanle error*/
  }
  
    /*some actions*/
}
```

Transfer
----------------
```js
var requestOptions = {
    account: 'P1000000',
    apiId: '12345',
    apiPass: 'qwerty',
    sum: '1.00',
    curIn: 'RUB',
    curOut: 'RUB',
    to: 'qwerty@gmail.com',
    comment: 'hello'
}

Client.transfer(requestOptions, (err, result) => {
  if(err) {
    /*hanle error*/
  }
  
    /*some actions*/
}
```

| Parameter | Description | Example |
| --- | --- | --- |
| **to** | User’s Payeer account number or email address (if the email address was not registered before the transfer, the registration will be performed automatically) | P1000000 |
| **comment** | Comments on the transfer (this should preferably show the transaction ID in your accounting system) | Transfer #1365 |

Get Comission
----------------
```js
Client.getCommission(ps, currency, (err, result) => {
  if(err) {
    /*hanle error*/
  }
  
    /*some actions*/
}
```
| Parameter | Description | Example |
| --- | --- | --- |
| **ps** | ID of selected payment system. | 1136053 |
| **currency** | Currency | USD, EUR, RUB |

