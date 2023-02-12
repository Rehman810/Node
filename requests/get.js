import MensRAnking from "../src/models/mens.js";

const getUsers = async (req, res) => {
  try {
    const getMens = await MensRAnking.find({});
    res.status(200).send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
};

export default getUsers;
