import express from 'express';

let router = express.Router();

import evaluationService from '../services/EvaluationService.js';

router.post("/addEvaluation", async (req, res) => {
  const evaluationModel = {
    concept: req.body.concept,
  };
  const evaluation = await evaluationService.saveEvaluation(evaluationModel);
  return res.status(201).json({
    message: "Evaluation created successfully",
    evaluation: evaluation,
  });
});

router.get("/getAllEvaluations", async (req, res) => {
  const allEvaluations = await evaluationService.getAllEvaluations();
  return res.status(200).json({
    message: "Evaluations retrieved successfully",
    evaluations: allEvaluations,
  });
});

router.get("/evaluation/:id", async (req, res) => {
  const id = req.params.id;
  const evaluation = await evaluationService.getEvaluationById(id);
  if (!evaluation) {
    return res.status(404).json({
      message: "Evaluation not found",
    });
  }
  return res.status(200).json({
    message: "Evaluation retrieved successfully",
    evaluation: evaluation,
  });
});

router.delete("/deleteEvaluation/:id", async (req, res) => {
  const id = req.params.id;
  const deletedEvaluation = await evaluationService.deleteEvaluationById(id);
  if (!deletedEvaluation) {
    return res.status(404).json({
      message: "Evaluation not found",
    });
  }
  return res.status(200).json({
    message: "Evaluation deleted successfully ",
    evaluation: deletedEvaluation,
  });
});

router.put("/updateEvaluation/:id", async (req, res) => {
  const id = req.params.id;
  const evaluationModel = {
    concept: req.body.concept,
  };
  const updatedEvaluation = await evaluationService.updateEvaluationById(
    id,
    evaluationModel
  );
  if (!updatedEvaluation) {
    return res.status(404).json({
      message: "Evaluation not found or no changes made",
    });
  }
  return res.status(200).json({
    message: "Evaluation updated successfully",
    evaluation: updatedEvaluation,
  });
});

export default router;