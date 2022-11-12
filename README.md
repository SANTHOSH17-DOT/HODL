# HODL(Under development)
**Hold On for Dear Life** is a time lock wallet to which users can send their crypto and set a HODL time. They can only withdraw their crypto once the HODL time passes. This prevents the user from selling crypto on the market crash.
## Tech stack
- Truffle framework
- Ganache blockchain for development
- React
## Setup
- Install **Ganache**
- To deploy the smart contract, from the **smart-contract** directory, run
```bash
truffle migrate
```
- Update the abi and the contract address in the src/ folder
- Install **Metamask** browser extension and add Ganache network to it

### Add the wallet as a browser extension
- From the root directory,
```bash 
npm run build
```
- Open **chrome://extensions/** and click on `Load unpacked`
- Choose the build directory of this project
### For development
- From the root directory, run
```bash
npm start
```
## Screenshots
![image](https://user-images.githubusercontent.com/74037707/201468914-0ca08679-c34a-4e55-94dc-d1a3118e77d9.png)
