const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const practiceRoutineSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PracticeRoutine = mongoose.model(
  "PracticeRoutine",
  practiceRoutineSchema
);
module.exports = PracticeRoutine;
