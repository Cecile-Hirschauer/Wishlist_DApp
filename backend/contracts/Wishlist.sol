// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

    error NotEnoughFounds();
    error AlreadyBought();

contract Wishlist {
    struct Item {
        uint256 id;
        string name;
        uint256 price;
        bool bought;
        address boughtBy;
    }

    uint256 public nextId;

    mapping(address => Item[]) private wishlist;

    function getWishlist(address _of) external view returns (Item[] memory) {
        return wishlist[_of];
    }

    function addToWishlist(string calldata _name, uint256 _price) external {
        nextId++;
        Item memory thisItem = Item(nextId, _name, _price, false, address(0));
        wishlist[msg.sender].push(thisItem);
    }

    function getKeyByAddressAndId(address _for, uint256 _id) internal view returns (uint256) {
        uint256 result;
        for (uint256 i = 0; i < wishlist[_for].length; i++) {
            if (wishlist[_for][i].id == _id) {
                result = i;
            }
        }
        return result;
    }

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
