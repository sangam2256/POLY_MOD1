const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/itzoak.sol/itzoak.json");

const tokenAddress = "0x169419D73b3efDD2CF01bE573211a90A0E966464"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x28D1759B13CD4fA182d18E2Be3D4A5DdBEE6920F"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
