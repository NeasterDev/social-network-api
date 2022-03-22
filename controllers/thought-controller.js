const { Thought, User } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => {
            res.json(dbThoughtData)
        })
        .catch(err => res.status(500).json(err));
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: "Invalid thought id."})
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(500).json(err));
    },

    createThought({ body }, res) {
        Thought.create(body)
        .then(({_id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId},
                { $push: { thoughts: _id} },
                { new: true }
            )
            })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(500).json(err));
    },

    updateThought({ params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, {new: true })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: "No thought found."})
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(500).json(err));
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: "No thought found."})
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(500).json(err));
    },

    
}

module.exports = thoughtController;