# Polygon-Module 1 : Building with Polygon Bridge

Deploying an NFT collection on Ethereum and mapping it to Polygon, while also using an image generation tool like DALL-E 2 or Midjourney for the NFT images, is an exciting project. Here's a step-by-step guide on how to achieve this:

## Getting Started
Step 1: Firstly use Lexica to generate 5 item collection.Store it on ipfs and copy the Urls of ips and upload on pinata cloud. 

Step 2: Create the NFT Contract on Ethereum and Test the NFT Contract

Step 3: Set up the Polygon Network

Step 4: Deploy NFT Contract on Polygon

Step 5: Map the NFT Collection to Polygon

Step 6: Transfer Assets via the Polygon Bridge

### Executing program

Clone the Repository and open terminal, run:

```shell
 npm install or npm i
```

After installing the dependencies, run the test file by using the following command:

```shell
npx hardhat test
```

### Deploying the ERC721A Contract

Before deploying, Rename ".env.example" to ".env" and provide your wallet private key where required i.e. "PRIVATE_KEY= 'your wallet private key'". Run the following command to deploy the ERC721 contract to the Goerli Ethereum Testnet:

``` shell
npx hardhat run scripts/deploy.js --network goerli 
```
### NOTE:
After deploying the address will generate. So, copy that address into `contarctAddress.js`(stored in metadata folder) and also in `batchMint.js`(stored in scripts folder) as well in 'approveDeposit.js'

The script will deploy the contract
 
### Batch Mint NFTs

Run the following command to batch-mint NFTs using the deployed ERC721 contract:

``` shell
npx hardhat run scripts/batchMint.js --network goerli
```

The script will mint the specified number of NFTs and assign them to your address.

### Approve and Deposit NFTs to Polygon Mumbai

Run the following commands to approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge:

```shell
npx hardhat run scripts/approveDeposit.js --network goerli
```

## Author

Sangam Kumar-Chandigarh University

## License

This project is licensed under the [MIT License](LICENSE).
You can make a copy of the project to use for your own purposes.
