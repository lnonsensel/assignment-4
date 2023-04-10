// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721Enumerable, Ownable {
    using Strings for uint256;
    uint256 maxSupply = 100;
    uint256 cost = 0.001 ether;
    mapping(address => uint256) ownedTokens;
    string public baseURI =
        "ipfs://QmSyKikPBB7DgMpXpLqbzEwnMoyk8uqqTsnjHJH2uGAVjm/";

    constructor() ERC721("0xblocks", "0xb") {}

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        _requireMinted(tokenId);
        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(_baseURI(), tokenId.toString(), ".json")
                )
                : "";
    }

    function changeBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function safeMint(address _to, uint256 _id) public payable {
        //uint256 _currentSupply = totalSupply();
        require(_id <= maxSupply, "Wrong id");
        require(msg.value == cost, "Please add valid amount in BNB");
        _safeMint(_to, _id);
    }

    function withdraw() public onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success, "Transaction failed");
    }

    function getAllUserTokens(
        address _user
    ) public view returns (uint256[] memory) {
        uint256[] memory _tokens = new uint256[](balanceOf(_user));
        for (uint256 i; i < balanceOf(_user); i++) {
            _tokens[i] = tokenOfOwnerByIndex(_user, i);
        }
        return _tokens;
    }
}
