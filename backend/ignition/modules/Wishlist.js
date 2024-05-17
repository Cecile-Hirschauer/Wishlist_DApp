const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("WishlistModule", (m) => {

  const wishlist = m.contract("Wishlist");

  return { wishlist };
});
