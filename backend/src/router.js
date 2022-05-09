const express = require("express");

const { ItemController } = require("./controllers");
const { PlayerController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/players", PlayerController.browse);
router.get("/players/top10", PlayerController.browse10);
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.delete("/players/:id", PlayerController.delete);

module.exports = router;
