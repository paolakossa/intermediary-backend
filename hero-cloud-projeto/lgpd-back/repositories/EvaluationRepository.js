import Evaluation from '../models/Evaluation.js';

const saveEvaluation = async (evaluationModel) => {
  const save = await Evaluation.create(evaluationModel);
  return save;
};

const getAllEvaluations = async () => {
  return await Evaluation.findAll({
    order: [["id", "ASC"]],
  });
};

const getEvaluationById = async (id) => {
  return await Evaluation.findByPk(id);
};

const deleteEvaluationById = async (id) => {
  return await Evaluation.destroy({
    where: {
      id: id,
    },
  });
};

const updateEvaluationById = async (id, evaluationModel) => {
  try {
    const result = await Evaluation.update(evaluationModel, {
      where: {
        id: id,
      },
    });
    if (result[0] === 1) {
      return { message: "Evaluation updated successfully" };
    } else {
      return { message: "Evaluation not found or no changes made" };
    }
  } catch (error) {
    console.error("Error updating evaluation:", error);
    throw error;
  }
};

const factory = {
  saveEvaluation,
  getAllEvaluations,
  getEvaluationById,
  deleteEvaluationById,
  updateEvaluationById,
};

export default factory;