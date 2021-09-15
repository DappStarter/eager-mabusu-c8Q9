require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strategy radar mean purpose inside light army giant'; 
let testAccounts = [
"0x47c98bc843e3cd9e7ed3a71e0686ae1c130785b89e85e037bac72c045d33b8f1",
"0x72b8f30bddd506712f1068a226b71d611b5f96461a4b6e0a22447af586a2a531",
"0xb75a7fb6c10062183741d38083fb1138de4121333c712b27df938d6747e82fdf",
"0xfda4619a8b54520deadff7ce24781b6f84494f71a102df873eb24db2e33e5f63",
"0x8eedc580953940661f247fd2180960ab2cd3b14aae635517e62e2e9eba34d185",
"0xff6adf550af80016c03fe8ca5fca8ade69737174e356df596fccf82f4d8fc6b9",
"0xea5b56089037670acef7872e177e56ed093f1d41cc159e6cc161c94d0d1e1cb2",
"0xa5e747647ca43ce0b6d11b410b7840638176db9c14eab03a3bbdd632731c38f4",
"0x733f57f3fea26110cdb59e71b61a157a9e44604d9107ca9322218aa6cbbe8334",
"0xc496bcb363784c7ec388a0a0de0aa75e8a987d038b8d2cd1d46fe6dece572571"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

