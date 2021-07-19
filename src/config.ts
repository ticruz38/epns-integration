import dotenv from "dotenv";

dotenv.config();

export default {
  port: 3333,
  alchemyAPI: process.env.ALCHEMY_API,
  etherscanAPI: process.env.ETHERSCAN_API,
  infura: {
    ID: process.env.INFURA_ID,
    secret: process.env.INFURA_SECRET,
  },
  ropstenRPC: process.env.ROPSTEN_RPC,
  epnsCoreAddress: process.env.EPNS_CORE_ADDRESS,
  epnsCoreABI: require("../contracts/EPNSCore.json"),
  etherMainnetRPC: process.env.ETHEREUM_MAINNET_RPC,
  channelKey: process.env.CHANNEL_KEY,
};
