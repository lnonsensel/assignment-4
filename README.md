
  NFT
    ✓ Should not return empty string in _baseURI func
    ✓ Should return token URI by token ID
    ✓ Should change baseURI
    ✓ Should be able to be minted
    ✓ Should be enable to withdraw from contract

·------------------------------|----------------------------|-------------|-----------------------------·
|     Solc version: 0.8.18     ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
·······························|····························|·············|······························
|  Methods                                                                                              │
·············|·················|··············|·············|·············|···············|··············
|  Contract  ·  Method         ·  Min         ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·············|·················|··············|·············|·············|···············|··············
|  NFT       ·  changeBaseURI  ·           -  ·          -  ·      30379  ·            1  ·          -  │
·············|·················|··············|·············|·············|···············|··············
|  NFT       ·  safeMint       ·      108514  ·     153914  ·     116081  ·            6  ·          -  │
·············|·················|··············|·············|·············|···············|··············
|  NFT       ·  withdraw       ·           -  ·          -  ·      30674  ·            1  ·          -  │
·············|·················|··············|·············|·············|···············|··············
|  Deployments                 ·                                          ·  % of limit   ·             │
·······························|··············|·············|·············|···············|··············
|  NFT                         ·           -  ·          -  ·    3427001  ·       11.4 %  ·          -  │
·------------------------------|--------------|-------------|-------------|---------------|-------------·

  5 passing (2s)


Version
=======
> solidity-coverage: v0.8.2

Instrumenting for coverage...
=============================

> NFT.sol

Compilation:
============

Compiled 14 Solidity files successfully

Network Info
============
> HardhatEVM: v2.13.0
> network:    hardhat



  NFT
    ✔ Should not return empty string in _baseURI func
    ✔ Should return token URI by token ID
    ✔ Should change baseURI
    ✔ Should be able to be minted
    ✔ Should be enable to withdraw from contract


  5 passing (791ms)

------------|----------|----------|----------|----------|----------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------|----------|----------|----------|----------|----------------|
 contracts/ |      100 |       50 |      100 |      100 |                |
  NFT.sol   |      100 |       50 |      100 |      100 |                |
------------|----------|----------|----------|----------|----------------|
All files   |      100 |       50 |      100 |      100 |                |
------------|----------|----------|----------|----------|----------------|

> Istanbul reports written to ./coverage/ and ./coverage.json
