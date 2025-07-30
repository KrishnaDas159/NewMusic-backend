// models/NFT.js
import mongoose from "mongoose";

const nftSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  artist: String,
  cover: String,
  owned: Number,
  earnings: String,
  daoVoting: Boolean,
});

export default mongoose.model("NFT", nftSchema);
