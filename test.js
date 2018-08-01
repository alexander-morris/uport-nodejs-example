const uportConnect = require('uport-connect');
const qrcode = require('qrcode-terminal');

const mnidAddress = '2ov9okPtsptECoKmyu7gt3UR79izc7YbSym';
const signingKey = '483064dca3d6bbc2a187db48fbf8e20069a3ffaafecafab9f233d0f49f0849b7';

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




