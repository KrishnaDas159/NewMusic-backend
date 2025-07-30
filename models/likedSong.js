// models/LikedSong.js
import mongoose from "mongoose";

const likedSongSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  songIds: [String],
});

export default mongoose.model("LikedSong", likedSongSchema);
