const { Thought, User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "Invalid user ID."});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
    },

    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(500).json({message: "ERROR!", err}));
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: "Invalid user update."});
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found."})
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId }, 
            { $push: {friends: params.friendId}},
            { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'User not found.'});
            };
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
    },

    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId }},
            { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'User not found.'});
            };
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
    }

}

module.exports = userController;