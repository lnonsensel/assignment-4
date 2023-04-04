// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { network } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const Token = await hre.ethers.getContractFactory("NFT");

  const token = await Token.deploy();
  await token.deployed();

  console.log(`Contract owner address: ${owner.address}`);

  await token.safeMint(owner.address, {
    value: hre.ethers.utils.parseEther("0.001"),
  })

  console.log(`Deployed token address: ${token.address}`);

  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await token.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`Contract deployed to ${token.address} on ${network.name}`);

  console.log(`Verifying contract on Etherscan`);

  await hre.run(`verify:verify`, {
    address: token.address,
    constructorArguments: [],
  });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
