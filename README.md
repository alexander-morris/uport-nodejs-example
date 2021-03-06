Blockchain WTF - Uport Login Example
=================

This demo provides an easy way to test out uPort authorization credentials as well as a beginner setup procedure for nodejs. 


## Setup (one-time)

### Linux/Debian/Ubuntu
Ensure you have an updated version of nodejs and npm installed. Ubuntu repos often contain an old version, so it's recommended to use a more [up-to-date repo](https://launchpad.net/~chris-lea/+archive/node.js/).

If you already had nodejs installed and need it updated, make sure to `sudo apt-get update && sudo apt-get upgrade`. Otherwise a `sudo apt-get install nodejs npm` should be sufficient.

### Mac
`brew install node`

### Windows
Install node from [http://nodejs.org/download/](http://nodejs.org/download/) and open the node command prompt.

## Installation

Assuming nodejs/npm is correctly installed, the next step is to install all the project dependencies, along with yarn.

```
sudo npm -g install yarn
```

Finally, install all dependencies with yarn:

```
yarn
```

## Development

To test your credentials, update lines 6 and 2 of test.js with your credentials from https://appmanager.uport.me/launch/register and run the test script as shown below.

```
node test.js
```

This will print a QR code in the console, which you can scan with the UPort mobile app. After the scan, you'll see the authorization payload printed in JSON in the console. 

