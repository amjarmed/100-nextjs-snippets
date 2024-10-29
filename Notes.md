# Publish Your Extension

npm install -g vsce

- create a publisher account :
  <https://marketplace.visualstudio.com/>

- Generate a Personal Access Token:
  <https://azure.microsoft.com/en-us/products/devops/?nav=min>

- Publish the Extension:

vsce login <your_publisher_name>

vsce publish

## Generate a .vsix File

npm install -g vsce
cd path/to/your-extension

run : vsce package
