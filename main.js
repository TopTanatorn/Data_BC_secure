const {Blockchain, Block} = require('./blockchain');

let topCoin = new Blockchain();
topCoin.createGenesisBlock();
topCoin.addBlock(new Block(1,"14/1/2022",{amout: 4}));
topCoin.addBlock(new Block(2,"14/1/2022",{amout: 20}));
topCoin.addBlock(new Block(3,"14/1/2022",{amout: -10}));
topCoin.addBlock(new Block(4,"14/1/2022",{amout: -15}));
console.log(topCoin.chain[0]);
console.log(topCoin.chain[1]);
console.log(topCoin.chain[2]);
console.log(topCoin.chain[3]);
console.log('Is blockchain vaild?'+ topCoin.isChainValid()); 
