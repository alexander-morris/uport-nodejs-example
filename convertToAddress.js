// convertToAddress.js

var ethUtil = require('ethereumjs-util');
// var Web3 = require('web3')

var pubKey = "0x04315249bd0eac98917004d01e71cac4c7954829c0301c97df8e17dbce425c07c0e4a24a96878796e94a4fa8096bb5dc43f0991af0331d4d1dc42c62dae7da4095"
var address = ethUtil.publicToAddress(pubKey).toString('hex')
var chaddress = ethUtil.toChecksumAddress(address)

