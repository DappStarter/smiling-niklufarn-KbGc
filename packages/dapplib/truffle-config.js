require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note rifle coin hockey private obscure topic'; 
let testAccounts = [
"0xedadfffbcc7e5abb7fd46efb567f9187fa937850b14f44f123844e78c250cbfd",
"0x41c680e94352d4a3a2feaf6edc2eef11499c8baf808e5dbae9ad1aa3c947f8bd",
"0x7ba1837d8c6c8ade5b37004e007bee6407f4f2a51a29b3f4177c9248d3a161b7",
"0x5d94c2023e3b02662a1fe4e1230ba461d3ae9bf70c50d42daf1df57340312b5c",
"0x51de93479961c3e303ddfb33824c1e69407e269239eaa659f316fd903d52b2ce",
"0x86760e1fd1f5a3ad1543867d083096a2f2b3cab2276677544cd9d5f976b19495",
"0x3e913cd5b98e606c0b03f1aa93ea88f49b6ca881df3ba170f717733d23ccd4fc",
"0x8124469c70358f5bde3ddb4c2b67ad60c550d0fbcead1b305c454ec01251488f",
"0xc67dd4341f0f6694e47fdd4c9bad6eb0b64ed0b6fa7d4a23bbbef7d0f9e572f3",
"0xc7fa4a06816e8a32b5a13864336654c636268ff33ac5a12d405f192946fe471a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

