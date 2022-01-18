const {Blockchain, Block} = require('./blockchain');

let topCoin = new Blockchain();
topCoin.createGenesisBlock();
for(let i =1; i<100 ;i++){
    topCoin.addBlock(new Block(i,Date.now(),i));
}
console.log('Is blockchain vaild?'+ topCoin.isChainValid()); 


for(let i =0; i<100 ;i++){
    console.log(topCoin.chain[i]);
}