// set dependencies
const router = require("express").Router();
const thoughtRoutes = require("./thought-routes");
const userRoutes = require("./user-routes");

// set route names
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

// export api routes
module.exports = router;
