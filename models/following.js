// models/Following.js
import mongoose from "mongoose";

const followingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  artistIds: [String],
});

export default mongoose.model("Following", followingSchema);
