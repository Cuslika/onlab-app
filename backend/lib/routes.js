const Router = require("express").Router;
const quizApp = require("./controller.js");
const router = Router();

router.get("/", async (req, res) => {
  await quizApp
    .getAll()
    .then((questions) => res.json(questions))
    .catch((err) => res.status(404).json(err));
});

router.get("/question/:id", async (req, res) => {
  await quizApp
    .getSingleQuestion(req.params.id)
    .then((question) => res.json(question))
    .catch((err) => res.status(404).json(err));
});

router.post("/question", async (req, res) => {
  await quizApp
    .post(req.body.question, req.body.answers)
    .then((questions) => res.json(questions))
    .catch((err) => res.status(404).json(err));
});

router.put("/update/:id", async (req, res) => {
  await quizApp
    .updateQuestion(req.params.id, req.body.question, req.body.answers)
    .then((questions) => res.json(questions))
    .catch((err) => res.status(404).json(err));
});

router.delete("/delete/:id", async (req, res) => {
  await quizApp
    .delete(req.params.id)
    .then((questions) =>
      res.json(questions).catch((err) => res.status(404).json(err))
    );
});

module.exports = router;
