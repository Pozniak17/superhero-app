import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
      trim: true,
    },
    real_name: {
      type: String,
      required: true,
      trim: true,
    },
    origin_description: {
      type: String,
      required: true,
    },
    superpowers: {
      type: String,
      required: true,
    },
    catch_phrase: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Herous", userSchema);
