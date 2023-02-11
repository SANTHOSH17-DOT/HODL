# HODL - Hold On for Dear Life

Hold On for Dear Life (HODL) is a time-locked wallet where users can send their cryptocurrency and set a HODL time. 
They can only withdraw their cryptocurrency once the HODL time has passed. 
It helps prevent users from selling their crypto at low prices.

You can try out the live demo at https://hodl-wallet.vercel.app/

![image](https://user-images.githubusercontent.com/74037707/206703443-96fbe9e5-af87-4c4b-851b-f74b4747fa5c.png)

![image](https://user-images.githubusercontent.com/74037707/209092178-c921d87b-66fa-4363-b4a8-893c5b37db41.png)

## Tech Stack
  * Truffle Framework
  * Ganache Blockchain (for development)
  * React

## Contract Information
  * Contract Address: [Insert Contract Address]
  * Network: [Insert Network Name]

## Setup Instructions

### Contract Directory
  * Install Ganache
  * Go to the `smart-contract` directory and run the following command to deploy the smart contract:
```bash 
truffle migrate
```
  * Update the ABI and Contract Address in the `src/` folder.
  
### Frontend
  * Install the **Metamask** browser extension and add the Ganache network to it.
  * From the root directory, run the following command:
```bash
npm run build
```
  * Open `chrome://extensions/` and click on `Load unpacked`.
  * Choose the `build` directory of this project.
  
### For Development
  * From the root directory, run the following command to start the development server:
```bash
npm start
```

## Directory Structure
```bash
HODL
|
|-- smart-contract
|   |
|   |-- migrations
|   |-- contracts
|   |-- tests
|
|-- src
|   |
|   |-- abi
|   |-- contract-address
|
|-- build
|
|-- node_modules
|
|-- package.json
|-- package-lock.json
|
|-- README.md
|-- contributing.md
|-- code of conduct.md


```


## Contributing

We welcome contributions of all kinds! 
If you are interested in contributing, please take a look at our `contributing.md` file for more information. 

Please note that all contributors are expected to adhere to this project's `code of conduct`.
