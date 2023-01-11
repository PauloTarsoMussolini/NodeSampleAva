require('dotenv').config();
function setMsgEtherscan (hash) {
   // 1-Mainnet 3-Ropsten 4-Rinkeby 42-Kovan 1001-Development
   var resp;
    switch(process.env.NETWORK_ID) {
        case "1":
          resp = "https://etherscan.io/tx/" + hash;
          break;
        case "4":
          resp = "https://rinkeby.etherscan.io/tx/" + hash;
          break;
        default:
          resp = hash;
      }
console.log(process.env.NETWORK_ID)
    return resp;
    
}

module.exports = setMsgEtherscan;
