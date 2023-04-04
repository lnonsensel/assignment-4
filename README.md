# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

  NFT
    ✓ Should not return empty string in _baseURI func
    ✓ Should return token URI by token ID
    ✓ Should change baseURI
    ✓ Should be able to be minted
    ✓ Should be enable to withdraw from contract

·------------------------------|----------------------------|-------------|-----------------------------·
|     [90mSolc version: 0.8.18[39m     ·  [90mOptimizer enabled: false[39m  ·  [90mRuns: 200[39m  ·  [90mBlock limit: 30000000 gas[39m  │
·······························|····························|·············|······························
|  [32m[1mMethods[22m[39m                                                                                              │
·············|·················|··············|·············|·············|···············|··············
|  [1mContract[22m  ·  [1mMethod[22m         ·  [32mMin[39m         ·  [32mMax[39m        ·  [32mAvg[39m        ·  [1m# calls[22m      ·  [1musd (avg)[22m  │
·············|·················|··············|·············|·············|···············|··············
|  [90mNFT[39m       ·  changeBaseURI  ·           -  ·          -  ·      30379  ·            [90m1[39m  ·          [32m[90m-[32m[39m  │
·············|·················|··············|·············|·············|···············|··············
|  [90mNFT[39m       ·  safeMint       ·      [36m108514[39m  ·     [31m153914[39m  ·     116081  ·            [90m6[39m  ·          [32m[90m-[32m[39m  │
·············|·················|··············|·············|·············|···············|··············
|  [90mNFT[39m       ·  withdraw       ·           -  ·          -  ·      30674  ·            [90m1[39m  ·          [32m[90m-[32m[39m  │
·············|·················|··············|·············|·············|···············|··············
|  [32m[1mDeployments[22m[39m                 ·                                          ·  [1m% of limit[22m   ·             │
·······························|··············|·············|·············|···············|··············
|  NFT                         ·           -  ·          -  ·    3427001  ·       [90m11.4 %[39m  ·          [32m[90m-[32m[39m  │
·------------------------------|--------------|-------------|-------------|---------------|-------------·

  5 passing (2s)

