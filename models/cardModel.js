import mongoose from "mongoose";

const helpCenterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const helpCenterModels = mongoose.models.helpCenter || mongoose.model("helpCenter", helpCenterSchema);
export default helpCenterModels