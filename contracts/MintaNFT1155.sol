// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MintaNFT1155 is ERC1155URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory baseUri) ERC1155(baseUri) {
        _setBaseURI(baseUri);
    }

    function mintCollectionNFT(address collector, uint256 tokenId, uint256 tokenSupply, string memory tokenURI) public onlyOwner() returns (uint256) {
        // uint256 newItemId = _tokenIds.current();
        _mint(collector, tokenId, tokenSupply, "");
        _setURI(tokenId, tokenURI);

        _tokenIds.increment();
        return tokenId;
    }

}