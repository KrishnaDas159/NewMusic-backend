// models/Listener.js
import mongoose from "mongoose";

const listenerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  walletAddress: String,
  avatar: String,
  followers: Number,
  followingCount: Number,
  isWalletConnected: Boolean,
});

export default mongoose.model("Listener", listenerSchema);
