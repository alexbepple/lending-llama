# Set up

## Requirements
* see `.tool-versions`
* – or use [asdf](https://asdf-vm.com/) directly 😉

Choices:
* npm over yarn 
  * npm is on-board after installing Node.js
* Java _11_
  * Even though slightly outdated, it’s default for client. Therefore, less risk of incompatibilities.
  * Client seems to be using SDKMAN + Zulu. 
SDKMAN is not an option; it provides no Node. 
SDKMAN seems to have Zulu 11.0.12 & .13. 
The closest asdf version to this is zulu-11.2.3.

## IDE setup

Automatically restart backend on changes  
_Actions on Save_ > _Build project_
