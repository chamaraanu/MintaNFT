import { sign } from "crypto";
import { ethers } from "hardhat";

async function main() {
    const [signer1] = await ethers.getSigners();
    const MintaNFT1155 = await ethers.getContractFactory("MintaNFT1155");
    const mintaNFT1155 = MintaNFT1155.attach(process.env.NFT1155_ADDRESS);

    await mintaNFT1155.connect(signer1).mintCollectionNFT(signer1.address, 0, 1, "QmRgippqroqi9T9qj6LvAKUpzvpdtU3uUpYomdLJ9eXPTf");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });