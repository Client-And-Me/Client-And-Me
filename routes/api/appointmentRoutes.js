const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");


// Matches with "/api/appointments"
router.route("/")
    .get(appointmentController.findAll)
//.post(appointmentController.create);

// Matches with "/api/appointments/:id"
router
// .route("/:id")
// .get(appointmentController.findById)
// .put(appointmentController.update)
// .delete(appointmentController.remove);

module.exports = router;