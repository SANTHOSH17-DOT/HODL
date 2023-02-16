# HODL - Hold On for Dear Life

Hold On for Dear Life (HODL) is a time-locked wallet where users can send their cryptocurrency and set a HODL time. 
They can only withdraw their cryptocurrency once the HODL time has passed. 
It helps prevent users from selling their crypto at low prices.

You can try out the live demo at https://hodl-wallet.vercel.app/

<p align="center">
    <img src="https://user-images.githubusercontent.com/74037707/206703443-96fbe9e5-af87-4c4b-851b-f74b4747fa5c.png" alt="HODL!"/>
    <img src="https://user-images.githubusercontent.com/74037707/209092178-c921d87b-66fa-4363-b4a8-893c5b37db41.png" alt="HODL!"/>
  </p>

## Tech Stack
  * Truffle Framework
  * Ganache Blockchain (for development)
  * React

## Contract Information
  * Contract Address: `0x6d119824Eb9c06c02242FFFaB3A8F6775958032F`
  * Network: `Goerli (chain id: 5)`

## Setup Instructions

### Contract Directory
  * Install Ganache
  * Go to the `smart-contract` directory and run the following command to deploy the smart contract:
```bash 
truffle migrate
```
  * Update the ABI and Contract Address in the `src/` folder.
  
### Frontend
  * From the root directory, run the following command:
```bash
npm run build
```
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

### To contribute to the project, please follow these steps:

 * Fork the repository.
 * Clone the forked repository to your local machine.
 * Create a new branch for your changes:
   * `git checkout -b <branch-name>`
 * Make your changes and commit them with a descriptive message.
 * Push your changes to your fork:
   * `git push -u origin <branch-name>`
 * Create a pull request to the `dev` branch of the main repository.
 * Wait for feedback and address any review comments.
 * Once your pull request is approved, it will be merged into the dev branch and deployed to the live demo for testing.

Please note that all contributors are expected to adhere to this project's `code of conduct`.
