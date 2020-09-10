from unityparser import UnityDocument


def run():
    network_config_file_path = './NetworkingConfig.asset'
    unity_document = UnityDocument.load_yaml(network_config_file_path)
    netconfig_monobehaviour_document = unity_document.entry

    try:
        version = netconfig_monobehaviour_document.photonNetworkingVersion
    except AttributeError:
        print("Failed to find photonNetworkVersion in NetworkConfig.asset")
        return

    old_networking_version = version
    version += 1
    print(str(old_networking_version) + " -> " + str(version))
    netconfig_monobehaviour_document.photonNetworkingVersion = version
    # see https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter
    print(f"::set-output name=new-networking-version::{version}")
    # unity_document.dump_yaml()
    return


run()
