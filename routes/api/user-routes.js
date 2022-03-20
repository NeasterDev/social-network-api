const router = require("express").Router();

// /api/user
router.route("")
.get()
.post();

// /api/user/id
router.route("/:id")
.get()
.put()
.delete();

// /api/users/:userID/friends/:FriendId
router.route('/:userId/friends/:friendId')
.post()
.delete();

module.exports = router;