const router = require("express").Router(),
    appointments = require("./appointmentRoutes.js");
client = require("./clientRoutes.js");
provider = require("./providerRoutes.js");

router.use("/appointments", appointments);
router.use("/provider", provider);
router.use("/client", client)

module.exports = router;