// set dependencies
const router = require("express").Router();

// define Thought route options
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// all thoughts routes
router.route("/").get(getAllThoughts).post(createThought);

// thoughts by id routes
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// add reaction route
router.route("/:thoughtId/reactions").post(createReaction);

// delete reaction route
router.route("/:thoughtId/:reactionId").delete(deleteReaction);

// export thought-routes
module.exports = router;
