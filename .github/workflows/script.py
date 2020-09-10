from unityparser import UnityDocument

# Loading and modifying a config file with a single YAML document
project_settings_file = './NetworkingConfig.asset'
doc = UnityDocument.load_yaml(project_settings_file)
NetworkConfig = doc.entry
version = NetworkConfig.photonNetworkingVersion
version += 1;
NetworkConfig.photonNetworkingVersion = version
doc.dump_yaml()
