const router = require("express").Router();
const { getThoughts, getThoughtById, createThought,updateThought,deleteThought }
= require('../../controllers/thought-controller');
// /api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought)

router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post()
.delete();

module.exports = router;