# Wishlist Smart Contract

This repository contains the code for the Wishlist smart contract. This contract allows users to manage a wishlist of items they want to buy and allows others to buy items from these wishlists.

## Overview

The Wishlist contract allows users to:
- Add items to their wishlist.
- View the items on their wishlist.
- Buy items from other users' wishlists.

## Contract Details

### Contract: `Wishlist`

#### Structs

- **Item**
    - `uint256 id`: The unique identifier of the item.
    - `string name`: The name of the item.
    - `uint256 price`: The price of the item in wei.
    - `bool bought`: Whether the item has been bought.
    - `address boughtBy`: The address of the user who bought the item, if any.

#### State Variables

- `uint256 public nextId`: The next id to be assigned to a new item.
- `mapping(address => Item[]) private wishlist`: The wishlist of items for each user.

#### Functions

- `getWishlist(address _of) external view returns (Item[] memory)`: Returns the wishlist of a specific user.
- `addToWishlist(string calldata _name, uint256 _price) external`: Adds a new item to the wishlist of the sender.
- `buyItem(address _for, uint256 _id) external payable`: Allows a user to buy an item from someone else's wishlist.

### Errors

- `NotEnoughFounds()`: Thrown when the provided funds are not enough to buy an item.
- `AlreadyBought()`: Thrown when an attempt is made to buy an item that has already been bought.

### Test Coverage

#### Version

> solidity-coverage: v0.8.12

#### Instrumenting for coverage...

> Wishlist.sol

#### Compilation:

Compiled 1 Solidity file successfully (evm target: paris).

#### Network Info

> HardhatEVM: v2.22.4
> network:    hardhat


#### Deployment

1. [x] should deploy the smart contract
2. [x] addToWishList
3. [x] should add an element in the wishList

#### buyItem

1. [x] should NOT buy item if not enough funds are provided
2. [x] should buy the item if enough funds are provided
3. [x] should NOT buy the item if the item has already been bought


5 passing (151ms)

---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
contracts/    |      100 |       75 |      100 |      100 |                |
Wishlist.sol |      100 |       75 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
All files      |      100 |       75 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|


### Deployment

To deploy the Wishlist smart contract with local node, use the following command:

```sh
npx hardhat ignition deploy ./ignition/modules/Wishlist.js --network localhost
