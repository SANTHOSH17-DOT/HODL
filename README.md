# HODL
**Hold On for Dear Life** is a time lock wallet to which users can send their crypto and set a HODL time. They can only withdraw their crypto once the HODL time passes. It prevents "Buy at the high and sell at the low."

Live - https://hodl-wallet.vercel.app/
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
![image](https://user-images.githubusercontent.com/74037707/206703443-96fbe9e5-af87-4c4b-851b-f74b4747fa5c.png)
![image](https://user-images.githubusercontent.com/74037707/209092178-c921d87b-66fa-4363-b4a8-893c5b37db41.png)





## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
