import config from "./config";
import EpnsHelper, {
  EPNSSettings,
  NetWorkSettings,
  InfuraSettings,
} from "@epnsproject/backend-sdk";

const infuraSettings: InfuraSettings = {
  projectID: config.infura.ID as string,
  projectSecret: config.infura.secret as string,
};

const networkSettings: NetWorkSettings = {
  alchemy: config.alchemyAPI,
  infura: infuraSettings,
  etherscan: config.etherscanAPI,
};

const epnsSettings: EPNSSettings = {
  network: "ropsten",
  contractAddress: config.epnsCoreAddress as string,
  contractABI: config.epnsCoreABI as any,
};

const networkToMonitor = config.etherMainnetRPC as string;

export const sdk = new EpnsHelper(
  networkToMonitor,
  config.channelKey as string,
  networkSettings,
  epnsSettings
);
