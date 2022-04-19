// import dependencies
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// create Thought schema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    // call ReactionSchema
    reactions: [ReactionSchema],
  },
  {
    // add virtuals and getters
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // omit id
    id: false,
  }
);

// create Reaction schema
const ReactionSchema = new Schema(
  {
    // create custom reaction id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    // add getters
    toJSON: {
      getters: true,
    },
  }
);

// get all reactions to thoughts
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// define Thought model
const Thought = model("Thought", ThoughtSchema);

// export Thought model
module.exports = Thought;
