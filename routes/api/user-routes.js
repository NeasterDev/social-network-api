const router = require("express").Router();
const { getAllUsers, getUserById, createUser, deleteUser, updateUser, addFriend, removeFriend }
= require('../../controllers/user-controller');
// /api/users
router.route("/")
.get(getAllUsers)
.post(createUser);

// /api/user/id
router.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userID/friends/:FriendId
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;