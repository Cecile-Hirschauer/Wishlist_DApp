// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

/// @notice Error thrown when the provided funds are not enough to buy an item
    error NotEnoughFounds();

/// @notice Error thrown when an attempt is made to buy an item that has already been bought
    error AlreadyBought();

/// @title Wishlist Contract
/// @notice This contract allows users to manage a wishlist of items they want to buy
/// @dev This contract allows users to add items to their wishlist and others to buy them
contract Wishlist {
    /// @notice Represents an item on the wishlist
    /// @param id The unique identifier of the item
    /// @param name The name of the item
    /// @param price The price of the item in wei
    /// @param bought Whether the item has been bought
    /// @param boughtBy The address of the user who bought the item, if any
    struct Item {
        uint256 id;
        string name;
        uint256 price;
        bool bought;
        address boughtBy;
    }

    /// @notice The next id to be assigned to a new item
    uint256 public nextId;

    /// @notice The wishlist of items for each user
    /// @dev The key is the address of the user and the value is an array of items
    mapping(address => Item[]) private wishlist;

    /// @notice Returns the wishlist of a specific user
    /// @param _of The address of the user whose wishlist is to be returned
    /// @return An array of items on the user's wishlist
    function getWishlist(address _of) external view returns (Item[] memory) {
        return wishlist[_of];
    }

    /// @notice Adds a new item to the wishlist of the sender
    /// @param _name The name of the item to be added
    /// @param _price The price of the item to be added in wei
    /// @dev The function increments the nextId and creates a new item with it
    function addToWishlist(string calldata _name, uint256 _price) external {
        nextId++;
        Item memory thisItem = Item(nextId, _name, _price, false, address(0));
        wishlist[msg.sender].push(thisItem);
    }

    /// @notice Finds the index of an item in a user's wishlist by its id
    /// @param _for The address of the user
    /// @param _id The id of the item to be found
    /// @return The index of the item in the user's wishlist
    /// @dev Internal function to find the item index in the wishlist array
    function getKeyByAddressAndId(address _for, uint256 _id) internal view returns (uint256) {
        uint256 result;
        for (uint256 i = 0; i < wishlist[_for].length; i++) {
            if (wishlist[_for][i].id == _id) {
                result = i;
            }
        }
        return result;
    }

    /// @notice Allows a user to buy an item from someone else's wishlist
    /// @param _for The address of the user whose item is being bought
    /// @param _id The id of the item to be bought
    /// @dev The function checks if the sent Ether is sufficient and if the item is not already bought
    /// @dev If successful, it marks the item as bought and transfers the Ether to the item's owner
    /// @dev Reverts with NotEnoughFounds if the sent Ether is less than the item price
    /// @dev Reverts with AlreadyBought if the item is already bought
    function buyItem(address _for, uint256 _id) external payable {
        uint256 key = getKeyByAddressAndId(_for, _id);
        if (msg.value < wishlist[_for][key].price) {
            revert NotEnoughFounds();
        }
        if (wishlist[_for][key].bought) {
            revert AlreadyBought();
        }
        wishlist[_for][key].bought = true;
        wishlist[_for][key].boughtBy = msg.sender;
        (bool sent,) = _for.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
