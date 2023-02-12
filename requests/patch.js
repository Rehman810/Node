import MensRAnking from "../src/models/mens.js";

const editUser = async (req, res) => {
  try {
    const _id = localStorage.getItem("token");
    const getMen = await MensRAnking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (e) {
    res.status(500).send(e);
  }
};

export default editUser;
