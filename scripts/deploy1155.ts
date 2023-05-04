import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const MintaNFT1155 = await ethers.getContractFactory("MintaNFT1155");
  const mintaNFT1155 = await MintaNFT1155.deploy("https://gateway.pinata.cloud/ipfs/");

  await mintaNFT1155.deployed();

  console.log(
    `Minta NFT timestamp ${unlockTime} deployed to ${mintaNFT1155.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
