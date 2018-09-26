const uportConnect = require('uport-connect');
const qrcode = require('qrcode-terminal');

const mnidAddress = '2owsvTbFNTxdPJnto5z1RM6sTerFZDwf2Zw';
const signingKey = '2943eccfe2c76849eb5e6ef5ca190df41e2665a4d3e9a9c5e470b7e2aa79e9cd';

const appName = 'The Blockchain Institute';

const uriHandler = (uri) => {
  qrcode.generate(uri, {small: true})
  console.log(uri)
}

const uport = new uportConnect.Connect(appName, {
	uriHandler,
    clientId: mnidAddress,
    network: 'ropsten',
    signer: uportConnect.SimpleSigner(signingKey)
});

// Request credentials
uport.requestCredentials({
  requested: ['name']
}).then((credentials) => {
  console.log('finished: ', credentials)

})




