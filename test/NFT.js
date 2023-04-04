const { expect, assert } = require('chai');
const { anyValue } = require('@nomicfoundation/hardhat-toolbox');
const hre = require('hardhat');
const { ethers } = require('hardhat');


describe("NFT", function() {
    let contract, nftFactory;
    let owner = "0x4acf798F07ac7129E8D043F1F3839a0db3d210F9";
    this.beforeEach(async function(){
        nftFactory = await hre.ethers.getContractFactory("NFT");
        contract = await nftFactory.deploy();
        await contract.safeMint(owner, {value: ethers.utils.parseEther('0.001')});
    });


    it ("Should not return empty string in _baseURI func", async function() {
        URI = await contract.baseURI;
        expect(URI).not.to.be.equal("");
    });

    it ("Should return token URI by token ID", async function() {
        URI = await contract.tokenURI(0);
        let baseURI = await contract.baseURI();
        expect(URI).to.be.equal(baseURI+"0.json");
    });

    it ("Should change baseURI", async function(){

        oldBaseURI = await contract.baseURI;
        await contract.changeBaseURI("a");
        newBaseURI = await contract.baseURI;
        !expect(oldBaseURI).to.be.equal(newBaseURI);
    });

    it ("Should be able to be minted", async function() {;
        contract.safeMint('0x4acf798F07ac7129E8D043F1F3839a0db3d210F9',{value: ethers.utils.parseEther("0.001")});
        assert.equal();
    })

    it ("Should be enable to withdraw from contract", async function(){
        let success = await contract.withdraw();
        assert(success);
    })
})