import { sign } from "crypto";
import { ethers } from "hardhat";

async function main() {
    const [signer1] = await ethers.getSigners();
    const MintaNFT = await ethers.getContractFactory("MintaNFT");
    const mintaNFT = MintaNFT.attach(process.env.NFT_ADDRESS);

    await mintaNFT.connect(signer1).mintCollectionNFT(signer1.address, "");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });