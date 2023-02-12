import { get } from "mongoose";
import MensRAnking from "../src/models/mens.js";

const deleteUsers = async (req, res) => {
  try {
    const getMen = await MensRAnking.findByIdAndDelete(req.params.id);
    if (!getMen) return res.status(404).send("User not found");
    res.send("User deleted successfully");
  } catch (e) {
    res.status(500).send(e);
  }
};

export default deleteUsers;
