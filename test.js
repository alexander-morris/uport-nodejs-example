const uportConnect = require('uport-connect');
const qrcode = require('qrcode-terminal');

const mnidAddress = '2ojEtUXBK2J75eCBazz4tncEWE18oFWrnfJ';
const signingKey = 'cb89a98b53eec9dc58213e67d04338350e7c15a7f7643468d8081ad2c5ce5480';

const appName = 'The Blockchain Institute';

const uriHandler = (uri) => {
  qrcode.generate(uri, {small: true})
  console.log(uri)
}

const uport = new uportConnect.Connect(appName, {
	uriHandler,
    clientId: mnidAddress,
    network: 'rinkeby',
    signer: uportConnect.SimpleSigner(signingKey)
});

// Request credentials
uport.requestCredentials({
  requested: ['name'],
}).then((credentials) => {
  console.log(credentials);

  console.log('finished')

})




