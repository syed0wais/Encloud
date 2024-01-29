# Decentralized Image Upload and Sharing

## Features
![chrome_9Bt69t8bJR](https://github.com/syed0wais/Encloud/assets/87197237/2028c8f5-8107-4d21-aca8-d7f352e24562)
![chrome_z8iC8GY6BO](https://github.com/syed0wais/Encloud/assets/87197237/030d2c69-12f0-4d41-9905-be369e77cfc4)

![chrome_Pu5MAZF7df](https://github.com/syed0wais/Encloud/assets/87197237/51f30022-2841-4f78-8a81-ea9995648059)

![chrome_WjuTwd5b8i](https://github.com/syed0wais/Encloud/assets/87197237/03529f2f-1f4f-4285-ab7b-72894f76526f)




## Features

- **Decentralized Storage:** Images are uploaded to IPFS, ensuring decentralized and immutable storage.
- **Smart Contract:** Utilizes Solidity smart contracts on the Ethereum blockchain for access control and ownership management.
- **Access Control:** Users can grant or revoke access to their uploaded images to specific individuals through the smart contract.

## Technologies Used

- **Solidity:** Smart contract development for ownership and access control.
- **React:** Front-end interface for uploading images and managing access.
- **IPFS:** Decentralized storage protocol for hosting uploaded images.

## Usage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/syed0wais/encloud
   ```
2. Install dependencies for the hardhat:

   ```bash
   # Navigate to the root directory
   cd Encloud
   # Install hardhat dependencies
   npm install
   ```
3. Compile the smart contract for artifacts:

   ```bash
   # Compile Smart Contract
   npx hardhat compile
   ```
4. Deploy the Solidity smart contract to an Ethereum testnet or local development environment.
   ```bash
   # Deploy Smart Contract
   npx hardhat run scripts/deploy.js --network <network-name>
   ```
5. Install dependencies for the React front end:
   ```bash
   # Navigate to the React client directory
   cd client 
   # Install React dependencies
   npm install
   ```
6. Run the react application:
   ```bash
   # Start React Application
   npm start
   ```
   

## Deploying on SEPOLIA Network
```npx hardhat run scripts/deploy.js --network sepolia```
