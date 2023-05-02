import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const MintaNFT = await ethers.getContractFactory("MintaNFT");
  const mintaNFT = await MintaNFT.deploy("Minta NFT", "MNT");

  await mintaNFT.deployed();

  console.log(
    `Minta NFT timestamp ${unlockTime} deployed to ${mintaNFT.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
