const Router = require("express").Router;
const quizApp = require("./controller.js");
const router = Router();

router.get("/", async (req, res) => {
  await quizApp
    .getAll()
    .then((questions) => res.json(questions))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
