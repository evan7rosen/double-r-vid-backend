const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

router.get("/", (req, res) => {
  Video.query()
    .eager("customers")
    .then(result => res.send(result));
});

router.get("/:id", (req, res) => {
  Video.query()
    .findById(req.params.id)
    .eager("customers")
    .then(result => {
      res.json(result);
    });
});

router.post("/", (req, res) => {
  Video.query()
    .insert(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  Video.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedVideo => res.json(updatedVideo));
});

router.delete("/:id", (req, res) => {
  Video.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedVideo => res.json(deletedVideo));
});

module.exports = router;
