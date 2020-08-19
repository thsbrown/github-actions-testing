const core = require("@actions/core");
const YAML = require("yaml");
const fs = require("fs");

async function run() {
    try {
        const netConfigFilePath = './././Assets/_Jump Assets/Config/Resources/NetworkingConfig.asset';
        const file = fs.readFileSync(netConfigFilePath,'utf8');
        let document = YAML.parse(file);
        let networkingVersion = document.MonoBehaviour.photonNetworkingVersion;

        if(networkingVersion !== undefined){
            let oldNetworkingVersion = networkingVersion;
            networkingVersion++;
            document.MonoBehaviour.photonNetworkingVersion = networkingVersion;
            console.log("PhotonNetworkVersion: " + oldNetworkingVersion + " -> " + networkingVersion);
            fs.writeFileSync(netConfigFilePath,YAML.stringify(document));
            core.setOutput("new-networking-version",networkingVersion);
            return;
        }
        core.setFailed("Failed to find photonNetworkVersion in NetworkConfig.asset");
    }catch(exception){
        core.setFailed(exception.message);
    }
}
run();
