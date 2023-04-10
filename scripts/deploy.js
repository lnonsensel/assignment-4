const { network } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const Token = await hre.ethers.getContractFactory("NFT");

  const token = await Token.deploy();
  await token.deployed();

  console.log(`Contract owner address: ${owner.address}`);

  await token.safeMint(owner.address, 1, {
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


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
