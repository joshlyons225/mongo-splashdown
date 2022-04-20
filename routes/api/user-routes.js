// set dependencies
const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// all users routes
router.route("/").get(getAllUsers).post(createUser);

// users by id routes
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// friends routes
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// export user-routes
module.exports = router;
