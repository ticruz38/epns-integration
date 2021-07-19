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
  epnsCoreAddress: "0xc882dA9660d29c084345083922F8a9292E58787D",
  epnsCoreABI: require("../contracts/EPNSCore.json"),
  etherMainnetRPC: process.env.ETHEREUM_MAINNET_RPC,
  channelKey: process.env.CHANNEL_KEY,
};
