const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
        //getter to format date
    }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    })

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280,
    },
    createdAt: {
        type: Date,
        default: Date.new()
        // getter to format date
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);