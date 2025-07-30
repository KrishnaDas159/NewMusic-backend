// models/VaultStat.js
import mongoose from "mongoose";

const vaultStatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  invested: String,
  tvl: String,
  apr: String,
  withdrawable: String,
});

export default mongoose.model("VaultStat", vaultStatSchema);
