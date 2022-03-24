const router = require("express").Router();
const { getThoughts, getThoughtById, createThought,updateThought,deleteThought, addReaction, removeReaction }
= require('../../controllers/thought-controller');
// /api/thoughts/:userId
router.route('/')
.get(getThoughts)
.post(createThought)

router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction);

module.exports = router;