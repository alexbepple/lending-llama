# Set up

## Requirements
* see `.tool-versions`
* – or use [asdf](https://asdf-vm.com/) directly 😉

Choices:
* npm over yarn 
  * npm is on-board after installing Node.js
* Java _11 Zulu_
  * Even though slightly outdated, it’s default for client. Therefore, less risk of incompatibilities.
  * Client seems to be using SDKMAN + Zulu. 
SDKMAN is not an option; it provides no Node.   
SDKMAN and asdf versioning for Zulu differ! SDKMAN gives the underlying OpenJDK version; whereas asdf the Zulu version (cp https://www.azul.com/downloads/?version=java-11-lts&package=jdk). 

## IDE setup

Automatically restart backend on changes  
_Actions on Save_ > _Build project_
