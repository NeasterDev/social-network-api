const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required."],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Must be valid email"]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})