// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MintaNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory tokenName, string memory tokenSymbol) ERC721(tokenName, tokenSymbol) {}

    // Allows minting of a new NFT 
    function mintCollectionNFT(address collector, string memory tokenURI) public onlyOwner() returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _safeMint(collector, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}