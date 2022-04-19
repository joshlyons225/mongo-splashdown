// import dependencies
const { Schema, model } = require("mongoose");

// create User schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Username is required!",
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "You must enter a valid email address"],
    },
    // refer to Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // refer to User model to create friends array
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // add virtuals and getters:
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // omit id
    id: false,
  }
);

// get total number of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// define User model
const User = model("User", UserSchema);

// export User model
module.exports = User;
