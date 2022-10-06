const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
  },
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    thoughts: [],
  },
  {
    friends: [],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of friends and replies on retriveal

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

// export the pizza model

module.exports = Pizza;
