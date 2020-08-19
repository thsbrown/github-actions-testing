const core = require("@actions/core");
//const github = require("@actions/github");
const YAML = require("yaml");
const fs = require("fs");

async function run() {
    const tagVersion = core.getInput("tag-version-string");
    console.log(tagVersion);

    const file = fs.readFileSync('./././NetworkingConfig.asset','utf8');
    let document = YAML.parse(file);
    let networkingVersion = document.MonoBehaviour.photonNetworkingVersion;

    if(networkingVersion !== undefined){
        console.log(networkingVersion);
        networkingVersion++;
        document.MonoBehaviour.photonNetworkingVersion = networkingVersion;
        console.log(networkingVersion);
    }
    fs.writeFileSync("NetworkingConfig.asset",YAML.stringify(document));
    try {

    }catch(exception){
        /*
        core.setFailed(exception.message);
        */
    }
}

run();