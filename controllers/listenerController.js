// backend/controllers/listenerController.js
import Listener from "../models/listenerSchema.js";
import NFT from "../models/nftSchema.js";
import Following from "../models/following.js";
import LikedSong from "../models/likedSong.js";
import VaultStat from "../models/vaultStats.js";

// GET Listener Profile
export const getListenerProfile = async (req, res) => {
  try {
    const { userId } = req.params; // from URL params

    const listener = await Listener.findOne({ userId });
    if (!listener) {
      return res.status(404).json({ error: "Listener not found" });
    }
    res.json(listener);
  } catch (err) {
    console.error("Error fetching listener profile:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET Listener NFTs
export const getListenerNFTs = async (req, res) => {
  try {
    const { userId } = req.params;
    const nfts = await NFT.find({ userId });
    res.json(nfts);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET Listener Vault Stats
export const getListenerVaults = async (req, res) => {
  try {
    const { userId } = req.params;
    const vaults = await VaultStat.find({ userId });
    res.json(vaults);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET Liked Songs
export const getLikedSongs = async (req, res) => {
  try {
    const { userId } = req.params;
    const songs = await LikedSong.find({ userId });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET Following
export const getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const following = await Following.find({ userId });
    res.json(following);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
